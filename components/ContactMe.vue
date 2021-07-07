<template>
  <section
    class="mx-auto mt-20  contactme md:relative md:overflow-hidden max-w-7xl md:mt-0 md:flex md:justify-center"
  >
    <div
      class="relative px-10  md:w-min md:border-none md:m-24 md:py-10 md:px-12 md:bg-white md:shadow-lg md:rounded-2xl"
    >
      <form
        class="flex flex-col items-center"
        method="POST"
        data-netlify="true"
      >
        <h1 class="mx-10 text-xl font-bold text-center mb-14">
          Siéntese libre de contactarse conmigo y conversar
        </h1>
        <input
          class="w-64 mb-10 text-sm border-b-2 outline-none  border-gray-200-jp md:w-96"
          type="text"
          placeholder="Su nombre"
          name="name"
          required
        >
        <input
          class="w-64 mb-10 text-sm border-b-2 outline-none  border-gray-200-jp md:w-96"
          type="email"
          placeholder="Su correo"
          name="email"
          required
        >
        <textarea
          class="w-64 text-sm border-b-2 outline-none  border-gray-200-jp md:w-96"
          rows="4"
          placeholder="Escriba su mensaje"
          name="message"
          required
        />
        <button
          type="submit"
          class="w-24 px-4 py-2 mt-6 text-white rounded-full  bg-blue-100-jp hover:bg-blue-jp"
        >
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
@screen md {
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
