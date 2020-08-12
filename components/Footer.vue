<template>
  <footer class="footer">
    <div class="footer__links">
      <div class="footer__link">
        Inicio
      </div>
      <div class="footer__link">
        Sobre Mí
      </div>
      <div class="footer__link">
        Portafolio
      </div>
      <div class="footer__link">
        Blog
      </div>
      <div class="footer__link">
        Contacto
      </div>
    </div>
    <div class="footer__socials-networks">
      <a class="footer__social-network">
        <img src="~assets/img/linkedin.svg">
      </a>
      <a class="footer__social-network">
        <img src="~assets/img/instagram.svg">
      </a>
      <a class="footer__social-network">
        <img src="~assets/img/twitter.svg">
      </a>
    </div>
    <p class="footer__signature">
      Diseñado con  <img src="~assets/img/heart.svg">  por Javier Pomachagua Pérez
    </p>
  </footer>
</template>

<script>
export default {

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
