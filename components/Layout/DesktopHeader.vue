<template>
  <div
    class="hidden md:mt-8 md:flex md:justify-center md:items-center md:space-x-2"
  >
    <nuxt-link to="/">
      <logo />
    </nuxt-link>
    <span
      v-if="!isBlog"
      class="px-2 py-1 text-lg font-medium bg-white rounded-lg cursor-pointer hover:bg-gray-800 hover:text-white"
      @click="scrollToElement('aboutme')"
      >Sobre mí</span
    >
    <span
      v-if="!isBlog"
      class="px-2 py-1 text-lg font-medium bg-white rounded-lg cursor-pointer hover:bg-gray-800 hover:text-white"
      @click="scrollToElement('portfolio')"
      >Portafolio</span
    >
    <span
      v-if="!isBlog"
      class="px-2 py-1 text-lg font-medium bg-white rounded-lg cursor-pointer hover:bg-gray-800 hover:text-white"
      @click="scrollToElement('blog')"
      >Blog</span
    >
    <nuxt-link
      v-if="isBlog"
      to="/"
      tag="span"
      class="px-2 py-1 text-lg font-medium bg-white rounded-lg cursor-pointer hover:bg-gray-800 hover:text-white"
    >
      Perfil
    </nuxt-link>
    <nuxt-link
      v-if="isBlog"
      :to="{ name: 'projects' }"
      tag="span"
      class="px-2 py-1 text-lg font-medium bg-white rounded-lg cursor-pointer hover:bg-gray-800 hover:text-white"
    >
      Portafolio </nuxt-link
    ><nuxt-link
      v-if="isBlog"
      :to="{ name: 'blog' }"
      tag="span"
      class="px-2 py-1 text-lg font-medium bg-white rounded-lg cursor-pointer hover:bg-gray-800 hover:text-white"
    >
      Blog
    </nuxt-link>
    <span
      v-if="!isBlog"
      class="px-2 py-1 text-lg font-medium bg-white rounded-lg cursor-pointer hover:bg-gray-800 hover:text-white"
      @click="scrollToElement('contactme')"
      >Contacto</span
    >
  </div>
</template>

<script>
export default {
  props: {
    isBlog: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    scrollToElement(name) {
      this.$scrollToElement(name)
    }
  }
}
</script>

<style></style>
