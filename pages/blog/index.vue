<template>
  <div>
    <the-header />
    <div class="max-w-7xl md:mx-44">
      <div class="p-4 mt-16">
        <div class="py-8 -mt-12 text-white rounded-md md:py-12 md:-mt-32 bg-blue-jp">
          <h1 class="text-3xl font-bold text-center md:text-4xl">
            BLOG
          </h1>
        </div>
        <div class="flex flex-wrap justify-center mt-6">
          <template v-for="tag in tags">
            <div :key="tag.id" class="px-2 py-1 m-2 rounded-lg" :class="tag.classes">
              {{ tag.name }}
            </div>
          </template>
        </div>
        <hr class="my-2">
        <div class="hidden md:block md:my-8">
          <nuxt-link :to="`/blog/${firstPost.slug}`">
            <div class="flex items-center">
              <figure class="relative w-2/3 overflow-hidden rounded-xl">
                <img class="object-cover w-full h-84" :src="require(`~/assets/img/posts/${firstPost.image}`)" alt="">
              </figure>
              <div class="w-1/3 ml-6">
                <small class="text-xs italic text-gray-400">{{ firstPost.date }}</small>
                <h1 class="mt-3 text-3xl font-bold">
                  {{ firstPost.title }}
                </h1>
                <p class="mt-4 text-gray-500 text-md">
                  {{ firstPost.description }}
                </p>
              </div>
            </div>
          </nuxt-link>
        </div>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <nuxt-link :to="`/blog/${firstPost.slug}`" class="block md:hidden">
            <post-preview :post="firstPost" />
          </nuxt-link>
          <template v-for="(post, index) in posts">
            <nuxt-link :key="index" :to="`/blog/${post.slug}`">
              <post-preview :post="post" />
            </nuxt-link>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const posts = await $content('posts').sortBy('createdAt', 'desc').fetch()
    const firstPost = posts.shift()

    return {
      firstPost,
      posts
    }
  },
  layout: 'blog',
  data () {
    return {
      tags: [
        { id: 1, name: 'Laravel', classes: 'bg-red-200' },
        { id: 2, name: 'Nuxt', classes: 'bg-green-200' },
        { id: 3, name: 'Productividad', classes: 'bg-gray-200' },
        { id: 4, name: 'Personal', classes: 'bg-blue-200' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
