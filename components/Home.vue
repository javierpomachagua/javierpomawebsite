<template>
  <div class="relative z-20 m-0 mx-auto overflow-hidden max-w-7xl home md:pb-20">
    <the-header />
    <div class="absolute z-10 transform rotate-45 -right-24 -top-20 from-blue-100-jp to-blue-jp bg-gradient-to-b w-80 h-80 rounded-3xl bg-square" />
    <div
      class="relative z-20 flex flex-col items-center m-20 mt-10 md:flex-row-reverse md:justify-evenly md:items-center"
    >
      <div class="flex flex-col items-center">
        <figure>
          <img
            class="w-40 rounded-full shadow-2xl md:w-96"
            src="~assets/img/profile.jpg"
            alt="Imagen de Perfil"
          >
        </figure>
        <div class="flex justify-center mt-6 space-x-4 md:justify-start">
          <a
            href="https://www.linkedin.com/in/javier-pomachagua-p%C3%A9rez-aa7407157/"
            target="_blank"
            class="transition-all duration-500 ease-in-out transform hover:-translate-y-3"
          >
            <img class="w-10 h-10" src="~assets/svg/linkedin.svg" alt="">
          </a>
          <a
            href="https://github.com/javierpomachagua"
            target="_blank"
            class="transition-all duration-500 ease-in-out transform hover:-translate-y-3"
          >
            <img class="w-10 h-10" src="~assets/svg/github.svg" alt="">
          </a>
          <a
            href="https://twitter.com/javipomachagua"
            target="_blank"
            class="transition-all duration-500 ease-in-out transform hover:-translate-y-3"
          >
            <img class="w-10 h-10" src="~assets/svg/twitter.svg" alt="">
          </a>
        </div>
      </div>
      <div class="mt-0 text-center md:text-left md:mt-0">
        <p class="mt-8 text-lg text-black-jp">
          {{ home.greeting }}
        </p>
        <h1 class="text-3xl font-bold text-black-jp md:text-jp-xl md:mt-3">
          {{ home.name }}
        </h1>
        <p class="mt-8 text-lg text-gray-jp md:mt-8">
          Desarrollador Web Fullstack
        </p>
        <div
          class="flex items-center justify-center mt-6 space-x-4 md:justify-start"
        >
          <img class="w-12 h-12" src="~assets/img/php-icon.png" alt="">
          <img class="w-10 h-10" src="~assets/img/laravel-icon.png" alt="">
          <img class="w-10 h-10" src="~assets/img/javascript-icon.png" alt="">
          <img class="w-10 h-10" src="~assets/img/vue-icon.png" alt="">
          <img class="w-10 h-10" src="~assets/svg/nuxt.svg" alt="">
          <img class="w-10 h-10" src="~assets/svg/tailwind.svg" alt="">
        </div>
        <button
          class="w-full px-4 py-2 mt-6 text-xl font-medium text-white transform rounded-full bg-blue-100-jp hover:bg-blue-jp"
          @click="scrollToElement('contactme')"
        >
          Contáctame
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async fetch () {
    const home = await this.$content('home').fetch()
    this.home = home
  },
  data () {
    return {
      home: {},
      showMenu: false
    }
  },
  methods: {
    scrollToElement (name) {
      const el = document.getElementsByClassName(name)[0]
      if (el) {
      // Use el.scrollIntoView() to instantly scroll to the element
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>

<style>
@screen md {
  .bg-square {
    height: 40rem;
    width: 40rem;
    /* transform: translateZ(30px) */
  }
}
</style>
