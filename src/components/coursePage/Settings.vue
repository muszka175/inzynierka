<template>
    <main class="settingsSection">  
      <course-header></course-header>
      <sidebar></sidebar>
    <v-layout class="ma-5 login">
      <v-flex xs12 sm6 offset-sm3 class="card-flex">
        <v-card class="mb-5 card">
          <v-card-title primary-title>
            <h3 class="headline mb-0 mt-2 text-uppercase">Ustawienia</h3>
             <div class="message">{{this.message}}</div>
          </v-card-title>
          <v-card-text>
            <v-form class="px3" ref="form" method="post" action="#" v-if="!submitted">
              <v-text-field
                :rules="inputRules"
                v-model="personDetails.name"
                label="Name"
                prepend-icon="person"
                counter
              ></v-text-field>
              <v-text-field
                :rules="inputRules"
                v-model="personDetails.surname"
                label="Surname"
                prepend-icon="person_pin"
                counter
              ></v-text-field>
              <v-text-field
                :rules="emailRules"
                class="formField"
                v-model="personDetails.email"
                prepend-icon="email"
                label="E-mail"
                hint="Twój adres email."
              >
              </v-text-field>
              <v-text-field
                :prepend-icon="show1 ? 'visibility_off' : 'visibility'"
                :type="show1 ? 'text' : 'password'"
                name="password"
                class="formField"
                label="Password"
                v-model="personDetails.password"
                hint="Min. 5 znaków."
                counter
                @click:prepend="show1 = !show1"
              >
              </v-text-field>
               <v-text-field
                :prepend-icon="show1 ? 'visibility_off' : 'visibility'"
                :type="show1 ? 'text' : 'password'"
                name="password"
                class="formField"
                label="Password"
                v-model="changedPassword"
                hint="Min. 5 znaków."
                counter
                @click:prepend="show1 = !show1"
              >
               </v-text-field>
               <v-text-field
                :prepend-icon="show2 ? 'visibility_off' : 'visibility'"
                :type="show2 ? 'text' : 'password'"
                name="password"
                class="formField"
                label="Repeat password"
                v-model="confirmPassword"
                hint="Min. 5 znaków."
                counter
                @click:prepend="show2 = !show2"
              >
              </v-text-field>
              <p class="text-danger" v-if="changedPassword !== confirmPassword">Hasła nie są zgodne</p>
              <v-radio-group v-model="personDetails.sex" :mandatory="false" row prepend-icon="wc">
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
                  v-model="personDetails.birthday"
                  label="Birthday date"
                  prepend-icon="event"
                  readonly
                ></v-text-field>
                <v-date-picker
                  ref="picker"
                  v-model="personDetails.birthday"
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
            <v-btn flat class="primary mx-0 mt-3" @click="change">Zmień</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    </main>
</template>

<script>
import CoursePageHeader from "./CoursePageHeader.vue";
import SidebarLeft from "../coursePage/SidebarLeft.vue";

export default {
  components: {
    "course-header": CoursePageHeader,
    "sidebar": SidebarLeft
  },
  data() {
    return {
      personDetails: {},
      newData: {},
      submitted: false,
      confirmPassword: "",
      changedPassword: "",
      errors: {},
      somethingChanged: false,
      message: "",
      menu: false,
      isError: false,
      show1: false,
      show2: false,
      radioRules: [v => !!v || "Wybierz płeć"],
      inputRules: [
        value => !!value || "Wymagane.",
        v => v.length >= 3 || "Wymagane min. 3 znaki."
      ],
      passwordRules: [
        value => !!value || "Wymagane.",
        v => v.length >= 5 || "Wymagane min. 5 znaków."
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
    change() {
      this.somethingChanged = false;
      if (this.personDetails.name !== this.originalData.name) {
        this.newData["new_name"] = this.personDetails.name;
        this.somethingChanged = true;
      }
      if (this.personDetails.surname !== this.originalData.surname) {
        this.newData["new_surname"] = this.personDetails.surname;
        this.somethingChanged = true;
      }
      if (this.personDetails.email !== this.originalData.email) {
        this.newData["new_email"] = this.personDetails.email;
        this.somethingChanged = true;
      }
      if (this.confirmPassword !== this.changedPassword) {
        this.newData["new_password"] = this.changedPassword;
        this.somethingChanged = true;
      }
      if (this.personDetails.sex !== this.originalData.sex) {
        this.newData["new_sex"] = this.personDetails.sex;
        this.somethingChanged = true;
      }
      if (this.personDetails.birthday !== this.originalData.birthday) {
        this.newData["new_birthday"] = this.personDetails.birthday;
        this.somethingChanged = true;
      }

      if (this.somethingChanged) {
        console.log("Obiekt do wysłania", this.newData);

        this.$http.post("edit-account", this.newData).then(response => {
          // console.log(response);
          this.message = "Zmieniono poprawnie dane";
          this.originalData = Object.assign({}, this.personDetails);
          this.changedPassword = this.confirmPassword;
        });
      } else {
        this.message =
          "Zmiany nie zostały zapisane, ponieważ dane nie zmieniły się";
      }
    },
    save(birthday) {
      this.$refs.menu.save(birthday);
    }
  },
  beforeCreate() {
    console.log(this);
    this.$http
      .get("get-details", null, {
        headers: {
          Accept: "application/json"
        }
      })
      .then(response => {
        console.log(response);
        this.personDetails = response.body.success;
        this.originalData = Object.assign({}, this.personDetails);
        console.log(this.personDetails);
      });
  }
};
</script>
