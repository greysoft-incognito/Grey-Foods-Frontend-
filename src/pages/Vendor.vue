<template>
  <div class="wrapper">
    <div class="vendors container">
      <div class="vendors_hold q-mb-xl q-mt-md">
        <div class="top">
          <img src="/images/banner.png" alt="" />
        </div>

        <div
          style="gap: 1rem"
          class="hold row justify-between no-wrap items-center"
        >
          <div class="left">
            <p class="text-primary text-weight-bold">Delicia</p>
            <p class="q-my-sm">20 mins</p>
            <small>
              <i class="ri-map-pin-fill text-primary"></i> 31, Gwari Avenue
              Barnawa, kaduna
            </small>
          </div>

          <div class="right items-end">
            <q-checkbox
              v-model="val"
              checked-icon="star"
              unchecked-icon="star_border"
              indeterminate-icon="help"
            />
            <img src="/images/open.png" alt="" class="open" />
          </div>
        </div>
      </div>
      <h5>Available</h5>
      <div class="days">
        <p>
          <span>MON- FRI</span>
          <span>-------------------------------------</span>
          <span>9AM - 10PM</span>
        </p>
        <p>
          <span>MON- FRI</span>
          <span>-------------------------------------</span>
          <span>9AM - 10PM</span>
        </p>
        <p>
          <span>MON- FRI</span>
          <span>--------------------------------------</span>
          <span>9AM - 10PM</span>
        </p>
      </div>

      <div class="search_bar">
        <input type="text" placeholder="Search for menu" />
        <q-btn class="search_btn"
          ><i style="font-size: 1.5rem" class="ri-search-fill"></i
        ></q-btn>
      </div>

      <div class="tabs q-py-xl">
        <q-tabs
          v-model="tab"
          dense
          autoplay
          class="text-weight-bold q-mb-lg"
          active-color="dark"
          indicator-color="primary"
          align="justify"
          narrow-indicator
          mobile-arrows="true"
          outside-arrows="true"
        >
          <q-tab
            class="text-info text-weight-bold"
            name="Fast Food"
            label="Fast Food"
          />
          <q-tab class="text-info" name="Swallow" label="Swallow" />
          <q-tab class="text-info" name="Protein " label="Protein" />
          <q-tab class="text-info" name="Drinks" label="Drinks" />
          <q-tab class="text-info" name="Soup" label="Soup" />
          <q-tab class="text-info" name="Cleaning" label="Cleaning" />
          <q-tab class="text-info" name="Creative" label="Creative" />
          <q-tab class="text-info" name="Car Washing" label="Car Washing" />
        </q-tabs>

        <!-- <q-separator /> -->

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="Fast Food">
            <div class="foods">
              <div
                class="row meals justify-between no-wrap items-center"
                v-for="meal in meals"
                :key="meal.id"
              >
                <div class="left">
                  <img :src="meal.img" alt="" />
                </div>

                <div class="right">
                  <div class="">
                    <p class="text-weight-bold name">{{ meal.name }}</p>
                    <p class="price">{{ meal.price }}</p>
                    <div
                      style="gap: 0.55rem"
                      class="buttons no-wrap row justify-between"
                    >
                      <div class="btn_arith">
                        <q-btn class="arith_btn">
                          <i
                            style="font-size: 1rem"
                            class="ri-subtract-fill"
                          ></i>
                        </q-btn>
                        <div>{{ meal.quantity }}</div>
                        <q-btn class="arith_btn">
                          <i style="font-size: 1rem" class="ri-add-fill"></i>
                        </q-btn>
                      </div>
                      <q-btn class="addto_plate">
                        <i
                          style="font-size: 0.65rem"
                          class="ri-restaurant-line"
                        ></i>
                        Add to plate
                      </q-btn>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </q-tab-panel>
          <q-tab-panel name="Swallow"> </q-tab-panel>
          <q-tab-panel name="Protein"> </q-tab-panel>
          <q-tab-panel name="Drinks"> </q-tab-panel>
          <q-tab-panel name="Soup"> </q-tab-panel>
          <q-tab-panel name="Cleaning"> </q-tab-panel>
          <q-tab-panel name="Creative"> </q-tab-panel>
          <q-tab-panel name="Car Washing"> </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    return {
      val: ref(false),
      tab: ref("Fast Food"),
      meals: [
        {
          id: 4,
          img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1796",
          name: "Jollof Rice",
          price: 700,
          quantity: 1,
        },
        {
          id: 5,
          img: "https://media.istockphoto.com/photos/party-dj-picture-id184936708?k=20&m=184936708&s=612x612&w=0&h=0AJeZ8L4Tbj5meILAeXHRM5oDV1EDaFvOWLZJ9OyemY=",
          name: "Jollof Rice",
          price: 700,
          quantity: 1,
        },
        {
          id: 6,
          img: "/images/sixth.png",
          name: "Jollof Rice",
          price: 700,
          quantity: 1,
        },
        {
          id: 7,
          img: "/images/eight.png",
          name: "Jollof Rice",
          price: 700,
          quantity: 1,
        },
        {
          id: 8,
          img: "/images/ninth.png",
          name: "Jollof Rice",
          price: 700,
          quantity: 1,
        },
        {
          id: 9,
          img: "/images/tenth.png",
          name: "Jollof Rice",
          price: 700,
          quantity: 1,
        },
        {
          id: 10,
          img: "/images/eleven.png",
          name: "Jollof Rice",
          price: 700,
          quantity: 1,
        },
        {
          id: 11,
          img: "/images/twelve.png",
          name: "Jollof Rice",
          price: 700,
          quantity: 1,
        },
        {
          id: 12,
          img: "/images/thirteen.png",
          name: "Jollof Rice",
          price: 700,
          quantity: 1,
        },
      ],
    };
  },
};
</script>

<style scoped>
.vendors_hold {
  background: rgba(238, 238, 238, 0.76);
  border-radius: 19.2929px;
  padding: 1rem;
}
p {
  margin-bottom: 0;
}

h5 {
  font-size: 16px;
  line-height: 139.5%;
  color: #3f434a;
  font-weight: 700;
  margin-bottom: 0.45rem;
}

.days p {
  font-size: 14px;
  line-height: 139.5%;
  color: #3f434a;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.search_bar {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  margin: 1.5rem 0;
}

.search_bar input {
  background: rgba(217, 217, 217, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  width: 100%;
  padding: 0.75rem;
}

.search_bar .search_btn {
  background: #fe724c;
  box-shadow: 0px 11.4706px 22.9412px rgba(233, 237, 242, 0.5);
  border-radius: 8px;
  color: #fff;
  padding: 0.75rem;
}

.hold .right {
  display: flex;
  flex-direction: column;
}

.hold .right img {
  width: 60px;
  height: 60px;
}

.addto_plate {
  background: #fe724c;
  border-radius: 100px;
  font-size: 12px;
  color: #fff;
  text-transform: capitalize;
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

.arith_btn {
  background: #fe724c;
  color: #fff;
  padding: 0.3rem;
  border-radius: 100px;
  width: 30px;
  height: 30px;
}

.btn_arith {
  padding: 0.35rem;
  background: #ffffff;
  border: 1px solid #fe724c;
  border-radius: 100px;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.foods .left img {
  width: 120px;
}
.foods .right .name {
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  text-align: right;
  margin: 0.25rem 0;
  color: #333333;
}

.foods .right .price {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: right;
  color: #979797;
  margin: 0.25rem 0;
}

.meals {
  background: #ffffff;
  border: 0.712435px solid #c4c4c4;
  border-radius: 5.69948px;
  padding: 0.5rem;
}
</style>
