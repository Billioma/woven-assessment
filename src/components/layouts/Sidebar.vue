<template>
  <div class="custom-gradient h-screen flex justify-between fixed z-10 w-60">
    <div class="flex-1 h-screen overflow-auto">
      <div class="sticky pt-9 top-0 custom-gradient z-10">
        <div
          class="mx-6 flex gap-2 bg-red rounded-md border border-red px-11 py-3 text-white"
        >
          <img src="../../assets/user-icon.svg" class="w-8 h-8" />
          <div>
            <div class="text-11 font-medium">Gamma Spack Updated</div>
            <div class="mt-2 text-10 font-medium">sammyfish007@gmail.com</div>
          </div>
        </div>
      </div>

      <div class="mx-3 mt-9">
        <nav class="flex flex-col">
          <router-link
            v-for="item in generalRoutes"
            :key="item.id"
            :to="item.path"
            :class="[
              'py-3 px-3 rounded-md transition delay-50 duration-1000 ease-in-out hover:bg-red-100 flex items-center gap-2 text-gray-100 mb-2 font-medium',
              { 'text-red font-extrabold': isCurrentRoute(item) },
              item.class,
            ]"
          >
            <component :is="getIconComponent(item)" />
            <div class="text-xs">{{ item.name }}</div>
          </router-link>
        </nav>

        <nav class="mt-14 flex flex-col">
          <div class="px-3 mb-6 text-gray-200 font-extrabold text-xs">
            PAYMENTS
          </div>
          <router-link
            v-for="item in paymentRoutes"
            :key="item.id"
            :to="item.path"
            :class="[
              'py-3 px-3 rounded-md transition delay-50 duration-1000 ease-in-out hover:bg-red-100 flex items-center gap-2 text-gray-100 mb-2 font-medium',
              { 'text-red font-extrabold': isCurrentRoute(item) },
              item.class,
            ]"
          >
            <component :is="getIconComponent(item)" />
            <div class="text-xs">{{ item.name }}</div>
          </router-link>
        </nav>

        <nav class="mt-14 flex flex-col">
          <div class="px-3 mb-6 text-gray-200 font-extrabold text-xs">
            OTHERS
          </div>
          <router-link
            v-for="item in otherRoutes"
            :key="item.id"
            :to="item.path"
            :class="[
              'py-3 px-3 rounded-md transition delay-50 duration-1000 ease-in-out hover:bg-red-100 flex items-center gap-2 text-gray-100 mb-2 font-medium',
              { 'text-red font-extrabold': isCurrentRoute(item) },
              item.class,
            ]"
          >
            <component :is="getIconComponent(item)" />
            <div class="text-xs">{{ item.name }}</div>
          </router-link>
        </nav>

        <nav class="flex flex-col mt-28 mb-10">
          <router-link
            v-for="item in actionRoutes"
            :key="item.id"
            :to="item.path"
            @click="handleActionClick(item)"
            :class="[
              'py-3 px-3 rounded-md transition delay-50 duration-1000 ease-in-out hover-bg-red-100 flex items-center gap-2 text-gray-100 mb-2 font-medium',
              { 'text-red font-extrabold': isCurrentRoute(item) },
              item.class,
            ]"
          >
            <component :is="getIconComponent(item)" />
            <div :class="['text-xs', { 'text-red': isLoggingOut(item) }]">
              {{ item.name }}
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
  data() {
    return {
      generalRoutes: generalRoutes,
      paymentRoutes: paymentRoutes,
      otherRoutes: otherRoutes,
      actionRoutes: actionRoutes,
    };
  },
  methods: {
    handleActionClick(item) {
      if (item.name === "Log Out") {
        item.name = "Logging Out";

        if (item.name === "Logging Out") {
          setTimeout(() => {
            item.name = "Log Out";
          }, 1500);
        }
      }
    },
    getIconComponent(item) {
      if (this.$route.path === item.path) {
        return item.secComponent;
      } else if (item.name === "Logging Out") {
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
