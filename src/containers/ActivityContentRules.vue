<template>
  <v-container v-if="Object.entries(activity).length != 0">
    <v-row>
      <v-card-title class="mb-5" style="font-size:22px; font-weight:700">
        <span style="max-height:30px; max-width:30px;" class="mr-3">
          <v-img
            max-height="24"
            max-width="18.44"
            justify="center"
            aling="center"
            src="https://user-images.githubusercontent.com/63796774/134568896-d6a37f8a-e766-45d5-9052-08f8861367e6.png"
          ></v-img
        ></span>
        Reglas:
      </v-card-title>
    </v-row>
    <v-card-text
      class="pa-0"
      style="font-size:18px; font-weight:300; width:564px;"
      >{{ activity.small_print }}</v-card-text
    >
  </v-container>
</template>

<script>
export default {
  name: "ActivityContentRules",
  props: ["activity"],
};
</script>
