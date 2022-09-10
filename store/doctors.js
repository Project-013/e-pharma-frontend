export const state = () => ({
    doctors:[]
  });
  
  export const getters = {
    doctors(state) {
      return state.doctors
    },
  };
  
  export const mutations = {
    setDoctors(state, course) {
      state.course = course
    }
  };
  
  export const actions = {
    async getDoctors() {
      await this.$axios.get(`doctors`)
        .then((res) => {
          if (res.status === 200) {
            commit('setDoctors', res.data)
            console.log(res);
          }
        }).catch(error => {
          console.log(error.response.data.message || error.message)
          // context.commit('error', error)
        });
    },
  
  }
  
  