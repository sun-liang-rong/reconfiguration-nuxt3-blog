<template>
  <div class="lovecard">
    <div class="love-content">
      <div class="grils">
        <img src="@/assets/images/grils.jpeg" alt="女生头像">
      </div>
      <div class="aixin">❤️</div>
      <div class="boy">
        <img src="@/assets/images/boy.jpeg" alt="男生头像">
      </div>
    </div>
    <div class="love-tiem">
      {{ loveTime.day }} 天 {{ loveTime.hour }} 时 {{ loveTime.minute }} 分 {{ loveTime.second }} 秒
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
interface LoveTime {
  day: number;
  hour: number;
  minute: number;
  second: number;
}
const loveTime = reactive<LoveTime>({
  day: 0,
  hour: 0,
  minute: 0,
  second: 0
})
onMounted(() => {
  setInterval(() => { calculateDiffTime() }, 1000)
})
const calculateDiffTime = () => {
  let startTime = 1536302464000 //
  let endTime = new Date().getTime() //2032-08-16 17:51
  let runTime = parseInt((endTime - startTime) / 1000);
  // var year = Math.floor(runTime / 86400 / 365);
  // runTime = runTime % (86400 * 365);
  // var month = Math.floor(runTime / 86400 / 30);
  // runTime = runTime % (86400 * 30);
  let day = Math.floor(runTime / 86400);
  runTime = runTime % 86400;
  let hour = Math.floor(runTime / 3600);
  runTime = runTime % 3600;
  let minute = Math.floor(runTime / 60);
  runTime = runTime % 60;
  let second = runTime;
  loveTime.day = day;
  loveTime.hour = hour;
  loveTime.minute = minute;
  loveTime.second = second
};
</script>

<style lang="less" scoped>
@import '@/assets/theme.less';
.lovecard {
  width: 300px;
  height: 150px;
  background: var(--primaryCardColor, 1);
  margin: 0 0 0 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px var(--primaryBoxShadow, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.aixin {
  animation: scaleDraw 2s linear infinite;
}

@keyframes scaleDraw {
  /*定义关键帧、scaleDrew是需要绑定到选择器的关键帧名称*/

  0% {

    transform: scale(1);
    /*开始为原始大小*/

  }

  25% {

    transform: scale(0.8);
    /*放大1.1倍*/

  }

  50% {

    transform: scale(0.6);

  }

  75% {

    transform: scale(0.8);

  }

}

.love-content {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.love-content .grils {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 0 5px var(--primaryBoxShadow, 0.5);
}

.love-content .grils img {
  width: 50px;
  height: 50px;
  border-radius: 50%;

}

.love-content .boy {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 0 5px var(--primaryBoxShadow, 0.5);
}

.love-content .boy img {
  width: 50px;
  height: 50px;
  border-radius: 50%;

}

.love-tiem {
  font-size: 18px;
  text-align: center;
}
</style>
