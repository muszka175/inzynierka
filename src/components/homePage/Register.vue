<template>
  <main class="register-section">
    <app-header></app-header>
    <v-layout class="ma-5 login">
      <v-flex xs12 sm6 offset-sm3 class="card-flex">
        <v-card class="mb-5 card">
          <v-card-title primary-title>
            <h3 class="headline mb-0 mt-2 text-uppercase">Zarejestruj się</h3>
          </v-card-title>
          <v-card-text>
            <v-form class="px3" ref="form" method="post" action="#" v-if="!submitted">
              <v-text-field
                :rules="inputRules"
                v-model="newUser.name"
                label="Imię"
                prepend-icon="person"
                counter
              ></v-text-field>
              <v-text-field
                :rules="inputRules"
                v-model="newUser.surname"
                label="Nazwisko"
                prepend-icon="person_pin"
                counter
              ></v-text-field>
              <v-text-field
                :rules="emailRules"
                class="formField"
                v-model="newUser.email"
                prepend-icon="email"
                label="E-mail"
                hint="Twój adres email"
              >
              </v-text-field>
              <v-text-field
                :prepend-icon="show1 ? 'visibility_off' : 'visibility'"
                :rules="passwordRules"
                :type="show1 ? 'text' : 'password'"
                name="password"
                class="formField"
                label="Hasło"
                v-model="newUser.password"
                hint="Minimum 5 znaków"
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
                label="Powtórz hasło"
                v-model="confirmPassword"
                hint="Minimum 5 znaków."
                counter
                @click:prepend="show2 = !show2"
              >
              </v-text-field>
              <p class="text-danger" v-if="newUser.password !== confirmPassword">Hasła nie są zgodne</p>
              <v-radio-group v-model="newUser.sex" :mandatory="false" row prepend-icon="wc" :rules="radioRules">
                <v-radio label="Kobieta" value="Woman"></v-radio>
                <v-radio label="Mężczyzna" value="Man-2"></v-radio>
              </v-radio-group>
               <v-menu
                ref="menu"
                :close-on-content-click="false"
                v-model="menu"
                :nudge-right="40"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
              >
                <v-text-field
                  slot="activator"
                  v-model="newUser.birthday"
                  label="Data urodzin"
                  prepend-icon="event"
                  readonly
                ></v-text-field>
                <v-date-picker
                  ref="picker"
                  v-model="newUser.birthday"
                  :max="new Date().toISOString().substr(0, 10)"
                  min="1950-01-01"
                  @change="save"
                ></v-date-picker>
              </v-menu>
            <div>
              <v-checkbox v-model="newUser.remember" label="Nie wylogowywuj mnie" color="#009688"></v-checkbox>
            </div>
              <div v-if="isError">
                <div class="error--text" v-for="(error,i) in errors" :key="i">
                  <div v-for="(err,j) in error" :key="j">{{ err }}</div>
                </div>
              </div>
              <div>
                <v-btn flat class="primary mx-0 mt-3" @click="register">Zarejestruj</v-btn>
              </div>
            </v-form>
          </v-card-text>
          
          <div v-if="submitted" class="after-register">
            <h3 class="after-register-header">Dziękujemy za poprawne zarejestrowanie się!</h3>
            <span>Aby przejść do kursu kliknij przycik poniżej.</span>
            <span>Życzymy owocnej nauki, </span>
            <span class="last-span">zespół JapanKitty</span>
            <router-link to="/course" exact><input type="button" value="Przejdź do kursu" class="after-register-button"/></router-link>
        </div>
        </v-card>
      </v-flex>
    </v-layout>
  </main>
</template>

<script>
import format from "date-fns/format";
import HomePageHeader from "./HomePageHeader.vue";
import authService from "../../services/authService";

export default {
  components: {
    "app-header": HomePageHeader
  },

  data() {
    return {
      newUser: {
        name: "",
        surname: "",
        email: "",
        password: "",
        sex: "",
        birthday: null,
        remember: false
      },
      submitted: false,
      menu: false,
      confirmPassword: "",
      isError: false,
      show1: false,
      show2: false,
      radioRules: [v => !!v || "Wybierz płeć"],
      inputRules: [
        value => !!value || "Wymagane..",
        v => v && v.length >= 3 || "Wymagane min. 3 znaki."
      ],
      passwordRules: [
        value => !!value || "Wymagane.",
        v => v && v.length >= 5 || "Wymagane min. 5 znaków."
      ],
      emailRules: [
        v => !!v || "Wymagane.",
        v => /.+@.+/.test(v) || "Niepoprawny adres email."
      ]
    };
  },
  watch: {
    menu(val) {
      val && this.$nextTick(() => (this.$refs.picker.activePicker = "YEAR"));
    }
  },
  methods: {
    save(birthday) {
      this.$refs.menu.save(birthday);
    },
    register() {
      if (this.$refs.form.validate()) {
        const success = () => {
          this.submitted = true;
        };
        const error = response => {
          this.isError = true;
          this.errors = response.body.error;
        };
        authService.register(this.newUser, success, error);
      }
    }
  }
};
</script>
