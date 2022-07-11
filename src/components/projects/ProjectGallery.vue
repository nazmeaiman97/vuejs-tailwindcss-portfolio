<script>
export default {
  props: ["projectImages"],
};
</script>

<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12 place-items-center"
    style="text-align: -webkit-center !important"
  >
    <div
      class="mb-10 sm:mb-0"
      style="text-align: -webkit-center"
      v-for="projectImage in projectImages"
      :key="projectImage.id"
    >
      <div class="center" style="text-align: -webkit-center">
        <img
          :src="projectImage.img"
          class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
          alt="{{ projectImage.title }}"
        />
      </div>
    </div>
  </div>
</template>
