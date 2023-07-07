export const state = () => ({
  data: "",
  pres_list: "",
  doctor_list: "",
  drug_data:{
    times:['1+1+1','1+0+1','1+0+0']
  }
});

export const getters = {
  getPresList(state) {
    return state.pres_list;
  },
  getData(state) {
    return state.data;
  },
  getDoctor(state) {
    return state.doctor_list;
  },
};

export const mutations = {
  setData(state, data) {
    state.data = data;
  },
  setPresList(state, pres_list) {
    state.pres_list = pres_list;
  },
  setDoctor(state, doctor_list) {
    state.doctor_list = doctor_list;
  },
};

export const actions = {

  async getPrescriptionData({ commit }) {
    console.log("Calling....");
    await this.$axios
      .get(`prescription/data/`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          commit("setData", res.data);
        }
      })
      .catch((error) => {
        console.log(error.response.data.message || error.message);
        // context.commit('error', error)
      });
  },
  async getPrescriptions({ commit }) {
    await this.$axios
      .get(`prescription/pres/?user_id=${this.$auth.user.id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          commit("setPresList", res.data);
        }
      })
      .catch((error) => {
        console.log(error.response.data.message || error.message);
        // context.commit('error', error)
      });
  },
  async getDoctors({ commit }) {
    await this.$axios
      .get(`prescription/doctor/?user_id=${this.$auth.user.id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          commit("setDoctor", res.data);
        }
      })
      .catch((error) => {
        console.log(error.response.data.message || error.message);
        // context.commit('error', error)
      });
  },
};
