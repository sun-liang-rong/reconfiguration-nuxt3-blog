<template>
  <div>
    <Head>
    <Meta name="keywords" :content="blogContent.title"></Meta>
  </Head>
  <div>
    <div class="box">
      <!-- <div class="leftBox"></div> -->
      <!-- <MdEditor v-model="blogContent.htmlcontent" /> -->
      <!-- <MdPreview editorId="preview-only" :modelValue="blogContent.htmlcontent" /> -->
      <!-- <div class="html-content">
        <h2 class="title">{{ blogContent.title }}</h2>
        <md-editor v-show="false" preview-theme="default" />
        <div
          class="md-preview default-theme"
          v-html="blogContent.htmlcontent"
        ></div>
        <space :height="'50'" />
        <p style="color: #aaa; text-align: center">我也是有底线的~</p>
        <space :height="'20'" />
      </div> -->
      <!-- <div class="rightBox">
        
      </div> -->
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { service } from "@/utils/request";
// import {MdEditor, MdPreview} from "md-editor-v3";
// import 'md-editor-v3/lib/style.css';

//html-content md-preview default-theme
interface BlogContent {
  content: string;
  cover: string;
  create_at: string;
  htmlcontent: string;
  id: string;
  intrduce: string;
  tag: any;
  title: string;
  update_at: string;
}
const route = useRoute();
const theme = ref<string>("dark");
const text = ref("");
const blogContent = ref<BlogContent>({});
const isTopShow = ref<boolean>(false);
console.log(route.params.id, "route.params.id");
let params = {
  search: {
    id: route.params.id,
  },
};
onMounted(() => {
  // 监听页面滚动
  window.onscroll=pageScroll;
})
onBeforeMount(() => {
  window.scrollTo(0, 0)
})
const pageScroll = () => {
  // 获取滚动的距离
  let scrollTop = document.documentElement.scrollTop;
  // 获取滚动的高度（获取整个html的高度）
  let scrollHeight = document.documentElement.scrollHeight;
  // 获取屏幕(浏览器)高度
  let clienHeight = document.documentElement.clientHeight;
  console.log(scrollTop, "获取滚动的距离")
  console.log(scrollHeight, "获取滚动的高度")
  console.log(clienHeight, "获取屏幕(浏览器)高度")
  // 滚动的距离 + 屏幕高度 - 内容高度 >= 0 表示滚动到底部了      (下拉加载判断条件)
  if (scrollTop >= 400) {
    console.log("我到底了");
    isTopShow.value = true
    console.log(route.path, 'route.path')
  }
  if(scrollTop <= 200){
    isTopShow.value = false
  }
  // if (scrollTop < clienHeight + 300) {
  //   console.log("我到底了2222222",scrollTop + clienHeight - scrollHeight >= -scrollHeight + 1000);
  //   isTopShow.value = false
  //   console.log(route.path, 'route.path')
  // }
}
const data = await service.get(`/blog`, { params })
blogContent.value = data.data.data.data[0]
console.log(data.data.data, 'data.data.data')
console.log(blogContent.value, 'blogContent.value')
//回到顶部事件
const scroolTop = () => {
  let scrollTop = document.documentElement.scrollTop;
  console.log(scrollTop, "回顶部之前的距离")
  const timeId = setInterval(() => {
    if(scrollTop <= 0){
      return
    }
    scrollTop = scrollTop - 50
    window.scrollTo(0, scrollTop)
  },10)
  console.log(scrollTop, "scrollTop")
  if(scrollTop <= 0 ){
    clearInterval(timeId)
  }
  window.scrollTo(0, scrollTop)
}
</script>

<style scoped>
.box {
  width: 100%;
  /* background: #fff; */
  padding-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.html-content {
  width: 720px;
  line-height: 30px;
  text-align: left;
  letter-spacing: 1px;
}

.html-content .title {
  letter-spacing: 2px;
}

.text-content {
  font-size: 14px;
  line-height: 25px;
}
.rightBox {
  flex: 1;
 
}
.scrolltop {
  width: 62px;
  height: 84px;
  position: fixed;
  bottom: 100px;
  right: 50px;
  cursor: pointer;
  background-image: url(@/assets/images/space-to-top.png);
  background-position:-40px -40px;;
}
.leftBox {
  flex: 1;
/* width: 100%; */
}
</style>
