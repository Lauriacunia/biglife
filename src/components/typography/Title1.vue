<template>
  <v-card-title
    class="font-weight-bold pa-0 mb-1"
    v-bind:class="{ font_size_sm: font_size_sm, font_size_md: font_size_md }"
    >{{ text }}
  </v-card-title>
</template>

<script>
export default {
  name: "Title1",
  props: {
    text: {
      type: String,
    },
    font_size: {
      type: Number,
    },
  },
  data() {
    return {
      font_size_sm: false,
      font_size_md: false,
    };
  },
  created() {
    console.log("created title1");
    console.log("font_size", this.font_size);
    this.setFontSize();
  },
  methods: {
    setFontSize() {
      if (this.font_size === 1) {
        this.font_size_sm = true;
        this.font_size_md = false;
      } else if (this.font_size === 2) {
        this.font_size_sm = false;
        this.font_size_md = true;
      } else {
        this.font_size_sm = true;
        this.font_size_md = false;
      }
    },
  },
};
</script>

<style scoped>
.font_size_sm {
  font-size: 18px !important;
}
.font_size_md {
  font-size: 30px !important;
}
</style>
