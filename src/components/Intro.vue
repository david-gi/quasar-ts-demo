<template>
  <div class="q-pa-md"></div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Intro",
  props: {
    title: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      x: 1,
    };
  },

  methods: {
    c(): number {
      return 1;
    },
  },
});
</script>
