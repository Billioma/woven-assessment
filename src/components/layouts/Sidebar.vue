<template>
  <div
    :class="[
      isFixed ? 'fixed z-10' : '',
      'custom-gradient h-screen flex justify-between w-60',
    ]"
  >
    <div class="flex-1 h-screen overflow-auto">
      <div class="sticky pt-5 top-0 custom-gradient z-10">
        <div
          class="mx-4 flex gap-2 bg-red rounded-md border border-red px-11 py-3 text-white"
        >
          <img src="../../assets/user-icon.svg" class="w-8 h-8" />
          <div>
            <div class="text-11 font-medium">Gamma Spack Updated</div>
            <div class="mt-2 text-10 font-medium">sammyfish007@gmail.com</div>
          </div>
        </div>
      </div>

      <div class="mt-6 mx-3">
        <nav
          v-for="nav in navigation"
          :key="nav.group"
          class="flex flex-col"
          :class="[nav.group === 'Actions' && 'mt-14']"
        >
          <div
            v-if="nav.text"
            :class="[
              'px-3',
              nav.mt ? `mt-${nav.mt}` : 'mt-9',
              'mb-3 text-gray-200 font-extrabold text-xs',
            ]"
          >
            {{ nav.text }}
          </div>
          <router-link
            v-for="(item, index) in nav.items"
            :key="item.id"
            :to="item.path"
            @click="!isFixed ? closeDrawer() : handleActionClick(item)"
          >
            <div
              :class="[
                'flex items-center gap-16 w-full rounded-md transition delay-50 duration-1000 ease-in-out',
                { 'hover:bg-red-100': !isCurrentRoute(item) },
              ]"
            >
              <div
                :class="[
                  'py-3 text-gray-100 mb-1 font-medium',
                  { 'text-red font-extrabold': isCurrentRoute(item) },
                  item.class,
                ]"
              >
                <div class="flex items-center gap-3">
                  <div v-if="isCurrentRoute(item)">
                    <div class="bg-red h-4 w-1 rounded-sm"></div>
                  </div>

                  <div
                    :class="[
                      'flex ml-3 items-center gap-2',
                      { 'ml-12px pl-3': isCurrentRoute(item) },
                    ]"
                  >
                    <component :is="getIconComponent(item)" />
                    <div
                      :class="['text-xs', { 'text-red': isLoggingOut(item) }]"
                    >
                      {{ item.name }}
                    </div>
                  </div>
                </div>
              </div>
              <img
                v-if="showArrow(index, nav)"
                class="w-3 h-3"
                src="../../assets/arrow.svg"
              />
            </div>
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import {
  generalRoutes,
  paymentRoutes,
  otherRoutes,
  actionRoutes,
} from "../common/constants";

export default {
  props: {
    isFixed: Boolean,
  },
  data() {
    const groupedRoutes = [
      { group: "General", text: null, items: generalRoutes },
      { group: "Payments", text: "PAYMENTS", items: paymentRoutes, mt: 0 },
      { group: "Others", text: "OTHERS", items: otherRoutes, mt: 0 },
      { group: "Actions", text: null, items: actionRoutes, mt: 14 },
    ];

    return {
      navigation: groupedRoutes,
    };
  },
  methods: {
    closeDrawer() {
      this.$emit("closeDrawer");
    },
    handleActionClick(item) {
      if (item.name === "Log Out") {
        item.name = "Logging Out";
        setTimeout(() => {
          item.name = "Log Out";
        }, 1500);
      }
    },
    getIconComponent(item) {
      if (this.$route.path === item.path || item.name === "Logging Out") {
        return item.secComponent;
      } else {
        return item.iconComponent;
      }
    },
    isLoggingOut(item) {
      return item.name === "Logging Out";
    },
    isCurrentRoute(item) {
      return this.$route.path.includes(item.path);
    },
    showArrow(index, nav) {
      return nav.group === "Payments" && index === 1;
    },
  },
};
</script>

<style>
.custom-gradient {
  background: linear-gradient(
      241deg,
      rgba(204, 255, 250, 0.25) -2.96%,
      rgba(255, 252, 245, 0.25) 44.27%,
      rgba(255, 229, 233, 0.25) 89.58%
    ),
    #fff;
}
/* Chrome, Safari, and Opera */
::-webkit-scrollbar {
  width: 3px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.05);
}

::-webkit-scrollbar-thumb {
  background-color: #79242f;
}

/* Firefox */
/* For Firefox 64+ */
* {
  scrollbar-color: #79242f rgba(0, 0, 0, 0.05);
  scrollbar-width: thin;
}

/* For Firefox 63 and below */
* {
  scrollbar-color: #79242f rgba(0, 0, 0, 0.05);
}

/* Microsoft Edge and IE */
* {
  -ms-overflow-style: none; /* Hide the scrollbar in IE and Edge */
}

*::-webkit-scrollbar {
  width: 3px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.05);
}

*::-webkit-scrollbar-thumb {
  background-color: #79242f;
}
</style>
