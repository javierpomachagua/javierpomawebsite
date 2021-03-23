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
      </div>
    </div>
    <div class="grid grid-cols-1 gap-0 md:grid-cols-3">
      <div v-for="post in posts" :key="post.title" class="relative">
        <nuxt-link :to="`blog/${post.slug}`" class="group">
          <figure class="overflow-hidden">
            <img class="object-cover w-full duration-700 transform h-84 md:opacity-70 group-hover:scale-150" :src="require(`~/assets/img/posts/${post.image}`)" alt="post">
          </figure>
          <div class="absolute bottom-0 w-full py-6 bg-gray-800 opacity-75 md:bg-gray-600 group-hover:bg-gray-800">
            <p class="mb-2 ml-10 text-xs text-white md:text-md">
              {{ post.date }}
            </p>
            <h1 class="ml-10 text-lg font-medium text-white md:text-xl">
              {{ post.title }}
            </h1>
          </div>
        </nuxt-link>
      </div>
      <nuxt-link to="blog">
        <div class="relative flex items-center justify-center text-4xl font-bold text-gray-200 bg-gray-600 md:h-84 h-36 opacity-70 hover:bg-gray-700">
          Ver más
        </div>
      </nuxt-link>
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
