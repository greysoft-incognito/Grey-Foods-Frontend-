import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    userDetails: null,
  }),
  getters: {
    registrationForm: (state) => state.userDetails,
  },
  actions: {
    setUserDetails(data) {
      console.log(data);
      this.userDetails = data
    },
  },
});
