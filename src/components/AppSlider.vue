<script>
import { sliderSlides } from "../dataArrays";

export default {
  data() {
    return {
      sliderSlides,
      activeSlide: 0,
      autoplayInterval: null,
    };
  },
  methods: {
    nextSlide() {
      if (this.activeSlide < this.sliderSlides.length - 1) {
        this.activeSlide++;
      } else {
        this.activeSlide = 0;
      }
    },

    prevSlide() {
      if (this.activeSlide > 0) {
        this.activeSlide--;
      } else {
        this.activeSlide = this.sliderSlides.length - 1;
      }
    },

    goToSlide(index) {
      this.activeSlide = index;
    },

    startAutoplay() {
      this.autoplayInterval = setInterval(() => {
        this.activeSlide = (this.activeSlide + 1) % this.sliderSlides.length;
      }, 3000);
    },

    stopAutoplay() {
      clearInterval(this.autoplayInterval);
    },

    displayMessage(index) {
      this.selectedMessage = index;
    },
  },

  mounted() {
    this.startAutoplay();
  },
};
</script>

<template>
  <div id="Home" class="slider-wrapper" tabindex="0">
    <div class="item">
      <div
        @mouseenter="stopAutoplay()"
        @mouseleave="startAutoplay()"
        class="item"
      >
        <img
          :src="sliderSlides[activeSlide].image"
          :alt="sliderSlides[activeSlide].title"
        />
        <div @click="prevSlide" class="prev"></div>
        <div @click="nextSlide" class="next"></div>
        <div
          v-for="index in sliderSlides"
          :key="index"
          :class="index == activeSlide ? 'active' : ''"
          @click="goToSlide(index)"
        ></div>
      </div>

      <div class="text">
        <h3 class="fs-2 fw-bold">{{ sliderSlides[activeSlide].title }}</h3>
        <router-link            
            :to="{
            name: 'portfolio',
            }" 
            class="btn btn-success">
            <font-awesome-icon :icon="['fas', 'list']" />
            <strong class="ms-1">Vai ai Progetti</strong>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.item {
  margin-top: 80px;
  width: 100%;
  position: relative;
  margin: 0 auto;
}

.item img {
 margin: 0 auto;
  width: 800px;
  height: 700px;
  object-fit: cover;
  border-radius: 10px;
}

.item .text {
  min-width: 370px;
  position: absolute;
  left: 10%;
  right: 10%;
  bottom: 5%;
  padding: 1rem;

  border-radius: 5px;
  background-color: rgba($color:#EAEAEA , $alpha: 0.5);
  color: #222222;
  font-weight: 600;
  text-align: center;
}
.prev,
.next {
  width: 20px;
  height: 20px;
  margin: 10px 0;

  position: absolute;
  transform: translate(-50%);
  cursor: pointer;
  z-index: 999;
}
.prev{
  bottom: 50%;
  left: 5%;
}
.next  {
  bottom: 50%;
  right: 5%;
}
.next::after {
  content: "";
  width: 15px;
  height: 15px;
  border-top: 5px solid black;
  border-right: 5px solid black;
  display: block;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%) rotate(45deg);
}
.prev::before {
  content: "";
  width: 15px;
  height: 15px;
  border-top: 5px solid black;
  border-right: 5px solid black;
  display: block;
  position: absolute;
  bottom: 35%;
  left: 50%;
  transform: translate(-50%) rotate(-135deg);
}

</style>
