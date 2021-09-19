<template>
  <div>
    <h1>Consultar Datos</h1>
    <v-btn depressed v-on:click="fetch">
      Consultar
    </v-btn>

    <div>
      <ActivityCard
        v-for="character of characters"
        v-bind:key="character.id"
        v-bind:character="character"
      />
    </div>

    <Paginator
      :page="page"
      :pages="pages"
      @handlePageChange="handlePageChange"
    />
  </div>
</template>

<script>
import axios from "axios";
import ActivityCard from "../containers/ActivityCard.vue";
import Paginator from "../components/Paginator.vue";

export default {
  name: "App",
  components: {
    ActivityCard,
    Paginator,
  },
  data() {
    return {
      characters: [],
      page: 1,
      pages: 1,
    };
  },
  created() {
    this.fetch();
  },

  methods: {
    fetch() {
      const params = {
        page: this.page,
      };
      console.log("fetch");
      let result = axios.get("https://rickandmortyapi.com/api/character", {
        params,
      });
      result.then((response) => {
        this.characters = response.data.results;
        this.pages = response.data.info.pages;
        console.log(response.data);
      });
    },

    handlePageChange(value) {
      this.page = value;
      this.fetch();
    },
  },
};
</script>
