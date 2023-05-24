export const state = () => ({
  product: [],
  items: [],
  cost: "",
  drugs: [],

  // total_cost: "",
});

export const getters = {
  product(state) {
    return state.product;
  },
  items(state) {
    return state.items;
  },
  cost(state) {
    return state.cost;
  },
  drugs(state) {
    return state.drugs;
  },
};

export const mutations = {
  setProduct(state, product) {
    state.product = product;
  },
  setitems(state, items) {
    state.items = items;
  },
  setcost(state, cost) {
    state.cost = cost;
  },
  setDrugs(state, drugs) {
    state.drugs = drugs;
  },
};

export const actions = {
  async getProduct({ commit }) {
    this.$axios
      .get(`shop/product/`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        // console.log(res.data);
        if (res.status === 200) {
          commit("setProduct", res.data);
        }
      })
      .catch((error) => {
        // console.log(error.response.data.message || error.message)
        commit("error", error);
      });
  },
  async getDrugs({ commit }) {
    this.$axios
      .get(`shop/medicine/`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          commit("setDrugs", res.data);
        }
      })
      .catch((error) => {
        // console.log(error.response.data.message || error.message)
        commit("error", error);
      });
  },

};
