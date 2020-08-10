<template>
  <section class="clients">
    <p class="clients__intro">
      Clients
    </p>
    <h1 class="clients__title">
      Algunos notables clientes
    </h1>
    <p class="clients__description">
      Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
    </p>
    <div class="clients__list">
      <div class="client">
        <figure class="client__image">
          <img src="https://via.placeholder.com/150">
        </figure>
        <div class="client__description">
          <!-- <img src="~assets/img/quote.svg"> -->
          <p>“Lean startup metrics venture innovator assets angel investor learning curve incubator branding advisor termsheet. IPad ecosystem conversion android advisor. Incubator vesting period metrics crowdfunding backing interaction design business model canvas strategy”</p>
          <h2>Silvia Natalia</h2>
          <h3>Owner Tanacon</h3>
        </div>
      </div>
    </div>
    <div class="clients__steps">
      <div class="clients__step" />
      <div class="clients__step" />
      <div class="clients__step" />
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
.clients {
  @apply flex flex-col items-center
}
.clients__intro {
  @apply text-lg text-black-jp
}
.clients__title {
  @apply text-3xl font-bold text-black-jp mx-2 text-center
}
.clients__description {
  @apply text-sm mt-4 text-gray-jp text-justify mx-12
}
.clients__list {
  @apply p-10
}
.client__image {
  @apply mb-4
}
.client__image img {
  @apply mx-auto my-0 rounded-full
}
.client__description {
  @apply mx-6 flex flex-col items-center
}
.client__description p {
  @apply text-gray-jp text-sm mb-4 text-center
}
.client__description h2 {
  @apply text-base font-bold
}
.client__description h3 {
  @apply text-base
}
.clients__steps {
  @apply flex flex-row
}
.clients__step {
  @apply w-6 h-2 bg-gray-100-jp mr-2
}
</style>
