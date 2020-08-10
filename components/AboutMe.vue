<template>
  <section>
    <div class="about">
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
    <figure class="about__image">
      <img src="https://via.placeholder.com/420">
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
section {
  @apply mb-10
}
.about {
  @apply flex flex-col items-center
}
.about__intro {
  @apply text-lg text-black-jp;
}
.about__title {
  @apply text-3xl font-bold text-black-jp
}
.about__sections {
  @apply mt-4 w-64 flex justify-around
}
.about__description {
  @apply text-sm mt-4 text-gray-jp text-justify mx-12
}
.about__download {
  @apply w-48 mt-8 bg-blue-100-jp text-white rounded-full px-4 py-2
}
.about__image {
  @apply mx-10 my-8
}
</style>
