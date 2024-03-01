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
              viewBox="0 0 24 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.0004 0.560547V2.70549C9.55468 3.13576 8.50042 4.47504 8.50042 6.06055C8.50042 6.9452 8.82863 7.7532 9.36993 8.36941L5.90001 13.7155C5.1043 13.1842 4.38162 12.5517 3.75016 11.8363L3.08843 11.0865L1.58895 12.41L2.25068 13.1597C3.00159 14.0105 3.86249 14.7624 4.81114 15.3932L0.617188 21.8549L2.29481 22.9437L6.56085 16.371C8.21569 17.1344 10.0584 17.5605 12.0004 17.5605C13.9424 17.5605 15.7852 17.1344 17.4401 16.3709L21.706 22.9437L23.3837 21.8549L19.1898 15.3931C20.1384 14.7624 20.9993 14.0105 21.7502 13.1597L22.4119 12.41L20.9124 11.0865L20.2507 11.8363C19.6193 12.5517 18.8966 13.1841 18.1009 13.7155L14.631 8.36927C15.1723 7.75307 15.5004 6.94513 15.5004 6.06055C15.5004 4.47504 14.4462 3.13576 13.0004 2.70549V0.560547H11.0004ZM12.7785 7.34326L12.8528 7.29501C13.2441 7.02432 13.5004 6.57237 13.5004 6.06055C13.5004 5.23212 12.8289 4.56055 12.0004 4.56055C11.172 4.56055 10.5004 5.23212 10.5004 6.06055C10.5004 6.57092 10.7553 7.02176 11.1447 7.29271L11.2258 7.34533C11.4519 7.48194 11.717 7.56055 12.0004 7.56055C12.2853 7.56055 12.5516 7.48114 12.7785 7.34326ZM12.9376 9.43368L16.3378 14.6726C15.007 15.2442 13.5408 15.5605 12.0004 15.5605C10.4601 15.5605 8.99396 15.2442 7.66313 14.6727L11.0635 9.43373C11.3617 9.51638 11.6759 9.56055 12.0004 9.56055C12.325 9.56055 12.6393 9.51636 12.9376 9.43368Z"
                fill="#7F7F7F"
              />
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