export const state = () => ({
    login_form:"",
    regi_form:""
  });
  
  export const getters = {
    RegiForm(state) {
      return state.regi_form
    },
    loginForm(state) {
      return state.login_form
    },
  };
  
  export const mutations = {
    setLoginForm(state, login_form) {
      state.login_form = login_form
    },
    setRegiForm(state, regi_form) {
      console.log("regi_form",regi_form);
      state.regi_form = regi_form
    }
  };
  
  export const actions = {
    async getCountryCodes({commit}) {
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
                commit('setCountryCode', res.data)
            }
          })
          .catch((error) => {
            console.log(error.response.data.message || error.message);
            // context.commit('error', error)
          });
      },
  
  }
  
  