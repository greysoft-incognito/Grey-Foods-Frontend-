<template>
  <div class="wrapper q-pt-lg">
    <div class="kl q-pb-md q-px-md">
      <q-btn
        class="back-button"
        to="/plate"
        flat
        color="primary"
        icon="arrow_back"
      />

      <p class="top-text text-weight-bold text-dark">My Profile</p>
    </div>
    <div class="holderr container">
      <div class="avatar-upload">
        <div class="avatar-edit">
          <input
            type="file"
            id="imageUpload"
            accept=".png, .jpg, .jpeg"
            @change="previewImage"
          />
          <label for="imageUpload"><i class="ri-pencil-line"></i></label>
        </div>
        <div class="avatar-preview">
          <img id="imagePreview" :src="preview" />
        </div>
        <q-btn @click="editProfile" v-if="!edit_active" class="edit_btn"
          >Edit Profile</q-btn
        >
      </div>
      <div class="right">
        <div class="bio">
          <div class="hold">
            <div class="inputs">
              <div class="holdd">
                <form
                  enctype="multipart/form-data"
                  id="form"
                  @submit.prevent="saveUser"
                >
                  <div class="two">
                    <div class="input-wrap">
                      <label class="text-dark" for="">Full Name</label>
                      <br />

                      <div class="input">
                        <i class="far q-mr-md fa-user text-tertiary"></i>

                        <input
                          type="text"
                          name="firstname"
                          v-model="form.firstname"
                          placeholder="Enter your firstname"
                        />
                      </div>
                      <div class="error" v-if="errors.firstname">
                        {{ errors.firstname[0] }}
                      </div>
                    </div>
                    <div class="input-wrap">
                      <label class="text-dark" for="">Nick Name</label>
                      <br />

                      <div class="input">
                        <i class="far q-mr-md fa-user text-tertiary"></i>

                        <input
                          type="text"
                          name="lastname"
                          v-model="form.lastname"
                          placeholder="Enter your lastname"
                        />
                      </div>
                      <div class="error" v-if="errors.lastname">
                        {{ errors.lastname[0] }}
                      </div>
                    </div>
                  </div>

                  <div class="input-wrap">
                    <label class="text-dark" for="">Email</label> <br />

                    <div class="input">
                      <i class="ri-mail-line q-mr-md text-tertiary"></i>

                      <input
                        type="email"
                        name="email"
                        v-model="form.email"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div class="two">
                      <div class="input-wrap">
                        <label class="text-dark" for="">Address</label>
                        <br />

                        <div class="input">
                          <i
                            class="ri-user-location-line q-mr-md text-tertiary"
                          ></i>

                          <input
                            type="text"
                            name="address[home]"
                            v-model="form.address.home"
                            placeholder="Enter your address"
                          />
                        </div>
                        <div class="error" v-if="errors['address.home']">
                          {{ errors["address.home"][0] }}
                        </div>
                      </div>
                      <div class="input-wrap">
                        <label class="text-dark" for="">Gender</label>
                        <br />

                        <div class="input">
                          <i class="ri-group-line q-mr-md text-tertiary"></i>

                          <select name="gender" v-model="form.gender" id="">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div class="error" v-if="errors.gender">
                          {{ errors.gender[0] }}
                        </div>
                      </div>
                    </div>

                    <div class="input-wrap">
                      <label class="text-dark" for="">Contacts Number</label>
                      <br />

                      <div class="input">
                        <i class="ri-phone-line q-mr-md text-tertiary"></i>

                        <input
                          name="phone"
                          v-model="form.phone"
                          type="text"
                          placeholder="08104000...."
                        />
                      </div>
                      <div class="error" v-if="errors.phone">
                        {{ errors.phone[0] }}
                      </div>
                    </div>
                    <div v-if="edit_active" class="edit_active">
                      <div class="input-wrap">
                        <label class="text-dark" for="">Password</label>
                        <br />

                        <div class="input">
                          <i class="ri-lock-fill q-mr-md text-tertiary"></i>

                          <input
                            name="passowrd"
                            v-model="form.password"
                            :type="is_password ? 'password' : 'text'"
                          />
                          <q-btn
                            class="q-ml-md"
                            type="button"
                            style="font-size: 18px"
                            @click="is_password = !is_password"
                            ><i
                              :class="`${
                                is_password ? 'ri-eye-line' : 'ri-eye-off-line'
                              } text-primary`"
                            ></i
                          ></q-btn>
                        </div>
                        <div class="error" v-if="errors.password">
                          {{ errors.password[0] }}
                        </div>
                      </div>
                      <div class="input-wrap">
                        <label class="text-dark" for="">Confirm Password</label>
                        <br />

                        <div class="input">
                          <i class="ri-lock-fill q-mr-md text-tertiary"></i>

                          <input
                            name="password"
                            v-model="form.confirm_password"
                            :type="is_password ? 'password' : 'text'"
                          />
                          <q-btn
                            class="q-ml-md"
                            type="button"
                            style="font-size: 18px"
                            @click="is_password = !is_password"
                            ><i
                              :class="`${
                                is_password ? 'ri-eye-line' : 'ri-eye-off-line'
                              } text-primary`"
                            ></i
                          ></q-btn>
                        </div>
                        <div class="error" v-if="errors.confirm_password">
                          {{ errors.confirm_password[0] }}
                        </div>
                      </div>

                      <q-btn class="save" @click="saveChanges">
                        Save changes
                      </q-btn>
                    </div>
                  </div>
                </form>
              </div>

              <div class="det"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      is_password: true,
      edit_active: false,

      preview: "/images/banner.png",
      image: null,
      preview_list: [],
      image_list: [],
      form: {
        firstname: "",
        lastname: "",
        gender: "",
        address: {
          home: "",
          shipping: "",
        },
        phone: "",
        email: "",
      },
      errors: [],
    };
  },

  methods: {
    previewImage(event) {
      var input = event.target;
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          console.log(e.target.result);
          this.preview = e.target.result;
        };
        this.image = input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    },
    editProfile() {
      this.edit_active = true;
    },
    saveChanges() {
      console.log("first");
    },
  },
};
</script>

<style scoped>
.profile-imgg .uppy-container {
  margin: 0 !important;
}

.avatar-upload {
  position: relative;
  max-width: 205px;
  margin: 50px auto;
}
.avatar-upload .avatar-edit {
  position: absolute;
  right: 12px;
  z-index: 1;
  top: 10px;
}
.avatar-upload .avatar-edit input {
  display: none;
}
.avatar-upload .avatar-edit input + label {
  display: inline-block;
  width: 34px;
  height: 34px;
  margin-bottom: 0;
  border-radius: 100%;
  background: #ffffff;
  border: 1px solid transparent;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  font-weight: normal;
  transition: all 0.2s ease-in-out;
}
.avatar-upload .avatar-edit input + label:hover {
  background: #f1f1f1;
  border-color: #d6d6d6;
}

.avatar-upload .avatar-preview {
  width: 192px;
  height: 192px;
  position: relative;
  border-radius: 100%;
  border: 6px solid #f8f8f8;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
}
.avatar-upload .avatar-preview > img {
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
p {
  margin-bottom: 0;
}
label {
  font-size: 18px;
  line-height: 21px;

  color: #3f434a;
}
.ri-user-fill {
  font-size: 5rem;
}

.kl {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 1rem 1rem 0;
}
.back-button {
  border-radius: 12px;
  box-shadow: 5px 10px 20px rgba(211, 209, 216, 0.3);
  border: 1px solid #fe724c;
}

.save {
  color: #fe724c;
  padding: 0.75rem;
  width: 100%;
  margin-top: 2rem;
  background: #ffffff;
  border: 1px solid #fe724c;
  border-radius: 60px;
  font-weight: 800;
}

.edit_btn {
  padding: 0.75rem;
  color: #fe724c;
  background: #ffffff;
  border: 1px solid #fe724c;
  border-radius: 60px;
  margin-top: 2rem;
  width: 90%;
}
@media (max-width: 1100px) {
  .btns {
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 0.85rem;
  }
  .holderr {
    display: flex;
    flex-direction: column;
    /* display: grid;
    grid-template-columns: 1fr;
    gap: 3rem; */
  }

  .bios {
    grid-template-columns: 1fr;
  }
  .bio .hold .det {
    grid-template-columns: 1fr;
  }

  .left h6 {
    line-height: 1;
    margin-bottom: 1rem;
  }
}

@media (max-width: 600px) {
  .bio .hold {
    font-size: 1.3rem;
  }

  .holderr {
    display: flex;
    flex-direction: column;
    font-size: 0.85rem;
  }

  .bios {
    padding: 1rem;
  }

  .bio .hold ul li p {
    font-size: 1rem;
  }

  .biosm .right,
  .biosm .left {
    padding: 2rem;
  }

  .bio .hold ul li p {
    font-size: 0.75rem;
  }
}
@media (max-width: 500px) {
  .biosm {
    /* grid-template-columns: 1fr; */
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .holderr {
    display: flex;
    flex-direction: column;
    font-size: 0.75rem;
  }

  .biosm .right,
  .biosm .left {
    width: 100%;

    padding: 3rem;
  }
}
.value {
  position: absolute;
  left: 20%;
}

::placeholder,
.value {
  opacity: 0.7;
  font-size: 16px;
  line-height: 19px;
  color: #7f7f7f;
}

h1 small {
  display: block;
  font-size: 15px;
  padding-top: 8px;
  color: gray;
}
.avatar-upload {
  position: relative;
  max-width: 100%;
  margin: 50px auto 25px;
  display: grid;
  place-items: center;
}

.avatar-upload .avatar-edit input {
  display: none;
  /* display: block;
  position: absolute;
  top: 50%;
  max-width: 200px;
  left: 55%;
  transform: translate(-50%, -50%); */
}
.avatar-upload .avatar-edit input + label {
  display: inline-block;
  width: 34px;
  height: 34px;
  margin-bottom: 0;
  border-radius: 100%;
  background: #ffffff;
  border: 1px solid transparent;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  font-weight: normal;
  transition: all 0.2s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar-upload .avatar-edit input + label i {
  font-size: 20px;
}
.avatar-upload .avatar-edit input + label:hover {
  background: #f1f1f1;
  border-color: #d6d6d6;
}
/* .avatar-upload .avatar-edit input + label:after {
  content: "\f044";
  font-family: "FontAwesome";
  color: #757575;
  position: absolute;
  background: #fff;
  font-size: 1.6rem;
  right: 15px;
  text-align: center;
  margin: auto;
  z-index: 200;
} */
.avatar-upload .avatar-preview {
  width: 222px;
  height: 222px;
  position: relative;
  border-radius: 100%;
  border: 6px solid #f8f8f8;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
}
.avatar-upload .avatar-preview > div {
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
}

.two {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  align-items: center;
}

.three {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  align-items: center;
}
.error {
  font-size: 0.9em;
  color: #ff0000;
}

.input-wrap,
select {
  width: 100%;
  margin: 0.65rem 0;
  position: relative;
}
.input-wrap .input {
  /* border: 1px solid #; */
  border: solid 1px #ccc;

  padding: 0.75rem;
  margin: 0.4rem 0;
  height: 55px;
  margin-bottom: 2px;
  /* background: rgba(236, 236, 236, 0.67); */
  /* border: 1px solid rgba(229, 229, 229, 0.2); */
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  position: relative;
  align-items: center;
}

.input-wrap .input input,
select {
  border: none;
  padding: 0.45rem;
  background: transparent;
  color: #959292;
  width: 100%;
  cursor: pointer;
  position: relative;
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
  margin: 3rem;
  border-radius: 60px;
  border: 1px solid #2b945b;
  font-size: 1.3rem !important;
  color: #2b945b;
  padding: 0.1rem;
  width: 30%;
  /* font-size: 1.6rem; */
}

.btnx {
  padding: 0.35rem 0.65rem;
  color: #fff;
  background: linear-gradient(
    121.81deg,
    #2b945b 20.1%,
    #8bc34a 131.87%
  ) !important;
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
  /* align-items: center; */
  /* justify-content: center; */
  padding: 0 1rem;
  /* margin:0 1rem ; */
}
.log .wrapp i {
  font-size: 2rem;
}
.log .wrapp img {
  width: 20px;
  height: 20px;
}
@media (max-width: 500px) {
  .log .wrapp p {
    font-size: 11px;
  }
  .btn {
    width: 80%;
  }

  .two {
    gap: 0rem;
  }

  .three {
    gap: 0rem;
  }

  .input-wrap .input {
    font-size: 13.5px;
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
@media (max-width: 900px) {
  .two,
  .three {
    grid-template-columns: 1fr;
  }
  .two {
    gap: 0rem;
  }

  .three {
    gap: 0rem;
  }

  .value {
    position: absolute;
    left: 15%;
  }

  ::placeholder,
  .value {
    font-size: 14px;
  }
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
