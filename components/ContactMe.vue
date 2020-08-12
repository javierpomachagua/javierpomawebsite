<template>
  <section class="contactme">
    <div class="contactme__form">
      <form action="#">
        <h1 class="contactme__title">
          Siéntese libre de contactarse conmigo y conversar
        </h1>
        <input class="contactme__name" type="text" placeholder="Su nombre" required>
        <input class="contactme__email" type="text" placeholder="Su correo" required>
        <textarea class="contactme__message" rows="4" placeholder="Escriba su mensaje" required />
        <button type="submit" class="contactme__cta">
          Enviar
        </button>
      </form>
    </div>
    <div class="bg-square-3" />
    <div class="bg-circle-3" />
  </section>
</template>

<script>
export default {

}
</script>

<style>
.contactme__form form {
  @apply flex flex-col items-center
}
.contactme__title {
  @apply mx-10 text-center mb-10 text-base font-bold
}
.contactme__name {
  @apply w-96 border-b-2 border-gray-200-jp mb-6 text-sm outline-none
}
.contactme__email {
  @apply w-96 border-b-2 border-gray-200-jp mb-6 text-sm outline-none
}
.contactme__message {
  @apply w-96 border-b-2 border-gray-200-jp mb-4 text-sm outline-none
}
.contactme__cta {
  @apply w-24 mt-6 bg-blue-100-jp text-white rounded-full px-4 py-2
}
@screen md {
  .contactme {
    @apply relative overflow-hidden;
  }
  .contactme__form {
    @apply border-none m-24 py-10 px-12 bg-white mx-auto shadow-lg;
    border-radius: 2rem;
    width: 600px;
  }
  .bg-square-3 {
    @apply absolute bg-blue-jp transform rotate-45;
    border-radius: 4rem;
    z-index: -10;
    width: 40rem;
    height: 40rem;
    right: -300px;
    top: -50px
  }
  .bg-circle-3 {
    @apply absolute bg-blue-jp transform rotate-45 rounded-full;
    z-index: -10;
    width: 40rem;
    height: 40rem;
    left: -200px;
    top: -300px
  }
}
</style>
