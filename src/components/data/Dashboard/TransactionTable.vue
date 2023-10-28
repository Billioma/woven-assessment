<template>
  <div class="rounded-xl bg-white">
    <div class="overflow-x-auto">
      <table class="w-full h-500px text-left whitespace-nowrap">
        <thead>
          <tr>
            <th
              v-for="header in transactionsHeader"
              :key="header.id"
              :class="[
                'bg-white pl-8 top-0 sticky py-7 text-gray-500 text-xs font-extrabold uppercase',
                getHeadClass(header.id),
              ]"
            >
              <div
                :class="['flex headers-center gap-2', headerFlex(header.id)]"
              >
                <div>
                  {{ header.label }}
                </div>
                <div :class="['hiden', displayIcon(header.id)]">
                  <img src="../../../assets/reverse-arrow.svg" />
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="transaction in transactionsData"
            :key="transaction.id"
            :class="[
              'text-sm text-gray-100 font-medium cursor-pointer hover:shadow-xl hover:bg-gray-700',
              getRowClass(transaction.id),
            ]"
            @click="navigateToDetails(transaction.id)"
          >
            <td class="pl-8 py-4">
              <div class="text-gray-600 capitalize font-extrabold">
                {{ transaction.fullName }}
              </div>
              <div class="mt-2 text-gray-500">
                {{ transaction.email }}
              </div>
            </td>
            <td class="py-4 pl-8">
              {{ transaction.amount }}
            </td>
            <td class="uppercase py-4 pl-8">
              {{ transaction.reference }}
            </td>
            <td class="text-xs uppercase py-4 text-center pl-8">
              {{ transaction.channel }}
            </td>

            <td class="py-4 pl-8">
              <div
                class="text-xs flex flex-col justify-center items-center rounded-md w-full h-6"
              >
                <div
                  :class="[
                    'text-xs flex flex-col justify-center px-5 py-1 items-center rounded-md h-6',
                    getTextClass(transaction.status),
                  ]"
                >
                  {{ transaction.status }}
                </div>
              </div>
            </td>
            <td
              :class="[
                'text-xs  pl-8 uppercase py-4 text-center',
                getTextClass(transaction.type),
              ]"
            >
              {{ transaction.type }}
            </td>
            <td class="px-8 text-gray-500 py-4 text-center">
              {{ transaction.createdAt }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      class="py-7 pr-8 flex justify-end text-red text-xs underline font-extrabold cursor-pointer"
    >
      SEE ALL TRANSACTIONS
    </div>
  </div>
</template>

<script>
import { transactionsData, transactionsHeader } from "../../common/constants";

export default {
  data() {
    return {
      transactionsHeader,
      transactionsData,
    };
  },
  methods: {
    navigateToDetails(id) {
      this.$router.push({
        name: "transaction details",
        params: { id },
      });
    },
    getTextClass(status) {
      const statusClasses = {
        Failed: { "text-red bg-red-100": true },
        Successful: { "bg-light-green text-green-200": true },
        PAYOUT: { "text-red": true },
        COLLECTION: { "text-green-200": true },
      };
      return statusClasses[status] || {};
    },
    getHeadClass(id) {
      if (id > 3) return { "text-center": true };
      if (id === 1) return { "pl-8": true };
      return {};
    },
    headerFlex(id) {
      return id < 4 ? { "justify-start": true } : { "justify-center": true };
    },
    displayIcon(id) {
      return id > 4 ? { flex: true } : { hidden: true };
    },
    getRowClass(id) {
      return id % 2 === 0 ? { "bg-gray-700": true } : {};
    },
  },
};
</script>

<style></style>
