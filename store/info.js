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
        "Endocrinologist",
        "Neurologist",
        "Rheumatologist",
        "Allergist",
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
        "Orthopedist",
        "Paleontologist",
        "Dentist",
        "chiropractor",
        "Massage therapist",
        "Obstetrician",
        "Pediatrician",
        "Podiatrist"
    ],
    address:[]

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
  };

  export const mutations = {
    setAddress(state, address) {
      state.address = address
    }
  };


  export const actions = {
    async getAddress({commit}) {
      console.log("Calling....");
        await this.$axios
          .get(
            `https://sajibsd013.github.io/data/city.json`,
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
  
  }
  
  
  
 
  