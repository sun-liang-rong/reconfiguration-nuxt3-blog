<template>
  <div class="tag-box">
    <span class="tags" >
      <n-tag v-bind="$attrs"> {{ tags }} </n-tag>
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NTag } from 'naive-ui'
const props = defineProps({tags: {type: String}})
</script>

<style lang="less" scoped>
  .tag-box {
    cursor: pointer;
  }
  .tags {
    cursor: pointer;
  }
</style>
