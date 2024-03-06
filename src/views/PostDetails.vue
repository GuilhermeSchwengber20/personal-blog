<template>
    <div class="bg-gradient-to-b from-black to-background lg:h-auto lg:w-full lg:pl-24 lg:pr-8 lg:py-5 flex flex-col">
        <img :src="post.urlToImage" class="w-full h-96 rounded-md object-cover" loading="lazy"/>
        <div class="flex flex-col justify-start">
            <h2 class="font-primary text-2xl uppercase font-bold text-white lg:py-6 lg:px-32">
                {{ post.title }}
            </h2>
            <div class="flex lg:gap-10 lg:px-10">
                <div 
                    @click="backToHome"
                    class="cursor-pointer lg:min-w-12 lg:min-h-12 lg:max-w-12 lg:max-h-12 rounded-full text-center bg-primary flex justify-center items-center "
                >
                    <ArrowLeftIcon  />
                </div>
                <p class="text-[#7C7C7C] font-secondary font-normal lg:mx-2 text-justify">
                    {{ post.content }}  
                </p>

            </div>
        </div>
        
    </div>
</template>



<script setup lang="ts">
import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon.vue";
import { ref, onMounted } from "vue";

import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";


const store = useStore();
const route = useRoute();
const router = useRouter();

const post = ref({});

onMounted(() => {
    const index : Number = route.params.index;

    console.log(index);

    const posts = store.state.posts;

    if(index >= 0 && index < posts.length) {
        post.value = posts[index];
    }
})



const backToHome = () => {
    router.go(-1);
}
</script>