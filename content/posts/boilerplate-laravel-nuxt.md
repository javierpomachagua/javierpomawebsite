---
title: Laravel + Nuxt Authentication in few minutes
description: Esta es una plantilla de una aplicación Nuxt conectada a una aplicación Laravel mediante Sanctum
date: 2021/07/07
image: posts/learning_qqs9c2
tags:
  - nuxt
  - laravel
  - sanctum
---
Para conectar esta aplicación [Nuxt](https://nuxtjs.org/) con [Laravel](https://laravel.com/) usaremos el package [Sanctum](https://laravel.com/docs/8.x/sanctum) por parte del backend y la libreria [Nuxt Auth](https://auth.nuxtjs.org/) por parte del frontend.

Lo que haremos a continuación se encuentra en esta [demo](https://nuxtboilerplate.javierpoma.com/)

![Demo](https://res.cloudinary.com/dy09hqrno/image/upload/v1625678866/demo_laravel_nuxt.gif)

## Laravel

Requisitos previos:
- PHP >=7.4
- Composer
- MySQL
- Apache o Nginx
- Node
- Yarn

Para el manejo del servidor local estoy utilizando [Laragon](https://laragon.org/).

Descargamos el repositorio de Laravel mediante composer:

```bash
composer create-project laravel/laravel demo-laravel
```

o mediante el instalador de Laravel si es que lo tenemos instalado:

```bash
laravel new demo-laravel
```

Luego descargamos el paquete [Breeze](https://laravel.com/docs/8.x/starter-kits#laravel-breeze) de Laravel la cual nos dará toda la lógica de la autenticación

```bash
composer require laravel/breeze --dev
```
y lo instalamos:

```bash
php artisan breeze:install
```

Luego procedemos a instalar y compilar los archivos javascript

```bash
npm install
npm run dev
```

Finalmente editamos nuestro archivo .env para escribir el nombre de nuestra base de datos y la creamos en el gestor de BD que estemos utilizando.

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=demo_laravel
DB_USERNAME=root
DB_PASSWORD=
```


Y ejecutamos las migraciones para que se creen las tablas automáticamente en la base de datos.

```bash
php artisan migrate
```

Por lo tanto veremos creada nuestra base de datos con las tablas requeridas.

![bd-laravel-demo](https://res.cloudinary.com/dy09hqrno/image/upload/v1625680737/bd_ap6nrv.png)

Si nos registramos en nuestra aplicación e ingresamos nos aparecerá el dashboard por defecto que trae Laravel. En mi caso me registré con los siguientes datos:
- Usuario: admin@admin.com
- Password: password
Esas credenciales usaremos luego en nuestra acceso con Nuxt.

![dashboard-laravel](https://res.cloudinary.com/dy09hqrno/image/upload/v1625681026/laravel_dashboard_hdlftn.png)

### Sanctum

Por ahora tenemos la autenticación mediante PHP en vistas blade, pero si queremos autenticarnos mediante una SPA como en este caso con [Nuxt](https://nuxtjs.org/) o [Next](https://nextjs.org/), Laravel nos da un paquete que nos ayuda en ese proceso llamado [Sanctum](https://laravel.com/docs/8.x/sanctum) y lo instalamos de la siguiente manera:

```bash
composer require laravel/sanctum
```

Publicamos el archivo de configuracion de Sanctum
```bash
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
```

Ejecutamos las migraciones de la libreria
```bash
php artisan migrate
```

y veremos que se agregó una tabla llamada `personal_access_tokens`

![bd-sanctum](https://res.cloudinary.com/dy09hqrno/image/upload/v1625681958/bd2_e8cvt7.png)

Configuramos nuestro archivo Kernel.php para que la aplicacion habilite la autenticación mediante SPA.

```php[Kernel.php]
'api' => [
    \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
    'throttle:api',
    \Illuminate\Routing\Middleware\SubstituteBindings::class,
],
```

Además cambiaremos el middleware por defecto de Laravel por Sanctum en nuestro api.php para [proteger las rutas](https://laravel.com/docs/8.x/sanctum#protecting-spa-routes)

```php[api.php]
Route::middleware('auth:sanctum')->group(function () {

    Route::get('/user', function (Request $request) {
        return request()->user();
    });
    
});
```

En nuestro archivo cors.php cambiamos los siguientes [valores](https://laravel.com/docs/8.x/sanctum#cors-and-cookies) para habilitar las rutas que serán accedidas mediante el SPA

```php[cors.php]
<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure your settings for cross-origin resource sharing
    | or "CORS". This determines what cross-origin operations may execute
    | in web browsers. You are free to adjust these settings as needed.
    |
    | To learn more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    |
    */

    'paths' => ['api/*', 'login', 'logout', 'sanctum/csrf-cookie'],

    'allowed_methods' => ['*'],

    'allowed_origins' => ['*'],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => true,

];
```

Cuando queramos acceder mediante nuestro SPA nos dará un error ya que la redirección por defecto de Laravel luego de la autenticación es que vaya a la vista HOME, sin embargo como vamos autenticarnos mediante una SPA debemos de evitar esa redirección solo si es que es mediante nuestra SPA tanto al iniciar sesión como al cerrar sesión ya que las rutas de la vista lo manejará nuestra SPA.

```php[AuthenticatedSessionController.php]
/**
* Handle an incoming authentication request.
*
* @param  \App\Http\Requests\Auth\LoginRequest  $request
* @return \Illuminate\Http\RedirectResponse
*/
public function store(LoginRequest $request)
{
    $request->authenticate();

    $request->session()->regenerate();

    if (!request()->wantsJson()) {
        return redirect()->intended(RouteServiceProvider::HOME);
    }
    
}
/**
* Destroy an authenticated session.
*
* @param  \Illuminate\Http\Request  $request
* @return \Illuminate\Http\RedirectResponse
*/
public function destroy(Request $request)
{
    Auth::guard('web')->logout();

    $request->session()->invalidate();

    $request->session()->regenerateToken();

    if (!request()->wantsJson()) {
        return redirect('/')
    }
}
```

```php[RedirectIfAuthenticated.php]
/**
* Handle an incoming request.
*
* @param  \Illuminate\Http\Request  $request
* @param  \Closure  $next
* @param  string|null  ...$guards
* @return mixed
*/
public function handle(Request $request, Closure $next, ...$guards)
{
    $guards = empty($guards) ? [null] : $guards;

    foreach ($guards as $guard) {
        if (Auth::guard($guard)->check()) {

            if (request()->wantsJson()) return $next($request);
            return redirect(RouteServiceProvider::HOME);
        }
    }

    return $next($request);
}
```

Dado que usaremos la autenticacion mediante [cookies de Sanctum](https://laravel.com/docs/8.x/sanctum#how-it-works-spa-authentication) se necesita que tanto el backend como el frontend estén en el mismo dominio. En el ambiente local ambos deben estar en localhost, en el caso de Nuxt no hay problema, pero en el caso de Laravel ya que estoy usando Laragon automáticamente le da un host name de acuerdo al nombre del proyecto por lo que tengo que se tiene que habilitar un puerto adicional para acceder mediante localhost a nuestra aplicación Laravel.
En caso su aplicación Laravel esté desplegada con localhost por defecto no hay problema, pueden saltarse este paso e ir directamente a la instalación de Nuxt.

### Configuración de Laragon

Acceder al archivo conf de la aplicación

![conf](https://res.cloudinary.com/dy09hqrno/image/upload/v1625687361/laragon_1_ac0hhv.png)


Luego cambiar el puerto a otro (ej: 83)
```conf
<VirtualHost *:83> 
    DocumentRoot "C:/laragon/www/demo-laravel/public/"
    ServerName demo-laravel.test
    ServerAlias *.demo-laravel.test
    <Directory "C:/laragon/www/demo-laravel/public/">
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

Habilitar el puerto en el Apache

![apache](https://res.cloudinary.com/dy09hqrno/image/upload/v1625687360/httpd_g3ukyc.png)

Editar el archivo agregando el puerto 83

```conf
Listen 83
```

Si reiniciamos el servidor podremos acceder mediante localhost:83 a nuestra aplicación Laravel como antes.

## Nuxt

Ahora descargamos el repositorio de Nuxt mediante el comando
```bash
winpty npx.cmd npm create nuxt-app demo-nuxt
```

Estas son las opciones que se seleccione para este tipo de aplicación que será una SPA.
![log-nuxt](https://res.cloudinary.com/dy09hqrno/image/upload/v1625682677/log_nuxt_create_kt8uac.png)

Luego ingresan a la aplicación y la desplegamos para ver el portal.

```bash
cd demo-nuxt
yarn dev
```

Nos aparecerá el portal de Nuxt.

![portal-nuxt](https://res.cloudinary.com/dy09hqrno/image/upload/v1625682901/nuxt_portal_n12prz.png)

### Nuxt Auth

Nuxt nos da el paquete [Nuxt Auth](https://auth.nuxtjs.org/) la cual nos ayuda a poder autenticar nuestra aplicación con muchos proveedores (Google, Facebook, GitHub, etc), en nuestro caso lo utilizaremos con [Laravel Sanctum](https://auth.nuxtjs.org/providers/laravel-sanctum).

Procedemos a instalar el paquete en la ruta de nuestra aplicación Nuxt

```bash
yarn add --exact @nuxtjs/auth-next
```

Creamos nuestro archivo .env en la raíz del proyecto y agregamos la ruta base de nuestro backend

```js
BASE_URL=http://localhost:83
```

Configuramos las opciones del paquete Nuxt Auth y del [Axios](https://axios.nuxtjs.org/) (se instaló previamente cuando instalamos Nuxt) en nuestro archivo:

```js[nuxt.config.js]
// Modules: https://go.nuxtjs.dev/config-modules
modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
],
auth: {
    strategies: {
        laravelSanctum: {
        provider: 'laravel/sanctum',
        url: process.env.BASE_URL
        }
    },
    redirect: {
        login: '/',
        logout: '/',
        callback: false,
        home: false
    },
},
axios: {
    baseURL: process.env.BASE_URL + '/api',
    proxy: true,
    credentials: true
},
```

En nuestro index.vue ponemos la siguiente vista (hecha con Tailwind CSS) la cual contiene la lógica de la autenticación indicada por el paquete [Nuxt Auth](https://auth.nuxtjs.org/providers/laravel-sanctum)
```vue[index.vue]
<template>
  <!-- This is an example component -->
  <div class="h-screen font-sans bg-cover login">
    <div
      class="container flex items-center justify-center flex-1 h-full mx-auto"
    >
      <div class="w-full max-w-lg">
        <div class="leading-loose">
          <form
            class="max-w-sm p-10 m-4 bg-white bg-opacity-25 rounded shadow-xl"
            @submit.prevent="onSubmit()"
          >
            <p class="text-lg font-medium font-bold text-center text-white">
              LOGIN
            </p>
            <div class="">
              <label class="block text-sm text-white" for="email">E-mail</label>
              <input
                id="email"
                v-model="email"
                class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                type="email"
                placeholder="Email"
                aria-label="email"
                required
              >
            </div>
            <div class="mt-2">
              <label class="block text-sm text-white">Contraseña</label>
              <input
                id="password"
                v-model="password"
                class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                type="password"
                placeholder="Contraseña"
                arial-label="password"
                required
              >
            </div>

            <div class="flex items-center justify-between mt-4">
              <button
                class="px-4 py-1 font-light tracking-wider text-white bg-gray-900 rounded hover:bg-gray-800"
                type="submit"
              >
                Entrar
              </button>
              <a
                class="right-0 inline-block text-sm font-bold text-white align-baseline text-500 hover:text-red-400"
                href="#"
              >¿Olvidó su contraseña?</a>
            </div>
            <div class="text-center">
              <a
                class="right-0 inline-block text-sm font-light align-baseline text-500 hover:text-red-400"
              >
                Crear una cuenta
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  auth: 'guest',
  data () {
    return {
      email: 'admin@admin.com',
      password: 'password'
    }
  },
  methods: {
    async onSubmit () {
      await this.$auth.loginWith('laravelSanctum', {
        data: {
          email: this.email,
          password: this.password
        }
      })

      this.$router.push({
        path: 'dashboard'
      })
    }
  }
}
</script>

<style>
.login{
  background: url('http://bit.ly/2gPLxZ4');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
```

Agregamos otra pagina dashboard.vue que será la página que se mostrará cuando un usuario ingrese sus credenciales correctamente y mostraremos la info del usuario.

```vue[dashboard.vue]
<template>
  <div class="flex">
    <nav class="flex flex-col w-64 h-screen px-4 bg-purple-900 border border-purple-900 tex-gray-900">
      <div class="flex flex-wrap items-center mt-8">
        <div class="w-1/2">
          <img
            src="https://elcomercio.pe/resizer/1KsPha2V-5VrXqJvZ4FSykpc8Xs=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/JN6CO66UKRHPFLQ6YY3ZNXSC44.jpg"
            class="object-cover w-20 h-20 mx-auto rounded-full"
          >
        </div>
        <div class="w-1/2">
          <span class="font-semibold text-white uppercase">{{ $auth.user.name }}</span>
        </div>
      </div>
      <div class="mt-10 mb-4">
        <ul class="ml-4">
          <li class="flex flex-row px-4 py-4 mb-2 text-gray-100 border-gray-300 rounded rounded-lg hover:text-black hover:bg-gray-300 hover:font-bold">
            <span>
              <svg class="w-5 h-5 fill-current " viewBox="0 0 24 24">
                <path
                  d="M16 20h4v-4h-4m0-2h4v-4h-4m-6-2h4V4h-4m6
                        4h4V4h-4m-6 10h4v-4h-4m-6 4h4v-4H4m0 10h4v-4H4m6
                        4h4v-4h-4M4 8h4V4H4v4z"
                />
              </svg>
            </span>
            <a href="#">
              <span class="ml-2">Dashboard</span>
            </a>
          </li>
          <li class="flex flex-row px-4 py-4 mb-2 text-gray-100 border-gray-300 rounded rounded-lg hover:text-black hover:bg-gray-300 hover:font-bold">
            <span>
              <svg
                class="w-5 h-5 fill-current "
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z"
                  fill="currentColor"
                />
                <path
                  d="M16 15C16 14.4477 15.5523 14 15 14H9C8.44772 14 8 14.4477 8 15V21H6V15C6 13.3431 7.34315 12 9 12H15C16.6569 12 18 13.3431 18 15V21H16V15Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <a href="#">

              <span class="ml-2">Customers</span>
            </a>
          </li>
          <li class="flex flex-row px-4 py-4 mb-2 text-gray-100 border-gray-300 rounded rounded-lg hover:text-black hover:bg-gray-300 hover:font-bold">
            <span>
              <svg class="w-5 h-5 fill-current " viewBox="0 0 24 24">
                <path
                  d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2
                        2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0
                        00-2-2h-1V1m-1 11h-5v5h5v-5z"
                />
              </svg>
            </span>
            <a href="#">

              <span class="ml-2">Milestones</span>
            </a>
          </li>
          <li class="flex flex-row px-4 py-4 mb-2 text-gray-100 border-gray-300 rounded rounded-lg hover:text-black hover:bg-gray-300 hover:font-bold">
            <span>
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path
                  d="M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0
                        014-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4
                        8-4z"
                />
              </svg>
            </span>
            <a href="#">
              <span class="ml-2">Team</span>
            </a>
          </li>
          <li class="flex flex-row px-4 py-4 mb-2 text-gray-100 border-gray-300 rounded rounded-lg hover:text-black hover:bg-gray-300 hover:font-bold">
            <span>
              <svg class="w-5 h-5 fill-current " viewBox="0 0 24 24">
                <path
                  d="M12 13H7v5h5v2H5V10h2v1h5v2M8
                        4v2H4V4h4m2-2H2v6h8V2m10 9v2h-4v-2h4m2-2h-8v6h8V9m-2
                        9v2h-4v-2h4m2-2h-8v6h8v-6z"
                />
              </svg>
            </span>
            <a href="#">
              <span class="ml-2">Tasks</span>
            </a>
          </li>
          <li class="flex flex-row px-4 py-4 mb-2 text-gray-100 border-gray-300 rounded rounded-lg hover:text-black hover:bg-gray-300 hover:font-bold">
            <span>
              <svg
                class="w-5 h-5 fill-current "
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7 3C8.86384 3 10.4299 4.27477 10.874 6H19V8H10.874C10.4299 9.72523 8.86384 11 7 11C4.79086 11 3 9.20914 3 7C3 4.79086 4.79086 3 7 3ZM7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9Z"
                  fill="currentColor"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17 20C15.1362 20 13.5701 18.7252 13.126 17H5V15H13.126C13.5701 13.2748 15.1362 12 17 12C19.2091 12 21 13.7909 21 16C21 18.2091 19.2091 20 17 20ZM17 18C18.1046 18 19 17.1046 19 16C19 14.8954 18.1046 14 17 14C15.8954 14 15 14.8954 15 16C15 17.1046 15.8954 18 17 18Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <a href="#">
              <span class="ml-2">Settings</span>
            </a>
          </li>
          <li class="flex flex-row px-4 py-4 mb-2 text-gray-100 border-gray-300 rounded rounded-lg hover:text-black hover:bg-gray-300 hover:font-bold">
            <span>
              <svg class="w-5 h-5 fill-current " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd" />
              </svg>
            </span>
            <a href="#" @click="logout">
              <span class="ml-2">Cerrar Sesión</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="p-4">
      <p class="mb-4 font-bold text-md">
        User data from Laravel API
      </p>
      <pre>{{ $auth.user }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  methods: {
    async logout () {
      await this.$auth.logout()

      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>

<style>
</style>
```

Con eso ya tendremos nuestra aplicacion Nuxt vinculada a nuestro backend Laravel, en otro tutorial podría agregar los permisos y autorización con el paquete de [Spatie Permissions](https://spatie.be/docs/laravel-permission/v4/introduction) de Laravel. 
Ademas también haré un tutorial sobre cómo desplegar esta aplicación en un servidor para el backend y en Netlify para el frontend.

Les dejo lo repositorios de los proyectos y la demo.

- [Nuxt](https://github.com/javierpomachagua/demo-auth-nuxt)
- [Laravel](https://github.com/javierpomachagua/demo-auth-laravel)
- [Demo](https://nuxtboilerplate.javierpoma.com/)