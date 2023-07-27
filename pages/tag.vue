<template>
  <div class="tag-content animate__flipOutY">
    <div class="tags-box">
      <div class="tags-title">
        <span v-for="(item, index) in tagsValue" :key="index">
          <Tags :tags="item.name" :type="+index % 3 == 0 ? 'success' : +index % 2 == 0 ? 'error' : +index % 5 == 0 ? 'warning' : 'info'"/>
        </span>
      </div>
      <div>
        <TimeLine />
      </div>
      <div class="blog-content">
        <div v-for="(item, index) in blogList">
          <space :height="'20'" />
          <card @click="toBlog(item.id)" :title="item.title" :id="item.id" :cover="item.cover" :tag="item.tag"
            :createTime="item.create_at" />
          <space v-show="Number(blogList.length - 1) == index" :height="'20'" />
        </div>
        <space :height="'20'" />
        <p style="color: #aaa;text-align: center;">我也是有底线的~</p>
        <space :height="'20'" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { service } from '@/utils/request';
interface TagParams {
  create_at: string;
  grade: string;
  id: string;
  name: string;
  superiors: any;
  update_at: string;
}
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
  search?: {
    tag: number
  };
}
const router = useRouter()
let blogList = reactive<ListData []>([])
let tagsValue = reactive<TagParams>({
  create_at: "",
  grade: "",
  id: "",
  name: "",
  superiors: [],
  update_at: ""
})
const par = reactive<Params1>({
  limit: '10',
  page: 1
})
onMounted(async () => {
  console.log("onMounted")
  await getBlogList()
  window.scrollTo(0,0)
})
const params = {
  search: {
    grade: "2"
  },
  limit: "100",
  page: "1",
}
const data = await service.get('/tags', { params })
tagsValue = data.data.data.data
const deleteTag = () => {
  if(par.search != undefined){
    delete par.search
    getBlogList()
  }
}
const dotoItem = (item: any) => {
  par.search = {
    tag: item.id
  }
  blogList.length = 0
  getBlogList()
}
const toBlog = (id: string) => {
  console.log(router, 'router')
  router.push('/Blog/' + id)
}
const getBlogList = async () => {
  const res = await service.get('/blog', {params: par})
  console.log(res, 'search')
  blogList.push(...res.data.data.data)
  console.log(blogList, 'blogList')
}
</script>

<style lang="less" scoped>
@import '@/assets/theme.less';
.tag-content {
  width: 100%;
  /* margin-top: 50px; */
  /* display: flex;
  justify-content: center; */
}
.tags-box {
  box-sizing: border-box;
  padding: 20px;
  // max-width: 720px;
}
.tags-title {
  padding: 10px 0;
  // background: rgba(@primaryCardColor, 1);
  border-radius: 10px;
  // box-shadow: 0 0 5px rgba(@primaryBoxShadow, 0.5);
  display: flex;
  gap: 10px;
  box-sizing: border-box;
  /* justify-content: ; */
  flex-wrap: wrap;
}
</style>
