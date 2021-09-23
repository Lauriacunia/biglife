<template>
  <v-container>
    <v-row class="pa-0">
      <v-card-title
        v-bind:class="{
          font_size_sm: font_size_sm,
          font_size_md: font_size_md,
        }"
        class="font-weight-light pa-0 mb-1 "
        style="line-height: normal;"
        >{{ activity.description }}</v-card-title
      >
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Body1",
  props: {
    activity: {
      type: Object,
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
    console.log("created body1");
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
  font-size: 14px !important;
}
.font_size_md {
  font-size: 18px !important;
}
</style>
