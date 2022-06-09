<template>
  <q-page class="q-mt-md">
    <q-list class="q-px-md q-my-sm" v-for="n in 5" :key="n">
      <q-item-label header class="text-bold text-black q-mb-sm"
        >Day</q-item-label
      >

      <q-item class="border q-mb-sm" v-for="n in 2" :key="n">
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-primary text-bold text-subtitle1"
            >Delicia</q-item-label
          >
          <q-item-label caption lines="2" class="text-subtitle2">
            Thanks for your order, enjoy upto 10% discount on your next order.
          </q-item-label>
        </q-item-section>

        <q-item-section side top class="text-caption">
          1 min ago
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Notifications",
});
</script>

<style scoped>
.border {
  border: 1px solid rgb(128, 128, 128, 0.2);
  border-radius: 6px;
}
</style>
