<template>
  <div class="relative w-fit">
    <apexcharts
      width="155px"
      height="155px"
      type="donut"
      :options="chartOptions"
      :series="series"
    ></apexcharts>

    <div class="absolute right-0 left-0 top-0 bottom-0">
      <div
        class="flex flex-col justify-center text-black items-center h-36 text-center"
      >
        <div class="text-xs font-extrabold">1260</div>

        <div class="mt-10px text-10 font-medium">Transactions</div>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  name: "Chart",
  components: {
    apexcharts: VueApexCharts,
  },
  data() {
    return {
      chartOptions: {
        maintainAspectRatio: false,

        colors: ["#4BDECA", "#A63241", "#EB8B1E"],
        legend: {
          show: false,
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                labels: {
                  label: "Total",
                  show: false,
                  name: {
                    show: false,
                    fontSize: "22px",
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontWeight: 600,
                    color: "red",
                    offsetY: -10,
                    label: "Total",
                    formatter: function (val) {
                      return val;
                    },
                  },
                },
                value: {
                  show: false,
                  fontSize: "16px",
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fontWeight: 400,
                  color: "red",
                  offsetY: -16,
                  label: "Total Transactions",
                  formatter: function (val) {
                    return val;
                  },
                },
                total: {
                  fontSize: "10px",
                  showAlways: true,
                  show: false,
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fontWeight: 400,
                  color: "red",
                  label: "Transactions",
                },
              },
            },
          },
        },
        stroke: {
          show: false,
          width: 0,
        },
        dataLabels: {
          enabled: false,
        },
        labels: [
          "Successful Transactions",
          "Failed Transactions",
          "Pending Transactions",
        ],
      },
      series: [95, 15, 10],
    };
  },
};
</script>

<style></style>
