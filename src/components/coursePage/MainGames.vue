<template>
  <v-content class="container">
    <v-layout column>
      <h2 class="description">LISTA GIER</h2>
      <stepper></stepper>
      <div class="row">
        <div class="col-md-4">
          <div class="cube">
            <router-link to="/course/game/1/category" exact>
              <i class="fa fa-pagelines" aria-hidden="true"></i>Fiszki
            </router-link>
          </div>
        </div>
        <div class="col-md-4">
          <div class="cube">
            <router-link to="/course/game/2/category" exact>
              <i class="fa fa-briefcase" aria-hidden="true"></i>Rozsypanka
            </router-link>
          </div>
        </div>
        <div class="col-md-4">
          <div class="cube">
            <router-link to="/course/game/3/category" exact>
              <i class="fa fa-building" aria-hidden="true"></i>Uzupełnianka
            </router-link>
          </div>
        </div>
        <div class="col-md-4">
          <div class="cube">
            <router-link to="/course/game/4/category" exact>
              <i class="fa fa-question" aria-hidden="true"></i>Quizy
            </router-link>
          </div>
        </div>
        <div class="col-md-4">
          <div class="cube">
            <router-link to="/course/game/5/category" exact>
              <i class="fa fa-hourglass-end" aria-hidden="true"></i>Wisielec
            </router-link>
          </div>
        </div>
        <div class="col-md-4">
          <div class="cube">
            <router-link to="/course/game/6/category" exact>
              <i class="fa fa-address-book" aria-hidden="true"></i>Słownik
            </router-link>
          </div>
        </div>
      </div>
    </v-layout>
  </v-content>
</template>

<script>
import Stepper from "./Stepper.vue";

export default {
  components: {
    stepper: Stepper
  },
  data() {
    return {};
  }
};
</script>
