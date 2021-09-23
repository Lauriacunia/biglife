<template>
  <div>
    <div class="line_sm"></div>
    <div class="line_md"></div>
  </div>
</template>

<script>
export default {
  name: "LineDecorator",
  created() {
    console.log("Line created");
  },
};
</script>

<style scoped>
.line_sm {
  width: 157px;
  height: 3px;
  background-color: #ff6c5f;
}
.line_md {
  width: 504px;
  height: 1px;
  background-color: #eaeaea;
}
</style>
