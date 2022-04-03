<script setup lang="ts">
  const props = defineProps<{
    attempts: {
      type: Array<object>
    },
  }>()
</script>

<template>
  <div id="list">
    <div v-if="props.attempts.length > 0">
      <ul>
        <li v-for="attempt in props.attempts">{{ attempt[0] }} : {{ attempt[1] }} pt<span v-if="attempt[1] > 1">s</span></li>
      </ul>
    </div>
    <div v-else class="none">Aucune combinaison renseign&eacute;e</div>
  </div>
</template>

<style scoped>
  #list {
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-top: 10px;
    color: #5fbe9e;
  }

  .none {
    color: #869b93;
  }
</style>
