<template>
  <div class="my-4 text-subtitle-1 font-weight-regular">
    {{ activity.locations[0].province }}
  </div>
</template>

<script>
export default {
  name: "DescriptionActivityCard",
  props: ["activity"],
};
</script>
