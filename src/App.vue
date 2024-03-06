<script setup lang="ts">
import MenuLateral from "@/components/MenuLateral.vue";
// import Home from "@/views/Home.vue"
</script>

<template>
  <div class="bg-background dark w-screen h-screen flex flex-col">
    <MenuLateral />
    <router-view></router-view>
  </div>
</template>
<style scoped>
</style>
