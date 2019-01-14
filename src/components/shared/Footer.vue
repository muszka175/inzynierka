<template>
  <v-footer dark height="auto">
    <v-card class="flex" flat tile>
      <v-card-title class="teal">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>
        <v-btn v-for="(icon, index) in icons" :key="index" class="mx-3" dark icon>
          <font-awesome-icon :icon="icon"/>
        </v-btn>
      </v-card-title>

      <v-card-actions class="grey darken-3 justify-center">
        &copy;2018 —
        <strong>Vuetify</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      ["fab", "facebook"],
      ["fab", "twitter"],
      ["fab",  "google-plus"],
      ["fab", "linkedin"],
      ["fab",  "instagram"],
    ]
  })
};
</script>