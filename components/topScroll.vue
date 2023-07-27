<template>
  <div>
    <div :class="[flag ? 'scrolltop2' : 'scrolltop']" @click="scroolTop"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
//回到顶部事件
const num = ref(1)
console.log(num.value)
const flag = ref<boolean>(false)
const color = ref('@/assets/images/scroll-top.png')
const bacImage = reactive({ backgroundImage: `url(_nuxt/assets/images/Group${num.value}.png)` })
const scroolTop = () => {
  flag.value = false
  let scrollTop = document.documentElement.scrollTop;
  // console.log(scrollTop, "回顶部之前的距离")
  //color.value = '-468px'
  const timeId = setInterval(() => {
    
    if (scrollTop <= 0) {
      flag.value = false
      clearInterval(timeId)
      return
    }
    flag.value = true
    scrollTop = scrollTop - 35
    console.log(flag.value, '22224444')
    window.scrollTo(0, scrollTop)
  }, 15)
  // const time2Id = setInterval(() => {
  //   if(num.value >= 7){
  //     num.value = 1
  //     return
  //   }
  //   num.value ++
  //   console.log(num.value, "num.valuenum.valuenum.valuenum.value")
  // },10)
  console.log(scrollTop, "scrollTop", color.value)
  if (scrollTop <= 0) {

    flag.value = false
    console.log(flag.value, '222222')
    clearInterval(timeId)
    // clearInterval(time2Id)
  }
  // window.scrollTo(0, scrollTop)
  
}
</script>

<style scoped>
.scrolltop {
  width: 62px;
  height: 84px;
  position: fixed;
  bottom: 100px;
  right: 50px;
  cursor: pointer;
  background-image: url(@/assets/images/Group1.png);
  background-size: 100% 100%;
  /* animation: move 1.5s linear  infinite; */
    /* background-position:v-bind(color) -44px;; */
}

.scrolltop2 {
  width: 62px;
  height: 84px;
  position: fixed;
  bottom: 100px;
  right: 50px;
  cursor: pointer;
  /* background-image: url(@/assets/images/scroll-top.png); */
  /* background-size: 100% 100%; */
  animation: move 1.5s linear  infinite; 
  /* 自定义动画名称 */
  /* background-position:v-bind(color) -44px;; */
}

@keyframes move {

  /**注意这几个图片大小一定要一样，否则会出现抖动现象*/
  /*这里的0%50%100%是相对于执行时间的，最后一个图片先播放*/
  0% {
    background: url(@/assets/images/Group1.png) no-repeat;
    background-size: 100% 100%;
  }

  15% {
    background: url(@/assets/images/Group2.png) no-repeat;
    background-size: 100% 100%;
  }

  30% {
    background: url(@/assets/images/Group3.png) no-repeat;
    background-size: 100% 100%;
  }

  45% {
    background: url(@/assets/images/Group4.png) no-repeat;
    background-size: 100% 100%;
  }

  60% {
    background: url(@/assets/images/Group5.png) no-repeat;
    background-size: 100% 100%;
  }

  75% {
    background: url(@/assets/images/Group6.png) no-repeat;
    background-size: 100% 100%;
  }

  90% {
    background: url(@/assets/images/Group7.png) no-repeat;
    background-size: 100% 100%;
  }

  100% {
    background: url(@/assets/images/Group1.png) no-repeat;
    background-size: 100% 100%;
  }
}
</style>
