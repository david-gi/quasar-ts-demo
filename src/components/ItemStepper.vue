<template>
  <q-stepper
    v-model="step"
    vertical
    header-nav
    swipeable
    color="primary"
    class="no-shadow"
    header-class="text-bold bg-red"
    animated
  >
    <q-step
      v-for="(item, i) in items"
      :key="i"
      :name="i + 1"
      :title="item.title"
      :icon="item.icon"
    >
      <strong>{{ item.heading }}</strong
      ><br /><br />
      {{ item.content }}
      <q-stepper-navigation>
        <q-btn
          v-show="step < items.length"
          @click="step++"
          color="primary"
          label="Next"
        />
        <q-btn
          v-show="step == items.length"
          @click="step = 1"
          color="primary"
          label="Restart"
          icon="refresh"
          class="q-ml-sm"
        />
        <q-btn
          flat
          v-show="step > 1"
          @click="step--"
          color="grey"
          label="Previous"
          class="q-ml-sm"
        />
      </q-stepper-navigation>
    </q-step>
  </q-stepper>
</template>

<script lang="ts">
import { StepModel } from "./models";
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "ItemStepper",

  props: {
    items: {
      type: StepModel[0],
      required: true,
    },
  },

  data() {
    return {
      step: 1,
    };
  },
});
</script>
