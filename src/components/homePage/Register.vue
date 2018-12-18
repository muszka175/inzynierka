<template>
  <main class="register-section">
    <app-header></app-header>
              <!-- <div class="container">
          <div class="row">
            <div class="register-container col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-8 offset-sm-2">
        <div class="register">
        <h1>Rejestracja</h1>
        <form class="form" method="post" action="#" v-if="!submitted">
          <div class="field" :class="{'has-error': errors.hasOwnProperty('name') }">
            <input v-model="newUser.name" data-vv-rules="required|alpha|min:3" class="form-control" type="text" name="name" placeholder="Imię"/>
            <i class="fa fa-user" aria-hidden="true"></i>
            <p class="text-danger" v-if="errors.hasOwnProperty('name')">{{ errors.name[0] }}</p>
          </div>
          <div class="field" :class="{'has-error': errors.hasOwnProperty('surname') }">
            <input v-model="newUser.surname" class="form-control" type="text" name="surname" placeholder="Nazwisko" data-vv-rules="required|alpha|min:3"/>
            <i class="fa fa-address-card" aria-hidden="true"></i>
            <p class="text-danger" v-if="errors.hasOwnProperty('surname')">{{ errors.surname[0] }}</p>
          </div>
          <div class="field" :class="{'has-error': errors.hasOwnProperty('email') }">
            <input v-model="newUser.email" data-vv-rules="required|email" class="form-control" type="email" name="email" placeholder="E-mail"/>
            <i class="fa fa-envelope" aria-hidden="true"></i>
            <p class="text-danger" v-if="errors.hasOwnProperty('email')">{{ errors.email[0] }}</p>
          </div>
          <div class="field" :class="{'has-error': errors.hasOwnProperty('password') }">
            <input v-model="newUser.password" ddata-vv-rules="required|password" class="form-control" type="password" name="password" placeholder="Hasło"/>
            <i class="fa fa-lock" aria-hidden="true"></i>
            <p class="text-danger" v-if="errors.hasOwnProperty('password')">{{ errors.password[0] }}</p>
          </div>
          <div class="field">
            <input v-model="confirmPassword" data-vv-rules="required|confirmPassword" class="form-control" type="password" name="confirmPassword" placeholder="Powtórz hasło" required/>
            <i class="fa fa-lock" aria-hidden="true"></i>
            <p class="text-danger" v-if="newUser.password !== confirmPassword">Hasła nie są zgodne</p>
          </div>
          <div class="radios">
            <div class="field radioButton" :class="{'has-error': errors.hasOwnProperty('sex') }">
              <input id="box1" class="form-control" type="radio" name="sex" data-vv-rules="'required'" value="Woman" v-model="newUser.sex"/>
              <label class="women" for="box1">Kobieta</label>
              <input id="box2" class="form-control" type="radio" name="sex" data-vv-rules="'required'" value="Man" v-model="newUser.sex"/>
              <label for="box2">Mężczyzna</label>
            </div>
            <p class="text-danger" v-if="errors.hasOwnProperty('sex')">{{ errors.sex[0] }}</p>
          </div>
          <div class="field" :class="{'has-error': errors.hasOwnProperty('birthday') }">
            <input v-model="newUser.birthday" class="form-control" type="date" name="birthday" placeholder="Data urodzenia" data-vv-rules="'required'"/>
            <i class="fa fa-calendar" aria-hidden="true"></i>
          </div>
          <p class="submit"><input @click="register" type="button" name="sent" value="Register"/></p>
        </form>
        <div v-if="submitted" class="after-register">
            <h3 class="after-register-header">Dziękujemy za poprawne zarejestrowanie się!</h3>
            <span>Aby przejść do kursu kliknij przycik poniżej.</span>
            <span>Życzymy owocnej nauki, </span>
            <span class="last-span">zespół JapanKitty</span>
            <router-link to="/course" exact><input type="button" value="Przejdź do kursu" class="after-register-button"/></router-link>
        </div>
      </div>
    </div>
  </div>
  </div> -->
    <v-layout class="ma-5 login">
      <v-flex xs12 sm6 offset-sm3 class="card-flex">
        <v-card class="mb-5 card">
          <v-card-title primary-title>
            <h3 class="headline mb-0 mt-2 text-uppercase">Register</h3>
          </v-card-title>
          <v-card-text>
            <v-form class="px3" ref="form" method="post" action="#" v-if="!submitted">
              <v-text-field
                :rules="inputRules"
                v-model="newUser.name"
                label="Name"
                prepend-icon="person"
                counter
              ></v-text-field>
              <v-text-field
                :rules="inputRules"
                v-model="newUser.surname"
                label="Surname"
                prepend-icon="person_pin"
                counter
              ></v-text-field>
              <v-text-field
                :rules="emailRules"
                class="formField"
                v-model="newUser.email"
                prepend-icon="email"
                label="E-mail"
                hint="Your e-mail address"
              >
              </v-text-field>
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
              <v-radio-group v-model="newUser.sex" :mandatory="false" row prepend-icon="wc" :rules="radioRules">
                <v-radio label="Kobieta" value="Woman"></v-radio>
                <v-radio label="Mężczyzna" value="Man-2"></v-radio>
              </v-radio-group>
              <!-- <v-menu>
                <v-text-field :value="formattedDate" slot="activator" label="Birthday date" prepend-icon="date_range"></v-text-field>
                <v-date-picker v-model="newUser.birthday" :rules="inputRules"></v-date-picker>
              </v-menu> -->
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
                  label="Birthday date"
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
              <div v-if="isError">
                <p class="error--text" v-for="(error,i) in errors" :key="i">{{ error[0] }}</p>
              </div>
            </v-form>
          </v-card-text>

          <v-card-actions class="mb-4">
            <v-btn flat class="primary mx-0 mt-3" @click="register">Register</v-btn>
          </v-card-actions>
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
import format from 'date-fns/format'
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
      },
      submitted: false,
      menu: false,
      confirmPassword: "",
      errors: {},
      isError: false,
      show1: false,
      show2: false,
      radioRules: [
        v => !!v || 'Wybierz płeć'
      ],
      inputRules: [
        value => !!value || 'Required.',
        v => v.length >= 3 || 'minimum length is 3 characters'
      ],
      passwordRules: [
        value => !!value || 'Required.',
        v => v.length >= 5 || 'Min 5 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ]
    };
  },
   watch: {
      menu (val) {
        val && this.$nextTick(() => (this.$refs.picker.activePicker = 'YEAR'))
      }
    },
  methods: {
    save (birthday) {
      this.$refs.menu.save(birthday)
    },
    register() {
      console.log('newUser', this.newUser);
      if(this.$refs.form.validate()){
        const success = () => {
          this.submitted = true;
        };
        const error = response => {
          this.isError = true;
          console.log('response', response);
          this.errors = response.body.error;
          console.log('errors', this.errors);
        };
        authService.register(this.newUser, success, error);
      }
    },
    showErrors(){

    }
  },
    computed: {
    formattedDate() {
      return this.newUser.birthday ? format(this.newUser.birthday, 'Do MMM YYYY') : ''
    }
  }
};
</script>