<template>
  <section class="portfolio-frl section-padding pb-70">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10">
          <div class="sec-head text-center">
            <h6 class="wow fadeIn" data-wow-delay=".5s">Portfolio</h6>
            <h3 class="wow color-font">
              My Recent Web Project &amp; <br />
              Some Past Projects.
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="filtering col-12">
          <div class="filter wow fadeIn" data-wow-delay=".5s">
            <span
              v-for="(tag, index) in filterType"
              :key="tag.id"
              :data-filter="tag.id"
              :class="index === 0 ? 'active' : ''"
            >
              {{ tag.name }}
            </span>
          </div>
        </div>

        <div class="gallery full-width">
          <div
            v-for="(item, index) in data"
            :key="item.link"
            :class="[item.type]"
            class="col-md-6 items graphic wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div class="item-img">
              <div class="cont">
                <h6>{{ item.name }}</h6>
                <p>{{ item.description }}</p>
              </div>
              <a class="rota" :href="item.link" target="_blank">
                <img :src="item.image" alt="image" />
                <div class="item-img-overlay"></div>
              </a>
              <div class="tags">
                <span v-for="tag in item.tags">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import initIsotope from "../../common/initIsotope";
import data from "./data";

const filterType = ref([
  {
    id: "*",
    name: "All",
  },
  {
    id: ".app",
    name: "App",
  },
  {
    id: ".web",
    name: "Web",
  },
]);

onMounted(() => {
  setTimeout(() => {
    initIsotope();
  }, 500);
});
</script>
