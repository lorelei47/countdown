<template>
  <div id="app">
    <Clock />
  </div>
</template>

<script>
import Clock from "./components/Clock.vue";

export default {
  name: "App",
  components: {
    Clock
  }
};
</script>

<style>

html,body {
  font-size: 18px;
  padding: 0;
  margin: 0;
  background-image: radial-gradient(
    circle farthest-corner at 50.1% 37.3%,
    rgba(92, 213, 249, 1) 0%,
    rgba(123, 243, 248, 1) 90.1%
  );
}
#app {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
