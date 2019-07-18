<template>
  <div id="app">
    <main>
      <!-- 输出试图 -->
      <router-view/>
    </main>

    <!-- 封装公用组件———底部 -->
    <Footer/>
  </div>
</template>

<script>
import Footer from "./components/common/footer";
export default {
  name: "App",
  components: {
    Footer
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: "幼圆";
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
main {
  flex: 1;
  overflow: auto;
}
footer {
  width: 100%;
  height: 3rem;
  background: #eee;
  display: flex;
  a {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    &.router-link-exact-active {
      color: palevioletred;
      font-weight: 600;
    }
  }
}
</style>
