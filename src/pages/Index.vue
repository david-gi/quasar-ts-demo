<template>
  <q-page class="q-px-xl">
    <h1 class="q-mb-none">
      <small>
        The Quasar Framework
      </small>
    </h1>
    <div class="q-ml-xl">
      <h4 class="q-mb-none">One code base to rule them all.</h4>
      <ul>
        <li>SPAs (Single Page App)</li>
        <li>SSR (Server-side Rendered App) (+ optional PWA client takeover)</li>
        <li>PWAs (Progressive Web App)</li>
        <li>BEX (Browser Extension)</li>
        <li>Mobile Apps (Android, iOS, …) through Cordova or Capacitor</li>
        <li>Multi-platform Desktop Apps (using Electron)</li>
      </ul>
    </div>
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
