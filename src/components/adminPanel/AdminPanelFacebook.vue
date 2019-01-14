<template>
  <div id="facebook-view">
    <main-menu class="navbar-toggleable-md"></main-menu>
    <sidebar></sidebar>
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
import Menu from "../coursePage/CoursePageHeader.vue";
import SidebarLeft from "../coursePage/SidebarLeft.vue";

export default {
  components: {
    "empty-component": EmptyComponent,
    "main-menu": Menu,
    "sidebar": SidebarLeft
  },
  data() {
    return {};
  }
};
</script>
