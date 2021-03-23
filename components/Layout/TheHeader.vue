<template>
  <div class="relative z-20 md:mb-40">
    <div class="hidden md:mt-8 md:flex md:justify-center">
      <div>
        <nuxt-link to="/">
          <svg
            class="md:w-10 md:h-10 md:inline-block md:mr-6"
            enable-background="new 0 0 512 512"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="m439.54 68.7h-367.08c-39.95 0-72.46 32.51-72.46 72.47v229.66c0 39.96 32.51 72.47 72.46 72.47h367.08c39.95 0 72.46-32.51 72.46-72.47v-229.66c0-39.96-32.51-72.47-72.46-72.47zm-253.73 115.29-76.23 76.23 67.79 67.79c5.86 5.86 5.86 15.36 0 21.21-5.85 5.86-15.35 5.86-21.21 0l-78.4-78.4c-5.86-5.86-5.86-15.35 0-21.21l86.83-86.83c5.86-5.86 15.36-5.86 21.22 0 5.85 5.85 5.85 15.35 0 21.21zm123.73-35.29-79.32 224.59c-2.76 7.82-11.33 11.91-19.14 9.15s-11.91-11.33-9.15-19.14l79.32-224.59c2.76-7.81 11.32-11.91 19.14-9.15 7.81 2.76 11.91 11.33 9.15 19.14zm124.7 113.69-86.83 86.83c-5.86 5.86-15.36 5.86-21.22 0-5.85-5.85-5.85-15.35 0-21.21l76.23-76.23-67.79-67.79c-5.86-5.86-5.86-15.36 0-21.21 5.85-5.86 15.35-5.86 21.21 0l78.4 78.4c5.86 5.86 5.86 15.35 0 21.21z"
              />
            </g>
          </svg>
        </nuxt-link>
        <span
          class="px-2 mb-4 text-lg font-medium bg-white rounded-lg cursor-pointer hover:bg-gray-800 hover:text-white"
          @click="scrollToElement('aboutme')"
        >Sobre mí</span>
        <span
          class="px-2 mb-4 text-lg font-medium bg-white rounded-lg cursor-pointer hover:bg-gray-800 hover:text-white"
          @click="scrollToElement('portfolio')"
        >Portafolio</span>
        <nuxt-link :to="{ name: 'blog' }">
          <span
            class="px-2 mb-4 text-lg font-medium bg-white rounded-lg cursor-pointer hover:bg-gray-800 hover:text-white"
          >Blog</span>
        </nuxt-link>
        <span
          class="px-2 mb-4 text-lg font-medium bg-white rounded-lg cursor-pointer hover:bg-gray-800 hover:text-white"
          @click="scrollToElement('contactme')"
        >Contacto</span>
      </div>
      <div class="md:flex md:flex-wrap md:justify-center" />
    </div>
    <div class="flex items-center justify-between mx-4 mt-5 md:hidden">
      <nuxt-link to="/">
        <svg
          class="w-10 h-10"
          enable-background="new 0 0 512 512"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="m439.54 68.7h-367.08c-39.95 0-72.46 32.51-72.46 72.47v229.66c0 39.96 32.51 72.47 72.46 72.47h367.08c39.95 0 72.46-32.51 72.46-72.47v-229.66c0-39.96-32.51-72.47-72.46-72.47zm-253.73 115.29-76.23 76.23 67.79 67.79c5.86 5.86 5.86 15.36 0 21.21-5.85 5.86-15.35 5.86-21.21 0l-78.4-78.4c-5.86-5.86-5.86-15.35 0-21.21l86.83-86.83c5.86-5.86 15.36-5.86 21.22 0 5.85 5.85 5.85 15.35 0 21.21zm123.73-35.29-79.32 224.59c-2.76 7.82-11.33 11.91-19.14 9.15s-11.91-11.33-9.15-19.14l79.32-224.59c2.76-7.81 11.32-11.91 19.14-9.15 7.81 2.76 11.91 11.33 9.15 19.14zm124.7 113.69-86.83 86.83c-5.86 5.86-15.36 5.86-21.22 0-5.85-5.85-5.85-15.35 0-21.21l76.23-76.23-67.79-67.79c-5.86-5.86-5.86-15.36 0-21.21 5.85-5.86 15.35-5.86 21.21 0l78.4 78.4c5.86 5.86 5.86 15.35 0 21.21z"
            />
          </g>
        </svg>
      </nuxt-link>
      <div
        class="relative w-5 md:hidden"
        @click="showMenu = !showMenu"
      >
        <img src="~assets/img/open-menu.png" alt="Menú">
        <transition name="fade">
          <div v-if="showMenu" class="absolute px-2 mt-2 mr-2 text-white bg-gray-500 rounded-xl right-2">
            <div
              class="p-2 mb-2 rounded-lg text-md"
              @click="scrollToElement('aboutme')"
            >
              Sobre mí
            </div>
            <div
              class="p-2 mb-2 rounded-lg text-md"
              @click="scrollToElement('portfolio')"
            >
              Portafolio
            </div>
            <nuxt-link :to="{ name: 'blog' }" tag="div" class="p-2 mb-2 rounded-lg text-md">
              Blog
            </nuxt-link>
            <div
              class="p-2 rounded-lg text-md"
              @click="scrollToElement('contactme')"
            >
              Contacto
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
.fade-enter {
  opacity: 0;
  transform: translateX(10px);
}
.fade-leave-active {
  opacity: 0;
  transform: translateX(10px);
}
.fade-enter-active,
.fade-leave-active {
  transition: all .5s ease-in-out;
}
.navbar__items {
  transition: display 0.6s ease 0s;
}
</style>
