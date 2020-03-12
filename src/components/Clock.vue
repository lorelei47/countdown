<template>
  <div class="clock">
    <div class="hour">
      <div v-bind:style="{transform: hourTransform}" class="hh" id="hh"></div>
    </div>
    <div class="min">
      <div v-bind:style="{transform: minTransform}" class="mm" id="mm"></div>
    </div>
    <div class="sce">
      <div v-bind:style="{transform: secTransform}" class="ss" id="ss"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Clock",
  prop: {},
  data() {
    return {
      deg: 6,
      hourTransform: null,
      minTransform: null,
      secTransform: null
    };
  },
  created(){
    this.nowTime();
  },
  mounted() {
    setInterval(() => {
      this.nowTime();
    }, 1000);
  },
  methods: {
    nowTime() {
      let day = new Date();
      let hh = day.getHours() * 30;
      let mm = day.getMinutes() * this.deg;
      let ss = day.getSeconds() * this.deg;
      this.hourTransform = `rotateZ(${hh + mm / 12}deg)`;
      this.minTransform = `rotateZ(${mm + ss / 60}deg)`;
      this.secTransform = `rotateZ(${ss}deg)`;
    }
  }
};
</script>
<style>
.clock {
  width: 15rem;
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid #091921;
  border-radius: 50%;
  box-shadow: 0 -1rem 1rem rgba(255, 255, 255, 0.05),
    inset 0 -1rem 1rem rgba(255, 255, 255, 0.05),
    0 -1rem 1rem rgba(0, 0, 0, 0.3), inset 0 -1rem 1rem rgba(0, 0, 0, 0.3);
}
.clock:before {
  content: "";
  position: absolute;
  width: 1rem;
  height: 1rem;
  background: #fff;
  border-radius: 50%;
  z-index: 1000;
}
.hour,
.min,
.sec {
  position: absolute;
}
.hh {
  width: 7rem;
  height: 7rem;
}
.mm {
  width: 10rem;
  height: 10rem;
}
.ss {
  width: 12rem;
  height: 12rem;
}
.hh,
.mm,
.ss {
  display: flex;
  justify-content: center;
}
.hh:before {
  content: "";
  position: absolute;
  width: 0.45rem;
  height: 3.5rem;
  background: #e70e19;
  border-radius: 0.3rem 0.3rem 0 0;
  z-index: 10;
}
.mm:before {
  content: "";
  position: absolute;
  width: 0.2rem;
  height: 5rem;
  background: #35342c;
  border-radius: 0.3rem 0.3rem 0 0;
  z-index: 11;
}
.ss:before {
  content: "";
  position: absolute;
  width: 0.1rem;
  height: 7.5rem;
  background: #080808;
  border-radius: 0.3rem 0.3rem 0 0;
  z-index: 12;
}
</style>