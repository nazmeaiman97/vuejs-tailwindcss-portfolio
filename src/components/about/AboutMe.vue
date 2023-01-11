<script>
export default {
  setup() {
    return {
      bios: [
        {
          id: 1,
          bio: "Good day, my name is Nazme Aiman bin Yunus, 26 years old (1997), a full stack engineer who is currently a freelancer. I have a diploma in Computer Science, a Bachelor’s Degree of Information Technology majoring in Business Computing and 3 years of experiences in sofware engineering field. ",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
    <!-- About profile image -->
    <div
      class="w-full flex place-content-center sm:w-1/4 xs:w-1/4 mb-7 sm:mb-0"
    >
      <img
        src="@/assets/images/profilepicture.png"
        class="rounded-xl w-40 sm:w-52 sm:h-40 md:h-60"
        alt=""
      />
    </div>

    <!-- About details -->
    <div class="w-full sm:w-3/4 text-center">
      <div
        v-for="bio in bios"
        :key="bio.id"
        class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
      >
        <p v-html="bio.bio"></p>
      </div>
    </div>
  </div>
</template>
