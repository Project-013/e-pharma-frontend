export const state = () => ({
  product: [],
  items: [],
  cost: "",
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
};

export const actions = {
  async getProduct({ commit }) {
    await this.$axios
      .get(`shop/product/`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          commit("setProduct", res.data);
        }
      })
      .catch((error) => {
        // console.log(error.response.data.message || error.message)
        context.commit("error", error);
      });
  },

};
