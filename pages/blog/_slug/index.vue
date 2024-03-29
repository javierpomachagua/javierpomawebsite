<template>
  <div class="w-10/12 mx-auto">
    <layout-the-header is-blog />
    <article class="mt-10 md:-mt-20">
      <figure>
        <nuxt-img
          class="object-cover w-full rounded-xl image-cover"
          :src="post.image"
          :alt="post.title"
        />
      </figure>
      <h1 class="mt-8 text-3xl font-bold text-center md:text-5xl">
        {{ post.title }}
      </h1>
      <h3 class="mt-8 text-lg font-medium text-center text-gray-600 md:text-xl">
        {{ post.description }}
      </h3>
      <!-- <div class="flex flex-wrap justify-center mt-6">
        <template v-for="tag in post.tags">
          <div
            :key="tag"
            class="px-2 py-1 m-2 rounded-lg"
            :class="tagClasses(tag)"
          >
            {{ tag }}
          </div>
        </template>
      </div> -->
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
          :quote="post.description"
          :hashtags="postTags"
        >
          <icon-linkedin class="w-10 h-10" alt="linkedin icon" />
        </ShareNetwork>
        <ShareNetwork
          network="twitter"
          :url="postUrl"
          :title="post.title"
          :description="post.description"
          :quote="post.description"
          :hashtags="postTags"
        >
          <icon-twitter class="w-10 h-10" alt="twitter icon" />
        </ShareNetwork>
        <ShareNetwork
          network="facebook"
          :url="postUrl"
          :title="post.title"
          :description="post.description"
          :quote="post.description"
          :hashtags="postTags"
        >
          <icon-facebook
            class="w-10 h-10 text-blue-600 rounded-full"
            alt="facebook icon"
          />
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
import IconFacebook from '@/assets/icons/facebook.svg?inline'
import IconLinkedin from '@/assets/icons/linkedin.svg?inline'
import IconTwitter from '@/assets/icons/twitter.svg?inline'
import { createSEOMeta } from '~/utils/seo'

export default {
  components: {
    IconFacebook,
    IconLinkedin,
    IconTwitter
  },
  async asyncData ({ $content, params }) {
    const post = await $content('posts', params.slug).fetch()
    const lastPosts = await $content('posts').sortBy('createdAt', 'desc').skip(1).limit(4).fetch()

    return {
      post,
      lastPosts
    }
  },
  layout: 'blog',
  computed: {
    postTags () {
      return this.post.tags.join(',')
    },
    postUrl () {
      return `${process.env.HOST_NAME}/blog/${this.$route.params.slug}`
    },
    postImageUrl () {
      return this.$cloudinary.image
        .url(`${this.post.image}`)
    }
  },
  methods: {
    // tagClasses (tag) {
    //   return this.post.tags.find(item => item.name === tag).classes || 'bg-gray-200'
    // }
  },
  head () {
    const { title, description, slug } = this.post

    return {
      title: `${title} - Javier Pomachagua Pérez`,
      meta: [
        ...createSEOMeta({ title, description, image: this.postImageUrl, url: process.env.HOST_NAME + `/blog/${slug}` })
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
