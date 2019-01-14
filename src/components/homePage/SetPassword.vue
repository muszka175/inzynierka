<template>
  <main class="login-section">
    <app-header></app-header>
    <v-layout class="ma-5 login">
    <v-flex xs12 sm6 offset-sm3 class="card-flex">
      <v-card class="mt-5 card">
        <v-card-title primary-title>
          <h3 class="headline mb-0 mt-2 text-uppercase">Login</h3>
        </v-card-title>
        <v-card-text>
          <v-form class="px3 form" ref="form" method="post" action="#" v-if="!submitted">
       <v-text-field
                :prepend-icon="show1 ? 'visibility_off' : 'visibility'"
                :rules="passwordRules"
                :type="show1 ? 'text' : 'password'"
                name="password"
                class="formField"
                label="Password"
                v-model="newUser.password"
                hint="At least 5 characters"
                counter
                @click:prepend="show1 = !show1"
              >
              </v-text-field>
               <v-text-field
                :prepend-icon="show2 ? 'visibility_off' : 'visibility'"
                :rules="passwordRules"
                :type="show2 ? 'text' : 'password'"
                name="password"
                class="formField"
                label="Repeat password"
                v-model="confirmPassword"
                hint="At least 5 characters"
                counter
                @click:prepend="show2 = !show2"
              >
               </v-text-field>
              <p class="text-danger" v-if="newUser.password !== confirmPassword">Hasła nie są zgodne</p>
          </v-form>
        </v-card-text>

        <v-card-actions class="mb-4">
           <v-btn flat class="primary mx-0 mt-3" @click="setPassword" type="button" name="sent">Ustaw</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  </main>
</template>
<script>
import HomePageHeader from "./HomePageHeader.vue";
import Vue from "vue";
import authService from "../../services/authService";

export default {
  components: {
    "app-header": HomePageHeader
  },
  data() {
    return {
      newPassword: {
        password: "",
        confirmPassword: ""
      },
      show1: false,
      show2: false,
      passwordRules: [
        value => !!value || "Required.",
        v => v.length >= 5 || "Min 5 characters"
      ]
    };
  },
  methods: {
    setPassword() {
      if (this.$refs.form.validate()) {
        const success = () => {
          this.isError = false;
          this.$router.push("/login");
          location.reload();
        };
        const error = () => {
          this.isError = true;
        };
        authService.login(this.login, success, error);
      }
    }
  }
};
</script>
