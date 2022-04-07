<template>
  <div
    class="relative z-20 m-0 mx-auto overflow-hidden max-w-7xl home md:pb-20"
  >
    <layout-the-header />
    <div
      class="absolute z-10 transform rotate-45 -right-24 -top-20 from-blue-100-jp to-blue-jp bg-gradient-to-b w-80 h-80 rounded-3xl bg-square"
    />
    <div
      class="relative z-20 flex flex-col items-center m-20 mt-10 md:flex-row-reverse md:justify-evenly md:items-center"
    >
      <div class="flex flex-col items-center">
        <figure>
          <nuxt-img
            provider="cloudinary"
            class="w-40 rounded-full shadow-2xl md:w-96"
            width="350"
            height="350"
            src="profile_photo"
            alt="Imagen de Perfil"
          />
        </figure>
        <div class="flex justify-center mt-6 space-x-4 md:justify-start">
          <a
            href="https://www.linkedin.com/in/javier-pomachagua-p%C3%A9rez-aa7407157/"
            target="_blank"
            class="transition-all duration-500 ease-in-out transform hover:-translate-y-3"
          >
            <icon-linkedin class="w-10 h-10" alt="linkedin icon" />
          </a>
          <a
            href="https://github.com/javierpomachagua"
            target="_blank"
            class="transition-all duration-500 ease-in-out transform hover:-translate-y-3"
          >
            <icon-github class="w-10 h-10" alt="github icon" />
          </a>
          <a
            href="https://twitter.com/javipomachagua"
            target="_blank"
            class="transition-all duration-500 ease-in-out transform hover:-translate-y-3"
          >
            <icon-twitter class="w-10 h-10" alt="twitter icon" />
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
          <nuxt-img class="w-12 h-12" src="php-icon_mxzwjr" alt="php icon" />
          <nuxt-img
            class="w-10 h-10"
            src="laravel-icon_velzrk"
            alt="laravel icon"
          />
          <nuxt-img
            class="w-10 h-10"
            src="javascript-icon_vzwdso"
            alt="js icon"
          />
          <nuxt-img class="w-10 h-10" src="vue-icon_l2psht" alt="vue icon" />
          <icon-nuxt class="w-10 h-10" alt="nuxt icon" />
          <icon-tailwind class="w-10 h-10" alt="tailwind icon" />
        </div>
        <button
          class="w-full px-4 py-2 mt-6 text-xl font-medium text-white transform rounded-full bg-blue-100-jp hover:bg-blue-jp"
          @click="scrollToElement('portfolio')"
        >
          Ver Portafolio
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import IconNuxt from '@/assets/icons/nuxt.svg?inline'
import IconTailwind from '@/assets/icons/tailwind.svg?inline'
import IconTwitter from '@/assets/icons/twitter.svg?inline'
import IconGithub from '@/assets/icons/github.svg?inline'
import IconLinkedin from '@/assets/icons/linkedin.svg?inline'

export default {
  components: {
    IconNuxt,
    IconTailwind,
    IconTwitter,
    IconGithub,
    IconLinkedin
  },
  async fetch() {
    const home = await this.$content('home').fetch()
    this.home = home
  },
  data() {
    return {
      home: {},
      showMenu: false
    }
  },
  methods: {
    scrollToElement(name) {
      this.$scrollToElement(name)
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
