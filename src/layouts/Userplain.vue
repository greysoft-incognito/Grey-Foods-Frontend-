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
            @click="toggleRightDrawer"
            class="menu_toggler text-primary"
          >
            <i class="ri-menu-2-line"></i>
          </q-btn>
          <q-btn
            dense
            color="secondary"
            round
            icon="notifications"
            class="q-ml-md"
          >
            <q-badge color="red" floating>4</q-badge>
          </q-btn>
        </div>
      </q-toolbar>

      <!-- <q-tabs style="width: 100%" class="q-mr-xl noo" align="left">
        <div>
          <q-route-tab class="text-primary" to="/login" label="Login" />
          <q-route-tab class="text-primary" to="/register" label="Sign Up" />
        </div>
      </q-tabs> -->
    </q-header>

    <q-drawer
      :width="350"
      class="bg-primary q-pa-lg"
      show-if-above
      v-model="rightDrawerOpen"
      side="left"
      elevated
    >
      <!-- drawer content -->

      <q-list class="navs">
        <div class="top">
          <q-btn @click="rightDrawerOpen = false" class="cancel">
            <i class="ri-close-circle-line"></i>
          </q-btn>
          <div class="avatar">
            <img src="/images/avatar.png" />

            <p class="q-pb-md text-white">Hey!, <strong></strong></p>
            <!-- <p class="q-pb-lg text-white">User, <strong>not logged in</strong></p> -->
          </div>
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
          <q-btn class="become">
            <i class="ri-close-circle-fill q-mr-md q-pr-sm"></i>Become a vendor
          </q-btn>
        </div>

        <q-item clickable v-ripple>
          <div class="wrapp">
            <i class="ri-logout-box-line"></i>
            <p class="q-ml-md text-white">Logout</p>
          </div>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
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
  margin-bottom: 0px;
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
  margin-left: 0.75rem;
  width: 45px;
  height: 25px;
  border-radius: 5px;
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

.navs {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background: url("/images/bg.png") no-repeat;
  background-position: -80% 90%;
}

.heed {
  font-size: 12px;
}

.become {
  background: #fff;
  color: #fe724c;
  padding: 1rem;

  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
}

.become i {
  font-size: 2rem;
}

.cancel {
  background: #fff;
  color: #fe724c;
  padding: 1rem;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}

.cancel i {
  font-size: 2rem;
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
