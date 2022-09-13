<template>
  <!--  <header>-->
  <!--    <div class="wrapper">-->
  <!--      <nav>-->
  <!--        <RouterLink to="/">Home</RouterLink>-->
  <!--        <RouterLink to="/button">About</RouterLink>-->
  <!--      </nav>-->
  <!--    </div>-->
  <!--  </header>-->
  <Home />
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Home from "@/views/home/index.vue";
</script>

<style scoped></style>
