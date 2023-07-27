<template>
  <div class="avatarcard">
    <div class="card-img">
      <img src="@/assets/images/19.jpg" alt="头像">
    </div>
    <div class="title-name">
      万万早睡
    </div>
    <div class="content-tag">
      <div class="content-tag-num1">
        <div>文章</div>
        <div>{{nlength}}</div>
      </div>
      <div class="content-tag-num2">
        <div>标签</div>
        <div>{{tagMax}}</div>
      </div>
    </div>
    <div class="color-tag">
      <span class="tag-span" v-for="item in tagsValue">
        {{item.name}}
      </span>
    </div>
    <div class="beian">
      <span>京ICP备2022018355号</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({nlength: {type: String},tagMax: {type: String}, tagsValue:{type: Object}})
// import { NSpace, NTag } from 'naive-ui'
//nlength


</script>

<style lang="less" scoped>
@import '@/assets/theme.less';
  .avatarcard {
    width: 300px;
    margin: 0 0 0 20px;
    border-radius: 15px;
    background: rgba(@primaryCardColor, 1);
    box-shadow: 0 0 10px rgba(@primaryBoxShadow, 0.5);
  }
  .card-img {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px 0  0  0;
  }
  .card-img img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 0 10px rgba(@primaryBoxShadow, 0.5);
  }
  .title-name {
    text-align: center;
    font-weight: 700;
    font-size: 16px;
    margin-top: 5px;
  }
  .content-tag {
    width: 100%;
    padding: 5px 0;
    /* background: pink; */
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    font-size: 16px;
    /* font-weight: 700; */
  }
  .content-tag-num1 {
   text-align: center;
  }
  .color-tag {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
  }
  .tag-span {
    height: 20px;
    line-height: 16px;
    padding: 2px 10px;
    display: inline-block;
    border-radius: 5px;
    color: rgba(@primaryTextColor, 1);
    background: linear-gradient(135deg, #FAB2FF, #1904E5);
    text-align: center;
      
  }
  .beian {
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
