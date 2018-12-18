<template>
  <main class="texts-section">
    <main-menu class="navbar-toggleable-md"></main-menu>
      <!-- <div class="container">
        <div class="row">
            <div class="texts-container col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
                <div class="texts"> 
                    <h1>Teksty na stronie</h1>
                    <div class="message">{{this.message}}</div>
                    <form class="form" method="post" action="#" v-if="!submitted">
                        <label class="field-description">Opis oferty</label>
                <div class="field" :class="{'has-error': errors.hasOwnProperty('offerDescription') }">
                    
                    <input v-model="texts.offerDescription" data-vv-rules="alpha|min:3" class="form-control" type="text" name="offerDescription" placeholder="Opis oferty"/>
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    <p class="text-danger" v-if="errors.hasOwnProperty('offerDescription')">{{ errors.offerDescription[0] }}</p>
                </div>
                <label class="field-description">Opcja 1</label>
                 <div class="field" :class="{'has-error': errors.hasOwnProperty('offerOption1') }">
                    <input v-model="texts.offerOption1" class="form-control" type="text" name="offerOption1" placeholder="Opcja numer 1" data-vv-rules="alpha|min:3"/>
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    <p class="text-danger" v-if="errors.hasOwnProperty('offerOption1')">{{ errors.offerOption1[0] }}</p>
                </div>
                <label class="field-description">Opcja 2</label>
                <div class="field" :class="{'has-error': errors.hasOwnProperty('offerOption2') }">
                    <input v-model="texts.offerOption2" class="form-control" type="text" name="offerOption2" placeholder="Opcja numer 2" data-vv-rules="alpha|min:3"/>
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    <p class="text-danger" v-if="errors.hasOwnProperty('offerOption2')">{{ errors.offerOption2[0] }}</p>
                </div>
                <label class="field-description">Opcja 3</label>
                <div class="field" :class="{'has-error': errors.hasOwnProperty('offerOption3') }">
                    <input v-model="texts.offerOption3" class="form-control" type="text" name="offerOption3" placeholder="Opcja numer 3" data-vv-rules="alpha|min:3"/>
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    <p class="text-danger" v-if="errors.hasOwnProperty('offerOption3')">{{ errors.offerOption3[0] }}</p>
                </div>
                <label class="field-description">Opis kontaktu</label>
                <div class="field" :class="{'has-error': errors.hasOwnProperty('contactDescription') }">
                    <input v-model="texts.contactDescription" class="form-control" type="text" name="contactDescription" placeholder="Kontakt opis" data-vv-rules="alpha|min:3"/>
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    <p class="text-danger" v-if="errors.hasOwnProperty('contactDescription')">{{ errors.contactDescription[0] }}</p>
                </div>
                 <label class="field-description">O kursie</label>
                <div class="field" :class="{'has-error': errors.hasOwnProperty('aboutCourse') }">
                    <textarea v-model="texts.aboutCourse" class="form-control" type="text" name="aboutCourse" placeholder="Opis kursu" data-vv-rules="alpha|min:3"></textarea>
                    <p class="text-danger" v-if="errors.hasOwnProperty('aboutCourse')">{{ errors.aboutCourse[0] }}</p>
                </div>
                
                <p class="submit"><input @click="add" type="button" name="sent" value="Dodaj"/></p>
                </form>
        </div>
        </div>
        </div>
    </div> -->
      <v-layout class="ma-5 login">
    <v-flex xs12 sm6 offset-sm3 class="card-flex">
      <v-card class="mt-5 card">
        <v-card-title primary-title>
          <h3 class="headline mb-0 mt-2 text-uppercase">Teksty na stronie</h3>
          <div class="message">{{this.message}}</div>
        </v-card-title>
        <v-card-text>
          <v-form class="px3" ref="form" method="post" action="#" v-if="!submitted">
            <v-text-field
              :rules="inputRules"
              class="formField"
              v-model="texts.offerDescription"
              prepend-icon="edit"
              label="Opis oferty"
              hint="Opis oferty"
            >
            </v-text-field>
                <v-text-field
              :rules="inputRules"
              class="formField"
              v-model="texts.offerOption1"
              prepend-icon="edit"
              label="Opcja 1"
              hint="Opcja 1"
            >
            </v-text-field>
                <v-text-field
              :rules="inputRules"
              class="formField"
              v-model="texts.offerOption2"
              prepend-icon="edit"
              label="Opcja 2"
              hint="Opcja 2"
            >
            </v-text-field>
                <v-text-field
              :rules="inputRules"
              class="formField"
              v-model="texts.offerOption3"
              prepend-icon="edit"
              label="Opcja 3"
              hint="Opcja 3"
            >
            </v-text-field>
                <v-text-field
              :rules="inputRules"
              class="formField"
              v-model="texts.contactDescription"
              prepend-icon="edit"
              label="Opis kontaktu"
              hint="Opis kontaktu"
            >
            </v-text-field>
            <v-textarea
              label="O kursie"
              v-model="texts.aboutCourse"
              prepend-icon="edit"
              :rules="inputRules"
               hint="Opis kontaktu"
              >
            </v-textarea>
          
          </v-form>
        </v-card-text>

        <v-card-actions class="mb-4">
           <v-btn flat class="primary mx-0 mt-3" @click="add" type="button" name="sent">Dodaj</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  </main>
</template>

<script>
import Menu from "../coursePage/CoursePageHeader.vue";

export default {
  components: {
    "main-menu": Menu
  },
  data() {
    return {
      texts: {},
      newData: {},
      submitted: false,
      errors: {},
      somethingChanged: false,
      message: "",
      inputRules: [
      value => !!value || 'Required.',
      v => v.length >= 3 || 'minimum length is 3 characters'
    ],
  };
},
  methods: {
    add() {
      if (this.$refs.form.validate()) {
        this.somethingChanged = false;
        this.newData["id"] = 1;
        this.newData["offerDescription"] = this.texts.offerDescription;
        this.newData["offerOption1"] = this.texts.offerOption1;
        this.newData["offerOption2"] = this.texts.offerOption2;
        this.newData["offerOption3"] = this.texts.offerOption3;
        this.newData["contactDescription"] = this.texts.contactDescription;
        this.newData["aboutCourse"] = this.texts.aboutCourse;

        if (
          this.texts.offerDescription !== this.originalData.offerDescription
        ) {
          this.somethingChanged = true;
        }
        if (this.texts.offerOption1 !== this.originalData.offerOption1) {
          this.somethingChanged = true;
        }
        if (this.texts.offerOption2 !== this.originalData.offerOption2) {
          this.somethingChanged = true;
        }
        if (this.texts.offerOption3 !== this.originalData.offerOption3) {
          this.somethingChanged = true;
        }
        if (
          this.texts.contactDescription !== this.originalData.contactDescription
        ) {
          this.somethingChanged = true;
        }
        if (this.texts.aboutCourse !== this.originalData.aboutCourse) {
          this.somethingChanged = true;
        }

        if (this.somethingChanged) {
          console.log("Obiekt do wysłania", this.newData);
          this.$http.post("edit-text", this.newData).then(response => {
            console.log("post", response);
            this.message = "Zmieniono poprawnie dane";
            this.originalData = Object.assign({}, this.texts);
          });
        } else {
          this.message =
            "Zmiany nie zostały zapisane, ponieważ dane nie zmieniły się";
        }
      }
    },
    submitForm() {
      this.submitted = true;
    }
  },
  beforeCreate() {
    console.log(this);
    this.$http.get("texts").then(response => {
      console.log(response);
      this.texts = response.body.success[1];
      this.originalData = Object.assign({}, this.texts);
      console.log(this.texts);
    });
  }
};
</script>