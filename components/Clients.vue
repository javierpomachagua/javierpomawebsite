<template>
  <section
    class="flex flex-col items-center mt-16 overflow-hidden md:mx-40 md:my-32"
  >
    <p class="clients__intro">
      {{ clients.intro }}
    </p>
    <h1 class="mx-2 text-3xl font-bold text-center text-black-jp md:text-5xl">
      {{ clients.title }}
    </h1>
    <p
      class="mx-12 mt-4 text-sm text-center text-gray-jp sm:w-72 sm:text-center"
    >
      {{ clients.description }}
    </p>
    <div class="relative w-full my-10">
      <no-ssr>
        <slider
          id="slider"
          animation="fade"
          :control-btn="false"
          :indicators="false"
        >
          <template v-for="(testimonial, index) in clients.testimonials">
            <slider-item :key="testimonial.id">
              <div
                class="md:flex md:flex-row md:items-center md:justify-center"
              >
                <figure class="md:mx-10">
                  <nuxt-img
                    class="object-cover w-32 h-32 md:w-48 md:h-72 mx-auto my-0 rounded-full shadow-lg md:rounded-xl"
                    :src="testimonial.image"
                  />
                </figure>
                <div
                  class="flex flex-col items-center mx-6 mt-6 md:w-1/3 md:items-start"
                >
                  <icon-quote
                    class="hidden md:block md:mb-2"
                    alt="icon quote"
                  />
                  <p
                    class="mb-4 text-sm text-center text-gray-jp md:text-left md:text-lg"
                  >
                    {{ testimonial.text }}
                  </p>
                  <h2 class="text-base font-bold sm:text-xl">
                    {{ testimonial.author }}
                  </h2>
                  <h3
                    class="mb-4 text-base text-center md:px-0 md:text-left sm:text-xl"
                  >
                    {{ testimonial.title }}
                  </h3>
                  <div class="flex flex-row">
                    <template v-for="n in clients.testimonials.length">
                      <div
                        :key="n"
                        class="w-6 h-2 mr-2"
                        :class="
                          n === index + 1 ? 'bg-blue-500' : 'bg-gray-100-jp'
                        "
                      />
                    </template>
                  </div>
                </div>
              </div>
            </slider-item>
          </template>
        </slider>
      </no-ssr>
    </div>
  </section>
</template>

<script>
import { Slider, SliderItem } from 'vue-easy-slider'

import IconQuote from '@/assets/icons/quote.svg?inline'

export default {
  components: {
    IconQuote,
    Slider,
    SliderItem
  },
  async fetch() {
    const clients = await this.$content('clients').fetch()
    this.clients = clients
  },
  data() {
    return {
      clients: {},
      testimonialActive: 1
    }
  }
}
</script>

<style>
.slide-leave-active,
.slide-enter-active {
  transition: all 1s;
}

.slide-enter {
  opacity: 0;
  transform: translateX(300px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-300px);
}

.clients__intro {
  @apply text-lg text-black-jp;
}

.clients__title {
  @apply text-3xl font-bold text-black-jp mx-2 text-center;
}

.clients__list {
  @apply p-10;
}

@screen md {
  .clients__title {
    @apply text-5xl;
  }

  .clients__list {
    @apply mt-10;
  }
}
</style>
