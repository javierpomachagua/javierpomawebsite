<template>
  <div>
    <the-header is-blog />
    <div class="max-w-7xl md:mx-44">
      <div class="p-4 mt-16">
        <div
          class="py-8 -mt-12 text-white rounded-md md:py-12 md:-mt-32 bg-blue-jp"
        >
          <h1 class="text-3xl font-bold text-center md:text-4xl">
            {{ project.title }}
          </h1>
        </div>
        <div class="relative w-full my-5">
          <no-ssr>
            <slider
              id="slider"
              animation="fade"
              :control-btn="false"
              :indicators="false"
              height="500"
              class="h-72 md:h-[28rem]"
            >
              <template v-for="(image, index) in project.images">
                <slider-item :key="index">
                  <div
                    class="md:flex md:flex-row md:items-center md:justify-center h-full"
                  >
                    <figure class="md:mx-10 h-full">
                      <nuxt-img
                        class="object-contain w-full h-full mx-auto shadow-lg"
                        :src="image"
                      />
                    </figure>
                  </div>
                </slider-item>
              </template>
            </slider>
          </no-ssr>
        </div>
        <div class="prose prose-md lg:prose-lg mx-auto">
          <nuxt-content :document="project" />
          <button
            class="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-center mt-8"
            @click="$router.push('/projects')"
          >
            Ver todos los proyectos
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from '~/components/Layout/TheHeader'
import { Slider, SliderItem } from 'vue-easy-slider'

export default {
  components: {
    TheHeader,
    Slider,
    SliderItem
  },
  layout: 'blog',
  async asyncData({ $content, params }) {
    const project = await $content('projects', params.slug).fetch()
    return {
      project
    }
  }
}
</script>

<style scoped></style>
