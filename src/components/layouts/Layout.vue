<template>
  <div class="h-screen overflow-auto bg-white-100 font-Avenir">
    <div class="overflow-x-hidden">
      <div>
        <Header />
      </div>
      <div class="hidden lg:flex">
        <Sidebar />
      </div>
      <main class="overflow-auto">
        <div class="pt-28 pl-10 lg:pl-72 pr-10 pb-5">
          <slot></slot>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Sidebar from "./Sidebar.vue";

export default {
  components: {
    Header,
    Sidebar,
  },
};
</script>

<style></style>
