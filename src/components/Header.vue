<template>
  <header :class="['header', {'active':navScrollIsActive ||showMobilerMenu}]">
    <div class="header-contaner">
      <template v-if="navBtnIsActive">
        <button @click="showMobilerMenu=!showMobilerMenu" class="btn-burger">
          <BurgerMenuIcon />
        </button>
      </template>
      <template v-else>
        <h2 class="header-logo">
          <router-link to="/" class="header-logo-link">AppStarter</router-link>
        </h2>
        <nav class="nav">
          <ul class="nav-list">
            <li>
              <router-link tag="a" to="/" class="nav-list-item">Features</router-link>
            </li>
            <li>
              <router-link tag="a" to="/" class="nav-list-item">Video Tour</router-link>
            </li>
            <li>
              <router-link tag="a" to="/" class="nav-list-item">Reviews</router-link>
            </li>
            <li>
              <router-link tag="a" to="/" class="nav-list-item">Pricing</router-link>
            </li>
          </ul>
          <button type="button" class="button-header">Get It Free</button>
        </nav>
      </template>
    </div>
    <template v-if="navBtnIsActive">
      <div class="mobileMenuContainer" :class="{nemuActive:showMobilerMenu}">
        <ul>
          <li class="nav-list-item-mobile">
            <router-link tag="a" to="/">Features</router-link>
          </li>
          <li class="nav-list-item-mobile">
            <router-link tag="a" to="/">Video Tour</router-link>
          </li>
          <li class="nav-list-item-mobile">
            <router-link tag="a" to="/">Reviews</router-link>
          </li>
          <li class="nav-list-item-mobile">
            <router-link tag="a" to="/">Pricing</router-link>
          </li>
        </ul>
      </div>
    </template>
  </header>
</template>

<script>
import BurgerMenuIcon from "vue-material-design-icons/Menu.vue";
export default {
  components: {
    BurgerMenuIcon
  },
  data() {
    return {
      navScrollIsActive: false,
      navBtnIsActive: false,
      showMobilerMenu: false
    };
  },

  created() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.showBurgerMenu);
    this.showBurgerMenu();
  },

  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      if (window.scrollY > 50) {
        this.navScrollIsActive = true;
      } else {
        this.navScrollIsActive = false;
      }
    },
    showBurgerMenu() {
      if (window.innerWidth <= +767) {
        this.navBtnIsActive = true;
      } else {
        this.navBtnIsActive = false;
      }
    }
  }
};
</script>


<style scoped>
.header {
  margin-top: 25px;
  color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  transition: all 0.3s ease-in-out;
}
.header-contaner {
  display: flex;
  max-width: 1230px;
  margin: 0 auto;
  padding: 0 30px;
  justify-content: space-between;
}
.header-logo a {
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  color: #ffffff;
}
.nav {
  display: flex;
}
.button-header {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 1px;
  color: #282b31;
  background: #ffffff;
  border-radius: 6px;
  border: none;
  padding: 11px 18px;
}
.nav-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.nav-list-item {
  margin-right: 31px;
  color: #fff;
  transition: all 0.3s ease-out;
}
.button-header {
  transition: all 0.3s ease-out;
}
.button-header:active,
.button-header:focus,
.btn-burger {
  border: none;
  outline: none;
}
.button-header:hover,
.nav-list-item:hover {
  cursor: pointer;
  opacity: 0.75;
}
.active {
  padding-top: 10px;
  background: rgba(128, 128, 128, 0.7);
  height: 60px;
  margin-top: 0;
}

/* mobile Menu */

.btn-burger {
  margin-left: 10px;
  background: none;
  color: #fff;
  font-size: 30px;
}
.mobileMenuContainer {
  transition: all 0.5s ease-out;
  transform: translateX(-100%);
  width: 100%;
  height: 100vh;
  background: rgba(128, 128, 128, 0.7);
  padding-top: 10px;
  margin-top: 11px;
}
.nemuActive {
  transform: translateX(0);
  /* transition: all 0.3s ease-out; */
}

.nav-list-item-mobile {
  margin: 40px;
  color: #fff;
  font-size: 26px;
}
.nav-list-item-mobile a {
  color: #fff;
}

/* media queries */
</style>
