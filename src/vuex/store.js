import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      li: [
        {
          id: 1,
          item: { id: 1, value: 4, img: "./src/assets/main-img/green.svg" },
        },
        {
          id: 2,
          item: { id: 2, value: 2, img: "./src/assets/main-img/blue.svg" },
        },
        {
          id: 3,
          item: { id: 3, value: 5, img: "./src/assets/main-img/orange.svg" },
        },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 },
        { id: 11 },
        { id: 12 },
        { id: 13 },
        { id: 14 },
        { id: 15 },
        { id: 16 },
        { id: 17 },
        { id: 18 },
        { id: 19 },
        { id: 20 },
        { id: 21 },
        { id: 22 },
        { id: 23 },
        { id: 24 },
        { id: 25 },
      ],
    };
  },
  mutations: {},
});

export default store;
