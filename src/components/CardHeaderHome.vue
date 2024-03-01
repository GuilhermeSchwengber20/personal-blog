<script setup lang="ts">
import { Avatar } from "@/components/ui/avatar";
</script>
<template>
    <!-- CARD HEADER HOME PAGE -->
    <div
      class="lg:px-28 lg:py-20 flex gap-9 url bg-image-custom lg:h-[45vh] w-full"
    >
      <div>
        <h1
          class="lg:scroll-m-20 font-primary text-2xl font-semibold tracking-widest uppercase lg:text-4xl text-foreground"
        >
          Guilherme Schwengber
        </h1>
        <p
          class="leading-7 [&:not(:first-child)]:mt-4 font-secondary lg:w-[869px] font-light text-lg text-textSecondary"
        >
          Guilherme é um desenvolvedor front-end trabalhando para todo o Brasil.
          Ele pode combinar suas experiencias trabalhando com
          <span class="leading-7 text-primary font-secondary">
            design e programação para resolver problemas e criar soluções.
          </span>
        </p>
        <div class="lg:mt-6">
          <span
            class="uppercase tracking-wider text-foreground font-primary text-sm"
          >
            skill
          </span>
          <div class="lg:mt-4 flex items-center gap-3">
            <svg
              width="24"
              height="23" 
              fill="#7F7F7F"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            > 
              <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/>
            </svg>
            
            <label class="text-textSecondary uppercase font-primary text-sm">
              Front-end Developer
            </label>
          </div>
        </div>
      </div>
      <!-- IMAGE -->
      <div>
        <Avatar class="lg:w-52 lg:h-52">
          <img src="../assets/images/guilherme-foto-01.jpeg" alt="@radix-vue" />
        </Avatar>
        <img
          src="../assets/images/badge-info.png"
          alt="info"
          class="lg:relative lg:left-28 lg:bottom-24"
        />
      </div>
    </div>
</template>
<style scoped>
.bg-image-custom {
  background-image: url("../assets/images/bg-header-home.png");
}
</style>