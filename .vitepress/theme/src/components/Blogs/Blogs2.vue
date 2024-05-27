<template>
  <section class="blog-list section-padding sub-bg">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="head md-mb50">
            <h6 class="back-color">Get The Latest Article</h6>
            <h3>最新文章</h3>
            <p>紀錄、關注及靈活運用技術，創造自我價值</p>
            <a href="#0">
              <span>More Blog Posts</span>
            </a>
          </div>
        </div>
        <div class="col-lg-7 offset-lg-1">
          <div
            v-for="post in data"
            :key="post.title"
            class="item wow fadeInUp blog-card"
            data-wow-delay=".3s"
          >
            <div class="img valign blog-card_image">
              <img :src="post.image" alt="" />
            </div>
            <div class="cont valign blog-card_content">
              <div>
                <div class="info">
                  <a href="#0" class="date">
                    <span>{{ post.date.string }}</span>
                  </a>
                  <span>/</span>
                  <a v-for="tag in post.tags" href="#0" class="tag">
                    <span>{{ tag }}</span>
                  </a>
                </div>
                <h5>
                  <a :href="post.url">{{ post.title }}</a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { data as posts } from "../../../posts.data";
// 取前三筆資料
const data = ref(posts.slice(0, 3));
</script>

<style lang="scss" scoped>
.blog-card {
  display: flex;
  gap: 30px;

  @media screen and (max-width: 480px) {
    display: flex !important;
    flex-direction: column;
  }

  &_image {
    max-width: 36%;
    aspect-ratio: 16/9;
    position: relative;

    @media screen and (max-width: 480px) {
      max-width: 100%;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &_content {
    width: 64%;
    padding-left: 0 !important;

    @media screen and (max-width: 480px) {
      width: 100%;
    }

    h5 {
      font-size: 16px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
}
</style>
