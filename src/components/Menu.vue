<template>
  <div class="tex q-pt-md container">
    <h2>
      What would you like <br /><span class="text-primary"> to order?</span>
    </h2>
  </div>
  <div class="container input q-my-xl">
    <input
      @focus="show"
      class="input-class"
      v-model="search"
      type="text"
      placeholder="What are you hungry for?"
    />
    <button class="input-button bg-primary">
      <i class="ri-search-line"></i>
    </button>
  </div>
  <div class="menu">
    <div class="hold container q-pt-xl">
      <h2 class="menu-text">Menu</h2>
      <q-btn flat no-caps class="btn right-btn">
        View All <i class="ri-arrow-right-line q-ml-md"></i>
      </q-btn>
    </div>

    <section class="section-one container">
      <div class="row q-pa-md justify-content-center q-gutter-xs">
        <div class="col">
          <Splide :options="options">
            <SplideSlide :key="item.id" v-for="item in menus" class="col ji">
              <div class="hhh">
                <q-card flat class="justify-content-center food-cards">
                  <img
                    :src="`${this.url + 'menu/' + item.menu_image_url}`"
                    alt=""
                    class="sponsor__img"
                  />
                  <p class="weight-text">{{ item.name }}</p>
                </q-card>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </section>
  </div>

  <div class="menu">
    <div class="hold container q-pt-lg">
      <h2 class="menu-text">Based on Orders</h2>
      <q-btn flat no-caps class="btn right-btn">
        View All <i class="ri-arrow-right-line q-ml-md"></i>
      </q-btn>
    </div>
    <section class="section-one q-py-md">
      <div class="com container text-bold">
        <div
          @click="
            yourMeal(
              item.id,
              item.strCategory,
              item.description,
              item.menu_image_url,
              item.name,
              item.price,
              item.quantity,
              posts
            )
          "
          :key="item.id"
          v-for="item in filteredP"
          class="sponsor__content"
        >
          <section class="section-one">
            <div class="q-pa-md">
              <img
                :src="`${this.url + 'menu/' + item.menu_image_url}`"
                alt=""
                class="sponsor__img"
              />
              <p class="weight-text">{{ item.name }}</p>
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { api } from "boot/axios";
// import {mapActions} from 'vuex'
import { ref } from "vue";

export default {
  components: {
    Splide,
    SplideSlide,
  },

  data() {
    return {
      url: process.env.baseURL,
      posts: [],
      menus: [],
      search: "",
      slide: ref("style"),

      options: {
        rewind: true,
        arrows: false,
        perPage: 3,
        width: "100%",
        //  height: "15rem",
        gap: "1rem",
        breakpoints: {
          1000: {
            perPage: 3,
          },
        },
      },
    };
  },
  created() {
    // this.getPosts()
  },
  methods: {
    // ...mapActions(['mealD']),
    // getPosts(){
    //     api.get('/api/menu').then((res) => {
    //         const hey = res.data.data
    //         this.menus = hey;
    //         this.posts = res.data.data;
    //         console.log(res.data.data);
    //     }).catch((err) => {console.log(err)})
    // },
    // yourMeal(id, category, des, image, name, price, quantity, posts) {
    //     this.mealD({id, category, des, image, name, price, quantity, posts})
    //     .then(()=> {
    //         this.$router.replace('/food')
    // })},
    // show(){
    //     console.log('first')
    //     this.$q.notify({
    //     message: 'Search your favourite meals',
    //     color: 'primary',
    //     position: 'top-right',
    //     avatar: "http://ec2-34-220-137-13.us-west-2.compute.amazonaws.com:31923/menu/1645109233Desert.png"
    //   })
    // },
  },
  mounted() {
    console.log(this.$store);
    console.log(process.env.baseURL);
  },
  computed: {
    // filteredP: function(){
    //     return this.posts.filter((post) => {
    //         return post.name.match(this.search)
    //     })
    // },
  },
};
</script>

<style scoped>
.weight-text {
  font-weight: bold;
}

.ji {
  height: 200px;
}

.section-one {
  height: 250px;
}

.hhh {
  width: 100px;
  height: 100px;
  padding: 2rem 0;
}
h2 {
  font-family: Gilroy-Bold;
  font-size: 1.5em;
  line-height: 123%;
  color: #3f434a;
  font-weight: 600;
}

.input {
  display: flex;
  align-items: center;
}

.input input {
  background: #fcfcfd;
  border: 1px solid #efefef;
  border-radius: 10px;
  padding: 0.85rem;
  width: 80%;
  height: 40px;
  margin: 2rem 0;
  transition: all 0.5s ease-in;
}
.input .input-class:focus {
  border: none;
  width: 80%;
  height: 50px;
  outline: 1px solid #fe724c;
}
.input input::placeholder {
  font-size: 0.85rem;
}

.input button {
  padding: 0.85rem;
  color: #fff;
  border: none;
  margin: 0 1rem;
  border-radius: 12px;
  height: 40px;
}

.input button i {
  position: relative;
  top: calc(50% - 12px); /* 50% - 3/4 of icon height */
}

.com {
  display: grid;
  /* grid-template-columns: repeat(5, 1fr); */
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  /* margin: 3rem 00; */
  padding-bottom: 5rem;
}

.tex h1 {
  font-size: 2rem;
  line-height: 2.5rem;
}

.enter {
  padding: 0.75rem 1rem;
  width: 70%;
  background: #fcfcfd;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  border-radius: 10px;
  margin: 0 auto;
}

.order-con {
  padding: 10px 10px 10px 0;
}

.hold {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-text {
  font-family: Gilroy-SemiBold;
  font-size: 1rem;
  line-height: 123%;
  color: #3f434a;
  font-weight: 600;
}

.right-btn {
  font-size: 0.7rem;
}

.ul {
  background-color: red;
}

.hold .btn {
  border: none;
  background: transparent;
  color: #fe724c;
}

.sponsor__content {
  text-align: center;
  background: #ffffff;
  box-shadow: 0px 20px 30px rgba(211, 209, 216, 0.251);
  border-radius: 30px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  height: 170px;
  /* margin: 1rem; */
}

.sponsor__img {
  opacity: 1;
  width: 90px;
  padding: 15px 0 20px 0;
  border-radius: 50%;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
}

.sponsor__img:hover {
  opacity: 1;
  width: 90px;
  transition: all 0.5s ease-in-out;
}

.order__img {
  opacity: 1;
  width: 100%;
  padding: 15px 0 20px 0;
  border-radius: 50%;
  /* filter: invert(0.7); */
  transition: all 0.5s ease-in-out;
  cursor: pointer;
}

.order__img:hover {
  opacity: 1;
  width: 100%;
  transition: all 0.5s ease-in-out;
}

/* .com{
        display: grid;
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
    justify-items: center;
    align-items: center;
    row-gap: 3.5rem;
    text-align: center;
    } */

.food-cards {
  background: rgb(247, 247, 247);
  border-radius: 54px;
  padding: 3px 6px;
}

.food-cards p {
  font-size: 0.8rem;
  font-weight: bold;
  text-align: center;
  color: #fe724c;
}

.order-cards {
  background: rgb(247, 247, 247);
  border-radius: 20px;
  padding: 3px 6px;
  box-shadow: 0 1px 5px rgb(0 0 0 / 0%), 0 2px 12px rgb(0 0 0 / 0%),
    0 3px 1px -2px rgb(0 0 0 / 42%);
}

.order-cards p {
  font-size: 0.8rem;
  font-weight: bold;
  text-align: center;
  color: #fe724c;
}

@media (max-width: 400px) {
  .enter {
    width: 100%;
  }
}
</style>
