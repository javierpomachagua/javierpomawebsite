<template>
  <section
    class="relative flex flex-col items-center mx-auto mb-10 overflow-hidden max-w-7xl aboutme md:flex-row-reverse md:py-44"
  >
    <div
      v-if="!$fetchState.pending"
      class="flex flex-col items-center md:items-start md:w-1/2"
    >
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
            class="w-16 h-1 rounded-lg bg-blue-100-jp"
          />
        </h3>
      </div>
      <div class="flex flex-col items-center h-auto md:h-56 md:items-start">
        <p class="mx-12 mt-4 text-justify text-md text-gray-jp md:ml-0">
          {{ categorySelected.text }}
        </p>
        <a
          href="https://drive.google.com/file/d/1qioooJj1hQ7LfZIh4FMwn1LXJLQ9115B/view?usp=sharing"
          target="_blank"
          class="w-48 px-4 py-2 mt-10 text-center text-white rounded-full bg-blue-100-jp hover:bg-blue-jp md:mt-5"
        >
          Descargar CV
        </a>
      </div>
    </div>
    <div class="bg-square-2 from-blue-100-jp to-blue-jp bg-gradient-to-b" />
    <figure class="mx-10 my-8 md:mr-10">
      <nuxt-img
        class="object-cover rounded-lg shadow-xl w-96 h-96 md:float-right"
        src="about_zvodlb"
        height="500"
        width="500"
      />
    </figure>
  </section>
</template>

<script>
export default {
  async fetch() {
    const about = await this.$content('about').fetch()
    this.about = about
  },
  data() {
    return {
      categoryActive: 0,
      about: { categories: [] }
    }
  },
  computed: {
    categorySelected() {
      return this.about.categories.filter(
        (tab, index) => index === this.categoryActive
      )[0]
    }
  },
  methods: {
    changeTab(index) {
      this.categoryActive = index
    }
  }
}
</script>

<style>
.about {
  @apply mb-10 flex flex-col items-center;
}
.about__body {
  @apply flex flex-col items-center;
}
.about__intro {
  @apply text-lg text-black-jp;
}
.about__title {
  @apply text-3xl font-bold text-black-jp;
}
.about__sections {
  @apply mt-4 flex justify-around;
}
.about__sections h3 {
  @apply ml-4 flex flex-col items-center justify-center text-justify cursor-pointer;
}
.about__description {
  @apply text-sm mt-4 text-gray-jp text-justify mx-12;
}
.about__download {
  @apply w-48 mt-8 bg-blue-100-jp text-white rounded-full px-4 py-2;
}
.about__image {
  @apply mx-10 my-8;
}
.about__image img {
  @apply object-cover w-96 h-96 rounded-lg shadow-xl;
}
@screen md {
  .about {
    @apply flex-row-reverse m-40 mt-32;
  }
  .about__title {
    @apply text-5xl;
  }
  .about__body {
    @apply items-start w-1/2;
  }
  .bg-square-2 {
    @apply absolute bg-blue-jp transform rotate-45;
    border-radius: 4rem;
    z-index: -10;
    width: 35rem;
    height: 35rem;
    top: 120px;
    left: -200px;
  }
  .about__sections h3 {
    @apply ml-0 mr-4;
  }
  .about__description {
    @apply ml-0;
  }
}
</style>
