---
title: Backup de BD en Dropbox con Laravel
description: Sube tus backups de base de datos a Dropbox en tu aplicación Laravel.
date: 2022/04/12
image: posts/Laravel_Dropbox_Backup_BD-3_htxqo3.png
tags:
- laravel
---
Siempre es bueno tener un backup de nuestra base de datos de manera diaria en caso ocurra algo en
nuestro servidor debido algún fallo o error.

Aquí te muestro brevemente cómo tener un backup de la base de datos de tu aplicación Laravel 9
con Dropbox

## Instalación de Laravel
- Instalar laravel 9.
![asa](https://res.cloudinary.com/dy09hqrno/image/upload/v1649787233/Captura_de_Pantalla_2022-04-12_a_la_s_11.46.20_rrawua.png)
- Instalar dependencias javascript.
```bash
npm install
```
- Crear la bd localmente y registrarla en nuestro archivo .env.

Archivo .env
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel_backup_dropbox
DB_USERNAME=root
DB_PASSWORD=
```
- Ejecutar las migraciones.
```bash
php artisan migrate
```

Nuestra base de datos
![bd](https://res.cloudinary.com/dy09hqrno/image/upload/v1649787349/Captura_de_Pantalla_2022-04-12_a_la_s_11.50.15_ok6i2c.png)

## Paquete Spatie Backup

Instalamos el paquete [spatie/laravel-backup](https://github.com/spatie/laravel-backup)

```bash
composer require spatie/laravel-backup
```

Para publicar el archivo de configuración del paquete instalado

```bash
php artisan vendor:publish --provider="Spatie\Backup\BackupServiceProvider"
```

Probamos el backup con el comando

```bash
php artisan backup:run
```

![Ejecutando comando backup](https://res.cloudinary.com/dy09hqrno/image/upload/v1649804826/Captura_de_Pantalla_2022-04-12_a_la_s_18.06.42_nw5cok.png)

Podemos ver que el comando exportó el backup correctamente localmente si nos dirigimos a la ruta
**storage/app/Laravel**

![Backups](https://res.cloudinary.com/dy09hqrno/image/upload/v1649805244/Captura_de_Pantalla_2022-04-12_a_la_s_18.13.57_hjrbu5.png)

## Integración con Dropbox

Nos registramos en Dropbox en la siguiente [dirección](https://www.dropbox.com/developers), haciendo clic en
**Consola de Aplicaciones**

![Registro en Dropbox](https://res.cloudinary.com/dy09hqrno/image/upload/v1649805611/Captura_de_Pantalla_2022-04-12_a_la_s_18.18.54_jnxk7i.png)

Creamos una nueva aplicación

![Crear nueva aplicación Dropbox](https://res.cloudinary.com/dy09hqrno/image/upload/v1649805752/Captura_de_Pantalla_2022-04-12_a_la_s_18.20.58_tnuncx.png)

![Datos aplicación Dropbox](https://res.cloudinary.com/dy09hqrno/image/upload/v1649806131/Captura_de_Pantalla_2022-04-12_a_la_s_18.28.14_v95xtu.png)

Configuramos los permisos para que nuestra aplicación pueda guardar en Dropbox

![Tab Permisos](https://res.cloudinary.com/dy09hqrno/image/upload/v1649864557/Captura_de_Pantalla_2022-04-13_a_la_s_10.41.51_foz0nf.png)

![Permisos Dropbox](https://res.cloudinary.com/dy09hqrno/image/upload/v1649864558/Captura_de_Pantalla_2022-04-13_a_la_s_10.42.23_kmdtsu.png)

Generamos el token

![Generar token](https://res.cloudinary.com/dy09hqrno/image/upload/v1649806287/Captura_de_Pantalla_2022-04-12_a_la_s_18.30.40_gd0dxb.png)

Guardamos el token en una variable de nuestro archivo .env
```env
DROPBOX_AUTH_TOKEN=**********
```

Ejecutamos el paquete siguiente para la integración con Dropbox

```bash
composer require spatie/flysystem-dropbox
```

Generamos el service provider

```bash
php artisan make:provider DropboxServiceProvider
```

Registramos el servicio en el archivo

```php[config/app.php]
'providers' => [
    ...
    App\Providers\DropboxServiceProvider::class,
    ...
]
```

Registramos un nuevo sistema de archivos en el archivo
```php[config/filesystems.php]
"disks" => [
    "dropbox" => [
        "driver" => "dropbox",
        "authorizationToken" => env("DROPBOX_AUTH_TOKEN"),
    ],
```

Configuramos el service provider
```php[app/Providers/DropboxServiceProvider.php]
<?php

namespace App\Providers;

use Illuminate\Filesystem\FilesystemAdapter;
use Illuminate\Support\ServiceProvider;
use League\Flysystem\Filesystem;
use Spatie\Dropbox\Client as DropboxClient;
use Spatie\FlysystemDropbox\DropboxAdapter;
use Storage;

class DropboxServiceProvider extends ServiceProvider
{
    /**
     * Perform post-registration booting of services.
     *
     * @return void
     */
    public function boot()
    {
        Storage::extend("dropbox", function ($app, $config) {
            $adapter = new DropboxAdapter(
                new DropboxClient($config["authorizationToken"])
            );

            return new FilesystemAdapter(
                new Filesystem($adapter, $config),
                $adapter,
                $config
            );
        });
    }

    /**
     * Register bindings in the container.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
```
Modificamos que el backup no solo sea local sino también para Dropbox en el archivo **config/backup.php**.
```php[config/backup.php]
'destination' => [
    /*
     * The filename prefix used for the backup zip file.
     */
    'filename_prefix' => '',
    
    /*
     * The disk names on which the backups will be stored.
     */
    'disks' => [
        'local', 'dropbox'
    ],
],
```

Y listo! ejecutamos el comando
```bash
php artisan backup:run
```

![Ejecutar comando backup](https://res.cloudinary.com/dy09hqrno/image/upload/v1649864762/Captura_de_Pantalla_2022-04-13_a_la_s_10.45.50_q8yvmu.png)

Verificamos que nuestro backup está en Dropbox en el siguiente [enlace](https://www.dropbox.com/home/Aplicaciones)

![Backup en Dropbox](https://res.cloudinary.com/dy09hqrno/image/upload/v1649864850/Captura_de_Pantalla_2022-04-13_a_la_s_10.47.24_rb4ej4.png)

Así de sencillo podemos generar el backup de nuestra base de datos de nuestra aplicación Laravel en Dropbox.

Para un próximo artículo estaré publicando de qué manera lo podemos hacer automáticamente a una determinada hora
sin estar ejecutando manualmente <code>php artisan backup:run</code>

Dejo el link del proyecto
<a href="https://github.com/javierpomachagua/laravel-backup-dropbox">
  <img width="200" src="https://res.cloudinary.com/dy09hqrno/image/upload/v1649865728/GitHub-logo-2-imagen_e9yypq.jpg">
</a>
