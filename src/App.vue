<template>
  <div id="app">
    <div class="tabBar">
      <span>
        <router-link to="/Clock">闹钟</router-link>
      </span>
      <span>
        <router-link to="/CountDown">倒计时</router-link>
      </span>
      <span>
        <router-link to="/ClockCountDown">定时</router-link>
      </span>
    </div>
    <router-view class="main"></router-view>
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>

<style>
html,
body {
  font-size: 18px;
  padding: 0;
  margin: 0;
  background-image: radial-gradient(
    circle farthest-corner at 50.1% 37.3%,
    rgba(92, 213, 249, 1) 0%,
    rgba(123, 243, 248, 1) 90.1%
  );
}
a {
  color: #000;
  text-decoration: none;

}
#app {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
}
#app .main {
  margin-top: 3rem;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
.tabBar {
  margin-top: 3rem;
}
.tabBar span {
  margin: 0 2rem;
}
</style>
