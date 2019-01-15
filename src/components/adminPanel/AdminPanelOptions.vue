<template>
  <v-content class="container">
    <v-layout column>
      <div class="admin-options">
        <h1>Zarządzanie</h1>
        <section class="text-center cube-list row">
          <div class="col-md-6 cube-container">
            <div class="cube">
              <router-link to="/admin-panel/users-option" exact>
                <i class="fa fa-users" aria-hidden="true"></i>Użytkownicy
              </router-link>
            </div>
          </div>
          <div class="col-md-6 cube-container">
            <div class="cube">
              <router-link to="/admin-panel/texts-option" exact>
                <i class="fa fa-comment-o" aria-hidden="true"></i>Teksty
              </router-link>
            </div>
          </div>
          <div class="col-md-6 cube-container">
            <div class="cube">
              <router-link to="/admin-panel/facebook-option" exact>
                <i class="fa fa-facebook-official" aria-hidden="true"></i>Facebook
              </router-link>
            </div>
          </div>
          <div class="col-md-6 cube-container">
            <div class="cube">
              <router-link to="/admin-panel/payment-option" exact>
                <i class="fa fa-money" aria-hidden="true"></i>Mikropłatności
              </router-link>
            </div>
          </div>
        </section>
      </div>
    </v-layout>
  </v-content>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
