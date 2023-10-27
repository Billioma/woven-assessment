<template>
  <div class="rounded-xl bg-white">
    <div class="overflow-x-auto">
      <table class="w-full h-500px text-left whitespace-nowrap">
        <thead>
          <tr>
            <th
              v-for="item in transactionsHeader"
              :key="item.id"
              :class="[
                'bg-white pl-8 top-0 sticky py-7 text-gray-500 text-xs font-extrabold uppercase ',
                getHeadClass(item.id),
              ]"
            >
              <div :class="['flex items-center gap-2', headerFlex(item.id)]">
                <div>
                  {{ item.label }}
                </div>
                <div :class="['hiden', displayIcon(item.id)]">
                  <img src="../../../assets/reverse-arrow.svg" />
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in transactionsData"
            :key="item.id"
            :class="[
              'text-sm text-gray-100 font-medium cursor-pointer hover:shadow-xl hover:bg-gray-700',
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
              {{ item.amount }}
            </td>
            <td class="uppercase py-4 pl-8">
              {{ item.reference }}
            </td>
            <td class="text-xs uppercase py-4 text-center pl-8">
              {{ item.channel }}
            </td>

            <td class="py-4 pl-8">
              <div
                class="text-xs flex flex-col justify-center items-center rounded-md w-full h-6"
              >
                <div
                  :class="[
                    'text-xs flex flex-col justify-center px-5 py-1 items-center rounded-md h-6',
                    getTextClass(item.status),
                  ]"
                >
                  {{ item.status }}
                </div>
              </div>
            </td>
            <td
              :class="[
                'text-xs  pl-8 uppercase py-4 text-center',
                getTextClass(item.type),
              ]"
            >
              {{ item.type }}
            </td>
            <td class="px-8 text-gray-500 py-4 text-center">
              {{ item.createdAt }}
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
      transactionsHeader: transactionsHeader,
      transactionsData: transactionsData,
    };
  },
  methods: {
    navigateToDetails(itemId) {
      this.$router.push({
        name: "transaction details",
        params: { id: itemId },
      });
    },
    getTextClass(status) {
      if (status === "Failed") {
        return {
          "text-red": true,
          "bg-red-100": true,
        };
      } else if (status === "Successful") {
        return {
          "bg-light-green": true,
          "text-green-200": true,
        };
      } else if (status === "PAYOUT") {
        return {
          "text-red": true,
        };
      } else if (status === "COLLECTION") {
        return {
          "text-green-200": true,
        };
      }
    },
    getHeadClass(item) {
      if (item > 3) {
        return {
          "text-center": true,
        };
      } else if (item === 1) {
        return {
          "pl-8": true,
        };
      }
    },
    headerFlex(item) {
      if (item < 4) {
        return {
          "justify-start": true,
        };
      } else {
        return {
          "justify-center": true,
        };
      }
    },
    displayIcon(item) {
      if (item > 4) {
        return {
          flex: true,
        };
      } else {
        return {
          hidden: true,
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
