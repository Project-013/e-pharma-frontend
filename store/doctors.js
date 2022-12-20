export const state = () => ({
    doctors:[]
  });
  
export const getters = {
  doctors(state) {
    return state.doctors
  },
};

export const mutations = {
  setDoctors(state, doctors) {
    state.doctors = doctors
  }
};

export const actions = {
  async getDoctors({commit}) {
    await this.$axios.get(`patners/doctor/`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          commit("setDoctors", res.data)
        }
      }).catch(error => {
        // console.log(error.response.data.message || error.message)
        context.commit('error', error)
      });

  }

}
  
  