<script setup lang="ts">
import Navigation from "@/components/Navigation.vue";
// import Home from "@/views/Home.vue"
</script>

<template>
  <div class="bg-background dark w-screen h-screen flex flex-col overflow-x-hidden">
    <Navigation />
    <router-view></router-view>
  </div>
</template>
<style scoped>
</style>

<!-- LIMITAR O TANTO DE POST QUE VAI MOSTRAR NA PAGINA HOME -->
<!-- OTIMIZAR POSTS QUE APARECE NA HOME -->
<!-- BUSCAR ESTRATEGIA DE OTIMIZAÇÃO DE DESEMPENHO -->