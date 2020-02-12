<template>
  <main class="login-section">
    <app-header></app-header>
    <v-layout class="ma-5 login">
      <v-flex xs12 sm6 offset-sm3 class="card-flex">
        <v-card class="mt-5 card">
          <v-card-title primary-title>
            <h3 class="headline mb-0 mt-2 text-uppercase">Zaloguj się</h3>
          </v-card-title>
          <v-card-text>
            <v-form
              class="px3 form"
              ref="form"
              method="post"
              action="#"
              v-if="!submitted"
            >
              <v-text-field
                :rules="emailRules"
                class="formField"
                v-model="login.username"
                prepend-icon="person"
                label="Nazwa użytkownika"
                hint="Twoja nazwa użytkownika."
              >
              </v-text-field>
              <v-text-field
                :prepend-icon="show1 ? 'visibility_off' : 'visibility'"
                :rules="passwordRules"
                :type="show1 ? 'text' : 'password'"
                name="password"
                class="formField"
                label="Hasło"
                v-model="login.password"
                hint="Minimum 5 znaków."
                counter
                @click:prepend="show1 = !show1"
              >
              </v-text-field>
              <p class="text-danger" v-if="isError === true">
                Podano zły login lub hasło
              </p>
              <div>
                <v-checkbox
                  v-model="login.remember"
                  label="Nie wylogowywuj mnie"
                  color="#009688"
                ></v-checkbox>
              </div>
              <div class="pt-3">
                <router-link to="/sendEmail" exact
                  ><p class="teal--text darken-1">
                    Nie pamiętasz hasła?
                  </p></router-link
                >
              </div>
            </v-form>
          </v-card-text>

          <v-card-actions class="mb-4">
            <v-btn
              flat
              class="primary mx-0 mt-3"
              @click="signin"
              type="button"
              name="sent"
              >Zaloguj</v-btn
            >
          </v-card-actions>
          <div v-if="submitted" class="after-login">
            <h3 class="headline mb-0 mt-2">Zalogowano!</h3>
            <span>Aby przejść do kursu kliknij przycik poniżej.</span>
            <span>Życzymy owocnej nauki, </span>
            <span class="last-span">zespół JapanKitty</span>
            <router-link to="/course" exact
              ><input
                type="button"
                value="Przejdź do kursu"
                class="after-login-button"
            /></router-link>
          </div>
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
      login: {
        username: "",
        password: "",
        remember: false
      },
      submitted: false,
      isError: false,
      show1: false,
      passwordRules: [
        value => !!value || "Wymagane.",
        v => v.length >= 5 || "Wymagane min. 5 znaków."
      ],
      usernameRules: [v => !!v || "Wymagane."]
    };
  },
  beforeCreate() {
    if (authService.getToken() !== null) this.$router.push("/course");
  },
  methods: {
    signin() {
      if (this.$refs.form.validate()) {
        const success = () => {
          this.isError = false;
          this.$router.push("/course");
          // location.reload();
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
