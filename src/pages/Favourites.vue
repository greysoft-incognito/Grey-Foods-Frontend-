<template>
  <q-page class="q-mt-lg q-px-md">
    <q-list class="q-my-sm">
      <div class="border q-mb-sm q-pa-sm bg-grey-2">
        <div class="image q-mb-sm"></div>
        <q-item-section class="text-subtitle1">
          <div class="text-primary text-bold">Delicia</div>
          <div class="text-caption address">
            <q-icon name="fas fa-map-marker-alt q-mr-xs" color="primary" />31,
            Gwari Avenue Barnawa, kaduna
          </div>
        </q-item-section>
        <q-item-section side bottom>
          <q-btn outline rounded color="primary" label="Re-order" no-caps />
        </q-item-section>
      </div>
    </q-list>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Favourite",
});
</script>

<style scoped>
.border {
  border: 1px solid rgb(128, 128, 128, 0.2);
  border-radius: 16px;
}
.image {
  height: 20vh;
  width: 100%;
  border-radius: 16px;
  background-image: url("/Images/OnBoarding/delicia.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.address {
  /* font-size: 0.7rem; */
}
</style>
