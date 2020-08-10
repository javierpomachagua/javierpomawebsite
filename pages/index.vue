<template>
  <div>
    <Home />
    <AboutMe />
    <Skills />
    <Portfolio />
    <Clients />
    <Blog />
    <ContactMe />
    <Footer />
  </div>
</template>

<script>
import Home from '~/components/Home.vue'
import AboutMe from '~/components/AboutMe.vue'
import Skills from '~/components/Skills.vue'
import Portfolio from '~/components/Portfolio.vue'
import Clients from '~/components/Clients.vue'
import Blog from '~/components/Blog.vue'
import ContactMe from '~/components/ContactMe.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Home,
    AboutMe,
    Skills,
    Portfolio,
    Clients,
    Blog,
    ContactMe,
    Footer
  }
}
</script>

<style>

</style>
