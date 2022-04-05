<template>
  <div class="flex h-full bg-white rounded-md shadow-lg hover:shadow-2xl">
    <div class="w-full">
      <div class="relative w-full overflow-hidden rounded-t-xl">
        <nuxt-img
          class="object-cover w-full h-52"
          :src="project.main_image"
          :alt="project.title"
        />
      </div>
      <div class="px-4 py-4 overflow-hidden bg-white rounded-b-xl">
        <span class="block text-lg font-bold tracking-wide text-gray-800">
          {{ project.title }}</span
        >
        <span class="block text-gray-500 text-md"
          >{{ project.description }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>

<style></style>
