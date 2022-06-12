<template>
  <div class="tex q-pt-md container">
    <div class="meals row_meals">
      <div
        v-for="meal in sampleMeals"
        :key="meal.id"
        class="span row no-wrap q-pl-md q-pr-lg items-center"
      >
        <img :src="meal.img" alt="" />
        <p class="text-primary text-primary">{{ meal.name }}</p>
      </div>
    </div>
    <div class="banners row_meals">
      <div
        v-for="banner in sampleBanners"
        :key="banner.id"
        class="banner row no-wrap items-center"
      >
        <div class="left bg-primary q-pa-sm text-white">
          <p class="text-weight-bold q-mt-sm">{{ banner.name }}</p>
          <small>{{ banner.food }}</small>
          <p class="text-weight-bold q-my-sm">{{ banner.price }}</p>
          <q-btn class="order_btn q-mt-sm"> Order Now </q-btn>
        </div>
        <div class="right">
          <img :src="banner.img" alt="" />
        </div>
      </div>
    </div>

    <h5>Explore Vendors</h5>

    <div class="vendors">
      <div
        v-for="vendor in vendors"
        :key="vendor.id"
        class="vendors_hold q-mb-xl q-mt-md"
      >
        <div class="top">
          <img :src="vendor.img" alt="" />
        </div>

        <div class="hold row justify-between items-center">
          <div class="left">
            <p class="text-primary text-weight-bold">{{ vendor.name }}</p>
            <small>
              <i class="ri-map-pin-fill text-primary"></i> {{ vendor.location }}
            </small>
          </div>

          <div class="right">
            <q-checkbox
              v-model="val"
              checked-icon="star"
              unchecked-icon="star_border"
              indeterminate-icon="help"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    return {
      val: ref(true),
      sampleMeals: [
        {
          id: 1,
          name: "Chicken",
          img: "/images/avatar.png",
        },
        {
          id: 2,
          name: "Chicken",
          img: "/images/avatar.png",
        },
        {
          id: 3,
          name: "Chicken",
          img: "/images/avatar.png",
        },
        {
          id: 4,
          name: "Chicken",
          img: "/images/avatar.png",
        },
        {
          id: 5,
          name: "Chicken",
          img: "/images/avatar.png",
        },
        {
          id: 6,
          name: "Chicken",
          img: "/images/avatar.png",
        },
        {
          id: 7,
          name: "Chicken",
          img: "/images/avatar.png",
        },
        {
          id: 8,
          name: "Chicken",
          img: "/images/avatar.png",
        },
        {
          id: 9,
          name: "Chicken",
          img: "/images/avatar.png",
        },
      ],
      sampleBanners: [
        {
          id: 1,
          name: "Delicia",
          img: "/images/banner.png",
          price: "30% Off",
          food: "Ofada Rice",
        },
        {
          id: 2,
          name: "Ritis",
          img: "/images/banner.png",
          price: "30% Off",
          food: "Ofada Rice",
        },
        {
          id: 3,
          name: "Chicken",
          img: "/images/banner.png",
          price: "30% Off",
          food: "Ofada Rice",
        },
        {
          id: 4,
          name: "Chicken",
          img: "/images/banner.png",
          price: "30% Off",
          food: "Ofada Rice",
        },
        {
          id: 5,
          name: "Chicken",
          img: "/images/banner.png",
          price: "30% Off",
          food: "Ofada Rice",
        },
        {
          id: 6,
          name: "Chicken",
          img: "/images/banner.png",
          price: "40% Off",
          food: "Ofada Rice",
        },
      ],
      vendors: [
        {
          id: 1,
          name: "Delicia",
          img: "/images/banner.png",
          location: "31, Gwari Avenue Barnawa, kaduna",
        },
        {
          id: 2,
          name: "Ritis",
          img: "/images/banner.png",
          location: "31, Gwari Avenue Barnawa, kaduna",
        },
        {
          id: 3,
          name: "Chicken",
          img: "/images/banner.png",
          location: "31, Gwari Avenue Barnawa, kaduna",
        },
        {
          id: 4,
          name: "Chicken",
          img: "/images/banner.png",
          location: "31, Gwari Avenue Barnawa, kaduna",
        },
        {
          id: 5,
          name: "Chicken",
          img: "/images/banner.png",
          location: "31, Gwari Avenue Barnawa, kaduna",
        },
        {
          id: 6,
          name: "Chicken",
          img: "/images/banner.png",
          location: "31, Gwari Avenue Barnawa, kaduna",
        },
      ],
    };
  },
};
</script>

<style scoped>
.span img {
  width: 50px;
  height: 50px;

  padding-top: 10px;
}

p {
  margin-bottom: 0;
}

h5 {
  font-size: 20px;
  line-height: 139.5%;
  color: #3f434a;
  font-weight: 600;
}

.span {
  background: #ffffff;
  box-shadow: 1px 1px 50px rgba(0, 0, 0, 0.1);
  border-radius: 100px;
  width: 150px;
}

.row_meals,
.banners {
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  margin: 18px 0;
  color: #fff;
  gap: 1rem;
}

.row_meals::-webkit-scrollbar {
  display: none;
}

.row_meals:hover {
  transform: scale(1.1);
}

.banner {
  width: 100%;
  border-radius: 10px;
  margin: 2rem 0;
}

.banner .left {
  display: flex;
  flex-direction: column;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  width: 200px;
}

.banner .right {
  height: 130px;
}
.banner .right img {
  height: 120px;
  border-radius: 10px;
  width: 200px;
}

.order_btn {
  color: white;
  border: 1px solid white;
  font-size: 14px;
  line-height: 16px;
  /* background: ; */
}

@media (max-width: 400px) {
  .banner .left {
    display: flex;
    flex-direction: column;
    width: 130px;
  }

  .banner .right img {
    height: 100%;
    border-radius: 10px;
    width: 130px;
    object-fit: cover;
  }
  .banner .right {
    height: 100%;
  }
}
</style>
