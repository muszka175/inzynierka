<template>
  <div id="empty">
    <v-container class="endGame-component">
      <v-layout>
        <v-flex class="endGame-container">
          <v-icon class="endGameIcon">sentiment_very_satisfied</v-icon>
          <h2 class="empty-header">Dotarłeś do końca wybranej kategorii.</h2>
          <h3 class="empty-header">Kliknij guzik poniżej, aby wrócić do wyboru kategorii</h3>
          <h4
            class="empty-header"
          >albo wróc do strony głównej kursu, wybierając z menu bocznego opcję "Strona kursu".</h4>
          <router-link v-bind:to="'/course/game/' + game + '/category/'">
            <v-btn flat class="secondary mx-0 mt-3" type="button" name="sent">Kategorie</v-btn>
          </router-link>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      game: 0
    };
  },
  created() {
    this.game = this.$route.params.gameId;
  }
};
</script>