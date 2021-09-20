<template>
  <v-app v-if="Object.entries(activity).length != 0">
    <v-main>
      <v-card-title>Reglas</v-card-title>
      <v-card-text>{{ activity.small_print }}</v-card-text>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "ActivityContentRules",
  props: ["activity"],
};
</script>
