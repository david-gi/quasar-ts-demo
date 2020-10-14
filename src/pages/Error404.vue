<template>
  <div class="fullscreen bg-orange text-dark text-center q-pa-md flex flex-center">
    <div>
      <h2>
        Imagination is a great thing!
      </h2>

      <div class="text-h5">
        Alas, the page you seek does not currently exist.<br>
      </div>
      <br>
      <br>

      <q-btn
        class="text-h5"
        color="dark"
        text-color="orange"
        unelevated
        to="/"
        label="Home"
        no-caps
      />

      <div class="absolute-bottom">
        Yes, this is in fact a 404 Not Found page.
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Error404",
});
</script>
