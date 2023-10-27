<template>
  <div>
    <div class="flex items-center gap-1 cursor-pointer" @click="goBack">
      <img src="../assets/back-arrow.svg" />
      <div class="text-xs text-gray-100">Back</div>
    </div>

    <div class="capitalize text-sm font-medium text-gray-600 pt-5 pb-6">
      Type: {{ filteredTransactionsData[0].type }}
    </div>

    <div class="flex sm:flex-col md:flex-row gap-8 items-start">
      <div class="bg-white rounded-lg py-9 sm:px-5 md:px-10 w-full">
        <div
          class="flex items-center justify-between w-full pb-6 border-b border-gray-900"
        >
          <div class="text-sm text-gray-100 flex items-center gap-2">
            <img src="../assets/check.svg" />
            <div class="text-black font-medium">8012682284</div>
          </div>

          <div class="text-right">
            <div class="text-10 font-extrabold text-gray-800">Amount</div>
            <div class="mt-2 text-gray-100">₦100.00</div>
          </div>
        </div>

        <div
          class="flex items-center justify-between w-full py-6 border-b border-gray-900"
        >
          <div>
            <div class="text-10 font-extrabold text-gray-800">
              Customer Reference
            </div>
            <div class="mt-2 text-sm text-gray-100">53</div>
          </div>

          <div class="text-right">
            <div class="text-10 font-extrabold text-gray-800">
              Customer Name
            </div>
            <div class="mt-2 text-sm text-gray-100">Gamma Spark Updated</div>
          </div>
        </div>

        <div
          class="flex items-center justify-between w-full py-6 border-b border-gray-900"
        >
          <div>
            <div class="text-10 font-extrabold text-gray-800">
              Customer Phone
            </div>
            <div class="mt-2 text-sm text-gray-100">7708809901</div>
          </div>

          <div class="text-right">
            <div class="text-10 font-extrabold text-gray-800">
              Customer Email
            </div>
            <div class="mt-2 text-sm text-gray-100">
              gamma-sparks@yopmail.com
            </div>
          </div>
        </div>

        <div
          class="flex items-center justify-between w-full py-6 border-b border-gray-900"
        >
          <div>
            <div class="text-10 font-extrabold text-gray-800">
              Source Account
            </div>
            <div class="mt-2 text-sm text-gray-100">
              CORONATION MERCHANT BANK Load Test Account
            </div>
          </div>

          <div class="text-right">
            <div class="text-10 font-extrabold text-gray-800">
              Settlement Account
            </div>
            <div class="mt-2 text-sm text-gray-100">Not Available</div>
          </div>
        </div>

        <div class="flex items-center justify-between w-full pt-6">
          <div>
            <div class="text-10 font-extrabold text-gray-800">
              Transaction Date
            </div>
            <div class="mt-2 text-sm text-gray-100">
              Wednesday, March 22nd 2023, 4:03:29 pm
            </div>
          </div>

          <div class="text-right">
            <div class="text-10 font-extrabold text-gray-800">
              Status Description
            </div>
            <div class="mt-2 text-sm text-gray-100">
              {{ filteredTransactionsData[0].status }}
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg py-9 sm:px-5 md:px-10 w-full">
        <div
          class="flex items-center justify-between w-full pb-6 border-b border-gray-900"
        >
          <div>TRANSACTION LOGS</div>
          <div class="flex items-center gap-2">
            <div><img src="../assets/refresh-icon.svg" /></div>
            <div class="text-green-100 font-extrabold text-xs">
              Resend callback
            </div>
          </div>
        </div>

        <div class="mt-6 flex items-center gap-3">
          <div class="flex flex-col justify-center items-center">
            <div class="bg-orange rounded-full w-2 h-2"></div>
            <div class="border my-2 border-grey-100 h-8 w-0"></div>
            <div class="bg-green-100 rounded-full w-2 h-2"></div>
          </div>

          <div class="p-10px">
            <div>
              <div class="text-10 font-extrabold text-gray-800 mb-2">
                Transaction initiated
              </div>

              <div class="text-sm text-gray-100">
                Wednesday, March 22nd 2023, 4:03:29 pm
              </div>
            </div>

            <div class="mt-6">
              <div class="text-10 font-extrabold text-gray-800 mb-2">
                Callback sent Response code: 429
              </div>

              <div class="text-sm text-gray-100">
                Thursday, March 23rd 2023, 2:21:17 am
              </div>
            </div>
          </div>
        </div>
        <div
          class="mt-6 py-10px px-10 bg-gray-700 text-center text-10 font-medium text-gray-100 w-fit cursor-pointer"
        >
          + { /* Click to view response */ }
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { transactionsData } from "../components/common/constants";

export default {
  created() {
    const id = this.$route.params.id;
    this.filteredTransactionsData = transactionsData.filter((transaction) => {
      return transaction.id === Number(id);
    });
  },
  data() {
    return {
      transactionsData: transactionsData,
      filteredTransactionsData: [],
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style></style>
