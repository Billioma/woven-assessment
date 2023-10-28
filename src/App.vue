<template>
  <layout>
    <router-view />
  </layout>
</template>

<script>
import { Layout } from "./components/layouts/index";

export default {
  components: {
    Layout,
  },
};
</script>

<style>
@font-face {
  font-family: "Avenir";
  src: url("../public/fonts/Avenir/Avenir Regular.ttf");
  src:
    local("Avenir Regular"),
    local("Avenir Regular"),
    url("../public/fonts/Avenir/Avenir Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Avenir";
  src: url("../public/fonts/Avenir/Avenir Regular.ttf");
  src:
    local("Avenir Regular"),
    local("Avenir Regular"),
    url("../public/fonts/Avenir/Avenir Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Avenir";
  src: url("../public/fonts/Avenir/Avenir Medium.ttf");
  src:
    local("Avenir Medium"),
    local("Avenir Medium"),
    url("../public/fonts/Avenir/Avenir Medium.ttf") format("truetype");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Avenir";
  src: url("../public/fonts/Avenir/Avenir Heavy.ttf");
  src:
    local("Avenir Heavy"),
    local("Avenir Heavy"),
    url("../public/fonts/Avenir/Avenir Heavy.ttf") format("truetype");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
</style>
