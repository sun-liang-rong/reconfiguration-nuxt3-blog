<template>
  <div class="container animate__slideInUp">
    <!-- <space :height="'10'" /> -->
    <div class="header-box">
      <div class="left-box animate__flipOutY">
        <div class="swiper-box">
          <swiper
          :effect="'cards'"
          :grabCursor="true"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide>
            <img src="../assets//images/1.png" alt="">
          </swiper-slide>
          <swiper-slide>
            <img src="../assets//images/2.png" alt="">
          </swiper-slide>
          <swiper-slide>
            <img src="../assets//images/3.png" alt="">
          </swiper-slide>
          <swiper-slide>
            <img src="../assets//images/4.png" alt="">
          </swiper-slide>
          <swiper-slide>
            <img src="../assets//images/5.png" alt="">
          </swiper-slide>
          <swiper-slide>
            <img src="../assets//images/6.png" alt="">
          </swiper-slide>
        </swiper>
        </div>
        <space :height="'20'" />
        <div class="blog-card">
          <div v-for="item in list">
            <card
              @click="toBlog(item.id)"
              :title="item.title"
              :id="item.id"
              :cover="item.cover"
              :tag="item.tag"
              :createTime="item.create_at"
            />
            <space :height="'20'" />
          </div>
        </div>
      </div>
      <div class="right-box animate__flipOutY">
        <avatar-card
          :nlength="blogMax"
          :tagMax="tagMax"
          :tagsValue="tagsValue"
        ></avatar-card>
        <space :height="'20'" />
        <love-card></love-card>
      </div>
    </div>
    <!-- <top-scroll></top-scroll> -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards } from "swiper/modules";
import { service } from "@/utils/request";
import Loading from "@/components/Loading.vue";
// require('dotenv').config()
// import dotenv from 'dotenv'
// 通过process.env即可使用
// console.log(dotenv.config, 'dotenv')
// console.log(process.env.APIHOST) // http://your_server.com/api
interface ListData {
  title: string;
  create_at: string;
  tag: any;
  cover: string;
  intrduce: string;
  htmlcontent: string;
  update_at: string;
  id: string;
}
interface Params1 {
  limit: string;
  page: number;
  search: any;
}
const modules = ref([EffectCards]);
const tagsValue = ref({});
const router = useRouter();
const route = useRoute();
let list = reactive<ListData []>([]);
const blogMax = ref("");
const tagMax = ref("");
const bgNumber = ref<number>(1);
const toBlog = (id: String) => {
  console.log(router, "router");
  router.push("/Blog/" + id);
};
// console.log(process.env.BASE_URL)
const par = reactive<Params1>({
  limit: "5",
  page: 1,
  search: {},
});

// console.log(data, 'datatdatata')
// tagsValue.value = data.data.data.data[0]
console.log();
onMounted(async () => {
  window.scrollTo(0, 0);
  bgNumber.value = Math.round(Math.random() * 11 + 1);
  await getBlogList();
  // 监听页面滚动
  window.onscroll = pageScroll;
  // window.onscroll=pageScroll;
});
const getBlogList = async () => {
  const res = await service.get(`blog`, { params: par });
  console.log(res.data.data, "res.data.data.data");
  blogMax.value = res.data.data.totals;
  list.push(...res.data.data.data);
  console.log(list, "listlist");
};

const pageScroll = () => {
  if (route.path === "/") {
    // 获取滚动的距离
    let scrollTop = document.documentElement.scrollTop;
    // 获取滚动的高度（获取整个html的高度）
    let scrollHeight = document.documentElement.scrollHeight;
    // 获取屏幕(浏览器)高度
    let clienHeight = document.documentElement.clientHeight;
    // 滚动的距离 + 屏幕高度 - 内容高度 >= 0 表示滚动到底部了      (下拉加载判断条件)
    if (scrollTop + clienHeight - scrollHeight >= 0) {
      console.log("我到底了");
      console.log(route.path, "route.path");
      par.page++;
      getBlogList();
      // this.offset++;
      // //滚动至底部后请求数据
      // this.getDataList();
    }
  }
};

let params = {
  search: { grade: "2" },
  limit: "100",
};
const res1 = await service.get(`/tags`, { params });
console.log(res1.data.data.data.totals, "res1.data.data.data");
tagsValue.value = res1.data.data.data;
tagMax.value = String(res1.data.data.totals || 11);
// console.log(res1.data,"res1res2", tagsValue.value)
</script>

<style lang="less" scoped>
@import '@/assets/theme.less';
.container {
  // margin-top: 10px;
}
.header-box {
  display: flex;
  justify-content: center;
  margin: 0 20px;
}

.content {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
@media screen and (min-width: 0px) and (max-width: 1000px) {
  .right-box {
    display: none;
  }
}
.right-box {
  margin-top: 20px;
}
.left-box {
  overflow: hidden;
  max-width: 1000px;
  border-radius: 15px;
  padding: 0 10px;
  // border: 1px solid #fff;
}
.swiper-box {
  background: var(--primaryCardColor, 1);
  margin-top: 20px;
  width: 100%;
  height: 350px;
  overflow: hidden;
  border-radius: 15px;
  padding: 20px 60px 20px 10px;
  box-sizing: border-box;
  box-shadow: 0 0 10px var(--primaryBoxShadow, 0.5);
}
.swiper {
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}

.swiper-slide:nth-child(1n) {
  background-color: rgb(206, 17, 17);
}

.swiper-slide:nth-child(2n) {
  background-color: rgb(0, 140, 255);
}

.swiper-slide:nth-child(3n) {
  background-color: rgb(10, 184, 111);
}

.swiper-slide:nth-child(4n) {
  background-color: rgb(211, 122, 7);
}

.listcard {
}
</style>
