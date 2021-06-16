<template>
  <div class="flex items-center justify-between mx-4 mt-5 md:hidden">
    <nuxt-link to="/">
      <logo />
    </nuxt-link>
    <div
      class="relative w-5 md:hidden"
      @click="changeShowMenu()"
    >
      <nuxt-img src="open-menu_ya6lwq" alt="Menú" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showMenu: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    changeShowMenu () {
      this.$emit('changeShowMenu')
    }
  }
}
</script>

<style>

</style>
