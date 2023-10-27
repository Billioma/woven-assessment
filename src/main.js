import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import "vue3-side-panel/dist/vue3-side-panel.css";
import { VueSidePanel } from "vue3-side-panel";

createApp(App)
  .component("VueSidePanel", VueSidePanel)
  .use(router)
  .mount("#app");
