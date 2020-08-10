<template>
  <section class="blog">
    <div class="blog__header">
      <h1 class="blog__title">
        Blog
      </h1>
      <p
        class="blog__description"
      >
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
      </p>
    </div>
    <div class="blog__posts">
      <div v-for="post in posts" :key="post.title" class="blog__post">
        <figure class="blog__post-image">
          <img :src="post.image" alt="post">
        </figure>
        <div class="blog__post-description">
          <p>{{ post.date }}</p>
          <h1>{{ post.title }}</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      posts: [
        {
          image: 'https://via.placeholder.com/400x250',
          title: 'Post One',
          date: '25 Diciembre 2019'
        },
        {
          image: 'https://via.placeholder.com/400x250',
          title: 'Post Two',
          date: '22 Diciembre 2019'
        },
        {
          image: 'https://via.placeholder.com/400x250',
          title: 'Post Two',
          date: '22 Diciembre 2019'
        }
      ]
    }
  }
}
</script>

<style>
.blog {
  @apply mt-10
}
.blog__header {
  @apply bg-blue-100-jp py-10
}
.blog__title {
  @apply text-3xl font-bold text-white px-10
}
.blog__description {
  @apply text-white text-sm my-4 px-10
}
.blog__categories {
  @apply flex flex-row flex-wrap text-white px-10
}
.blog__categories h3 {
  @apply w-32 mr-4 mb-2
}
.blog__post-description {
  @apply bg-blue-100-jp py-6
}
.blog__post-description p {
  @apply ml-10 text-white text-xs mb-2
}
.blog__post-description h1 {
  @apply ml-10 text-white text-lg
}
</style>
