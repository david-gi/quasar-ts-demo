<template>
  <q-card class="col-10 no-shadow q-px-md q-py-md">
    <q-card-section>
      <div class="text-h6">Rationality takes practise</div>
      <div class="text-subtitle2 q-pb-sm">
        Some cognitive biases to remember
      </div>
      <item-stepper :items="biases" />
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import ItemStepper from "components/ItemStepper.vue";
import { defineComponent, onMounted, ref } from "@vue/composition-api";
import { StepItem } from "./models";

export default defineComponent({
  name: "BiasesStepper",
  components: { ItemStepper },

  setup(props, context) {
    const biases = ref([StepItem]); // ref(context.root.$store.state.biases.biasList);
    async function getFun() : Promise<void> {
      await context.root.$store.dispatch("biases/fetchBiases");
      biases.value = context.root.$store.getters["biases/titledBiases"];
    }
    onMounted(getFun);

    return { biases, getFun };
  },
});
</script>
