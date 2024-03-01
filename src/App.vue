<script setup lang="ts">
import MenuLateral from "@/components/MenuLateral.vue";
import CardHeaderHome from "@/components/CardHeaderHome.vue";
import { reactive } from "vue";

const Posts = [
  {
    img: "bg-volvo",
    title: "Airbnb design",
    textPreview: "Contary to popular belief, Lorem Ipsum is not simply random text."
  },
  {
    img: "bg-airbnb",
    title: "Airbnb design",
    textPreview: "Contary to popular belief, Lorem Ipsum is not simply random text."
  },
  {
    img: "airbnb-02",
    title: "Airbnb design",
    textPreview: "Contary to popular belief, Lorem Ipsum is not simply random text."
  },
  {
    img: "airbnb-04",
    title: "Airbnb design",
    textPreview: "Contary to popular belief, Lorem Ipsum is not simply random text."
  },
  {
    img: "airbnb-04",
    title: "Airbnb design",
    textPreview: "Contary to popular belief, Lorem Ipsum is not simply random text."
  },
  {
    img: "airbnb-04",
    title: "Airbnb design",
    textPreview: "Contary to popular belief, Lorem Ipsum is not simply random text."
  },
  {
    img: "airbnb-04",
    title: "Airbnb design",
    textPreview: "Contary to popular belief, Lorem Ipsum is not simply random text."
  },
  {
    img: "airbnb-04",
    title: "Airbnb design",
    textPreview: "Contary to popular belief, Lorem Ipsum is not simply random text."
  },

]

// FORMA PARA PEGAR IMAGENS
const getImageSrc = (name : String) => {
  return new URL(`./assets/images/${name}.png`, import.meta.url).href;
}

const getGridClass = (index : number) => {
  return (index + 1) % 6 === 1 || (index + 1) % 6 === 0 ? 'col-span-2' : 'col-span-1';
}
</script>

<template>
  <div class="bg-background dark w-screen h-screen flex flex-col">
    <MenuLateral />
    <CardHeaderHome />
    <div
      class="bg-gradient-to-b from-black to-background lg:h-auto lg:w-full lg:px-28 lg:py-20"
    >
      <div class="grid lg:grid-cols-2 gap-10 w-full">
        <a 
          href="#"
          v-for="(post, index) in Posts"
          :key="index"
          :class="`${getGridClass(index)} group relative flex lg:h-[600px] items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg`"

        >
          <img 
            :src="getImageSrc(post.img)"
            class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            loading="lazy"
          />
          <div
            class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"
          >
          </div>

          <div class="flex flex-col lg:ml-4 lg:mb-6 justify-start items-start relative lg:gap-2">
            <span 
              class="inline-block text-lg font-primary uppercase font-medium text-white"
            >
              {{ post.title }}
            </span>
            <span
              class="inline-block text-sm uppercase font-secondary text-white"
            >
              {{ post.textPreview }}
            </span> 
          </div>
          
        </a>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>
