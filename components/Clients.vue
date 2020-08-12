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
          <img src="~assets/img/client.jpg">
        </figure>
        <div class="client__description">
          <img src="~assets/img/quote.svg">
          <p>“Lean startup metrics venture innovator assets angel investor learning curve incubator branding advisor termsheet. IPad ecosystem conversion android advisor. Incubator vesting period metrics crowdfunding backing interaction design business model canvas strategy”</p>
          <h2>Silvia Natalia</h2>
          <h3>Owner Tanacon</h3>
          <div class="clients__steps">
            <div class="clients__step" />
            <div class="clients__step" />
            <div class="clients__step" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
.clients {
  @apply flex flex-col items-center mt-20
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
  @apply mx-auto my-0 rounded-full w-32 h-32 object-cover shadow-lg
}
.client__description {
  @apply mx-6 flex flex-col items-center
}
.client__description img {
  @apply hidden
}
.client__description p {
  @apply text-gray-jp text-sm mb-4 text-center
}
.client__description h2 {
  @apply text-base font-bold
}
.client__description h3 {
  @apply text-base mb-4
}
.clients__steps {
  @apply flex flex-row
}
.clients__step {
  @apply w-6 h-2 bg-gray-100-jp mr-2
}
@screen md {
  .clients {
    @apply mx-40 my-32
  }
  .clients__title {
    @apply text-5xl
  }
  .clients__description {
    @apply w-72 text-center
  }
  .clients__list {
    @apply mt-10
  }
  .client {
    @apply flex flex-row items-center
  }
  .client__image {
    @apply w-1/2
  }
  .client__description {
    @apply w-1/2 items-start
  }
  .client__description img {
    @apply block mb-2
  }
  .client__description p {
    @apply text-left text-lg
  }
  .client__description h2 {
    @apply text-xl
  }
  .client__description h3 {
    @apply text-xl
  }
  .client__image {
    @apply mx-10 my-8
  }
  .client__image img {
    @apply w-72 h-84 rounded-lg float-right
  }
}
</style>
