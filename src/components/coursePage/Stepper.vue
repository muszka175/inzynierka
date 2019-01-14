<template>
  <div>
    <v-stepper class="stepper" non-linear value="3">
      <v-stepper-header>
        <v-stepper-step complete color="secondary" step="1">Wybierz grę</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step complete color="secondary" step="2">Ucz się przez zabawę</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step complete color="secondary" step="3">Sprawdzaj swój postęp</v-stepper-step>
      </v-stepper-header>
    </v-stepper>
  </div>
</template>
