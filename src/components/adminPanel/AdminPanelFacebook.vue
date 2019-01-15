<template>
    <v-content class="container">
      <v-layout>
        <v-flex>
          <empty-component></empty-component>
        </v-flex>
      </v-layout>
    </v-content>
</template>

<script>
import EmptyComponent from "../shared/EmptyComponent.vue";

export default {
  components: {
    "empty-component": EmptyComponent,
  },
  data() {
    return {};
  }
};
</script>
