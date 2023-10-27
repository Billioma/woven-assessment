<template>
  <div class="mt-6">
    <div class="bg-white rounded-xl pt-30px sm:px-4 md:px-8 pb-4">
      <div class="flex items-center">
        <div
          v-for="item in tableTabs"
          :key="item"
          :class="[
            'text-gray-100 text-sm pb-5 text-center sm:px-5 md:px-10 cursor-pointer hover:text-red',
            {
              'text-red font-extrabold border-b-4 border-red':
                item === selectedFilter,
            },
          ]"
          @click="selectTab(item)"
        >
          {{ item }}
        </div>
      </div>
    </div>

    <div class="mt-6">
      <component :is="selectedComponent" />
    </div>
  </div>
</template>

<script>
import { tableTabs } from "../../common/constants";
import TransactionTable from "./TransactionTable.vue";
import CustomerTable from "./CustomerTable.vue";

export default {
  components: {
    TransactionTable,
    CustomerTable,
  },
  data() {
    return {
      tableTabs: tableTabs,
      selectedFilter: "Transactions",
      selectedComponent: TransactionTable,
    };
  },
  methods: {
    selectTab(tab) {
      this.selectedFilter = tab;
      this.selectedComponent =
        tab === "Transactions" ? TransactionTable : CustomerTable;
    },
  },
};
</script>

<style></style>
