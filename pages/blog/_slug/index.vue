<template>
  <div class="w-10/12 mx-auto">
    <the-header is-blog />
    <article class="mt-10 md:-mt-20">
      <figure>
        <img
          class="object-cover w-full rounded-xl image-cover"
          :src="require(`~/assets/img/posts/${post.image}`)"
          alt=""
        >
      </figure>
      <h1 class="mt-8 text-3xl font-bold text-center md:text-5xl">
        {{ post.title }}
      </h1>
      <div class="flex flex-wrap justify-center mt-6">
        <template v-for="tag in post.tags">
          <div
            :key="tag"
            class="px-2 py-1 m-2 rounded-lg"
            :class="tagClasses(tag)"
          >
            {{ tag }}
          </div>
        </template>
      </div>
      <nuxt-content
        :document="post"
        class="mx-auto mt-10 prose prose-md lg:prose-lg"
      />
    </article>
    <div class="mt-6">
      <p class="text-sm text-center md:text-md">
        Compartir
      </p>
      <div class="flex items-center justify-center mt-2 space-x-4">
        <ShareNetwork
          network="linkedin"
          :url="postUrl"
          :title="post.title"
          :description="post.description"
          quote="The hot reload is so fast it\'s near instant. - Evan You"
          hashtags="vuejs,vite"
        >
          <img class="w-10 h-10" src="~assets/svg/linkedin.svg" alt="">
        </ShareNetwork>
        <ShareNetwork
          network="twitter"
          :url="postUrl"
          :title="post.title"
          :description="post.description"
          quote="The hot reload is so fast it\'s near instant. - Evan You"
          hashtags="vuejs,vite"
        >
          <img class="w-10 h-10" src="~assets/svg/twitter.svg" alt="">
        </ShareNetwork>
        <ShareNetwork
          network="facebook"
          :url="postUrl"
          :title="post.title"
          :description="post.description"
          quote="The hot reload is so fast it\'s near instant. - Evan You"
          hashtags="vuejs,vite"
        >
          <img
            class="w-10 h-10 text-blue-600 rounded-full"
            src="~assets/svg/facebook.svg"
            alt=""
          >
        </ShareNetwork>
      </div>
    </div>
    <hr class="my-6">
    <p class="mb-2 md:text-lg">
      Revisa mis otros posts
    </p>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
      <template v-for="(lastPost, index) in lastPosts">
        <nuxt-link :key="index" :to="`/blog/${lastPost.slug}`">
          <post-preview :post="lastPost" />
        </nuxt-link>
      </template>
    </div>
  </div>
</template>

<script>
import { createSEOMeta } from '~/utils/seo'

export default {
  async asyncData ({ $content, params }) {
    const post = await $content('posts', params.slug).fetch()
    const lastPosts = await $content('posts').sortBy('createdAt', 'desc').skip(1).limit(4).fetch()

    return {
      post,
      lastPosts
    }
  },
  layout: 'blog',
  data () {
    return {
      tags: [
        { name: 'Laravel', classes: 'bg-red-200' },
        { name: 'Nuxt', classes: 'bg-green-200' },
        { name: 'Tailwind CSS', classes: 'bg-blue-200' },
        { name: 'Productividad', classes: 'bg-gray-200' },
        { name: 'Personal', classes: 'bg-gray-200' }
      ]
    }
  },
  computed: {
    postTags () {
      return this.post.tags
    },
    postUrl () {
      return `${process.env.HOST_NAME}/blog/${this.$route.params.slug}`
    }
  },
  methods: {
    tagClasses (tag) {
      return this.tags.find(item => item.name === tag).classes || 'bg-gray-200'
    }
  },
  head () {
    const { title, description, image, slug } = this.post

    return {
      title: `${title} - Javier Pomachagua Pérez`,
      meta: [
        ...createSEOMeta({ title, description, image: process.env.HOST_NAME + require(`~/assets/img/posts/${image}`), url: process.env.HOST_NAME + `/blog/${slug}` })
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `${process.env.HOST_NAME}/blog/${this.$route.params.slug}`
        }
      ]
    }
  }
}
</script>

<style scoped>
.image-cover {
  height: 15rem;
}
@screen md {
.image-cover {
  height: 30rem;
}
}
</style>
