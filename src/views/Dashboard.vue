<template>
  <div class="text-left">
    <Cards />
    <TableLayer />
  </div>
</template>

<script>
import Cards from "../components/data/Dashboard/Cards.vue";
import TableLayer from "../components/data/Dashboard/TableLayer.vue";

export default {
  components: {
    Cards,
    TableLayer,
  },
};
</script>

<style></style>
