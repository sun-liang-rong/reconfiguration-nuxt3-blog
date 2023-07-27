<template #default>
  <div>
    <Head>
      <Title>孙孙博客</Title>
      <Meta name="keywords" content="孙孙,sunsun丶孙孙博客,博客孙" />
      <Meta
        name="description"
        content="这是孙孙的个人博客!是一个使用nuxt3搭建的个人博客."
      ></Meta>
      <Meta name="baidu-site-verification" content="codeva-OwDe19KXUI" />
    </Head>
    <NuxtLayout name="default">
      <div class="app animate__flipOutY">
        <iframe
          src="https://zhanyuzhang.github.io/lovely-cat/cat.html"
          frameborder="0"
          class="catIframe"
        ></iframe>
        <div class="tabtop">
          <div class="table1">
            <div class="tabs">
              <ul>
                <li @click="changTheme" v-if="isShowTheme" class="liLink1">
                  <svg
                    t="1655803605142"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="7901"
                    width="30"
                    height="30"
                  >
                    <path
                      d="M512 512m-332.8 0a332.8 332.8 0 1 0 665.6 0 332.8 332.8 0 1 0-665.6 0Z"
                      fill="#FC9709"
                      p-id="7902"
                    ></path>
                    <path
                      d="M583.9872 173.312c-15.4112-3.328-25.2928-18.688-21.9648-34.0992l20.4288-94.3616c3.328-15.4112 18.688-25.2928 34.0992-21.9648 15.4112 3.328 25.2928 18.688 21.9648 34.0992l-20.4288 94.3616c-3.328 15.4112-18.688 25.2928-34.0992 21.9648zM371.1488 195.6864c-14.4384 6.3488-31.4368-0.256-37.7856-14.6432l-38.912-88.3712c-6.3488-14.4384 0.256-31.4368 14.6432-37.7856 14.4384-6.3488 31.4368 0.256 37.7856 14.6432l38.9632 88.3712c6.3488 14.4384-0.256 31.4368-14.6944 37.7856zM212.1216 338.8928c-7.936 13.6192-25.5488 18.2784-39.2192 10.3424l-83.456-48.5888c-13.6192-7.936-18.2784-25.5488-10.3424-39.2192 7.936-13.6192 25.5488-18.2784 39.2192-10.3424l83.456 48.5888c13.6192 7.936 18.2784 25.5488 10.3424 39.2192zM167.6288 548.1984c1.5872 15.6672-9.9328 29.7984-25.6512 31.3856l-96.0512 9.728c-15.6672 1.5872-29.7984-9.9328-31.3856-25.6512-1.5872-15.6672 9.9328-29.7984 25.6512-31.3856l96.0512-9.728c15.6672-1.5872 29.7984 9.984 31.3856 25.6512zM254.6688 743.68c10.496 11.776 9.472 29.952-2.2528 40.4992l-71.9872 64.3584c-11.776 10.496-29.952 9.472-40.4992-2.2528-10.496-11.776-9.472-29.952 2.2528-40.4992l71.9872-64.3584c11.776-10.496 30.0032-9.472 40.4992 2.2528zM440.0128 850.688c15.4112 3.328 25.2928 18.688 21.9648 34.0992l-20.4288 94.3616c-3.328 15.4112-18.688 25.2928-34.0992 21.9648-15.4112-3.328-25.2928-18.688-21.9648-34.0992l20.4288-94.3616c3.328-15.4112 18.688-25.2928 34.0992-21.9648zM652.8512 828.3136c14.4384-6.3488 31.4368 0.256 37.7856 14.6432l38.9632 88.3712c6.3488 14.4384-0.256 31.4368-14.6432 37.7856-14.4384 6.3488-31.4368-0.256-37.7856-14.6432l-38.9632-88.3712c-6.4-14.4384 0.2048-31.4368 14.6432-37.7856zM811.8784 685.1072c7.936-13.6192 25.5488-18.2784 39.2192-10.3424l83.456 48.5888c13.6192 7.936 18.2784 25.5488 10.3424 39.2192-7.936 13.6192-25.5488 18.2784-39.2192 10.3424l-83.456-48.5888c-13.6192-7.936-18.2784-25.5488-10.3424-39.2192zM856.3712 475.8016c-1.5872-15.6672 9.9328-29.7984 25.6512-31.3856l96.0512-9.728c15.6672-1.5872 29.7984 9.9328 31.3856 25.6512 1.5872 15.6672-9.9328 29.7984-25.6512 31.3856l-96.0512 9.728c-15.6672 1.5872-29.7984-9.984-31.3856-25.6512zM769.3312 280.32c-10.496-11.776-9.472-29.952 2.2528-40.4992l71.9872-64.3584c11.776-10.496 29.952-9.472 40.4992 2.2528 10.496 11.776 9.472 29.952-2.2528 40.4992l-71.9872 64.3584c-11.776 10.496-30.0032 9.472-40.4992-2.2528z"
                      fill="#FC9709"
                      p-id="7903"
                    ></path>
                  </svg>
                </li>
                <li @click="changTheme" v-else class="liLink1">
                  <svg
                    t="1655803795100"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="8041"
                    width="25"
                    height="25"
                  >
                    <path
                      d="M551.41 326.72h-74.14c-10.24 0-18.56-8.3-18.56-18.54 0-10.24 8.31-18.54 18.56-18.54h74.14c10.24 0 18.56 8.3 18.56 18.54 0 10.24-8.32 18.54-18.56 18.54z"
                      fill="#F6BB42"
                      p-id="8042"
                    ></path>
                    <path
                      d="M773.93 697.54c-245.78 0-445.01-199.23-445.01-445 0-55.23 10.08-108.13 28.48-156.94C189.08 159.05 69.34 321.61 69.34 512.14c0 245.76 199.23 445 445.01 445 190.51 0 353.07-119.74 416.51-288.07-48.8 18.4-101.7 28.47-156.93 28.47z"
                      fill="#FFCE54"
                      p-id="8043"
                    ></path>
                    <path
                      d="M551.41 920.05c-245.75 0-444.98-199.23-444.98-445 0-113.41 42.44-216.91 112.26-295.48-91.61 81.5-149.35 200.28-149.35 332.57 0 245.76 199.23 445 445.01 445 132.26 0 251.05-57.74 332.55-149.37-78.57 69.85-182.08 112.28-295.49 112.28z"
                      fill="#F6BB42"
                      p-id="8044"
                    ></path>
                    <path
                      d="M736.84 308.17c0 10.24-8.31 18.54-18.55 18.54-10.22 0-18.53-8.3-18.53-18.54 0-10.24 8.32-18.54 18.53-18.54 10.24 0 18.55 8.3 18.55 18.54z"
                      fill="#4A89DC"
                      p-id="8045"
                    ></path>
                    <path
                      d="M644.14 493.59c0 10.23-8.31 18.54-18.56 18.54-10.24 0-18.53-8.32-18.53-18.54 0-10.24 8.29-18.54 18.53-18.54 10.25 0 18.56 8.3 18.56 18.54z"
                      fill="#48CFAD"
                      p-id="8046"
                    ></path>
                    <path
                      d="M959.33 270.79c0 10.24-8.31 18.54-18.53 18.54-10.24 0-18.56-8.3-18.56-18.54 0-10.24 8.31-18.54 18.56-18.54 10.22 0 18.53 8.29 18.53 18.54z"
                      fill="#ED5564"
                      p-id="8047"
                    ></path>
                    <path
                      d="M625.58 85.37c0 10.24-8.29 18.54-18.53 18.54-10.24 0-18.56-8.3-18.56-18.54 0-10.23 8.31-18.53 18.56-18.53 10.25 0 18.53 8.3 18.53 18.53z"
                      fill="#AC92EB"
                      p-id="8048"
                    ></path>
                    <path
                      d="M514.35 234c-10.24 0-18.56 8.31-18.56 18.54V363.8c0 10.23 8.31 18.53 18.56 18.53 10.22 0 18.53-8.3 18.53-18.53V252.54c0-10.23-8.31-18.54-18.53-18.54z"
                      fill="#FFCE54"
                      p-id="8049"
                    ></path>
                    <path
                      d="M829.55 437.96c-10.24 0-18.53 8.3-18.53 18.54v111.24c0 10.24 8.29 18.54 18.53 18.54 10.24 0 18.53-8.3 18.53-18.54V456.51c-0.01-10.25-8.29-18.55-18.53-18.55z"
                      fill="#F6BB42"
                      p-id="8050"
                    ></path>
                    <path
                      d="M866.63 530.67h-74.17c-10.24 0-18.53-8.3-18.53-18.53 0-10.24 8.29-18.54 18.53-18.54h74.17c10.24 0 18.53 8.3 18.53 18.54 0 10.22-8.28 18.53-18.53 18.53z"
                      fill="#FFCE54"
                      p-id="8051"
                    ></path>
                  </svg>
                </li>
                <li
                  class="liLink"
                  v-for="(item, index) in tagList"
                  :key="index"
                >
                  <nuxt-link
                    to=""
                    v-show="item.name != 'GitHub'"
                    @click="clickTag(index, item.path)"
                    >{{ item.name }}</nuxt-link
                  >
                  <a
                    v-show="item.name == 'GitHub'"
                    style="color: pink; text-decoration: none"
                    target="_blank"
                    :href="item.path"
                    >Github</a
                  >
                  <span v-show="item.path == actions"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="container">
          <NuxtPage />
        </div>
        <!-- <top-scroll></top-scroll> -->
      </div>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, nextTick } from "vue";
const isShowTheme = ref<boolean>(true);
const flag = ref<boolean>(false);
const active = ref<number>(0);
const router = useRouter();
const route = useRoute();
const title = ref("sunsun-blog");
console.log(process.env)
useHead({
  link: [
    {
      rel: "shortcut icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
  ],
});
onMounted(() => {
  window.addEventListener("scroll", handleScrollx, true);
});

const changTheme = () => {
  console.log("我被点击了");
      const html = document.querySelector('html')
      const currentTheme = html.getAttribute('data-theme')
      const nextTheme = currentTheme === 'light' ? 'dark' : 'light'
      nextTheme == 'dark' ? isShowTheme.value = true : isShowTheme.value = false
      html.setAttribute('data-theme', nextTheme)
      localStorage.setItem('theme', nextTheme)
};
const init = () => {
  nextTick(() => {
    const theme = localStorage.getItem('theme')
    if (theme) {
      theme == 'dark' ? isShowTheme.value = true : isShowTheme.value = false
      document.documentElement.setAttribute('data-theme', theme)
    }
  })
};
init();
const actions = computed(() => {
  console.log(route.path, " route.path");
  return route.path;
});
const clickTag = computed(() => (index: number, path: string) => {
  console.log(index, path);
  if (route.path != path) {
    console.log("我即将跳转");
    flag.value = false;
    console.log(flag.value);
    router.push(path);
  }
});
const tagList = [
  {
    name: "首页",
    path: "/",
  },
  {
    name: "标签",
    path: "/tag",
  },
  {
    name: "生活",
    path: "/life",
  },
  {
    name: "友链",
    path: "/friendlink",
  },
  {
    name: "GitHub",
    path: "https://github.com/sun-liang-rong",
  },
];
const handleScrollx = () => {
  console.log(window.pageYOffset, "window.pageYOffset");
  if (window.pageYOffset >= 300) {
    flag.value = true;
  } else {
    flag.value = false;
  }
};
</script>
<style lang="less" scoped>
html,body {
  background-color: var(--primaryBackgroundColor);
}
html {
  --theme: light;
  background: var(--primaryBackgroundColor);
}

html[data-theme="dark"] {
  --theme: dark;
  background: var(--primaryBackgroundColor);
}
* {
  padding: 0;
  margin: 0;
}

@media only screen and (max-width: 400px) {
  .catIframe {
    display: none;
  }
}

.catIframe {
  position: fixed;
  width: 400px;
  bottom: 20%;
  left: 10%;
  transform: translate(-68%, -50%);
  z-index: 99999;
}

html,
body {
  /* height:100%;display:flex;flex-direction:column; */
  background-color: pink;
}

// #app {
//   color: var(@text-color);
//   background-color: var(@bg-color);
// }
.app {
  position: relative;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  background: var(--primaryBackgroundColor);
  color: var(--primaryTextColor);
  font-family: Avenir, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, apple color emoji,
    segoe ui emoji, Segoe UI Symbol, noto color emoji, sans-serif;
}

.changTheme {
  padding: 5px;
  border: none;
  background: none;
  font-size: 18px;
}

.tabtop {
  position: sticky;
  top: 0;
  z-index: 10;
}
.table1 {
  width: 100%;
  height: 50px;
  // transition: .5s linear;
  background-color: var(--primaryColor, 1);
  box-shadow: 0px 4px 6px -3px  var(--primaryBoxShadow, 0.5);
}

.tabs {
  height: 100%;
  display: flex;
  align-items: center;
  background-color: var(--primaryTitleColor);
  max-width: 1000px;
  margin: 0 auto;
  background-color: var(--primaryColor, 1);
}
@media screen and (min-width: 0px) and (max-width: 1000px) {
  .tabs {
    max-width: 100%;
  }
}

.table1 .tabs ul {
  list-style: none;
  display: flex;
  gap: 20px;
  color: #fff;
}

.table .tabs ul li {
  list-style: none;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  //primaryTitleColor
  color: #fff;
}

.table1 .tabs ul li {
  list-style: none;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  color: var(--primaryTextColor, 1);
}

.table1 .tabs ul span {
  display: inline-block;
  width: 30px;
  height: 2px;
  margin-top: 3px;
  background: linear-gradient(135deg, #fff6b7, #f6416c);
}
.liLink {
  cursor: pointer;
}

.liLink1 {
  padding: 0 15px;
}

.liLink1:hover {
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 4px;
  background-color: var(--primaryTitleTheme, 1);
}
.container {
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 15px;
  // overflow: hidden;
  background-color: var(--primaryColor, 1);
}
@media screen and (min-width: 0px) and (max-width: 1000px) {
  .container {
    max-width: 100%;
  }
}
</style>
