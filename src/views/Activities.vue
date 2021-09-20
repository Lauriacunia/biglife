<template>
  <v-app>
    <v-main>
      <v-container grid-list-sm>
        <v-layout row wrap>
          <ActivityCard
            v-for="activity of activities"
            v-bind:key="activity.id"
            v-bind:activity="activity"
            @handleClick="handleClick"
          />
        </v-layout>

        <Paginator
          :page="page"
          :pages="pages"
          @handlePageChange="handlePageChange"
        />
      </v-container>
    </v-main>
  </v-app>
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
      activities: [],
      page: 1,
      pages: 213,
    };
  },
  created() {
    this.fetch();
  },

  methods: {
    fetch() {
      const BASE_URL = "https://json-biglifeapp.herokuapp.com";
      const path = `/activity`;
      const url = `${BASE_URL}${path}`;
      const params = {
        _page: this.page,
        _limit: 9,
      };
      console.log("fetch");

      let result = axios.get(url, { params });
      result.then((response) => {
        this.activities = response.data;
        console.log(response.data);
      });
      this.scrollToTop();
    },

    handlePageChange(value) {
      this.page = value;
      this.fetch();
    },

    handleClick(activity) {
      this.$router.push({
        path: `/actividades/${activity.id}`,
      });
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
