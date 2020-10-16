<template>
  <q-page class="fit row">
    <biases-stepper />
    <br>
  </q-page>
</template>

<script lang="ts">
import BiasesStepper from "components/BiasesStepper.vue";
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Biases",
  components: { BiasesStepper },
});
</script>
