<script>
import AboutClientSingle from "./AboutClientSingle.vue";

export default {
  components: {
    AboutClientSingle,
  },
  data: () => {
    return {
      clientsHeading:
        "Some of the frameworks/libraries I have experienced with",
      clients: [
        {
          id: 1,
          title: "Laravel",
          img: "https://laravel.com/img/logotype.min.svg",
        },
        {
          id: 2,
          title: "JQuery",
          img: "https://upload.wikimedia.org/wikipedia/commons/f/fd/JQuery-Logo.svg",
        },
        {
          id: 3,
          title: "Vue js",
          img: "https://seeklogo.com/images/V/vuejs-logo-17D586B587-seeklogo.com.png",
        },
        {
          id: 4,
          title: "React Native",
          img: "https://seeklogo.com/images/R/react-native-logo-221C671C70-seeklogo.com.png",
        },
        {
          id: 5,
          title: "Tailwind",
          img: "https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png",
        },
        {
          id: 6,
          title: "Vuetify",
          img: "https://iconape.com/wp-content/png_logo_vector/vuetify-logo.png",
        },
        {
          id: 7,
          title: "Quasar",
          img: "https://camo.githubusercontent.com/44def50d1ff358d19bafe61e56fe9ff486fdf9d3b3a41a90417183a6ff4b097e/68747470733a2f2f63646e2e7261776769742e636f6d2f7175617361726672616d65776f726b2f7175617361722d6172742f38363363313462642f646973742f7376672f7175617361722d6c6f676f2d66756c6c2d696e6c696e652e737667",
        },
        {
          id: 8,
          title: "Capacitor",
          img: "https://ionic.zone/capacitor/images/capacitor-logo.jpg",
        },
        {
          id: 9,
          title: "Pinia",
          img: "https://camo.githubusercontent.com/6a89c40d54fde3f7c40b827e46081e4057633764c07bc9bca4ed513689eb2a8e/68747470733a2f2f70696e69612e7675656a732e6f72672f6c6f676f2e737667",
        },
        {
          id: 10,
          title: "Element Plus",
          img: "https://avatars.githubusercontent.com/u/68583457?s=200&v=4",
        },
        {
          id: 11,
          title: "Nuxt",
          img: "https://nuxtjs.org/design-kit/colored-logo.svg",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="mt-10 sm:mt-20">
    <p
      class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
    >
      {{ clientsHeading }}
    </p>
    <div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
      <AboutClientSingle
        v-for="client in clients"
        :key="client.id"
        :client="client"
      />
    </div>
  </div>
</template>
