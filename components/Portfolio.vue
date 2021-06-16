<template>
  <section class="mt-10 portfolio md:mt-0">
    <div class="py-14 bg-blue-100-jp">
      <div class="max-w-6xl mx-auto">
        <h1 class="px-12 text-3xl font-bold text-white md:text-jp-xl">
          {{ portfolio.title }}
        </h1>
        <p
          class="px-12 mt-6 text-white text-md"
        >
          {{ portfolio.description }}
        </p>
        <!-- <div class="portfolio__categories">
          <span v-for="(category, index) in categories" :key="index" href="#" @click="selectCategory(index)">
            {{ category }}
            <div v-show="categorySelected === index" class="portfolio__categories__active" />
          </span>
        </div> -->
      </div>
    </div>
    <div class="grid grid-cols-1 gap-0 md:grid-cols-3">
      <div v-for="project in projectsFiltered" :key="project.title" class="portfolio__project">
        <figure>
          <nuxt-img class="md:h-72 md:w-full md:object-cover" :src="project.image" width="400" height="300" alt="Project" />
        </figure>
        <div class="py-6 portfolio__project-description bg-blue-100-jp md:hidden">
          <div class="portfolio__project-tags">
            <span
              v-for="tag in project.tags"
              :key="tag"
              :class="`${tagStyle(tag)} text-white rounded-full px-3 py-1 text-sm`"
            >{{ tag }}</span>
          </div>
          <h1 class="mx-10 mb-2 text-lg font-medium text-white md:text-xl">
            {{ project.title }}
          </h1>
          <p class="mx-10 mb-2 ml-10 text-sm text-justify text-white md:text-md">
            {{ project.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async fetch () {
    const portfolio = await this.$content('portfolio').fetch()
    this.portfolio = portfolio
  },
  data () {
    return {
      portfolio: {},
      categories: ['Aplicación Web', 'Landing Page', 'Aplicación Móvil', 'UX Design', 'Todos'],
      tagStyles: [
        {
          name: 'Laravel',
          color: 'bg-laravel'
        },
        {
          name: 'Vue',
          color: 'bg-vue'
        },
        {
          name: 'Flutter',
          color: 'bg-flutter'
        },
        {
          name: 'React',
          color: 'bg-react'
        },
        {
          name: 'Nuxt',
          color: 'bg-vue'
        }
      ],
      categorySelected: 4
    }
  },
  computed: {
    projectsFiltered () {
      if (this.categorySelected === 4) {
        return this.portfolio.projects
      } else {
        return this.portfolio.projects.filter(project => project.category === this.categorySelected)
      }
    }
  },
  methods: {
    tagStyle (tag) {
      return this.tagStyles.find(tagStyle => tagStyle.name === tag).color || 'bg-black-jp'
    },
    selectCategory (index) {
      this.categorySelected = index
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
.portfolio__categories {
  @apply flex flex-row flex-wrap text-white px-10
}
.portfolio__categories span {
  @apply mr-4 mb-2 cursor-pointer;
}
.portfolio__categories__active {
  @apply w-full h-1 bg-white rounded-lg
}
.portfolio__projects {
  @apply grid grid-cols-1 gap-0
}
.portfolio__project {
  @apply relative z-10
}
.portfolio__project-tags {
  @apply mx-10 flex mb-4
}
.portfolio__project-tags span {
  @apply mr-2
}
@screen md {
  .portfolio {
    @apply mt-0
  }
  .portfolio__header {
    @apply px-56
  }
  .portfolio__title {
    @apply text-jp-xl
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
