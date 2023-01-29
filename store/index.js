export const state = () => ({
  country_code: [],
  accept: false,
});

export const getters = {
  CountryCode(state) {
    return state.country_code;
  },
  isAccept(state) {
    return state.accept;
  },
};

export const mutations = {
  setCountryCodes(state, country_code) {
    state.country_code = country_code;
  },
  setAccept(state, accept) {
    state.accept = accept;
  },
};

export const actions = {
  async getCountryCodes({ commit }) {
    console.log("Calling....");
    await this.$axios
      .get(
        `https://gist.githubusercontent.com/Goles/3196253/raw/9ca4e7e62ea5ad935bb3580dc0a07d9df033b451/CountryCodes.json`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          commit("setCountryCode", res.data);
        }
      })
      .catch((error) => {
        console.log(error.response.data.message || error.message);
        // context.commit('error', error)
      });
  },
};
