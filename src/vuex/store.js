import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      items: [
        { id: 1, value: 4, img: "@/assets/main-img/green.svg" },
        { id: 2, value: 2, img: "@/assets/main-img/blue.svg" },
        { id: 3, value: 5, img: "@/assets/main-img/orange.svg" },
      ],
    };
  },
  mutations: {},
});

export default store;
