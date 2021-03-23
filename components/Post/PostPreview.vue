<template>
  <div
    class="flex h-full bg-white rounded-md shadow-lg"
  >
    <div>
      <div class="relative w-full overflow-hidden rounded-t-xl">
        <img
          class="object-cover w-full h-52"
          :src="require(`~/assets/img/posts/${post.image}`)"
          alt=""
        >
      </div>
      <div class="px-4 py-4 overflow-hidden bg-white rounded-b-xl">
        <small class="text-xs italic text-gray-400">{{ post.date }}</small>
        <span class="block text-lg font-bold tracking-wide text-gray-800">
          {{ post.title }}</span>
        <span
          class="block text-gray-500 text-md"
        >{{ post.description }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>
