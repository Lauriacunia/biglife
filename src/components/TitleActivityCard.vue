<template>
  <v-card-title class="font-weight-bold pa-0 mb-1" style="font-size:18px;">
    {{ title }}
  </v-card-title>
</template>

<script>
export default {
  name: "TitleActivityCard",
  props: ["title"],
};
</script>
