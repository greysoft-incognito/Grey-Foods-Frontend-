<template>
  <div class="wrapper container q-pt-lg">
    <div class="kl q-pb-md">
      <q-btn
        class="back-button"
        to="/food"
        flat
        color="primary"
        icon="arrow_back"
      />

      <p class="top-text text-weight-medium text-dark">Delicia</p>
    </div>

    <div class="web">
      <div class="left">
        <div class="img">
          <img class="im" src="/images/banner.png" alt="" />
        </div>
        <div class="dee">
          <p class="text-weight-bold">Jollof Rice</p>
          <small class="text-accent q-mb-xs">Salad and Plantain</small>
          <!-- <h6 class="q-mt-xs text-body1">&#8358;100</h6> -->
        </div>
      </div>
      <div class="right">
        <q-btn
          style="font-size: 1rem"
          class="float-right text-primary q-pb-lg q-mb-sm"
          >X</q-btn
        ><br />
        <div class="con float-right">
          <p class="text-center">₦1400</p>
          <div class="btnss">
            <q-btn
              class="bot"
              round
              color="primary"
              flat
              size="10px"
              label="-"
            />
            <span class="text-caption quan">3</span>
            <q-btn
              round
              size="10px"
              class="bot plus-button"
              color="primary"
              label="+"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="text_area">
      <q-btn class="addto_plate">
        <i style="font-size: 0.65rem" class="ri-restaurant-line"></i>
        Add to plate
      </q-btn>

      <textarea
        placeholder="Comments ( Optional )"
        name=""
        id=""
        cols="10"
        rows="5"
      ></textarea>
    </div>

    <p class="text-weight-bold text-dark q-ml-sm">Delivery method.</p>
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
        <q-tab
          icon="local_shipping"
          class="small"
          name="delivery"
          label="Door Delivery"
        />
        <q-tab
          icon="directions_walk"
          class="q-ml-sm small"
          name="pickup"
          label="Pick Up"
        />
      </q-tabs>
      <q-tab-panels class="q-pt-lg" v-model="tab" animated>
        <q-tab-panel class="tabb no-padding" name="delivery">
          <p v-if="error" class="text-primary">{{ error }}</p>
          <div class="input-wrap">
            <label class="text-primary" style="font-size: 1rem" for=""
              >Address</label
            >
            <div class="input">
              <input
                v-model="this.address"
                type="text"
                placeholder="Barnawa close, block A flat 6. Kaduna"
                required
              />
            </div>
          </div>
        </q-tab-panel>

        <q-tab-panel name="pickup"> </q-tab-panel>
      </q-tab-panels>
    </div>

    <div class="summary">
      <div class="meal q-my-md">
        <p class="text-black">
          <span class="text-weight-bold text-black">Subtotal</span>
        </p>
        <p class="text-black">
          &#8358;500 <span class="text-black q-ml-xs"></span>
        </p>
      </div>
      <div class="meal q-my-md">
        <p class="text-black">
          <span class="text-weight-bold text-black">Delivery Fee</span>
        </p>
        <p class="text-black">
          &#8358;500 <span class="text-black q-ml-xs"></span>
        </p>
      </div>
      <div class="meal q-my-md">
        <p class="text-accent">
          <span class="text-weight-bold text-black">Total</span> ( 3 plates )
        </p>
        <p class="text-black">
          &#8358;500 <span class="text-black q-ml-xs"></span>
        </p>
      </div>
    </div>
    <div class="th">
      <q-btn
        @click="pay()"
        no-caps
        class="btnn text-center text-white bg-primary q-mt-lg q-py-sm"
      >
        <i class="q-mr-lg res text-primary ri-restaurant-fill"></i> Proceed to
        payment</q-btn
      >
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    return {
      address: "",
      tab: ref("delivery"),
      error: "",
    };
  },

  created() {},
  methods: {
    pay() {},
    hasHistory() {
      return window.history.length > 1;
    },
  },
};
</script>

<style scoped>
.addto_plate {
  background: #fe724c;
  border-radius: 100px;
  font-size: 12px;
  color: #fff;
  text-transform: capitalize;
  width: 40%;
  margin-bottom: 2rem;
}

.addto_plate i {
  background: #fff;
  color: #fe724c;
  padding: 0.3rem;
  border-radius: 100px;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.65rem;
}

.text_area {
  margin-bottom: 2rem;
}

textarea {
  background: rgba(196, 196, 196, 0.17);
  border-radius: 10px;
  width: 100%;
  padding: 0.75rem;
  border: none;
}
.quan {
  border: none;
  width: 10px;
}
.plus-button {
  box-shadow: 0px 8.15319px 17.4711px rgba(254, 114, 76, 0.4);
}
p {
  margin-bottom: 0;
}
.meal {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.meal:nth-child(3) {
  border-top: 1px solid #c4c4c4;
  padding-top: 0.5rem;
}

.back-button {
  border-radius: 12px;
  box-shadow: 5px 10px 20px rgba(211, 209, 216, 0.3);
  border: 1px solid #fe724c;
}

.sp {
  padding: 0.55rem 1rem;
  background: #fff;
}

.im {
  width: 100px;
}

.amount {
  font-size: 0.9rem;
  font-weight: bold;
}

.web {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0 1rem;
  padding: 1.5rem;
  flex-wrap: wrap;
  background: #ffffff;
  border: 0.712435px solid rgba(151, 151, 151, 0.71);
  border-radius: 8px;
}

.web .left {
  display: flex;
  flex: 1;
  gap: 1rem;
}

.web img {
  border-radius: 8px;
}
.con {
  margin-top: -1rem;
}
.con span {
  margin: 0 0.5rem;
}

.sp {
  padding: 0.55rem 1rem;
  background: #fff;
  box-shadow: 0 1px 5px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 14%),
    0 3px 1px -2px rgb(0 0 0 / 12%);
}

.bot {
  border: 0.1rem solid #fe724c;
  border-radius: 50%;
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
  gap: 1rem;
}

.th {
  margin: 1rem 0;
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

.input-wrap .input input,
select {
  border: 1px solid rgba(110, 110, 110, 0.2);
  padding: 1rem;

  width: 100%;
  border-radius: 9.4px;
  cursor: pointer;
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
  padding: 0.5rem 1.5rem 0.6rem 0.5rem;
}

.flexx {
  display: flex;
  justify-content: space-between;
}

.q-tab {
  width: 100% !important;
}

.summary {
  background: #ffffff;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  padding: 0.75rem;
  margin: 2rem 0 1rem;
}

@media (max-width: 400px) {
  .input-wrap .input input:placeholder-shown,
  select {
    font-size: 14px;
  }

  .web {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* margin: 1rem 0 3rem; */
    padding: 0.75rem;
    flex-wrap: wrap;
  }

  .web .right {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
}
</style>
