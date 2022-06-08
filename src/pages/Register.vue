<template>
  <div class="wrapper container q-pt-xl">
    <!-- <p class="top-text text-left text-weight-bold text-primary">
      Sign Up
    </p> -->

    <div class="eight q-my-lg">
      <div class="logo">
        <img src="/images/logo.png" alt="" />
      </div>
      <h3><span class="login-text text-primary">Sign up with</span></h3>

      <div class="log">
        <div class="wrapp">
          <div class="icon">
            <img src="/f-font.png" alt="" />
          </div>

          <p class="q-ml-md">Facebook</p>
        </div>

        <div class="wrapp">
          <div class="icon">
            <img src="/g-font.png" alt="" />
          </div>

          <p class="q-ml-md">Google</p>
        </div>
      </div>
    </div>

    <nav class="q-pb-md">
      <ul>
        <q-tabs active-color="primary" class="flexx text-accent">
          <q-route-tab class="info" to="/login" exact label="Log in" />
          <q-route-tab class="info" to="/register" exact label="Sign Up" />
        </q-tabs>
      </ul>
    </nav>
    <div class="text-red q-mb-sm">
      {{ resp }}
    </div>
    <form @submit.prevent="register">
      <p
        v-if="errors.length"
        class="text-white q-mb-xl resp bg-primary q-px-lg q-py-md"
      >
        {{ errors[0] }}
      </p>
      <!-- {{form}} -->
      <!-- {{errors}} -->
      <div class="input-wrap">
        <label class="text-secondary" for="">Full Name</label> <br />

        <div class="input">
          <!-- <i class="far q-mr-md fa-user text-primary"></i> -->

          <input
            v-model="form.name"
            type="text"
            placeholder="First name and Last name"
          />
        </div>
      </div>
      <div class="input-wrap">
        <label class="text-secondary" for="">Email</label> <br />

        <div class="input">
          <!-- <i class="ri-mail-line q-mr-md text-primary"></i> -->

          <input
            type="email"
            v-model="form.email"
            placeholder="Enter your email here"
          />
        </div>
      </div>

      <div class="input-wrap">
        <label class="text-secondary" for="">Phone Number</label> <br />

        <div class="input">
          <!-- <i class="ri-lock-line q-mr-md text-primary"></i> -->
          <span>+234</span>

          <input
            v-model="form.phone_number"
            type="tel"
            placeholder="81434449996"
          />
        </div>
      </div>
      <div class="input-wrap">
        <label class="text-secondary" for="">Password</label> <br />

        <div class="input">
          <!-- <i class="ri-lock-line q-mr-md text-primary"></i> -->

          <input
            type="password"
            v-model="form.password"
            placeholder="Password"
          />
        </div>
      </div>

      <div class="input-wrap">
        <label class="text-secondary" for="">Confirm Password</label> <br />

        <div class="input">
          <!-- <i class="ri-lock-line q-mr-md text-primary"></i> -->

          <input
            type="password"
            v-model="form.password_confirmation"
            placeholder="Confirm password"
          />
        </div>
      </div>

      <div class="button q-py-xl q-mt-lg text-center">
        <!-- <button class="btn">Register</button> -->
        <q-btn type="submit" class="btn q-py-sm q-px-xl">Sign Up</q-btn>
      </div>
    </form>

    <p class="text-dark q-pb-xl text-center">
      By logging into your account you agree to our
      <span class="text-primary">Terms and Conditions</span>.
    </p>
  </div>
</template>

<script>
import { useQuasar, QSpinnerGears } from "quasar";
import { api } from "boot/axios";
import axios from "axios";

export default {
  data() {
    return {
      resp: "",
      form: {
        email: "",
        password: "",
        password_confirmation: "",
        name: "",
        phone_number: "",
      },
      errors: [],
    };
  },
  methods: {
    async register() {
      let resp = await api
        .post("/api/register", this.form)
        .catch((err) => console.log(err.response.data));
    },
  },
};
</script>

<style scoped>
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
}
.logo img {
  width: 150px;
  height: 150px;
  object-fit: contain;
  margin: 0 auto;
}

p {
  margin-bottom: 4px;
}

.login-text {
  margin-top: -10px;
  font-size: 1.2rem;
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* height: 100vh; */
}

.heeder {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.heeder i {
  font-size: 35px;
}

.heeder .icon {
  cursor: pointer;
}

.heeder .logo {
  object-fit: contain;
  width: 40px;
  height: 40px;
}
.heeder .logo img {
  object-fit: contain;
}

.input-wrap,
select {
  width: 100%;
}

.input-wrap .input {
  /* border: 1px solid #2b945b; */
  height: 60px;
  margin: 1rem 0;
  background: rgba(236, 236, 236, 0.67);
  border: 1px solid rgba(229, 229, 229, 0.2);
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  align-items: center;
}

.input-wrap .input input,
select {
  border: none;
  padding: 0.45rem 1rem;
  background: transparent;
  color: #959292;
  width: 100%;
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

::placeholder {
  color: #c4c4c4;
}

.input-wrap .input span {
  background: #fe724c;
  border-radius: 6.36364px;
  padding: 0.65rem;
  margin: 0 0.75rem 0 0.3rem;
  color: #fff;

  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn {
  border: none;
  /* background: linear-gradient(121.81deg, #2b945b 20.1%, #8bc34a 131.87%); */
  background-color: #fff;
  padding: 16px 24px 16px 24px;
  margin: 1rem;
  font-size: 1.3rem !important;
  border-radius: 60px;
  border: 1px solid #fe724c;
  color: #fe724c;
  margin: 0.55rem 0;
  padding: 1rem;
  width: 60%;
  margin: 0rem auto 2rem;

  /* font-size: 1.6rem; */
}

.eight h3 {
  text-align: center;
  font-size: 1rem;
  letter-spacing: 1px;
  font-weight: bold;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 16px 0;
  grid-gap: 22px;
}

.eight h3:after,
.eight h3:before {
  content: " ";
  display: block;
  border-bottom: 1px solid #ccc;
  /* background-color: #f8f8f8; */
}

.log {
  display: grid;
  /* grid-template-columns: repeat(2, 1fr); */
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));

  gap: 2rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 2.5rem auto;
}

.log .wrapp {
  display: flex;
  align-items: center;
  background: #ffffff;
  width: 100%;
  box-shadow: 18.587px 18.587px 37.1739px rgba(211, 209, 216, 0.25);
  border-radius: 28.5px;
  background: #ffffff;
  border: 1.23913px solid #c4c4c4;
  border-radius: 28.5px;
  padding: 1rem;
}

.log .wrapp i {
  font-size: 2rem;
}
.log .wrapp img {
  width: 40px;
  height: 40px;
}
@media (max-width: 500px) {
  .log .wrapp p {
    font-size: 11px;
  }
  .btn {
    width: 100%;
  }
}

.ri-facebook-box-fill {
  color: #4267b2;
}

.ri-google-fill {
  color: #fbbc05;
}

.log .wrap p {
  margin: 0 1rem;
}

.flexx {
  display: flex;
  justify-content: space-between;
}

.q-tab {
  width: 50% !important;
}
@media (max-width: 500px) {
  .input-wrap .input input:placeholder-shown,
  select {
    font-size: 14px;
  }
  .log {
    width: 100%;
  }
  .resp {
    padding: 1rem;
    border-radius: 8px;
    font-size: 12px;
  }
}
</style>
