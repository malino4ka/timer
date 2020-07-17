<template>
  <footer class="footer">
    <div class="main-wrapper">
      <div class="footer-block">
        <div class="footer-logo">
          <h2 class="footer-logo-title">AppStarter</h2>
        </div>
        <div class="footer-info">
          <p class="footer-author">
            Created with
            <img src="../img/Heart.svg" alt="Heart" />
            by
            <span class="bold">Sergey Azovskiy</span>
          </p>
          <p class="footer-copy">© AppStarter, 2017</p>
        </div>
        <div class="footer-icon">
          <div class="footer-icon-block-twit">
            <img src="../img/Twitter Icon.svg" alt="Twitter" />
          </div>
          <div class="footer-icon-block-f">
            <img src="../img/Facebook Icon.svg" alt="Facebook" />
          </div>
          <div class="footer-icon-block-ins">
            <img src="../img/Instagram.svg" alt="Instagram" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
.bold {
  font-weight: bold;
  font-size: 11px;
  line-height: 15px;
  color: #282b31;
}
.footer {
  width: 100%;
}
.footer-block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
  padding-bottom: 30px;
}
.main-wrapper {
  max-width: 1230px;
  margin: 0 auto;
  padding: 0 30px;
}
.footer-logo {
}
.footer-logo {
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  color: #282b31;
}
.footer-info {
  margin-top: 15px;
}
.footer-author,
.footer-copy {
  text-align: center;
  font-size: 11px;
  line-height: 15px;
  color: #999ea8;
}
.footer-copy {
  margin-top: 10px;
}
.footer-icon {
  display: flex;
  border-radius: 6px;
  box-sizing: border-box;
  text-align: center;
  align-items: center;
}
.footer-icon-block-twit,
.footer-icon-block-f,
.footer-icon-block-ins {
  display: flex;
  border: 1px solid #e7e8ea;
  height: 40px;
  width: 40px;
  align-items: center;
  justify-content: center;
}
.footer-icon-block-twit {
  border-radius: 6px 0 0 6px;
  border-right: none;
}
.footer-icon-block-ins {
  border-radius: 0 6px 6px 0;
  border-left: none;
}

/* media queries */

@media screen and (max-width: 440px) {
  .footer-info {
    display: flex;
    justify-content: space-around;
    margin-bottom: 15px;
  }
  .footer-block {
    flex-direction: column;
  }
  .main-wrapper {
    padding: 5px;
  }
  .footer-copy {
    margin-top: 0;
    margin-left: 5px;
  }
}
</style>
