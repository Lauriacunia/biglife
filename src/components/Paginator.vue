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
    <Subtitle1
      class="mt-2"
      v-bind:text="text"
      style="font-size:16px; font-weight:500; color:#BDBDBD; justify-content:end;"
    />
  </div>
</template>

<script>
import Subtitle1 from "@/components/typography/Subtitle1.vue";

export default {
  name: "paginator",
  props: {
    page: Number,
    pages: Number,
  },
  components: {
    Subtitle1,
  },
  data() {
    return {
      text: "",
    };
  },
  created() {
    // Se podria hacer un fetch de todas las actividades y reemplazar el total de resultados
    // pero no lo considere necesario para este ejercicio
    this.text = `${this.page}-${this.pages} de 20.745 resultados`;
  },
  methods: {
    handlePageChange() {
      this.$emit("handlePageChange", this.page);
    },
  },
};
</script>
