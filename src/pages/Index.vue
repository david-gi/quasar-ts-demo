<template>
  <q-page class="q-px-xl">
    <h1>Quasar is fun!</h1>
    <br>
    <h4>Finally, one code base to rule them all.</h4>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Start",

  methods: {
    welcomeToast() : void {
      this.$q.loadingBar.start();
      const visited = this.$q.localStorage.getItem("Visited");
      this.$q.notify({
        message: visited ? "Welcome back to my Demostration" : "Welcome to my Quasar Demonstration",
        caption: visited ? "Does this feel a little like deja... vue? 😉" : "I'm just playing with the Quasar framework.",
        color: "blue",
        position: "bottom",
      });
      this.$q.localStorage.set("Visited", true);
      setTimeout(() => { this.$q.loadingBar.stop(); }, 1000);
    },
  },

  mounted() {
    this.welcomeToast();
  },
});
</script>
