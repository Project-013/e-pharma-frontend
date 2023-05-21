export const state = () => ({
  country_code: [],
  accept: false,
  doctor_info: {
    name: "Dr. ABCD",
    qualifications: "MBBS, BCS (Health), MD (Cardiology) \nFCPS (Cardiology)",
    specialist: "Cardiology Specialist",
    experience:
      "Assistant Professor \nSylhet MAG Osmani Medical College & Hospital.",
    chamber: "ট্রাস্ট মেডিকেল লিঃ, কাজলশাহ ,সিলেট",
    chamber_time:
      "প্রতিদিন- বিকাল ৫টা থেকে রাত ৮টা \nশনি থেকে বৃহস্পতিবার (শুক্রবার বন্ধ)",
  },
});

export const getters = {
  CountryCode(state) {
    return state.country_code;
  },
  isAccept(state) {
    return state.accept;
  },
  getDoctor(state) {
    return state.doctor_info;
  },
};

export const mutations = {
  setCountryCodes(state, country_code) {
    state.country_code = country_code;
  },
  setAccept(state, accept) {
    state.accept = accept;
  },
  setDoctor(state, doctor_info) {
    state.doctor_info = doctor_info;
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
