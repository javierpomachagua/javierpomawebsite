<template>
  <div class="home">
    <div class="navbar">
      <div class="navbar__items">
        <div class="navbar__items-menu">
          <img src="~assets/img/logo.svg">
          <a href="#">Sobre mí</a>
          <a href="#">Portafolio</a>
          <a href="#">Blog</a>
          <a href="#">Contacto</a>
        </div>
        <div class="navbar__items-socials">
          <a class="navbar__items-socials-network">
            <img src="~assets/img/linkedin.svg">
          </a>
          <a class="navbar__items-socials-network">
            <img src="~assets/img/instagram.svg">
          </a>
          <a class="navbar__items-socials-network">
            <img src="~assets/img/twitter.svg">
          </a>
        </div>
      </div>
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
          Soy Javier
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
  @apply float-right w-10 pr-5 pt-5
}
.navbar__items {
  @apply hidden
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
  @apply m-20 flex flex-col items-center mt-10
}
.home__image {
  @apply w-40 rounded-full shadow-xl
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

@screen md {
  .navbar {
    @apply mb-40
  }
  .navbar__menu {
    @apply hidden
  }
  .navbar__items {
    @apply block mt-5 mx-20 flex justify-around items-center
  }
  .navbar__items-menu img {
    @apply inline-block mr-6
  }
  .navbar__items-menu a {
    @apply text-sm font-semibold inline-block mr-4
  }
  .navbar__items-socials {
    @apply flex flex-wrap justify-center
  }
  .navbar__items-socials-network {
    @apply w-10 h-10 bg-blue-100-jp rounded-full p-2 mr-4 flex justify-center items-center border-white border-1;
  }
  .home {
   @apply overflow-hidden pb-20
  }
  .home__body {
    @apply flex-row-reverse justify-evenly items-center
  }
  .home__information {
    @apply mt-0 text-left
  }
  .home__name {
    @apply text-jp-xl
  }
  .home__image {
    @apply w-96
  }
  .bg-square {
    border-radius: 2rem;
    width: 50rem;
    height: 50rem;
    top: -200px;
    right: -200px;
  }
}
</style>
