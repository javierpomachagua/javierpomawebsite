<template>
  <section class="skills">
    <p class="skills__intro">
      Habilidades
    </p>
    <h1 class="skills__title">
      Servicios
    </h1>
    <p class="skills_description">
      Lorem ipsum Lorem ipsum Lorem ipsum
    </p>
    <div class="skills__categories">
      <div v-for="category in categories" :key="category.title" class="skills__category">
        <img class="skills__category-image" :src="require(`../assets/img/${category.image}`)" alt="Sistemas Personalizados">
        <h1 class="skills__category-title">
          {{ category.title }}
        </h1>
        <p class="skills__category-description">
          {{ category.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      categories: [
        {
          image: 'web.svg',
          title: 'Landing Page',
          description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'
        },
        {
          image: 'mobile.svg',
          title: 'Aplicaciones Personalizadas',
          description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'
        },
        {
          image: 'ecommerce.svg',
          title: 'E-Commerce',
          description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'
        }
      ]
    }
  }
}
</script>

<style>
.skills {
  @apply flex flex-col items-center
}
.skills__intro {
  @apply text-lg text-black-jp
}
.skills__title {
  @apply text-3xl font-bold text-black-jp
}
.skills_description {
  @apply text-sm mt-4 text-gray-jp text-justify mx-12
}
.skills__categories {
  @apply m-10
}
.skills__category {
  @apply flex flex-col items-center border-gray-100-jp border-solid rounded-lg p-10 my-4;
  border-width: 1px;
}
.skills__category-title {
  @apply mt-4 text-lg font-medium text-center
}
.skills__category-description {
  @apply mt-4 text-center text-gray-jp
}
@screen md {
  .skills {
    @apply mx-40 my-32
  }
  .skills__title {
    @apply text-jp-xl
  }
  .skills__categories {
    @apply flex flex-row mb-0
  }
  .skills__category {
    @apply bg-white border-none;
    border-radius: 2rem;
  }
  .skills__category-title {
    @apply text-2xl
  }
}
</style>
