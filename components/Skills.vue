<template>
  <section class="flex flex-col items-center max-w-6xl mx-auto md:pb-32 md:pt-24">
    <h1 class="skills__title">
      {{ skills.title }}
    </h1>
    <p class="skills_description">
      {{ skills.description }}
    </p>
    <div class="grid m-10 mt-5 md:grid-cols-3 md:mb-0 sm:grid-cols-2">
      <div v-for="service in skills.services" :key="service.name" class="skills__category">
        <img class="skills__category-image" :src="require(`../assets/img/${service.icon}`)" alt="Sistemas Personalizados">
        <h1 class="skills__category-title">
          {{ service.name }}
        </h1>
        <p class="skills__category-description">
          {{ service.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async fetch () {
    const skills = await this.$content('skills').fetch()
    this.skills = skills
  },
  data () {
    return {
      skills: {}
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
  @apply m-10 mt-5
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
