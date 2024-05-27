<template>
  <footer :class="`${!hideBGCOLOR ? 'sub-bg' : ''}`">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="item md-mb50">
            <div class="title">
              <h5>Contact Me</h5>
            </div>
            <ul>
              <li>
                <span class="icon pe-7s-map-marker"></span>
                <div class="cont">
                  <h6>My Address</h6>
                  <p>Bade District, Taoyuan City, Taiwan</p>
                </div>
              </li>
              <li>
                <span class="icon pe-7s-mail"></span>
                <div class="cont">
                  <h6>My Email</h6>
                  <p>s8710606@gmail.com</p>
                </div>
              </li>
              <li>
                <span class="icon pe-7s-call"></span>
                <div class="cont">
                  <h6>My phone</h6>
                  <p>+886 930152086</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="item">
            <div class="logo">
              <img src="/logo.png" alt="logo" />
            </div>
            <div class="social">
              <a href="https://www.facebook.com/EasonChang0115?locale=zh_TW">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://github.com/EasonChang0115">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://codepen.io/JasonChang/">
                <i class="fa fa-code"></i>
              </a>
              <a href="https://www.cakeresume.com/s8710606">
                <i class="far fa-file-alt"></i>
              </a>
            </div>
            <div class="copy-right">
              <p>MIT Licensed | Copyright © 2024-present EasonChang</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const { hideBGCOLOR } = defineProps(["hideBGCOLOR"]);
</script>
