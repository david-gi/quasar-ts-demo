<template>
  <q-layout view="hHh lpR fFf" style="min-width: 300px">
    <q-header elevated class="bg-black shadow-transition">
      <q-toolbar>
        <q-avatar>
          <img src="../assets/logo.png" />
        </q-avatar>

        <q-toolbar-title>Quasar Demo</q-toolbar-title>

        <div class="gt-xs q-mr-lg">
          David Giagnocavo - {{ new Date().getFullYear() }}
        </div>

        <q-icon
          :name="$q.dark.isActive ? 'wb_sunny' : 'brightness_2'"
          :title="$q.dark.isActive ? 'Light Mode' : 'Dark Mode'"
          class="cursor-pointer"
          @click="darktoggle"
        />

        <q-btn
          class="q-ml-lg"
          flat
          dense
          icon="menu"
          aria-label="Menu"
          @click="drawerOpen = !drawerOpen"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawerOpen"
      show-if-above
      side="right"
      content-class="inset-shadow"
    >
      <q-list>
        <DrawerLink v-for="link in navLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import DrawerLink from "components/DrawerLink.vue";
import { Dark } from "quasar";

const linksData = [
  {
    title: "Cognitive biases",
    caption: "Know to overthrow",
    icon: "psychology",
    link: "/#/biases",
  },
  {
    title: "Restart this app",
    caption: "Take it from the top",
    icon: "replay",
    link: "/",
  },
];

import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "MainLayout",
  components: { DrawerLink },

  setup() {
    const drawerOpen = ref(false);
    const navLinks = ref(linksData);

    return { drawerOpen, navLinks };
  },

  watch: {
    "$q.appVisible": function (val) {
      if (val) {
        this.returnToast();
      }
    },
  },

  methods: {
    initDark(): void {
      const darkMode: boolean | null = this.$q.localStorage.getItem("Dark");
      if (darkMode) {
        this.$q.dark.set(darkMode);
      }
    },
    darktoggle(): void {
      Dark.toggle();
      this.$q.localStorage.set("Dark", this.$q.dark.isActive);
    },
    returnToast(): void {
      this.$q.notify({
        message: "Why did you leave?!",
        icon: "sentiment_dissatisfied",
        color: this.$q.dark.isActive ? "negative" : "dark",
        position: "bottom-right",
      });
    },
  },

  mounted() {
    this.initDark();
  },
});
</script>
