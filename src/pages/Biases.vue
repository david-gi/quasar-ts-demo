<template>
  <q-page class="fit row">
    <biases-stepper />
    <br>
  </q-page>
</template>

<script lang="ts">
import BiasesStepper from "components/BiasesStepper.vue";
import { defineComponent, onMounted } from "@vue/composition-api";

export default defineComponent({
  name: "Start",
  components: { BiasesStepper },

  setup() {
    function welcomeToast() : void {
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
    }
    onMounted(welcomeToast);

    function returnToast() : void {
      this.$q.notify({
        message: "Why did you leave?!",
        icon: "sentiment_dissatisfied",
        color: this.$q.dark.isActive ? "negative" : "dark",
        position: "bottom-right",
      });
    }

    return { returnToast }
  },

  watch: {
    "$q.appVisible": function (val) {
      if (val) { this.returnToast(); }
    },
  },
});
</script>
