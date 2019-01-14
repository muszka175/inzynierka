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
              :rules="emailRules"
              class="formField"
              v-model="email"
              prepend-icon="person"
              label="E-mail"
              hint="Your e-mail address"
            >
            </v-text-field>
          </v-form>
        </v-card-text>

        <v-card-actions class="mb-4">
           <v-btn flat class="primary mx-0 mt-3" @click="sendEmail" type="button" name="sent">Wyślij</v-btn>
        </v-card-actions>>
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
      email: "",
      submitted: false,
      isError: false,
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  methods: {
    sendEmail() {
      //   if (this.$refs.form.validate()) {
      //     const success = () => {
      //       this.isError = false;
      //       this.$router.push("/course");
      //       location.reload();
      //     };
      //     const error = () => {
      //       this.isError = true;
      //     };
      //     authService.login(this.login, success, error);
      //   }
    }
  }
};
</script>
