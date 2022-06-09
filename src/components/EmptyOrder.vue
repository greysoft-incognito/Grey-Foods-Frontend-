<template>
  <q-page class="column flex-center main">
    <img
      alt="Quasar logo"
      src="Images/OnBoarding/knife.png"
      style="width: 30%"
      class="q-my-md"
    />
    <div class="text-bold">No Plates</div>
    <div class="text-subtitle2 text-grey q-my-xs">
      You don't have any past orders yet
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EmptyOrder",
});
</script>

<style scoped></style>
