<template>
  <div>
    <transition name="fade">
      <mobile-menu v-if="showMenu" />
    </transition>
    <div class="relative z-20 md:mb-40">
      <desktop-header />
      <mobile-header :show-menu="showMenu" @changeShowMenu="changeShowMenu" />
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
    changeShowMenu () {
      this.showMenu = !this.showMenu
    }
  }
}
</script>

<style>
.navbar__items {
  transition: display 0.6s ease 0s;
}
</style>
