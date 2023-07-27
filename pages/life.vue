<template>
  <div class="animate__flipOutY">
    <div class="topBox"></div>
    <div class="container">
      <div></div>
      <div class="liftContent">
        <h2>总览</h2>
        <div class="liftContentBox">
          <div class="lifeImg">
            <div class="liftTextBox">
              <p class="lifetext">“上海”</p>
            </div>
            <img src="@/assets/images/1.png" alt="上海"/>
          </div>
          <div class="lifeImg">
            <div class="liftTextBox">
              <p class="lifetext">“北京”</p>
            </div>
            <img src="@/assets/images/2.png" alt="北京"/>
          </div>
          <div class="lifeImg">
            <div class="liftTextBox">
              <p class="lifetext">“南京”</p>
            </div>
            <img src="@/assets/images/3.png" alt="南京"/>
          </div>
          <div class="lifeImg">
            <div class="liftTextBox">
              <p class="lifetext">“苏州”</p>
            </div>
            <img src="@/assets/images/4.png" alt="苏州"/>
          </div>
          <div class="lifeImg">
            <div class="liftTextBox">
              <p class="lifetext">“合肥”</p>
            </div>
            <img src="@/assets/images/5.png" alt="合肥"/>
          </div>
          <div class="lifeImg">
            <div class="liftTextBox">
              <p class="lifetext">“芜湖”</p>
            </div>
            <img src="@/assets/images/6.png" alt="芜湖"/>
          </div>
        </div>
      </div>
      <div></div>
    </div>
    <space :height="'40'" />
  </div>

</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
interface city {
  cityName: string
}
const cityList = reactive([])
cityList.push(...[{ cityName: "上海",img :"@/assets/images/1.png" }, { cityName: "北京" }, { cityName: "南京" }, { cityName: "苏州" }, { cityName: "合肥" }, { cityName: "芜湖" }])
onMounted(() => {
  window.scrollTo(0,0)
})
</script>

<style lang="less" scoped>
@import '@/assets/theme.less';
.container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.topBox {
  height: 20px;
}

.liftContent {
  /* width: 100%;
  display: flex;
  justify-content: space-evenly; */
  /* width: 810px; */
  width: 80%;
}

.liftContentBox {

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

}

.lifeImg {
  overflow: hidden;
  max-width: 300px;
  max-height: 200px;
  border-radius: 15px;
  position: relative;
  box-shadow: 0 0 5px rgba(@primaryBoxShadow, 0.5);
  margin: 10px 10px 10px 10px;
}

.lifeImg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.5s;
}
.lifeImg:hover img {
  transform: scale(1.3);
}

.lifeImg .liftTextBox {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
}

.lifeImg .liftTextBox .lifetext {
  color: #fff;
  font-size: 36px;
  font-family: NotoSansHans-Black;
  text-indent: 20px;
  font-weight: 700;
  letter-spacing: 20px;
  line-height: 250px;
  text-align: center;
  /* font-family: ; */
}
</style>
