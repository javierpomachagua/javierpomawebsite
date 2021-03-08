<template>
  <footer class="footer">
    <div class="footer__links">
      <div class="footer__link" @click="scrollToElement('home')">
        Inicio
      </div>
      <div class="footer__link" @click="scrollToElement('aboutme')">
        Sobre Mí
      </div>
      <div class="footer__link" @click="scrollToElement('portfolio')">
        Portafolio
      </div>
      <!-- <div class="footer__link" @click="scrollToElement('aboutme')">
        Blog
      </div> -->
      <div class="footer__link" @click="scrollToElement('contactme')">
        Contacto
      </div>
    </div>
    <div class="flex justify-center my-4 space-x-4">
      <a
        href="https://www.linkedin.com/in/javier-pomachagua-p%C3%A9rez-aa7407157/"
        target="_blank"
      >
        <svg
          class="w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 112.196 112.196"
          style="enable-background: new 0 0 112.196 112.196"
          xml:space="preserve"
        >
          <g>
            <circle
              style="fill: #007ab9"
              cx="56.098"
              cy="56.097"
              r="56.098"
            />
            <g>
              <path
                style="fill: #f1f2f2"
                d="M89.616,60.611v23.128H76.207V62.161c0-5.418-1.936-9.118-6.791-9.118
            c-3.705,0-5.906,2.491-6.878,4.903c-0.353,0.862-0.444,2.059-0.444,3.268v22.524H48.684c0,0,0.18-36.546,0-40.329h13.411v5.715
            c-0.027,0.045-0.065,0.089-0.089,0.132h0.089v-0.132c1.782-2.742,4.96-6.662,12.085-6.662
            C83.002,42.462,89.616,48.226,89.616,60.611L89.616,60.611z M34.656,23.969c-4.587,0-7.588,3.011-7.588,6.967
            c0,3.872,2.914,6.97,7.412,6.97h0.087c4.677,0,7.585-3.098,7.585-6.97C42.063,26.98,39.244,23.969,34.656,23.969L34.656,23.969z
            M27.865,83.739H41.27V43.409H27.865V83.739z"
              />
            </g>
          </g>
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
        </svg>
      </a>

      <a href="https://github.com/javierpomachagua" target="_blank">
        <svg
          class="w-10 h-10"
          enable-background="new 0 0 24 24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z"
          />
        </svg>
      </a>
      <a href="https://twitter.com/javipomachagua" target="_blank">
        <svg
          class="w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 112.197 112.197"
          style="enable-background: new 0 0 112.197 112.197"
          xml:space="preserve"
        >
          <g>
            <circle
              style="fill: #55acee"
              cx="56.099"
              cy="56.098"
              r="56.098"
            />
            <g>
              <path
                style="fill: #f1f2f2"
                d="M90.461,40.316c-2.404,1.066-4.99,1.787-7.702,2.109c2.769-1.659,4.894-4.284,5.897-7.417
            c-2.591,1.537-5.462,2.652-8.515,3.253c-2.446-2.605-5.931-4.233-9.79-4.233c-7.404,0-13.409,6.005-13.409,13.409
            c0,1.051,0.119,2.074,0.349,3.056c-11.144-0.559-21.025-5.897-27.639-14.012c-1.154,1.98-1.816,4.285-1.816,6.742
            c0,4.651,2.369,8.757,5.965,11.161c-2.197-0.069-4.266-0.672-6.073-1.679c-0.001,0.057-0.001,0.114-0.001,0.17
            c0,6.497,4.624,11.916,10.757,13.147c-1.124,0.308-2.311,0.471-3.532,0.471c-0.866,0-1.705-0.083-2.523-0.239
            c1.706,5.326,6.657,9.203,12.526,9.312c-4.59,3.597-10.371,5.74-16.655,5.74c-1.08,0-2.15-0.063-3.197-0.188
            c5.931,3.806,12.981,6.025,20.553,6.025c24.664,0,38.152-20.432,38.152-38.153c0-0.581-0.013-1.16-0.039-1.734
            C86.391,45.366,88.664,43.005,90.461,40.316L90.461,40.316z"
              />
            </g>
          </g>
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
        </svg>
      </a>
    </div>
    <p class="footer__signature">
      Diseñado con  <img src="~assets/img/heart.svg">  por Javier Pomachagua Pérez
    </p>
  </footer>
</template>

<script>
export default {
  methods: {
    scrollToElement (name) {
      const el = document.getElementsByClassName(name)[0]
      if (el) {
      // Use el.scrollIntoView() to instantly scroll to the element
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>

<style>
.footer {
  @apply p-20 pb-5
}
.footer__links {
  @apply flex flex-wrap justify-center mb-4
}
.footer__link {
  @apply mr-4 text-sm font-semibold
}
.footer__socials-networks {
  @apply flex flex-wrap justify-center mb-6
}
.footer__social-network {
  @apply w-10 h-10 bg-blue-100-jp rounded-full p-2 mr-4 flex justify-center items-center
}
.footer__signature {
  @apply text-xs text-center
}
.footer__signature img {
  @apply w-4 h-4 inline-block mx-2
}
</style>
