<template>
  <section class="creators" id="creators">
    <v-layout>
      <v-flex>
        <div class="section-title">
          <h2>Twórcy</h2>
          <div class="title-description">Poznaj naszą załogę</div>
        </div>
        <div class="person-container">
          <single-person></single-person>
        </div>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
import creatorsSinglePerson from "./CreatorsSinglePerson.vue";

export default {
  components: {
    "single-person": creatorsSinglePerson
  },
  data() {
    return {};
  }
};
</script>
