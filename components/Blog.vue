<template>
  <section class="mt-10 blog md:mt-0">
    <div class="py-14 bg-blue-100-jp md:px-56">
      <div class="max-w-6xl mx-auto">
        <h1 class="px-12 text-3xl font-bold text-white md:text-jp-xl">
          Blog
        </h1>
        <p
          class="px-12 mt-6 text-white text-md"
        >
          Chequea mis últimos posts. Generalmente posteo sobre lo que voy aprendiendo para compartirlo
        </p>
        <!-- <div class="flex flex-row flex-wrap px-10 text-white">
          <h3 class="w-32 mb-2 mr-4 md:text-lg">
            UX Design
          </h3>
          <h3 class="w-32 mb-2 mr-4 md:text-lg">
            Landing Page
          </h3>
          <h3 class="w-32 mb-2 mr-4 md:text-lg">
            Aplicación Web
          </h3>
          <h3 class="w-32 mb-2 mr-4 md:text-lg">
            Móvil
          </h3>
        </div> -->
      </div>
    </div>
    <div class="grid grid-cols-1 gap-0 md:grid-cols-3">
      <div v-for="post in posts" :key="post.title" class="relative">
        <figure>
          <img class="object-cover w-full h-72 opacity-70" :src="require(`~/assets/img/posts/${post.image}`)" alt="post">
        </figure>
        <div class="absolute bottom-0 w-full py-6 bg-gray-600 opacity-75">
          <p class="mb-2 ml-10 text-xs text-white">
            {{ post.date }}
          </p>
          <h1 class="ml-10 text-lg font-medium text-white">
            {{ post.title }}
          </h1>
        </div>
      </div>
      <div class="relative flex items-center justify-center text-4xl font-bold text-gray-200 bg-gray-600 md:h-72 h-36 opacity-70">
        Ver más
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async fetch () {
    const posts = await this.$content('posts').limit(5).fetch()
    this.posts = posts
  },
  data () {
    return {
      posts: []
    }
  }
}
</script>

<style>
</style>
