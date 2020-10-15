<template>
  <q-page class="fit row q-px-xl">
    <h1>Quasar is fun!</h1>
    <h4>Finally, one code base to rule them all.</h4>
  </q-page>
</template>

<script lang="ts">
import BiasesStepper from "components/BiasesStepper.vue";
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Start",
  components: { BiasesStepper },

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
    returnToast() : void {
      this.$q.notify({
        message: "Why did you leave?!",
        icon: "sentiment_dissatisfied",
        color: this.$q.dark.isActive ? "negative" : "dark",
        position: "bottom-right",
      });
    },
  },

  watch: {
    "$q.appVisible": function (val) {
      if (val) { this.returnToast(); }
    },
  },

  mounted() {
    this.welcomeToast();
  },
});
</script>
