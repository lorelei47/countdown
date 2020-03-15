<template>
  <div>
    <div class="btn">
      <span>
        <input v-model="inputTime.hour" placeholder="时" />
      </span>
      <span>
        <input v-model="inputTime.min" placeholder="分" />
      </span>
      <span>
        <input v-model="inputTime.sec" placeholder="秒" />
      </span>
      <span>
        <input @click="begin" type="button" value="开始" />
      </span>
    </div>
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
  </div>
</template>
<script>
export default {
  name: "ClockCountDown",
  prop: {},
  data() {
    return {
      deg: 6,
      hourTransform: null,
      minTransform: null,
      secTransform: null,
      inputTime: {
        hour: 0,
        min: 0,
        sec: 0
      },
      time: ""
    };
  },
  created() {},
  mounted() {},
  methods: {
    begin() {
      if (
        !(
          isNaN(this.inputTime.hour) ||
          isNaN(this.inputTime.min) ||
          isNaN(this.inputTime.sec)
        )
      ) {
        this.time =
          new Date().getTime() +
          this.inputTime.hour * 1000 * 60 * 60 +
          this.inputTime.min * 1000 * 60 +
          this.inputTime.sec * 1000;
          let timer = setInterval(() => {
              if(this.nowTime()>=0){
                  clearInterval(timer);
                  alert('饭堂开饭了！！！');
              }
          }, 1000);
      }else{
          alert('您输入的不是时间，吼！！');
      }
    },
    nowTime() {
      let now = new Date().getTime();
      let gap =  now - this.time;
      let second = 1000;
      let minute = second * 60;
      let hour = minute * 60;
      let day = hour * 24;

      let hh = ((gap % day) / hour) * 30;
      let mm = ((gap % hour) / minute) * this.deg;
      let ss = ((gap % minute) / second) * this.deg;
      this.hourTransform = `rotateZ(${hh + mm / 12}deg)`;
      this.minTransform = `rotateZ(${mm + ss / 60}deg)`;
      this.secTransform = `rotateZ(${ss}deg)`;
      return gap;
    }
  }
};
</script>
<style>
.clock {
  margin-top: 3rem;
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
.btn span {
  width: 3rem;
  padding: 0 1rem;
}
.btn span > input {
  width: 3rem;
}
</style>