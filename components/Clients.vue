<template>
  <section class="flex flex-col items-center mt-16 overflow-hidden md:mx-40 md:my-32">
    <p class="clients__intro">
      {{ clients.intro }}
    </p>
    <h1 class="mx-2 text-3xl font-bold text-center text-black-jp md:text-5xl">
      {{ clients.title }}
    </h1>
    <p class="mx-12 mt-4 text-sm text-center text-gray-jp sm:w-72 sm:text-center">
      {{ clients.description }}
    </p>
    <transition-group tag="div" name="slide" class="relative w-full p-20 mt-10 h-96 md:mt-20 md:h-80">
      <template v-for="(testimonial, index) in clients.testimonials">
        <div v-if="testimonial.id === testimonialActive" :key="testimonial.id" class="absolute top-0 right-0 md:bottom-0">
          <div
            class="md:flex md:flex-row md:items-center md:justify-center"
          >
            <figure class="md:mx-10">
              <img
                class="object-cover w-32 h-32 mx-auto my-0 rounded-full shadow-lg md:w-72 md:h-84 md:rounded-lg md:float-right"
                src="~assets/img/client.jpg"
              >
            </figure>
            <div class="flex flex-col items-center mx-6 md:w-1/3 md:items-start">
              <img class="hidden md:block md:mb-2" src="~assets/img/quote.svg">
              <p class="mb-4 text-sm text-center text-gray-jp md:text-left md:text-lg">
                {{ testimonial.text }}
              </p>
              <h2 class="text-base font-bold sm:text-xl">
                {{ testimonial.author }}
              </h2>
              <h3 class="mb-4 text-base sm:text-xl">
                {{ testimonial.title }}
              </h3>
              <div class="flex flex-row">
                <template v-for="n in clients.testimonials.length">
                  <div
                    :key="n"
                    class="w-6 h-2 mr-2"
                    :class="n === index + 1 ? 'bg-blue-500' : 'bg-gray-100-jp'"
                  />
                </template>
              </div>
            </div>
          </div>
        </div>
      </template>
    </transition-group>
  </section>
</template>

<script>
export default {
  async fetch () {
    const clients = await this.$content('clients').fetch()
    this.clients = clients
  },
  data () {
    return {
      clients: {},
      testimonialActive: 1
    }
  },
  created () {
    setInterval(() => {
      if (this.testimonialActive + 1 > this.clients.testimonials.length) {
        this.testimonialActive = 1
      } else {
        this.testimonialActive++
      }
    }, 5000)
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
  transform: translate(100%, 0);
}
.slide-leave-to {
  opacity: 0;
  transform: translate(-100%, 0);
}
.clients__intro {
  @apply text-lg text-black-jp
}
.clients__title {
  @apply text-3xl font-bold text-black-jp mx-2 text-center
}
.clients__list {
  @apply p-10
}
@screen md {
  .clients__title {
    @apply text-5xl
  }
  .clients__list {
    @apply mt-10
  }
}
</style>
