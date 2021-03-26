<template>
  <transition name="fade">
    <div class="absolute z-30 px-2 mr-4 text-white bg-gray-500 mt-14 right-1 rounded-xl">
      <div
        class="p-2 mb-2 rounded-lg cursor-pointer text-md"
        @click="scrollToElement('aboutme')"
      >
        Sobre mí
      </div>
      <div
        class="p-2 mb-2 rounded-lg cursor-pointer text-md"
        @click="scrollToElement('portfolio')"
      >
        Portafolio
      </div>
      <nuxt-link :to="{ name: 'blog' }" tag="div" class="p-2 mb-2 rounded-lg cursor-pointer text-md">
        Blog
      </nuxt-link>
      <div
        class="p-2 rounded-lg cursor-pointer text-md"
        @click="scrollToElement('contactme')"
      >
        Contacto
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  methods: {
    scrollToElement (name) {
      this.$scrollToElement(name)
    }
  }
}
</script>

<style>

</style>
