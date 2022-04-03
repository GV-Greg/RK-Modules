<script setup lang="ts">
  import { RouterLink } from 'vue-router'

  import NavModulesItem from './NavModulesItem.vue'
  import ToolingIcon from './icons/IconTooling.vue'
  import EcosystemIcon from './icons/IconEcosystem.vue'
  import CommunityIcon from './icons/IconCommunity.vue'
  import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <nav>
    <RouterLink to="/anim/code" class="item">
      <NavModulesItem>
        <template #icon>
          <img src="/src/assets/icones/anim-code.png" alt="icone anim code" height="50" width="50">
        </template>
        <template #heading>Code</template>
      </NavModulesItem>
    </RouterLink>
    <RouterLink to="/anim/joutes" class="item">
      <NavModulesItem>
        <template #icon>

        </template>
        <template #heading>Joutes</template>
      </NavModulesItem>
    </RouterLink>
  </nav>
</template>

<style scoped>
  nav {
    height: 80px;
    padding: 0;
    display: flex;
    justify-content: center;
  }

  nav a {
    text-decoration: none;
    color: hsla(160, 100%, 37%, 1);
    transition: 0.4s;
  }

  nav a.router-link-exact-active {
    color: var(--color-text);
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }

  .item {
    height: 80px;
    width: 80px;
    padding: 5px 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: 0;
    height: 80px;
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    right: 0;
    bottom: 0;
    height: 80px;
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
</style>