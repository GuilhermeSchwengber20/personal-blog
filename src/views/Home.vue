<script lang="ts" setup>
  import { onMounted, ref } from 'vue'
  import { useStore } from 'vuex'
  import CardHeaderHome from '@/components/CardHeaderHome.vue'
  // import PostCard from "@/components/PostCard.vue";

  import { useRouter } from 'vue-router'

  const router = useRouter()
  const store = useStore()
  const Posts = ref([])

  onMounted(async () => {
    await store.dispatch('fetchPosts')
    Posts.value = store.state.posts
  })

  // Função para obter o caminho da imagem
  const getImageSrc = (name: string): string => {
    return new URL(name, import.meta.url).href
  }

  // Função para determinar a classe da grade
  const getGridClass = (index: number): string => {
    return (index + 1) % 6 === 1 || (index + 1) % 6 === 0
      ? 'col-span-2'
      : 'col-span-1'
  }

  const navigateToPostDetails = (index: number) => {
    console.log(`Navigating to PostDetails with index: ${index}`)
    router.push({ name: 'PostDetails', params: { index: index } })
  }
</script>

<template>
  <CardHeaderHome />
  <div
    class="bg-gradient-to-b from-black to-background lg:h-auto lg:w-full lg:px-28 lg:py-20"
  >
    <div class="grid lg:grid-cols-2 gap-10 w-full">
      <!-- <PostCard /> -->
      <span
        v-for="(post, index) in Posts"
        :key="index"
        :class="`${getGridClass(
          index,
        )} group relative flex lg:h-[600px] items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg`"
        @click="navigateToPostDetails(index)"
      >
        <img
          :src="getImageSrc(post.urlToImage)"
          class="absolute inset-0 h-full w-full object-cover object-center transition duration-150 ease-in group-hover:scale-110"
          loading="lazy"
        />
        <div
          class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"
        ></div>

        <div
          class="flex flex-col lg:ml-4 lg:mb-6 justify-start items-start relative lg:gap-2"
        >
          <span
            class="inline-block text-lg font-primary uppercase font-medium text-white"
          >
            {{ post.title }}
          </span>
          <span
            class="inline-block text-sm uppercase font-secondary text-white"
          >
            {{ post.description }}
          </span>
        </div>
      </span>
    </div>
  </div>
</template>
