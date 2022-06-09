<template>
  <div class="q-px-lg q-pb-md bg-primary text-white">
    <q-timeline dark color="secondary">
      <div class="q-py-lg text-h5 row justify-between items-center">
        <div class="text-bold">18:21</div>
        <div class="text-caption">Estimated Delivery Time</div>
      </div>
      <font-awesome-icon icon="fa-solid fa-check" />

      <q-timeline-entry icon="fa-solid fa-check">
        <template v-slot:title>
          Delicia Foods has confirmed your order
        </template>
      </q-timeline-entry>

      <q-timeline-entry icon="fa-solid fa-check">
        <template v-slot:title>
          Delicia Foods has confirmed your order
        </template>
      </q-timeline-entry>

      <q-timeline-entry icon="fa-solid fa-check">
        <template v-slot:title>
          Delicia Foods has confirmed your order
        </template>
      </q-timeline-entry>

      <q-timeline-entry icon="fa-solid fa-check">
        <template v-slot:title>
          Delicia Foods has confirmed your order
        </template>
      </q-timeline-entry>

      <q-timeline-entry>
        <template v-slot:title>
          Delicia Foods has confirmed your order
        </template>
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "Order",
  data() {
    return {};
  },
});
</script>

<style scoped>
.my-card {
  width: 100%;
  border-radius: 19px;
  position: relative;
}
.logo-container {
  border-radius: 50%;
  width: 80px;
  height: 80px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
}
.white-card {
  border-radius: 9px;
}
.btn {
  padding-left: 1.5%;
}

.total {
  /* border-bottom: 0.5px dashed white; */
  /* border-bottom-width: 4px; */
  background-image: linear-gradient(
    to right,
    white 33%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: bottom;
  background-size: 16px 2.5px;
  background-repeat: repeat-x;
  padding-bottom: 1%;
}

/* @media screen and (max-width: 362px) {
  .dialog-btn {
    font-size: 0.7rem !important;
  }
} */
</style>
