<template>
  <div class="wrapper container q-pt-lg">
    <div class="kl q-pb-md">
      <q-btn
        class="back-button"
        to="/plate"
        flat
        color="primary"
        icon="arrow_back"
      />

      <p class="top-text text-weight-bold text-dark">Delicia</p>
    </div>

    <div class="q-mt-lg">
      <!-- {{ resp }} -->
      <p class="text-weight-bold text-dark q-ml-sm">Payment method.</p>
      <div class="">
        <q-tabs
          v-model="tab"
          dense
          class="text-grey bgp"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
          inline-label
        >
          <q-tab icon="money" class="q-ml-sm small" name="Cash" label="Cash" />

          <q-tab icon="payment" class="small" name="Card" label="Card" />
          <!-- <q-tab name="movies" label="Movies" /> -->
        </q-tabs>

        <q-tab-panels class="q-pt-lg" v-model="tab" animated>
          <!-- <q-tab-panel name="Cash"> </q-tab-panel>

          <q-tab-panel name="Transfer">
            <p class="q-pa-md">Account Name: Grey Foods</p>
            <p class="q-pa-md">Account Number: 849283923</p>
            <p class="q-pa-md">Bank: GTBank</p>
          </q-tab-panel> -->

          <q-tab-panel class="tabb no-padding" name="Card">
            <form id="card" @submit.prevent="generateToken">
              <div class="input-wrap q-pb-lg">
                <label
                  class="text-black text-bold"
                  style="font-size: 1rem"
                  for=""
                  >Card holder name</label
                >
                <div class="input">
                  <input
                    v-model="form.name"
                    type="text"
                    placeholder="Ademola Alfred"
                  />
                </div>
                <!-- <p class="text-primary forgot">Forgot password?</p> -->
              </div>

              <div class="input-wrap q-pb-lg">
                <label
                  class="text-black text-bold"
                  style="font-size: 1rem"
                  for=""
                  >Card number</label
                >
                <div class="input">
                  <input
                    v-model="form.card_number"
                    type="password"
                    placeholder="XXXXXXXXX"
                  />
                  <i class="ri-visa-fill"></i>
                </div>
                <!-- <p class="text-primary forgot">Forgot password?</p> -->
              </div>

              <div class="gridd">
                <div class="input-wrap">
                  <label
                    class="text-black text-bold"
                    style="font-size: 1rem"
                    for=""
                    >Expiration date</label
                  >
                  <br />

                  <div class="input">
                    <input
                      v-model="form.expiration_date"
                      type="email"
                      placeholder="MM/YY"
                    />
                  </div>
                </div>
                <div class="input-wrap">
                  <label
                    class="text-black text-bold"
                    style="font-size: 1rem"
                    for=""
                    >Security code</label
                  >
                  <br />

                  <div class="input">
                    <input
                      v-model="form.security_code"
                      type="text"
                      placeholder="CVC"
                    />
                  </div>
                  <!-- <p class="text-primary forgot">Forgot password?</p> -->
                </div>
              </div>
              <div class="rem q-pt-md">
                <input type="radio" name="" id="" />
                <small class="q-ml-xs">remember this card next time</small>
              </div>
            </form>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>

    <div class="th">
      <!-- <PayPopup @click="order"/> -->
      <q-btn
        type="submit"
        class="btnn text-center text-white bg-primary q-mt-lg q-py-sm"
      >
        <i class="q-mr-lg res text-primary ri-restaurant-fill"></i>Pay
        &#8358;500</q-btn
      >
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  components: {},
  data() {
    return {
      tab: ref("Card"),
      tab1: ref("Card"),
      form: {
        name: "",
        card_number: "",
        expiration_date: "",
        security_code: "",
      },
    };
  },
};
</script>

<style scoped>
p {
  margin-bottom: 0;
}
.meal {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #c4c4c4;
}

.back-button {
  border-radius: 12px;
  box-shadow: 5px 10px 20px rgba(211, 209, 216, 0.3);
  border: 1px solid #fe724c;
}

.sp {
  padding: 0.55rem 1rem;
  background: #fff;
  box-shadow: 0 1px 5px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 14%),
    0 3px 1px -2px rgb(0 0 0 / 12%);
}

.bgp {
  /* background: red !important; */
  padding: 0.1rem;
  margin: 0.5rem 0;
  /* background: rgba(236, 236, 236, 0.67); */
  border: 1px solid rgba(110, 110, 110, 0.2);
  box-sizing: border-box;
  border-radius: 27.5px;
  display: flex;
  align-items: center;
}

.small {
  font-size: 10px !important;
  line-height: 1.715em;
  font-weight: 500;
}
.q-tab--active {
  background-color: red;
  background: #fe724c;
  box-shadow: 0px 18px 40px rgba(211, 209, 216, 0.251);
  border-radius: 23.5px;
  padding: 0.55rem;
  color: #fff !important;
}

.q-tab__indicator {
  display: none;
}
.gridd {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}
.kl {
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  gap: 0.75rem;
}

.th {
  margin: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.res {
  background: #fff;
  padding: 0.55rem;
  width: 40px;
  text-align: center;
  border-radius: 50%;
}

.rem {
  display: flex;
  align-items: center;
  margin: 0.22rem;
}
.login-text {
  margin-top: -10px;
}

.top-text {
  font-size: 1.3rem;
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.input-wrap,
select {
  width: 100%;
}

.input-wrap .input {
  /* padding: 1rem; */
  background: transparent;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  font-size: 1rem;
}

.input-wrap .input input {
  width: 100%;
  border: none;
}

.input-wrap .input,
select {
  /* border: none; */
  padding: 1rem;
  /* background: transparent; */
  /* color: #959292; */
  width: 100%;
  border-radius: 9.4px;
  cursor: pointer;
  border: 1px solid rgba(110, 110, 110, 0.2);
}
.input-wrap .input:hover {
  outline: none;
  border: 1px solid #fe724c;
}
.input-wrap .input input:focus,
select:focus {
  outline: none;
}
.input-wrap .input .input:hover {
  border: 1px solid #2b945b;
  transition: all 0.5s ease-in-out;
}

.btn {
  border: none;
  /* background: linear-gradient(121.81deg, #2b945b 20.1%, #8bc34a 131.87%); */
  background-color: #fff;
  /* padding: 16px 24px 16px 24px; */
  margin: 1rem;
  border-radius: 60px;
  border: 1px solid #fe724c;
  font-size: 1.3rem !important;
  color: #fe724c;
  margin: 0.55rem 0;
  width: 50%;
  /* font-size: 1.6rem; */
}

.btnn {
  border-radius: 30px;
  font-size: 1rem;
  line-height: 123%;
  padding: 0.5rem 1.9rem 0.6rem 0.5rem;
}

.flexx {
  display: flex;
  justify-content: space-between;
}

.q-tab {
  width: 50% !important;
}

@media (max-width: 400px) {
  .input-wrap .input input:placeholder-shown,
  select {
    font-size: 14px;
  }
}
</style>
