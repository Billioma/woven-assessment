<template>
  <div class="rounded-xl bg-white">
    <div class="overflow-x-auto">
      <table class="w-full h-500px text-left whitespace-nowrap">
        <thead>
          <tr>
            <th
              v-for="item in customersHeader"
              :key="item.id"
              :class="[
                'bg-white top-0 sticky py-7 text-gray-200 text-xs font-extrabold uppercase ',
                getHeadClass(item.id),
              ]"
            >
              {{ item.label }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in customersData"
            :key="item.id"
            :class="[
              'text-sm text-gray-100 font-medium  hover:shadow-xl hover:bg-gray-700 cursor-pointer',
              getRowClass(item.id),
            ]"
            @click="navigateToDetails(item.id)"
          >
            <td class="pl-8 py-4">
              <div class="text-gray-600 capitalize font-extrabold">
                {{ item.fullName }}
              </div>
              <div class="mt-2 text-gray-500">
                {{ item.email }}
              </div>
            </td>
            <td class="py-4 pl-8">
              {{ item.phone }}
            </td>
            <td class="py-4 pl-8">
              {{ item.nuban }}
            </td>
            <td class="text-xs pl-8 uppercase py-4">
              {{ item.reference }}
            </td>

            <td class="px-8 text-gray-500 py-4">
              {{ item.createdAt }}
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
      customersHeader: customersHeader,
      customersData: customersData,
    };
  },
  methods: {
    navigateToDetails(itemId) {
      this.$router.push({
        name: "transaction details",
        params: { id: itemId },
      });
    },
    getHeadClass(item) {
      if (item === 1) {
        return {
          "pl-8": true,
        };
      }
    },

    getRowClass(item) {
      if (item % 2 === 0) {
        return {
          "bg-gray-700": true,
        };
      }
    },
  },
};
</script>

<style></style>
