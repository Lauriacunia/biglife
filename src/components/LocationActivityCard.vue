<template>
  <div class="pa-0">
    {{ activity.locations[0].province }}
  </div>
</template>

<script>
export default {
  name: "DescriptionActivityCard",
  props: ["activity"],
};
</script>
