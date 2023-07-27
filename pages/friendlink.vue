<template>
  <div class="box animate__flipOutY">
    <div class="liuyan">
      <p class="guize">友链，申请规则</p>
      <p class="lianxi">
        如果要和本站交换友链，请按照以下格式发送到 <span class="idColor">2531636478@qq.com</span>，或在下方留言区留言
        如果我没有回复的话，可以直接滴滴QQ，一般都是我没看见
      </p>
      <div class="geshi">
        <p>
          名字： sunsunblog
        </p>
        <p>
          地址：<span class="idColor"> https://sunsunblog.top</span>
        </p>
        <p>描述： 说说我的生活</p>
        <p>头像： <span class="idColor">https://cdn.chenyingshuang.cn/index/avatar.jpg</span></p>
      </div>
    </div>
    <div class="card-content">
      <div @click="toFriend(item.alink)" class="linkcard" v-for="item in linkList" :key="item.id">
        <div class="img">
          <img :src="item.cover" alt="https://sunsunblog.top" />
        </div>
        <div class="link">
          <p class="title">{{item.title}}</p>
          <p class="detail">{{item.describe}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup >
import { service } from '@/utils/request'
import { ref } from 'vue'
const linkList = ref([])
let { data } = await service.get('/links')
console.log(data, 'datatdadadad')
linkList.value = data.data.data
console.log(linkList.value, 'linkList')
const toFriend = (link) => {
  // window.open(link)
  // window.location.href = link
  window.open(link, '_blank');
}
</script>

<style lang="less" scoped>
@import '@/assets/theme.less';

html,
body {
  width: 100%;
  height: 100%;
}

.idColor {
  color: #60AC80;
}

.box {
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;

  .liuyan {
    font-size: 14px;
    box-sizing: border-box;
    padding: 20px;
    margin: 20px 20px 0 20px;
    border-radius: 4px;
    background: rgba(@primaryCardColor, 1);
    display: flex;
    flex-direction: column;


    .guize {
      padding: 10px 0;
    }

    .lianxi {
      padding: 20px 0;


    }

    .geshi {
      border: 1px dashed rgba(@primarylinkBorderColor, 1);
      padding: 10px;
      border-radius: 5px;
    }
  }

  .card-content {
    width: 70%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .linkcard {
      margin: 10px 0 0 0;
      width: 49%;
      height: 100px;
      border-radius: 5px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background: rgba(@primaryCardColor, 1);

      &:hover {
        cursor: pointer;
      }

      .img {
        box-sizing: border-box;
        margin: 0 30px 0 10px;
        width: 70px;
        height: 70px;
        border-radius: 10px;
        overflow: hidden;
        background: pink;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .link {
        .title {
          padding: 0 0 10px 0;
          font-size: 16px;
          font-weight: 700;
          color: #60AC80;
        }

        .detail {
          font-size: 12px;
        }
      }
    }
  }

}

@media screen and (max-width: 800px) {
  .box {
    .liuyan {
      box-sizing: border-box;
    }

    .card-content {

      width: 100%;
    }
  }
}

@media screen and (max-width: 580px) {
  .box {
    .card-content {
      .linkcard {
        width: 100%;
      }
    }
  }
}
</style>
