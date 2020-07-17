<template>
  <div class="timer-item">
    <label class="timer-item-name" :title="timerItem.name">{{timerItem.name}}</label>
    <input
      readonly
      :class="['timer-item-timer',{active:timerIsPlay}]"
      type="text"
      :value="timeFormat"
    />
    <div class="btn-block">
      <button v-if="timerIsPlay" @click="onPause" class="btn pause">
        <iconsPause />
      </button>
      <button v-else @click="onPlay" class="btn play">
        <IconsPlay />
      </button>
      <button class="btn delete" @click="onRemoveTimer">
        <iconsDelete />
      </button>
    </div>
  </div>
</template>

<script>
import iconsPause from "vue-material-design-icons/Pause.vue";
import iconsDelete from "vue-material-design-icons/Delete.vue";
import IconsPlay from "vue-material-design-icons/Play.vue";
export default {
  components: { iconsPause, iconsDelete, IconsPlay },
  props: {
    timerItem: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      timerTime: null,
      timerDelay: null,
      timerId: null,
      timerIsPlay: null,
      counter: null,
      timerStartPoint: null
    };
  },

  created() {
    window.addEventListener("beforeunload", this.onSaveDate);
  },

  computed: {
    timeFormat() {
      return new Date(this.timerTime)
        .toUTCString()
        .match(/(\d\d:\d\d:\d\d)/)[0];
    }
  },

  mounted() {
    this.timerId = this.timerItem.id;
    this.timerTime = this.timerItem.time;
    this.timerDelay = this.timerItem.delay;
    this.timerIsPlay = this.timerItem.isPlay;
    if (this.timerIsPlay === true) {
      this.onTimer(this.timerIsPlay);
      this.timerStartPoint = this.timerItem.date;
    }
  },

  methods: {
    onPlay() {
      this.timerIsPlay = true;
      this.timerStartPoint = Date.now();
      this.onTimer(this.timerIsPlay);
    },
    onPause() {
      this.timerIsPlay = false;
      this.timerDelay = this.timerTime;
      this.onTimer(this.timerIsPlay);
    },

    onTimer(a) {
      if (a === true) {
        this.counter = setInterval(() => {
          this.timerTime =
            this.timerDelay + (Date.now() - this.timerStartPoint);
        }, 1000);
      } else {
        clearInterval(this.counter);
      }
    },

    onRemoveTimer() {
      clearInterval(this.counter);
      this.$emit("remove-timer", this.timerId);
    },
    onSaveDate() {
      if (JSON.parse(localStorage.getItem("Timers"))) {
        let timers = JSON.parse(localStorage.getItem("Timers"));
        timers.map(el => {
          if (el.id === this.timerId) {
            el.id = this.timerId;
            el.time = this.timerTime;
            el.delay = this.timerTime;
            el.date = Date.now();
            el.isPlay = this.timerIsPlay;
          }
        });
        localStorage.setItem("Timers", JSON.stringify(timers));
      }
    }
  }
};
</script>

<style scoped>
.timer-item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  color: #676c75;
}
.timer-item-name {
  width: 130px;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 130px;
  font-weight: 800;
  font-size: 20px;
  line-height: 30px;
  color: #5586f2;
}
.timer-item-timer {
  width: 120px;
  text-align: center;
  border: none;
  background: rgba(255, 72, 118, 0.15);
  border: 1px solid #e7e8ea;
  box-sizing: border-box;
  border-radius: 6px;
  font-size: 17px;
  line-height: 23px;
  color: #676c75;
  padding: 14px 24px;
  max-width: 120px;
  margin-left: 60px;
}
.active {
  background: #e7e8ea;
}
.btn-block {
  margin-right: 23px;
  display: flex;
  align-items: center;
}
.btn {
  width: 50px;
  height: 50px;
  text-align: center;
  color: #fff;
  border: none;
  font-size: 26px;
  cursor: pointer;
  transition: all 0.3s ease-out;
}
.btn:hover {
  opacity: 0.8;
}

.btn:active,
.btn:focus {
  border: none;
  outline: none;
}
.pause,
.play {
  border-radius: 50%;
  background: linear-gradient(135deg, #7956ec 0%, #2fb9f8 100%);
  margin-left: 42px;
}
.delete {
  background: linear-gradient(135deg, #f23673 0%, #fca069 100%);
  border-radius: 6px;
  margin-left: 20px;
}
.play {
  background: linear-gradient(135deg, #009fc5 0%, #3cecb0 100%);
}

/* media queries */

@media screen and (max-width: 825px) {
  .timer-item-name {
    width: 150px;
    max-width: 150px;
  }
}

@media screen and (max-width: 640px) {
  .timer-item {
    margin-bottom: 20px;
  }
}

@media screen and (max-width: 575px) {
  .timer-item-timer {
    width: 100px;
    font-size: 14px;
    line-height: 23px;
    color: #676c75;
    padding: 5px 8px;
    max-width: 100px;
    margin-left: 5px;
  }

  .btn {
    width: 35px;
    height: 35px;
    font-size: 20px;
  }
  .play {
    margin-left: 5px;
  }
  .pause {
    margin-left: 5px;
  }
}

@media screen and (max-width: 440px) {
  .timer-item-name {
    font-size: 14px;
  }
  .timer-item-timer {
    width: 70px;
    font-size: 12px;
    line-height: 18px;
    color: #676c75;
    padding: 5px 0;
    max-width: 70px;
    margin-left: 0;
  }
  .btn-block {
    margin-right: 5px;
  }
  .btn {
    width: 30px;
    height: 30px;
    font-size: 16px;
    margin-left: 5px;
  }
}
</style>
