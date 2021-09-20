<template>
  <div>
    {{ activity.description }}
  </div>
</template>

<script>
export default {
  name: "DescriptionActivityCard",
  props: ["activity"],
};
</script>
