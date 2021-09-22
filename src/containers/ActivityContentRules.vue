<template>
  <v-container v-if="Object.entries(activity).length != 0">
    <v-row>
      <v-card-title>Reglas:</v-card-title>
      <v-card-text>{{ activity.small_print }}</v-card-text>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ActivityContentRules",
  props: ["activity"],
};
</script>
