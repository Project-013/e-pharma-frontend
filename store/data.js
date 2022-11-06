export const state = () => ({
    working_day_list: [
        "Everyday",
        "Saturday",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      working_time_list: [
        "All Day",
        "6am - 12pm",
        "12pm - 6pm",
        "6pm - 12am",
        "12am - 6am",
      ],
      nursing_education_program: ["Diploma in Nursing","Diploma in MidWife", "B.Sc in Nursing"],
      pt_education_program: ["Diploma in PT", "B.Sc in PT"],
      doctor_education_program: ["FCPS", "MD", "MS", "D-Card", "VVD" ,"Others"],
      dmf_doctor_education_program: ["DMF" ,"Others"],
      spesialist: [
        "Endocrinologist/Diabetologist",
        "Neurologist",
        "Rheumatologist",
        "Psychiatrist",
        "Nephrologist",
        "Pulmonologist",
        "Surgeon",
        "Ophthalmologist",
        "Oncologist",
        "Urologist",
        "Otolaryngologist",
        "Anesthesiologist",
        "Dermatologist",
        "Radiologist",
        "Gastroenterologist",
        "Cardiologist",
        "Orthopedics",
        "Paleontologist",
        "Dentist",
        "chiropractor",
        "Massage therapist",
        "Obstetrician",
        "Pediatrician",
        "Podiatrist"
    ],
    address:[],
    spesialist_list:[]

  });
  
  export const getters = {
    working_day_list(state) {
      return state.working_day_list
    },
    working_time_list(state) {
      return state.working_time_list
    },
    nursing_education_program(state) {
      return state.nursing_education_program
    },
    pt_education_program(state) {
      return state.pt_education_program
    },
    doctor_education_program(state) {
      return state.doctor_education_program
    },
    dmf_doctor_education_program(state) {
      return state.dmf_doctor_education_program
    },
    spesialist(state) {
      return state.spesialist
    },
    address(state) {
      return state.address
    },
    spesialist_list(state) {
      return state.spesialist_list
    },
  };

  export const mutations = {
    setAddress(state, address) {
      state.address = address
    },
    setSpesialistList(state, spesialist_list) {
      state.spesialist_list = spesialist_list
    }
  };


  export const actions = {
    async getAddress({commit}) {
      console.log("Calling....");
      const API_URL = 'https://sasthosebok.com/data/city.json';
      // const API_URL = 'http://localhost:3000/data/city.json';
    
        await this.$axios
          .get(
            API_URL,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((res) => {
            if (res.status === 200) {
                commit('setAddress', res.data)
                
            }
          })
          .catch((error) => {
            console.log(error)
            // console.log(error.response.data.message || error.message);
            // context.commit('error', error)
          });
      },
  
    async getSpesialistList({commit}) {
      console.log("Calling....");
      const API_URL = 'https://sasthosebok.com/data/data.json';
      // const API_URL = 'http://localhost:3000/data/data.json';

        await this.$axios
          .get(
            API_URL,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((res) => {
            if (res.status === 200) {
                commit('setSpesialistList', res.data.Spesialist)
                
            }
          })
          .catch((error) => {
            console.log(error)
            // console.log(error.response.data.message || error.message);
            // context.commit('error', error)
          });
      },
  
  }
  
  
  
 
  