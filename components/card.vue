<template>
  <div class="card" :style="'width:'+ width+'px;'">
    <div class="card-content">
      <div class="content-title">{{title}}</div>
      <div>{{dayjs(createTime).format('YYYY-MM-DD HH:mm:ss')}}</div>
      <div class="tags-item">
        <span class="tags">
          {{tag?.name}}
        </span>
      </div>
    </div>
    <div class="card-img">
      <img style="width: 100px;height: 100px;border-radius: 5px;" :src="cover" alt="���ﲩ��">
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import dayjs from 'dayjs'
const props = defineProps({width:{type: String, default:'800px'}, title: { type: String }, id: { type: String }, cover: { type: String },createTime: { type: String }, tag: { type: Object }})
</script>

<style lang="less" scoped>
@import '@/assets/theme.less';
  .card {
    box-sizing: border-box;
    // max-width: 800px;
    background: var(--primaryCardColor, 1);
    min-height: 80px;
    border-radius: 15px;
    /* margin: 0 20px; */
    padding: 20px 20px;
    display: flex;
    /* flex-direction: column; */
    justify-content: space-between;
    box-shadow: 0 0 10px var(--primaryBoxShadow, 0.2);
    cursor: pointer;
  }
  .card .card-content {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .card .card-content .content-title {
    font-size: 20px;
    font-weight: 700;
  }

  .tags {
    padding: 2px 8px;
    text-align: center;
    height: 20px;
    border-radius: 4px;
    color: #fff;
    background: linear-gradient(135deg, #EEAD92, #6018DC);
  }
</style>
