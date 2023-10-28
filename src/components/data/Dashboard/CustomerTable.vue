<template>
  <div class="rounded-xl bg-white">
    <div class="overflow-x-auto">
      <table class="w-full h-500px text-left whitespace-nowrap">
        <thead>
          <tr>
            <th
              v-for="header in customersHeader"
              :key="header.id"
              :class="[
                'bg-white top-0 sticky py-7 text-gray-200 text-xs font-extrabold uppercase pl-8',
                getHeadClass(header.id),
              ]"
            >
              {{ header.label }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="customer in customersData"
            :key="customer.id"
            :class="[
              'text-sm text-gray-100 font-medium  hover:shadow-xl hover:bg-gray-700 cursor-pointer',
              getRowClass(customer.id),
            ]"
            @click="navigateToDetails(customer.id)"
          >
            <td class="pl-8 py-4">
              <div class="text-gray-600 capitalize font-extrabold">
                {{ customer.fullName }}
              </div>
              <div class="mt-2 text-gray-500">
                {{ customer.email }}
              </div>
            </td>
            <td class="py-4 pl-8">
              {{ customer.phone }}
            </td>
            <td class="py-4 pl-8">
              {{ customer.nuban }}
            </td>
            <td class="text-xs pl-8 uppercase py-4">
              {{ customer.reference }}
            </td>

            <td class="px-8 text-gray-500 py-4">
              {{ customer.createdAt }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      class="py-7 pr-8 flex justify-end text-red text-xs underline font-extrabold cursor-pointer"
    >
      SEE ALL CUSTOMERS
    </div>
  </div>
</template>

<script>
import { customersData, customersHeader } from "../../common/constants";

export default {
  data() {
    return {
      customersHeader,
      customersData,
    };
  },
  methods: {
    navigateToDetails(id) {
      this.$router.push({
        name: "transaction details",
        params: { id },
      });
    },
    getHeadClass(id) {
      return id === 1 ? { "pl-8": true } : {};
    },

    getRowClass(id) {
      return id % 2 === 0 ? { "bg-gray-700": true } : {};
    },
  },
};
</script>

<style></style>
