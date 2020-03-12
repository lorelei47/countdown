<template>
  <div class="container">
    <div class="title">倒计时</div>
    <div class="countdown">
      <div id="day">{{dd}}</div>
      <div id="hour">{{hh}}</div>
      <div id="minute">{{mm}}</div>
      <div id="second">{{ss}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CountDown",
  props: {},
  data() {
    return {
      dd: 'NA',
      hh: 'NA',
      mm: 'NA',
      ss: 'NA',
      countDate: new Date("Jan 1, 2021 00:00:00").getTime()
    };
  },
  mounted() {
      setInterval(()=>{
          this.newYear();
      },1000)
  },
  methods: {
    newYear() {
      let now = new Date().getTime();
      let gap = this.countDate - now;
      let second = 1000;
      let minute = second * 50;
      let hour = minute * 60;
      let day = hour * 24;

      this.dd = Math.floor(gap / day);
      this.hh = Math.floor((gap % day) / hour);
      this.mm = Math.floor((gap % hour) / minute);
      this.ss = Math.floor((gap % minute) / second);
    }
  }
};
</script>
<style>
.container {
  height: 60vh;
  width: 60vw;
  display: flex;
  flex-flow: column wrap;
  justify-self: center;
  align-items: center;
  background-image: radial-gradient(
    circle farthest-corner at 50.1% 37.3%,
    rgba(92, 213, 249, 1) 0%,
    rgba(123, 243, 248, 1) 90.1%
  );
  box-shadow: 0 1.2rem 1.2rem rgba(0, 0, 0, 0.5);
  border-radius: 0.8rem;
}
.title {
  margin-top: 1rem;
  width: 80%;
  height: 4rem;
  font-size: 2.5rem;
  line-height: 4rem;
  text-align: center;
}
.countdown {
  margin-top: 2.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 7rem;
}
.countdown div {
  position: relative;
  margin: 0 1rem;
  width: 8rem;
  height: 100%;
  line-height: 5rem;
  text-align: center;
  background: #333;
  font-size: 4em;
  font-weight: 600;
  color: #fff;
}
.countdown div:before {
  content: "";
  position: absolute;
  bottom: -2rem;
  width: 8rem;
  height: 4rem;
  left: 0;
  background: rgb(199, 158, 154);
  color: rgb(241, 238, 23);
  font-style: 0.5rem;
  font-size: 2.5rem;
  line-height: 4rem;
}
.countdown #day::before {
  content: "日";
}
.countdown #hour::before {
  content: "时";
}
.countdown #minute::before {
  content: "分";
}
.countdown #second::before {
  content: "秒";
}
</style>