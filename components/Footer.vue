<template>
  <div class="footer">
    <div class="beian">
      <div>©2019 - 2020 By Shn Power by Vuepress & 浙ICP备18029315号-2</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
</script>

<style lang="less" scoped>
@import '@/assets/theme.less';
  .footer {
    width: 100%;
    height: 20px;
    /* background: #333; */
    background-color: var(--primaryColor, 1);
    color: var(--primaryTextColor, 1);
  }

  .beian {
    display: flex;
    justify-content: center;
    align-items: center;
    // color: #fff;
    font-size: 10px;
  }
</style>
