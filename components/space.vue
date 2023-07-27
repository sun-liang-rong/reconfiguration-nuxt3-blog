<template>
  <div class="space" :style="'height:'+ height + 'px;'"></div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({ height: { type: String }})
</script>

<style scoped>
  .space {
    width: 100%;
  }
</style>
