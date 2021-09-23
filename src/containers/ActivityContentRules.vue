<template>
  <v-container v-if="Object.entries(activity).length != 0">
    <v-row>
      <v-col>
        <v-card-title style="font-size:22px; font-weight:700"
          >Reglas:</v-card-title
        >
        <v-card-text style="font-size:18px; font-weight:300; width:564px;">{{
          activity.small_print
        }}</v-card-text>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ActivityContentRules",
  props: ["activity"],
};
</script>
