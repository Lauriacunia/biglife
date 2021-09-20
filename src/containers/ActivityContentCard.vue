<template>
  <h1>Actividad id:</h1>
</template>

<script>
export default {
  name: "ActivityContentCard",
  props: ["activity"],

  created() {
    this.activity_data_json = JSON.parse(this.activity.activity);
    console.log(this.activity_data_json);
  },
};
</script>
