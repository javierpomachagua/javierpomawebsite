<template>
  <div>
    <layout-the-header is-blog />
    <div class="max-w-7xl md:mx-44">
      <div class="p-4 mt-16">
        <div
          class="py-8 -mt-12 text-white rounded-md md:py-12 md:-mt-32 bg-blue-jp"
        >
          <h1 class="text-3xl font-bold text-center md:text-4xl">
            PORTAFOLIO
          </h1>
        </div>
        <hr class="my-2" />
        <div class="hidden md:block md:my-8">
          <nuxt-link :to="`/projects/${firstProject.slug}`">
            <div class="flex items-center w-full">
              <figure class="relative w-2/3 overflow-hidden rounded-xl">
                <nuxt-img
                  class="object-cover w-full h-84"
                  :src="firstProject.main_image"
                  :alt="firstProject.title"
                />
              </figure>
              <div class="w-1/3 ml-6">
                <h1 class="mt-3 text-3xl font-bold">
                  {{ firstProject.title }}
                </h1>
                <p class="mt-4 text-gray-500 text-md">
                  {{ firstProject.description }}
                </p>
              </div>
            </div>
          </nuxt-link>
        </div>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <nuxt-link
            :to="`/projects/${firstProject.slug}`"
            class="block md:hidden"
          >
            <project-preview :project="firstProject" />
          </nuxt-link>
          <template v-for="(project, index) in projects">
            <nuxt-link :key="index" :to="`/projects/${project.slug}`">
              <project-preview :project="project" />
            </nuxt-link>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const projects = await $content('projects')
      .sortBy('createdAt', 'desc')
      .fetch()
    const firstProject = projects.shift()

    return {
      firstProject,
      projects
    }
  },
  layout: 'blog'
}
</script>

<style scoped></style>
