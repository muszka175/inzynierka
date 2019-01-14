<template>
    <div id="filling-view">
      <v-container>
        <v-layout>
          <v-flex>
            <empty-component></empty-component>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
</template>

<script>
import EmptyComponent from "../shared/EmptyComponent.vue";

export default {
  components: {
    "empty-component": EmptyComponent
  },
  data() {
    return {};
  }
};
</script>