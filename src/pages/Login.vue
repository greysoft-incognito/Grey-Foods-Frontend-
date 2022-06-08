<template>
  <div class="wrapper container q-pt-sm">
    <div class="eight q-my-lg">
      <div class="logo">
        <img src="/images/logo.png" alt="" />
      </div>
      <h3><span class="login-text text-primary">Login</span></h3>

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

    <!-- End of This div needs to be changed -->

    <nav class="q-pb-md">
      <ul>
        <q-tabs active-color="primary" class="flexx text-accent">
          <q-route-tab class="info" to="/login" label="Login" />
          <q-route-tab class="info" to="/register" label="Sign Up" />
        </q-tabs>
      </ul>
    </nav>
    <div class="text-red q-mb-sm">
      <p
        v-if="errors.length"
        class="text-white q-mb-xl resp bg-primary q-px-lg q-py-md"
      >
        {{ errors[0] }}
      </p>
    </div>
    <form @submit.prevent="login">
      <!-- <div class="input-wrap">
        <label class="text-primary" for="">Email</label> <br />

        <div class="input">
          <i class="ri-mail-line q-mr-md text-primary"></i>

          <input
            v-model="form.email"
            type="email"
            placeholder="Enter your email"
          />
        </div>
      </div> -->
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
        <!-- <p class="text-primary forgot">Forgot password?</p> -->
      </div>

      <div class="button q-pt-xl text-center">
        <q-btn type="submit" class="btn q-py-sm q-px-xl">Login</q-btn>
      </div>
    </form>

    <p class="text-dark q-pb-xl text-center">
      By logging into your account you agree to our
      <span class="text-primary">Terms and Conditions</span>.
    </p>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
export default {
  data() {
    return {
      resp: "",
      errors: [],

      form: {
        phone_number: "",
      },
    };
  },
  methods: {
    login: function () {
      // console.log('working');
      let password = this.form.phone_number;

      this.$store
        .dispatch("login", { email, password })
        .then(() => {
          this.resp = "Logged In Successfully";

          this.$router.push("/page");
        })
        .catch(() => {
          const mesg = "Please Recheck Credentials";
          this.errors.push(mesg);
          setTimeout(() => {
            this.errors.pop();
            // this.$router.push('/login')
          }, 2000);
        });
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

.top-text {
  font-size: 1rem;
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  /* height: 100vh; */
}

.forgot {
  display: flex;
  justify-content: flex-end;
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
  /* padding: 0.75rem 0; */
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
  padding: 0.45rem 0;
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

.input-wrap .input span {
  background: rgba(196, 196, 196, 0.62);
  border-radius: 6.36364px;
  padding: 0.65rem;
  margin: 0 0.75rem 0 0.3rem;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

::placeholder {
  color: #c4c4c4;
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

@media (max-width: 400px) {
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
