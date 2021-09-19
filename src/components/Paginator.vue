<template>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="pages"
      :total-visible="8"
      color="#FF6C5E"
      @input="handlePageChange"
      circle
    ></v-pagination>
  </div>
</template>

<script>
export default {
  name: "paginator",
  props: {
    page: Number,
    pages: Number,
  },
  methods: {
    handlePageChange() {
      //console.log('evento');
      // emit recibe 2 parametros: 1 el nombre identificador 2 lo que le enviamos al padre
      this.$emit("handlePageChange", this.page);
    },
  },
};
</script>
