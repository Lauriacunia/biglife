<template>
  <v-carousel>
    <v-carousel-item
      v-for="(img, i) in images"
      :key="i"
      :src="img"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
    },
  },
};
</script>
