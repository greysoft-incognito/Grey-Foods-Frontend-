<template>
  <q-layout view="hHr lpr lFf">
    <q-header
      elevated
      class="bg-white flexx q-pa-xs text-white"
      height-hint="90"
    >
      <q-toolbar class="no-padding flexx">
        <div class="left">
          <q-btn
            size="1.2rem"
            dense
            flat
            round
            @click="toggleRightDrawer"
            class="menu_toggler text-primary"
          >
            <i class="ri-menu-2-line"></i>
          </q-btn>
          <q-btn
            class="menu-icon-btn q-pl-md"
            dense
            flat
            size="1.2rem"
            style="color: #fe724c"
          >
            <i class="ri-notification-fill"></i>
          </q-btn>
        </div>

        <div class="right flexxx">
          <div class="text-primary heed">Hey!,Sirgappy <strong></strong></div>

          <img src="/images/avatar.png" />

          <!-- <q-btn
            style="border-radius: 8px"
            to="/login"
            class="button q-mx-lg bg-primary"
            >Login</q-btn
          > -->
        </div>
      </q-toolbar>

      <q-tabs style="width: 100%" class="q-mr-xl noo" align="left">
        <div>
          <q-route-tab class="text-primary" to="/login" label="Login" />
          <q-route-tab class="text-primary" to="/register" label="Sign Up" />
        </div>
      </q-tabs>
    </q-header>

    <q-drawer
      :width="350"
      class="bg-primary q-pa-lg"
      show-if-above
      v-model="rightDrawerOpen"
      side="left"
      elevated
    >
      <div class="avatar q-py-lg">
        <template>
          <img />

          <p class="q-pb-md text-white">Hey!, <strong></strong></p>
        </template>
        <template>
          <p class="q-pb-lg text-white">User, <strong>not logged in</strong></p>
        </template>
      </div>

      <!-- drawer content -->

      <q-list>
        <q-item clickable v-ripple to="/profile">
          <div class="wrapp">
            <i class="ri-user-line"></i>
            <p class="q-ml-md">My Profile</p>
          </div>
        </q-item>

        <q-item clickable v-ripple to="/">
          <div class="wrapp">
            <i class="ri-restaurant-line"></i>
            <p class="q-ml-md">My Orders</p>
          </div>
        </q-item>

        <q-item clickable v-ripple to="profile">
          <div class="wrapp">
            <i class="ri-truck-line"></i>
            <p class="q-ml-md">Delivery Address</p>
          </div>
        </q-item>

        <q-item clickable v-ripple to="/">
          <div class="wrapp">
            <i class="ri-phone-line"></i>
            <p class="q-ml-md">Contact</p>
          </div>
        </q-item>

        <q-item clickable v-ripple to="/">
          <div class="wrapp">
            <i class="ri-settings-2-line"></i>
            <p class="q-ml-md">Settings</p>
          </div>
        </q-item>

        <q-item clickable v-ripple to="/">
          <div class="wrapp">
            <i class="ri-question-line"></i>
            <p class="q-ml-md">Help</p>
          </div>
        </q-item>

        <q-item clickable v-ripple v-if="isLoggedIn" @click="logout">
          <div class="wrapp">
            <i class="ri-logout"></i>
            <p class="q-ml-md">Logout</p>
          </div>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="footer-tabs bg-primary q-pa-sm text-white">
      <q-tabs align="center">
        <q-route-tab
          class="non q-mx-xl"
          to="/"
          style="font-size: 1rem"
          label="Home"
        />
        <q-route-tab class="non q-mx-xl" to="/page"
          ><i style="font-size: 1rem" class="ri-restaurant-line"></i
        ></q-route-tab>
        <q-route-tab class="non q-mx-xl" to="/register"
          ><i style="font-size: 1rem" class="ri-heart-line"></i
        ></q-route-tab>
        <q-route-tab class="non q-mx-xl" to="/profile"
          ><i style="font-size: 1rem" class="ri-user-line"></i
        ></q-route-tab>
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from "vue";
// import { mapGetters } from "vuex";

export default {
  data() {
    return {
      url: process.env.baseURL,
    };
  },
  setup() {
    const rightDrawerOpen = ref(false);

    return {
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },

      userDetails: JSON.parse(localStorage.getItem("userdet")),

      routee() {
        // const routee = this.$router.currentRoute.value.path
        // return routee
        if ($router.currentRoute.value.path === "/login") {
          return true;
        }
      },
    };
  },
};
</script>

<style scoped>
.footer-tabs {
  border-radius: 15px 15px 0 0;
}
p {
  padding-bottom: 0px;
}
.avatar {
  display: flex;
  align-items: center;
}
.avatar img {
  width: 50px;
  margin-right: 0.55rem;
  height: 100px;
}
.flexx {
  display: flex;
  justify-content: space-between;

  width: 100%;
}
.flexxx {
  display: flex;
  align-items: center;
}

.right img {
  width: 50px;

  height: 70px;
  padding-top: 10px;
}

.menu_toggler {
  border: 1px solid #fe724c;
  padding: 0.15rem;
  width: 25px;
  height: 25px;
}
.con {
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;
}
.wrapp {
  display: flex;
  align-items: center;
  color: #fff;
  margin: 0.75rem 0;
}

.heed {
  font-size: 12px;
}
@media (max-width: 500px) {
  .noo {
    margin-right: 0 !important;
    display: none;
  }
  .non {
    margin: 0 !important;
  }

  .q-tab {
    margin: 0 !important;
    padding: 0 3px !important;
  }

  .heed {
    font-size: 12px;
  }
}
</style>
