<template>
  <q-page class="flex flex-center main">
    <img
      alt="Quasar logo"
      src="Images/OnBoarding/whitelogo.png"
      style="width: 30%"
    />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>

<style scoped>
.main {
  background-image: url("/splashscreen.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
