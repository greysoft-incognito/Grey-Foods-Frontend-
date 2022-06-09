<template>
  <q-page class="q-pt-xl q-px-md column justify-center">
    <div class="my-card bg-primary text-white q-pa-md">
      <div class="logo-container q-px-md bg-white flex flex-center">
        <img
          src="/Images/OnBoarding/orangelogo.png"
          style="width: 100%; margin: auto 0"
        />
      </div>

      <div class="first row justify-between text-h6 q-my-lg">
        <div>Order No.</div>
        <div>#36854</div>
      </div>

      <div class="q-mb-lg">
        <div class="text-bold">order</div>
        <div class="row justify-between text-subtitle1">
          <div>Jollof Rice</div>
          <div>N1,800</div>
        </div>
      </div>

      <div class="third bg-white text-black q-pa-sm text-subtitle2 white-card">
        <div class="row justify-between">
          <div>Subtotal</div>
          <div>N1,400</div>
        </div>

        <div class="row justify-between q-mb-lg">
          <div class="text-weight-light">Delivery Fee</div>
          <div>N400</div>
        </div>

        <q-separator />

        <div class="row justify-between q-mb-md">
          <div>
            Total <span class="q-ml-xs text-weight-light">(2 plates)</span>
          </div>
          <div>N1,400</div>
        </div>
      </div>

      <div class="row total justify-between q-my-xl">
        <div class="text-bold">TOTAL</div>
        <div>N1,400</div>
      </div>

      <div class="row q-my-lg">
        <q-space />
        <q-btn
          class="bg-white btn"
          @click="alert = true"
          text-color="primary"
          no-caps
          rounded
        >
          <q-icon
            name="fa-solid fa-utensils"
            class="q-mr-md bg-primary q-pa-sm"
            color="white"
            style="border-radius: 50%"
          />
          <span class="text-subtitle1 text-bold">Confirm Payment</span>
        </q-btn>
        <q-space />
      </div>
    </div>

    <!-- Dialog -->
    <q-dialog v-model="alert">
      <q-card class="column items-center text-center q-pa-md">
        <div class="text-bold q-my-sm text-h6">Confirm Payment?</div>
        <div class="q-px-lg text-subtitle2">
          Would you sure you like to continue with this transaction?
        </div>

        <div class="row q-my-lg">
          <q-btn
            label="Discard"
            outline
            rounded
            color="primary"
            v-close-popup
            class="q-mr-sm dialog-btn"
          />

          <q-btn
            label="Continue"
            rounded
            color="primary"
            v-close-popup
            class="dialog-btn"
          />
        </div>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "Order",
  data() {
    return {
      alert: ref(false),
    };
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
