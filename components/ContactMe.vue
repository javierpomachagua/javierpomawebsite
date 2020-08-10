<template>
  <section class="contactme">
    <h1 class="contactme__title">
      Siéntese libre de contactarse conmigo y conversar
    </h1>
    <input class="contactme__name" type="text" placeholder="Su nombre">
    <input class="contactme__email" type="text" placeholder="Su correo">
    <textarea class="contactme__message" rows="4" placeholder="Escriba su mensaje" />
    <button class="contactme__cta">
      Enviar
    </button>
  </section>
</template>

<script>
export default {

}
</script>

<style>
.contactme {
  @apply flex flex-col items-center mb-10
}
.contactme__title {
  @apply mx-10 text-center mb-10 text-base font-bold
}
.contactme__name {
  @apply w-64 border-b-2 border-gray-200-jp mb-6 text-sm text-gray-100-jp outline-none
}
.contactme__email {
  @apply w-64 border-b-2 border-gray-200-jp mb-6 text-sm text-gray-100-jp outline-none
}
.contactme__message {
  @apply w-64 border-b-2 border-gray-200-jp mb-4 text-sm text-gray-100-jp outline-none
}
.contactme__cta {
  @apply w-24 mt-6 bg-blue-100-jp text-white rounded-full px-4 py-2
}
</style>
