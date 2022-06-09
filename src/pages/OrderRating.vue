<template>
  <q-page class="q-mt-lg q-px-md">
    <q-list class="q-my-sm">
      <q-item class="border q-mb-sm" v-for="n in 2" :key="n">
        <q-item-section thumbnail>
          <img src="https://cdn.quasar.dev/img/mountains.jpg" />
        </q-item-section>

        <q-item-section class="text-subtitle2">
          <div class="row justify-between">
            <div class="">
              02 Jun, 2022
              <span class="q-ml-xs text-caption">3:13pm</span>
            </div>
            <div class="text-caption">Delivered</div>
          </div>
          <div>Delicia</div>
          <div caption class="row justify-between">
            <div class="ellipsis-1-lines text-caption">Jollof Rice</div>
            <div class="">N1,800</div>
          </div>
        </q-item-section>
      </q-item>
    </q-list>

    <div class="q-mt-xl">
      <div class="text-subtitle1 text-bold">How was your Delivery?</div>
      <div class="text-caption">How was the timing, approach and service</div>
      <q-input
        type="textarea"
        standout
        v-model="text"
        :dense="dense"
        class="input q-my-md"
      />
    </div>
    <div class="row q-mt-lg items-center justify-between">
      <div class="text-subtitle2">
        <q-icon
          name="fas fa-bicycle"
          color="primary"
          size="1rem"
          class="q-mr-xs"
        />
        Baba Oyoyo
      </div>
      <div class="row">
        <q-btn round outline class="q-mx-xs" color="grey" icon="far fa-smile" />
        <q-btn round outline class="q-mx-xs" color="grey" icon="far fa-frown" />
      </div>
    </div>
    <div class="row q-mt-lg">
      <q-space />
      <q-btn
        outline
        rounded
        color="primary"
        class="btn"
        no-caps
        label="Continue"
      />
      <q-space />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "OrderRating",
});
</script>

<style scoped>
.border {
  border: 1px solid rgb(128, 128, 128, 0.2);
  border-radius: 6px;
}
.btn {
  width: 60%;
}
</style>
