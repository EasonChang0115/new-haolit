<template>
  <header class="freelancre valign">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="img">
            <img src="/img/avatar.png" alt="" />
          </div>
        </div>
        <div class="col-lg-8 valign">
          <div class="cont">
            <h1 class="cd-headline clip">
              Hello, My name is Eason. As a front-end engineer, I am committed
              to converting imaginary blueprints into innovative
              <span class="cd-words-wrapper">
                <AutoTyperVue
                  :text="['Mobile Apps', 'Websites']"
                  :repeat="true"
                  initial-action="erasing"
                  :pre-type-delay="70"
                  :type-delay="70"
                  :pre-erase-delay="2000"
                  :erase-delay="250"
                  erase-style="backspace"
                  caret-animation="smooth"
                  class="color-font fw-600"
                />
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div class="states">
        <div class="container">
          <ul class="flex">
            <li class="flex">
              <div class="numb valign">
                <h3>8+</h3>
              </div>
              <div class="text valign">
                <p>
                  Years <br />
                  Of Experience
                </p>
              </div>
            </li>

            <li class="flex">
              <div class="numb valign">
                <h3>20+</h3>
              </div>
              <div class="text valign">
                <p>
                  Projects Completed <br />
                  In 3 Countries
                </p>
              </div>
            </li>

            <li class="mail-us">
              <a href="mailto:s8710606@gmail.com?subject=Subject">
                <div class="flex">
                  <div class="text valign">
                    <div class="full-width">
                      <p>Get In Touch</p>
                      <h6>s8710606@gmail.com</h6>
                    </div>
                  </div>
                  <div class="mail-icon">
                    <div class="icon-box">
                      <span class="icon color-font pe-7s-mail"></span>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="line bottom left"></div>
  </header>
</template>

<script setup>
import { AutoTyperVue } from "auto-typer-vue3";
</script>

<style lang="scss">
span.right {
  display: none !important;
}

span.caret:empty:before {
  content: "\200B";
  background: #fff;
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
}
</style>
