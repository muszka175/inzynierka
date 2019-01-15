<template>
  <v-content class="texts-section">
    <v-layout class="ma-5 panel-texts">
      <v-flex xs12 sm12 md8 lg6 offset-md2 offset-lg3 class="card-flex">
        <v-card class="mt-5 card">
          <v-card-title primary-title>
            <h3 class="headline mb-0 mt-2 text-uppercase">Teksty na stronie</h3>
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
              ></v-text-field>
              <v-text-field
                :rules="inputRules"
                class="formField"
                v-model="texts.offerOption1"
                prepend-icon="edit"
                label="Opcja 1"
                hint="Opcja 1"
              ></v-text-field>
              <v-text-field
                :rules="inputRules"
                class="formField"
                v-model="texts.offerOption2"
                prepend-icon="edit"
                label="Opcja 2"
                hint="Opcja 2"
              ></v-text-field>
              <v-text-field
                :rules="inputRules"
                class="formField"
                v-model="texts.offerOption3"
                prepend-icon="edit"
                label="Opcja 3"
                hint="Opcja 3"
              ></v-text-field>
              <v-text-field
                :rules="inputRules"
                class="formField"
                v-model="texts.contactDescription"
                prepend-icon="edit"
                label="Opis kontaktu"
                hint="Opis kontaktu"
              ></v-text-field>
              <v-textarea
                label="O kursie"
                v-model="texts.aboutCourse"
                prepend-icon="edit"
                :rules="inputRules"
                hint="Opis kontaktu"
              ></v-textarea>
              <div class="message">{{this.message}}</div>
            </v-form>
          </v-card-text>

          <v-card-actions class="mb-4">
            <v-btn flat class="primary mx-0 mt-3" @click="add" type="button" name="sent">Zapisz</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      newData: {},
      texts: {},
      originalData: {},
      submitted: false,
      somethingChanged: false,
      message: "",
      inputRules: [
        value => !!value || "Wymagane.",
        v => (v && v.length >= 3) || "Wymagane min. 3 znaki."
      ]
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
      this.texts = response.body.success[0];
      this.originalData = Object.assign({}, this.texts);
      console.log(this.texts);
    });
  }
};
</script>
