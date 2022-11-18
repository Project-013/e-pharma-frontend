<template>
  <section class="">
    <div class="banner_wrapper p-sm-5 p-3">
      <div class="container">
        <div class="mt-5">
          <h1 class="heading_2">Specialist Doctors</h1>
          <p class="small text-justify">
            দক্ষ চিকিৎসক ও রোগীর দূরত্ব কমিয়ে উন্নত স্বাস্থ্যপরামর্শ উন্মুক্ত
            করার লক্ষ্যে
          </p>
        </div>
        <div class="row mt-5 g-3 mb-0">
          <div class="col-md-4">
            <div class="rounded bg-white">
              <div class="d-flex align-items-center px-2 rounded">
                <img
                  src="/img/icons/search.svg"
                  style="width: 18px"
                  alt=""
                  class="me-2"
                />
                <input
                  type="search"
                  class="form-control form-select-sm border-0 my-0"
                  placeholder="Search doctor by name"
                  v-model="name"
                />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <select
              class="form-select form-select-sm"
              aria-label="Default select example"
              v-model="specialty"
              required
            >
              <option value="" disabled selected>Select Speciality</option>
              <option value="all">All</option>
              <template v-for="(spesialist, index) in getSpesialistList">
                <option :value="spesialist" :key="index">
                  {{ spesialist }}
                </option>
              </template>
            </select>
          </div>
          <div class="col-md-4">
            <select
              class="form-select form-select-sm"
              aria-label="Default select example"
              required
              v-model="type"
            >
              <option value="" disabled selected>Select Service Type</option>
              <template v-for="(type, index) in s_type_list">
                <option :value="type" :key="index">
                  {{ type }}
                </option>
              </template>
            </select>
          </div>
        </div>
      </div>
    </div>

    <div class="container my-5">
      <div v-if="sortedDoctorList.length">
        <Doctors :doctors="sortedDoctorList" />
      </div>
      <div v-else>
        <div
          class="alert alert-warning display-6 text-center py-5"
          role="alert"
        >
          Coming soon!
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      doctors: [],
      name: "",
      specialty: "",
      type: "",
      s_type_list: ["Private Chamber", "Video Call", "Home Call"],
    };
  },
  computed: {
    getSpesialistList() {
      return this.$store.getters["data/spesialist_list"];
    },
    sortedDoctorList() {
      const filterd_data = this.doctors.filter(
        ({ status, specialty, type, name }) => {
          return (
            status == "approved" &&
            (this.name ? name.includes(this.name) : true) &&
            (this.type ? type.includes(this.type) : true) &&
            (this.specialty && this.specialty != "all"
              ? specialty == this.specialty
              : true)
          );
        }
      );
      return filterd_data;
    },
  },

  methods: {
    async getDoctors() {
      await this.$axios
        .get(`patners/doctor/`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          if (res.status === 200) {
            this.doctors = res.data;
          }
        })
        .catch((error) => {
          console.log(error.response);
          console.log(error.response.data.message || error.message);
          // context.commit('error', error)
        });
    },
  },
  mounted() {
    this.getDoctors();
    this.$store.dispatch("data/getSpesialistList");
  },
};
</script>

<style scoped></style>
