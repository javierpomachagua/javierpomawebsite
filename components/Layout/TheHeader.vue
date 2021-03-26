<template>
  <div>
    <transition name="fade">
      <mobile-menu v-if="showMenu" :is-blog="isBlog" />
    </transition>
    <div class="relative z-20 md:mb-40">
      <desktop-header :is-blog="isBlog" />
      <mobile-header :show-menu="showMenu" @changeShowMenu="changeShowMenu" />
    </div>
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
