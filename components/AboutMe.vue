<template>
  <section
    class="flex flex-col items-center max-w-6xl mx-auto mb-10 aboutme md:flex-row-reverse md:my-32"
  >
    <div class="flex flex-col items-center md:items-start md:w-1/2">
      <p class="about__intro">
        Un poco
      </p>
      <h1 class="about__title">
        Sobre mí
      </h1>
      <div class="about__sections">
        <h3
          v-for="(category, index) in about.categories"
          :key="index"
          @click="changeTab(index)"
        >
          {{ category.name }}
          <div
            v-show="categoryActive === index"
            class="about__sections__active"
          />
        </h3>
      </div>
      <div class="flex flex-col items-center h-auto md:h-56 md:items-start">
        <p class="mx-12 mt-4 text-justify text-md text-gray-jp md:ml-0">
          {{ categorySelected.text }}
        </p>
        <a
          href="https://drive.google.com/file/d/1P76I7QOtBprawtaXBk1-I0uCDBCHHoYu/view?usp=sharing"
          target="_blank"
          class="w-48 px-4 py-2 mt-10 text-center text-white rounded-full bg-blue-100-jp hover:bg-blue-jp md:mt-5"
        >
          Descargar CV
        </a>
      </div>
    </div>
    <div class="bg-square-2" />
    <figure class="mx-10 my-8 md:mr-10">
      <img
        class="object-cover rounded-lg shadow-xl w-96 h-96 md:float-right"
        src="~assets/img/about.jpg"
      >
    </figure>
  </section>
</template>

<script>
export default {
  async fetch () {
    const about = await this.$content('about').fetch()
    this.about = about
  },
  data () {
    return {
      categoryActive: 2,
      about: { categories: [] }
    }
  },
  computed: {
    categorySelected () {
      return this.about.categories.filter((tab, index) => index === this.categoryActive)[0]
    }
  },
  methods: {
    changeTab (index) {
      this.categoryActive = index
    }
  }
}
</script>

<style>
.about {
  @apply mb-10 flex flex-col items-center
}
.about__body {
  @apply flex flex-col items-center
}
.about__intro {
  @apply text-lg text-black-jp;
}
.about__title {
  @apply text-3xl font-bold text-black-jp
}
.about__sections {
  @apply mt-4 flex justify-around
}
.about__sections h3 {
  @apply ml-4 flex flex-col items-center justify-center text-justify cursor-pointer
}
.about__sections__active {
  @apply w-16 h-1 bg-blue-100-jp rounded-lg
}
.about__description {
  @apply text-sm mt-4 text-gray-jp text-justify mx-12
}
.about__download {
  @apply w-48 mt-8 bg-blue-100-jp text-white rounded-full px-4 py-2
}
.about__image {
  @apply mx-10 my-8;
}
.about__image img {
  @apply object-cover w-96 h-96 rounded-lg shadow-xl
}
@screen md {
  .about {
    @apply flex-row-reverse m-40 mt-32
  }
  .about__title {
    @apply text-5xl
  }
  .about__body {
    @apply items-start w-1/2
  }
  .bg-square-2 {
    @apply absolute bg-blue-jp transform rotate-45;
    border-radius: 4rem;
    z-index: -10;
    width: 40rem;
    height: 40rem;
    top: 1100px;
    left: -200px;
  }
  .about__sections h3 {
    @apply ml-0 mr-4
  }
  .about__description {
    @apply ml-0
  }
}
</style>
