<template>
  <q-page class="column flex-center">
    <swiper
      class="swiper"
      :modules="modules"
      :space-between="30"
      slides-per-view="auto"
      autoplay
      :centered-slides="true"
      :pagination="{ clickable: true, color: red }"
    >
      <swiper-slide class="slide flex flex-center">
        <div class="text-center">
          <div class="text-primary">Search Vendors</div>
          <div class="text-subtitle2 q-px-lg">Find your favourite vendors</div>
        </div>
        <img class="image" src="Images/OnBoarding/handwithphone1.png" />
      </swiper-slide>
      <swiper-slide class="slide flex flex-center">
        <div class="text-center">
          <div class="text-primary">Door Delivery</div>
          <div class="text-subtitle2 q-px-lg">
            Get your meals delivered to your doorstep
          </div>
        </div>
        <img class="image" src="Images/OnBoarding/DeliveryGuy.png" />
      </swiper-slide>
      <swiper-slide class="slide flex flex-center">
        <div class="text-center">
          <div class="text-primary">Place your order</div>
          <div class="text-subtitle2 q-px-lg">
            Browse the menu and order food directly from the app
          </div>
        </div>
        <img class="image" src="Images/OnBoarding/handwithphone2.png" />
      </swiper-slide>
    </swiper>

    <div class="q-my-xl">
      <q-btn unelevated rounded color="primary" no-caps class="btn q-px-lg">
        Get Started
        <!-- <q-space /> -->
        <q-icon name="chevron_right" class="q-ml-lg" />
      </q-btn>
      <q-btn
        outline
        rounded
        color="primary"
        no-caps
        label="Login"
        class="btn"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default defineComponent({
  name: "IndexPage",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
    };
  },
});
</script>

<style scoped>
.btn {
  width: 100%;
  margin: 3.5% 0;
  font-size: 1rem;
}
.image {
  width: 45%;
  margin: 0 auto;
}

.swiper {
  width: 100%;
  overflow: none;
  position: static;
}

.slide {
  margin: 0 auto;
  height: 50vh;
  width: 60%;
  padding: 0 !important;
  border: 1px solid #fe724c;
  border-radius: 40px;
}

.slide:nth-child(2n) {
  width: 60%;
}
.slide:nth-child(3n) {
  width: 60%;
}
</style>
