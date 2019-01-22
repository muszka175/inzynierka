<template>
  <v-content class="container">
    <div class="category-list" v-if="!loading">
      <div>
        <h2>Wybierz kategorie, z której chcesz odpowiadać</h2>
      </div>
      <div class="row">
        <div class="container-cube col-md-4" v-for="category in this.categories" :key="category.id">
          <div class="cube">
            <router-link
              v-bind:to="'/course/game/' + gameId + '/category/' + category.id"
              exact
            >{{category.name}}</router-link>
            <div class="subcube" v-if="gameId != 6">
              <v-progress-linear
                color="secondary"
                v-if="progress[gameId] && progress[gameId][category.id]"
                v-model="progress[gameId][category.id]"
              ></v-progress-linear>
              <v-progress-linear color="secondary" v-else v-model="zero"></v-progress-linear>
              <div v-if="progress[gameId] && progress[gameId][category.id]" class="percent">{{progress[gameId][category.id]}}%</div>
              <div v-else class="percent"> 0% </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-content>
</template>

<script>
import authService from "../../services/authService";

export default {
  data() {
    return {
      categories: [],
      link: "",
      gameId: this.$route.params.gameId,
      progres: [],
      zero: 0,
      loading: true
    };
  },
  beforeCreate() {
    this.$http.get("courses/vocabulary").then(response => {
      this.categories = response.body;
      this.$http
        .get("progress", {
          headers: {
            Authorization: `Bearer ${authService.getToken()}`
          }
        })
        .then(response => {
          this.progress = {};
          response.body.forEach(row => {
            if (!this.progress.hasOwnProperty(row.game)) {
              this.progress[row.game] = {};
            }
            if (parseInt(row.score) === 0 || parseInt(row.max_points) === 0 || parseInt(row.score) < 0 ) {
              this.progress[row.game][row.category] = 0;
            } else {
              this.progress[row.game][row.category] = Math.round(
                (row.score / row.max_points) * 100
              );
            }
          });
          this.loading = false;
        });
    });
  }
};
</script>
