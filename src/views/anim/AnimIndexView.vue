<script setup>
  import { RouterView } from 'vue-router'
  import NavAnimModules from '../../components/NavAnimModules.vue'
</script>

<template>
  <div class="container">
    <router-view></router-view>
    <NavAnimModules />
  </div>
</template>