<template>
  <v-app class="pa-0" v-if="Object.entries(activity).length != 0">
    <v-card-title class="pa-0 mb-8" style="font-size:24px; font-weight:bold;"
      >Otras actividades similares:</v-card-title
    >

    <v-main grid-list-sm>
      <v-layout class="pa-0" row wrap>
        <ActivityCard
          v-for="activity of activities"
          v-bind:key="activity.id"
          v-bind:activity="activity"
          :cardSize="2"
          @handleClick="handleClick"
          style="max-whidth: 271px;"
        />
      </v-layout>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
import ActivityCard from "./ActivityCard.vue";

export default {
  name: "ActivityContentOthers",
  props: ["activity"],

  components: {
    ActivityCard,
  },
  data() {
    return {
      activities: [],
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
        _page: 1,
        _limit: 4,
      };
      console.log("fetch");

      let result = axios.get(url, { params });
      result.then((response) => {
        this.activities = response.data;
        console.log(response.data);
      });
    },
    handleClick(item) {
      this.$router.push({
        path: `/actividades/${item.id}`,
      });
      this.scrollToTop();
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
