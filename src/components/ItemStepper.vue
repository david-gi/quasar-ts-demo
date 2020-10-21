<template>
  <q-stepper
    v-model="step"
    vertical
    header-nav
    swipeable
    color="primary"
    class="no-shadow q-pt-none"
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
import { defineComponent } from "@vue/composition-api";
import { StepItem } from "./models";

export default defineComponent({
  name: "ItemStepper",

  props: {
    items: {
      type: Object as () => StepItem[],
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
