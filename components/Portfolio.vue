<template>
  <section class="portfolio">
    <div class="portfolio__header">
      <h1 class="portfolio__title">
        Portafolio
      </h1>
      <p
        class="portfolio__description"
      >
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
      </p>
      <div class="portfolio__categories">
        <h3>UX Design</h3>
        <h3>Landing Page</h3>
        <h3>Aplicación Web</h3>
        <h3>Móvil</h3>
      </div>
    </div>
    <div class="portfolio__projects">
      <div v-for="project in projects" :key="project.title" class="portfolio__project">
        <figure class="portfolio__project-image">
          <img :src="require(`~/assets/img/${project.image}`)" alt="Project">
        </figure>
        <div class="portfolio__project-description">
          <p>{{ project.date }}</p>
          <h1>{{ project.title }}</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      projects: [
        {
          image: 'project.jpg',
          title: 'Project One',
          date: '25 Diciembre 2019'
        },
        {
          image: 'project.jpg',
          title: 'Project Two',
          date: '22 Diciembre 2019'
        },
        {
          image: 'project.jpg',
          title: 'Project Two',
          date: '22 Diciembre 2019'
        },
        {
          image: 'project.jpg',
          title: 'Project Two',
          date: '22 Diciembre 2019'
        },
        {
          image: 'project.jpg',
          title: 'Project Two',
          date: '22 Diciembre 2019'
        },
        {
          image: 'project.jpg',
          title: 'Project Two',
          date: '22 Diciembre 2019'
        }
      ]
    }
  }
}
</script>

<style>
.portfolio {
  @apply mt-10
}
.portfolio__header {
  @apply bg-blue-100-jp py-10
}
.portfolio__title {
  @apply text-3xl font-bold text-white px-10
}
.portfolio__description {
  @apply text-white text-sm my-4 px-10
}
.portfolio__categories {
  @apply flex flex-row flex-wrap text-white px-10
}
.portfolio__categories h3 {
  @apply w-32 mr-4 mb-2
}
.portfolio__projects {
  @apply grid grid-cols-1 gap-0
}
.portfolio__project {
  @apply relative z-10
}
.portfolio__project-description {
  @apply hidden bg-blue-100-jp py-6
}
.portfolio__project-description p {
  @apply ml-10 text-white text-xs mb-2
}
.portfolio__project-description h1 {
  @apply ml-10 text-white text-lg
}
@screen md {
  .portfolio {
    @apply mt-0
  }
  .portfolio__header {
    @apply px-56
  }
  .portfolio__title {
    @apply text-5xl
  }
  .portfolio__categories h3 {
    @apply text-lg
  }
  .portfolio__project:hover .portfolio__project-description {
    @apply block absolute bottom-0 w-full
  }
  .portfolio__project:hover{
    @apply transition delay-150 duration-500 ease-in-out transform scale-105 z-20
  }
  .portfolio__projects {
    @apply grid-cols-3
  }
  .portfolio__project-image img {
    @apply h-64 w-full object-cover
  }
}
</style>
