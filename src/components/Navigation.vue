<script setup lang="ts">
import { ref } from "vue";
import CloseIcon from "@/components/icons/CloseIcon.vue";
import NavigationLink from "@/components/ui/link/LinkNavigation.vue";
import IconMenu from "@/components/icons/IconMenu.vue";
const handleActiveMenu = () => {
  const menu = document.getElementById("menu-full");
  const menuActive = document.getElementById("menu-active");
  const iconMenu = document.getElementById("icon-menu");

  iconMenu?.classList.toggle("fill-primary");
  iconMenu?.classList.toggle("fill-white");
  menuActive?.classList.toggle("bg-black");
  menuActive?.classList.toggle("bg-white");

  menu?.classList.toggle("right-0");
  menu?.classList.toggle("lg:right-full");
};

const links = ref([
  {
    label: "HOME",
    link: "/"
  },
  {
    label: "BLOG",
    link: "/blog"
  },
  {
    label: "PORTFOLIO",
    link: "/portfolio"
  },
  {
    label: "ABOUT",
    link: "/about"
  },
  {
    label: "CONTACT",
    link: "/contact"
  },

])

</script>

<template>
  <div
    class="lg:w-screen lg:h-screen lg:fixed bg-white z-30 lg:right-full transition-all flex"
    id="menu-full"
  >
    <div class="lg:px-44 py-24 flex flex-col gap-12 w-3/4">
      <router-link
        v-for="(menuLink, index) in links"
        :key="index"
        :to="menuLink.link"
        @click="handleActiveMenu"
      >
        <NavigationLink>
          {{ menuLink.label }}
        </NavigationLink>
      </router-link>
    </div>
    <div class="lg:px-44 py-24">
      <label
        class="hover:text-primary hover:fill-primary transition-all text-black flex items-center cursor-pointer gap-2"
        @click="handleActiveMenu"
      >
        <CloseIcon />
        <span class="font-light font-secondary text-md">
          CLOSE
        </span>
      </label>
    </div>
  </div>
  <div
    class="lg:w-20 lg:h-screen border-r border-x-gray-800 lg:fixed flex justify-center items-center bg-black z-40"
    id="menu-active"
    @click="handleActiveMenu"
  >
    <IconMenu />
  </div>
</template>
