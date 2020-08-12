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
      <div class="blog__categories">
        <h3>UX Design</h3>
        <h3>Landing Page</h3>
        <h3>Aplicación Web</h3>
        <h3>Móvil</h3>
      </div>
    </div>
    <div class="blog__posts">
      <div v-for="post in posts" :key="post.title" class="blog__post">
        <figure class="blog__post-image">
          <img :src="require(`~/assets/img/${post.image}`)" alt="post">
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
          image: 'post.jpg',
          title: 'Post One',
          date: '25 Diciembre 2019'
        },
        {
          image: 'post.jpg',
          title: 'Post Two',
          date: '22 Diciembre 2019'
        },
        {
          image: 'post.jpg',
          title: 'Post Two',
          date: '22 Diciembre 2019'
        },
        {
          image: 'post.jpg',
          title: 'Post Two',
          date: '22 Diciembre 2019'
        },
        {
          image: 'post.jpg',
          title: 'Post Two',
          date: '22 Diciembre 2019'
        },
        {
          image: 'post.jpg',
          title: 'post Two',
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
.blog__posts {
  @apply grid grid-cols-1 gap-0
}
.blog__post {
  @apply relative z-10
}
.blog__post-description {
  @apply hidden bg-blue-100-jp py-6
}
.blog__post-description p {
  @apply ml-10 text-white text-xs mb-2
}
.blog__post-description h1 {
  @apply ml-10 text-white text-lg
}
@screen md {
  .blog {
    @apply mt-0
  }
  .blog__header {
    @apply px-56
  }
  .blog__title {
    @apply text-jp-xl
  }
  .blog__categories h3 {
    @apply text-lg
  }
  .blog__post:hover .blog__post-description {
    @apply block absolute bottom-0 w-full
  }
  .blog__post:hover{
    @apply transition delay-150 duration-500 ease-in-out transform scale-105 z-20
  }
  .blog__posts {
    @apply grid-cols-3
  }
  .blog__post-image img {
    @apply h-64 w-full object-cover
  }
}
</style>
