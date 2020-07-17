<template>
  <main class="main">
    <section class="section-intro" :style="{ backgroundImage: `url(${backgroundUrl})` }">
      <div class="main-wrapper">
        <div class="main-container">
          <div class="section-intro-content">
            <div class="app-icon">
              <img src="../img/App-Icon.svg" alt="app-icon" />
            </div>
            <div class="intro-text">
              <h1 class="intro-text-title">AppStarter.</h1>
              <p class="intro-text-text">Best landing page for web and mobile apps</p>
            </div>
            <div class="btn-block">
              <button class="btn download">Download Now</button>
              <button class="btn watch">Watch Video</button>
            </div>
          </div>
          <div class="section-intro-tablet">
            <div class="tablet-base"></div>
            <img class="tablet-screen" src="../img/tablet-screen.png" alt="tablet-screen" />
          </div>
        </div>
      </div>
    </section>
    <section class="timer-info">
      <div class="main-wrapper">
        <div class="timer-info-content">
          <h3 class="timer-info-title">
            <span class="timer-info-title bold">Why</span> do we use it?
          </h3>
          <p
            class="timer-info-text"
          >This sounded nonsense to Alice, so she said nothing, but set off at once toward the Red Queen. To her surprise, she lost sight of her in a moment.</p>
        </div>
        <div class="timer-block">
          <div class="timer-form">
            <form @submit.prevent="onCreateNewTimer">
              <input
                class="input-timer"
                type="text"
                placeholder="Timer Name"
                v-model="newTimerName"
              />
              <input class="btn-submit" type="submit" value="Create Timer" />
            </form>
          </div>
          <hr />
          <div class="timer-info-items">
            <TimerItem
              v-for="timerItem in allTimers"
              :key="timerItem.id"
              :timerItem="timerItem"
              @remove-timer="removeTimer"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import TimerItem from "./timerItem";
import backgroundUrl from "../img/background.jpg";
export default {
  name: "Home",
  components: {
    TimerItem
  },
  data() {
    return {
      backgroundUrl,
      newTimerName: "",
      allTimers: []
    };
  },

  mounted() {
    this.allTimers = JSON.parse(localStorage.getItem("Timers")) || [];
  },

  methods: {
    onCreateNewTimer() {
      this.allTimers.unshift({
        id: Date.now(),
        name: this.newTimerName || new Date().toLocaleTimeString(),
        time: 0,
        delay: 0,
        date: null,
        isPlay: false
      });
      localStorage.setItem("Timers", JSON.stringify(this.allTimers));
      this.newTimerName = "";
    },

    removeTimer(id) {
      this.allTimers = this.allTimers.filter(t => t.id !== id);
      localStorage.setItem("Timers", JSON.stringify(this.allTimers));
    }
  }
};
</script>

<style  scoped>
.main {
  color: #fff;
  background: #f8f9fa;
}
.main-wrapper {
  max-width: 1230px;
  margin: 0 auto;
  padding: 0 30px;
  width: 100%;
}

.main-container {
  position: relative;
  display: flex;
  width: 100%;
}

/* elements*/
hr {
  margin: 0;
  border: 1px solid #e7e8ea;
}
.btn,
.btn-submit {
  transition: all 0.3s ease-out;
}
.btn:active,
.btn:focus {
  border: none;
  outline: none;
}
.btn:hover,
.btn-submit:hover {
  opacity: 0.75;
}

/* start section-intro */

.section-intro {
  justify-content: space-between;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
}

.section-intro-content {
  margin-top: 230px;
  max-width: 555px;
  margin-bottom: 158px;
  width: 100%;
}
.app-icon {
  margin-bottom: 33px;
}
.intro-text {
  font-size: 35px;
  line-height: 50px;
  margin-bottom: 37px;
}
.intro-text-title {
  font-weight: bold;
  display: inline;
}
.intro-text-text {
  display: inline;
}
.btn {
  font-size: 17px;
  line-height: 23px;
  text-align: center;
  padding: 14px 15px;
  border-radius: 6px;
  border: none;
  font-weight: 800;
  cursor: pointer;
}
.download {
  background: linear-gradient(163.33deg, #ff8e64 0%, #ffe641 100%);
  color: #fff;
  margin-right: 20px;
}
.watch {
  background: #ffffff;
  color: #282b31;
}

/* end section-intro */

/* start section-intro-tablet */

.section-intro-tablet {
  position: absolute;
  top: 140px;
  right: 50px;
  z-index: 50;
}

.tablet-base {
  position: relative;
  width: 470px;
  height: 708px;
  background-color: #fff;
  box-shadow: 0px 3px 6px rgba(32, 33, 39, 0.12);
  border-radius: 40px;
}
.tablet-screen {
  position: absolute;
  top: 65px;
  left: 18px;
  right: 18px;
  bottom: 65px;
}
/* end section-intro-tablet */

/* section-timer-info*/

.timer-info {
  padding-bottom: 115px;
}
.timer-block {
  text-align: center;
  max-width: 770px;
  margin: 0 auto;
  margin-top: 60px;
  background: #fff;
  width: 100%;
  box-shadow: 0px 1px 3px rgba(32, 33, 39, 0.12);
  border-radius: 12px;
}
.timer-form,
.timer-info-items {
  padding: 40px 140px 30px 140px;
}
.timer-info-items {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.timer-info-content {
  color: #676c75;
  text-align: center;
  letter-spacing: 1px;
  max-width: 570px;
  margin: 0 auto;
  margin-top: 270px;
}
.timer-info-title {
  color: #282b31;
  font-size: 35px;
  line-height: 50px;
}
.timer-info-text {
  margin-top: 12px;
  font-weight: normal;
  font-size: 15px;
  line-height: 30px;
  text-align: center;
  color: #676c75;
  letter-spacing: 0;
}

/* end section-timer-info*/

/* timer-block*/

.btn-submit {
  font-size: 17px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 1px;
  color: #ffffff;
  padding: 13px 26px;
  background: linear-gradient(163.14deg, #ff8e64 0%, #ffe641 100%);
  border-radius: 6px;
  border: none;
  margin-left: 20px;
  width: 34%;
  cursor: pointer;
}

.input-timer {
  color: rgba(103, 108, 117, 0.7);
  padding: 13px 20px;
  font-size: 17px;
  line-height: 23px;
  background: #f8f9fa;
  border: 1px solid #e7e8ea;
  box-sizing: border-box;
  border-radius: 6px;
  width: 61%;
}
/*end timer-block*/

/* media queries */

@media screen and (max-width: 1160px) {
  .section-intro-content {
    width: 40%;
  }
}

@media screen and (max-width: 960px) {
  .main-container {
    flex-direction: column;
  }
  .section-intro-tablet {
    position: relative;
    margin: 0 auto;
    right: 0;
  }
  .section-intro-content {
    width: 100%;
    margin: 0 auto;
    margin-top: 130px;
    margin-bottom: 0;
  }
}
@media screen and (max-width: 825px) {
  .timer-form {
    padding: 30px;
  }
  .timer-info-items {
    padding: 40px;
  }
  .timer-item-name {
    width: 150px;
    max-width: 150px;
  }
}
@media screen and (max-width: 640px) {
  .timer-form {
    padding: 20px;
    padding-bottom: 20px;
  }
  .timer-info-items {
    padding: 20px;
    padding-top: 15px;
  }
  .timer-item-name {
    width: 150px;
    max-width: 150px;
  }
}

@media screen and (max-width: 575px) {
  .btn-submit {
    display: block;
    width: 40%;
    margin: 0 auto;
    padding: 10px 8px;
    font-size: 16px;
    margin-top: 10px;
  }
  .input-timer {
    width: 100%;
    padding: 10px 8px;
  }
}

@media screen and (max-width: 520px) {
  .intro-text {
    font-size: 32px;
  }
  .section-intro-tablet {
    display: none;
  }
  .timer-info-content {
    margin-top: 30px;
  }
  .section-intro {
    padding-bottom: 40px;
  }
}

@media screen and (max-width: 440px) {
  .download {
    margin: 10px;
  }
  .watch {
    margin: 10px;
  }
  .btn {
    font-size: 16px;
    padding: 16px 10px;
    margin: 10px;
  }
  .btn-submit {
    padding: 5px 5px;
    font-size: 12px;
  }
  .input-timer {
    padding: 5px 5px;
    font-size: 12px;
  }
}
</style>


