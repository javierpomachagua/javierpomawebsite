<template>
  <div class="home">
    <div class="navbar">
      <a class="navbar__menu">
        <img src="~assets/img/open-menu.png" alt="Menú">
      </a>
    </div>
    <div class="bg-square" />
    <div class="home__body">
      <figure>
        <img class="home__image" src="~assets/img/profile.jpg" alt="Imagen de Perfil">
      </figure>
      <div class="home__information">
        <p class="home__greeting">
          Hola
        </p>
        <h1 class="home__name">
          I'm Javier
        </h1>
        <p class="home__description">
          Desarrollador de Aplicaciones, apasionado en
          <br>brindar soluciones mediante la tecnología
        </p>
        <button class="home__cta">
          Contáctame
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.navbar {
  @apply overflow-hidden;
}
.navbar__menu {
  @apply float-right w-10 pr-5 pt-5;
}
.bg-square {
  @apply absolute bg-blue-jp transform rotate-45;
  border-radius: 2rem;
  z-index: -10;
  width: 20rem;
  height: 20rem;
  top: -100px;
  right: -100px;
}
.home {
  @apply m-0 overflow-hidden relative
}
.home__body {
  @apply m-20 flex flex-col items-center
}
.home__image {
  @apply w-40 rounded-full shadow-lg
}
.home__information {
  @apply text-center mt-10
}
.home__greeting {
  @apply text-lg text-black-jp
}
.home__name {
  @apply text-3xl font-bold text-black-jp
}
.home__description {
  @apply text-sm mt-4 text-gray-jp
}
.home__cta {
  @apply w-full mt-6 bg-blue-100-jp text-white rounded-full px-4 py-2
}
</style>
