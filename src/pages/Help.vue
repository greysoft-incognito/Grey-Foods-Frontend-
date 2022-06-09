<template>
  <q-page class="q-pt-xl q-px-md r">
    <form action="" class="q-mt-xl">
      <div class="text-subtitle1 text-bold q-my-sm">Chat with Us</div>
      <q-input outlined type="textarea" class="q-mb-lg" />

      <q-btn
        class="btn"
        rounded
        color="primary"
        label="Send Message"
        size="1.1rem"
        no-caps
        style="width: 100%"
        @click="alert = true"
      />
    </form>

    <!-- Dialog -->
    <q-dialog v-model="alert">
      <q-card class="column items-center text-center q-pa-md">
        <q-avatar round size="5rem" color="grey-3" text-color="white">
          <q-icon name="fas fa-check" color="primary" />
        </q-avatar>

        <div class="text-bold q-my-sm">Message Sent</div>
        <div class="q-px-xl text-caption">
          Your message was sent successfully, We will get back to via email.
        </div>

        <q-btn
          label="Go to Dashboard"
          no-caps
          size="1.05rem"
          style="width: 80%"
          rounded
          color="primary"
          v-close-popup
          class="q-my-md"
        />
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "Favourite",
  data() {
    return {
      alert: ref(false),
    };
  },
});
</script>

<style scoped>
.btn {
  margin: 30% 0 0;
}
</style>
