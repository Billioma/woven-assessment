<template>
  <div class="flex bg-white flex-col fixed w-screen py-6 pr-10 z-10">
    <div
      class="flex justify-between items-center pl-10 lg:pl-72 text-black w-full"
    >
      <div class="text-xl font-extrabold text-gray-300">Dashboard</div>

      <div class="flex gap-3">
        <label class="switch">
          <input type="checkbox" v-model="isLiveModeChecked" />
          <span class="slider round"></span>
        </label>

        <div class="flex items-center gap-8">
          <div
            class="font-medium"
            :class="['text-gray-300', { 'text-dark-green': isLiveModeChecked }]"
          >
            Live Mode
          </div>

          <div @click="openPanel" class="cursor-pointer">
            <img class="w-5 h-5" src="../../assets/menu.svg" />
          </div>
        </div>
      </div>
    </div>
    <VueSidePanel v-model="panelVisible" :width="300">
      <SideDrawerVue @closeDrawer="openPanel" />
    </VueSidePanel>
  </div>
</template>

<script>
import { ref } from "vue";
import { VueSidePanel } from "vue3-side-panel";
import SideDrawerVue from "./SideDrawer.vue";

export default {
  components: {
    VueSidePanel,
    SideDrawerVue,
  },
  setup() {
    const panelVisible = ref(false);

    const openPanel = () => {
      panelVisible.value = !panelVisible.value;
    };

    return {
      panelVisible,
      openPanel,
    };
  },
};
</script>

<style>
.switch {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 22px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  border: 2px solid #0d4840;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 4px;
  bottom: 2px;
  background-color: #0d4840;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #e4f7f5;
}

input:focus + .slider {
  box-shadow: 0 0 1px #e4f7f5;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(22px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
