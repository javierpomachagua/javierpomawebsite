<template>
  <section class="about">
    <div class="about__body">
      <p class="about__intro">
        Un poco
      </p>
      <h1 class="about__title">
        Sobre mí
      </h1>
      <div class="about__sections">
        <h3 @click="changeTab(0)">
          Personal
        </h3>
        <h3 @click="changeTab(1)">
          Educación
        </h3>
        <h3 @click="changeTab(2)">
          Experiencia
        </h3>
      </div>
      <p class="about__description">
        {{ tabSelected.text }}
      </p>
      <button class="about__download">
        Descargar CV
      </button>
    </div>
    <div class="bg-square-2" />
    <figure class="about__image">
      <img src="~assets/img/about.jpg">
    </figure>
  </section>
</template>

<script>
export default {
  data () {
    return {
      tabActive: 2,
      tabs: [
        {
          index: 0,
          text: 'Personal Personal Personal Personal Personal Personal Personal Personal Personal Personal Personal Personal'
        },
        {
          index: 1,
          text: 'Educación Educación Educación Educación Educación Educación Educación Educación Educación Educación Educación Educación'
        },
        {
          index: 2,
          text: 'Experiencia Experiencia Experiencia Experiencia Experiencia Experiencia Experiencia Experiencia Experiencia Experiencia'
        }
      ]
    }
  },
  computed: {
    tabSelected () {
      return this.tabs.filter(tab => tab.index === this.tabActive)[0]
    }
  },
  methods: {
    changeTab (index) {
      this.tabActive = index
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
  @apply ml-4
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
  .about__image {
    @apply w-1/2
  }
  .about__image img {
    @apply float-right
  }
}
</style>
