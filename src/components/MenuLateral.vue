<script setup lang="ts">
import CloseIcon from "@/components/icons/CloseIcon.vue";
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

</script>

<template>
  <div
    class="lg:w-screen lg:h-screen lg:fixed bg-white z-30 lg:right-full transition-all flex"
    id="menu-full"
  >
    <div class="lg:px-44 py-24 flex flex-col gap-12 w-3/4">
      <span
        class="text-[#C1C1C1] font-primary lg:text-6xl font-bold cursor-pointer transition-all ease-in delay-50 hover:text-primary"
        >HOME</span
      >
      <span
        class="text-[#C1C1C1] font-primary lg:text-6xl font-bold cursor-pointer transition-all ease-in delay-50 hover:text-primary"
        >BLOG</span
      >
      <span
        class="text-[#C1C1C1] font-primary lg:text-6xl font-bold cursor-pointer transition-all ease-in delay-50 hover:text-primary"
        >PORTFOLIO</span
      >
      <span
        class="text-[#C1C1C1] font-primary lg:text-6xl font-bold cursor-pointer transition-all ease-in delay-50 hover:text-primary"
        >ABOUT</span
      >
      <span
        class="text-[#C1C1C1] font-primary lg:text-6xl font-bold cursor-pointer transition-all ease-in delay-50 hover:text-primary"
        >CONTACT</span
      >
    </div>
    <div class="lg:px-44 py-24">
        <label class="hover:text-primary hover:fill-primary transition-all text-black flex items-center cursor-pointer gap-2" @click="handleActiveMenu">
            <CloseIcon />
            <span class="font-light font-secondary text-md">CLOSE</span>            
        </label>
    </div>
  </div>
  <div
    class="lg:w-20 lg:h-screen border-r border-x-gray-800 lg:fixed flex justify-center items-center bg-black z-40"
    id="menu-active"
  >
    <svg
      id="icon-menu"
      class="fill-white hover:fill-primary ease-in transition-transform hover:scale-150"
      width="32"
      height="72"
      viewBox="0 0 32 72"
      fill="current"
      xmlns="http://www.w3.org/2000/svg"
      @click="handleActiveMenu"
    >
      <rect x="17" y="14" width="2" height="44" fill="current" />
      <rect x="12" y="14" width="2" height="44" fill="current" />
    </svg>
  </div>
</template>
