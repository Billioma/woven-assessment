<template>
  <div>
    <div class="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-6 lg:gap-8">
      <div
        v-for="item in cards"
        :key="item.id"
        class="bg-white rounded-xl h-52 sm:pt-4 md:pt-6 sm:px-3 md:px-6 sm:pb-4 md:pb-5"
      >
        <div class="flex items-center justify-between w-full">
          <div class="text-gray-300 text-sm font-medium">
            {{ item.title }}
          </div>
          <div>
            <select
              v-model="item.selectedFilter"
              class="bg-light-green rounded-4 py-2 px-10px text-xs font-medium text-green-100 cursor-pointer"
            >
              <option v-for="item in filters" :key="item">{{ item }}</option>
            </select>
          </div>
        </div>

        <div class="mt-7 text-gray-300 text-4xl font-extrabold">
          ₦27,002,075<span class="text-lg">.65</span>
        </div>

        <div class="border-t border-gray-400 mt-7 pt-5">
          <div class="flex items-center justify-between w-full">
            <div class="flex items-center gap-2">
              <div class="text-red-200 text-xs font-medium">
                View Transactions
              </div>
              <img src="../../../assets/trans-icon.svg" />
            </div>

            <div><img src="../../../assets/forward-arrow.svg" /></div>
          </div>
        </div>
      </div>

      <div
        class="custom-gradient rounded-xl h-52 sm:pt-4 md:pt-6 sm:px-3 md:px-6 sm:pb-4 md:pb-5"
      >
        <div class="flex items-center justify-between w-full">
          <div class="text-gray-300 text-sm font-medium">
            Transaction analytics
          </div>
          <div>
            <select
              v-model="selectedFilter"
              class="bg-white border border-light-green rounded-4 py-2 px-10px text-xs font-medium text-green-100 cursor-pointer"
            >
              <option v-for="item in filters" :key="item">{{ item }}</option>
            </select>
          </div>
        </div>

        <div
          class="text-gray-300 text-4xl font-extrabold flex items-center justify-between w-full"
        >
          <div class="ml-20px">
            <DonutChartVue />
          </div>

          <div class="text-xs w-full font-medium text-black">
            <div class="flex items-center gap-4">
              <div>
                <div class="bg-red-300 rounded-sm w-3 h-3"></div>
              </div>
              <div>Failed transactions 5%</div>
            </div>
            <div class="my-4 flex items-center gap-4">
              <div>
                <div class="bg-green-300 rounded-sm w-3 h-3"></div>
              </div>
              <div>Successful transactions 93%</div>
            </div>
            <div class="flex items-center gap-4">
              <div>
                <div class="bg-orange rounded-sm w-3 h-3"></div>
              </div>
              <div>Pending transactions 2%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TransactionAltIcon } from "@/components/common/images";
import { filters, cards } from "../../common/constants";
import DonutChartVue from "./DonutChart.vue";

export default {
  components: {
    DonutChartVue,
  },
  data() {
    cards.forEach((card) => {
      card.selectedFilter = "This week";
    });
    return {
      filters: filters,
      selectedFilter: "This week",
      cards: cards,
      TransactionAltIcon: TransactionAltIcon,
    };
  },
};
</script>

<style scoped>
.custom-gradient {
  background: linear-gradient(
      241deg,
      #ccfffa -2.96%,
      #fffcf5 44.27%,
      #ffe5e9 89.58%
    ),
    #fff;
}
</style>
