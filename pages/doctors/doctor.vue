<template>
  <section class="container">
    <div class="row g-4 justify-content-center bg-white py-5">
      <div class="col-md-4 col-lg-3">
        <div class="card shadow h-100 p-0">
          <img
            :src="$config.apibaseURL + doctor.image_url"
            :alt="doctor.name"
            class="w-100"
          />
          <div class="card-body p- py-3">
            <h5 class="mb-0 fw-bold text-uppercase" style="color: #2b325c">
              {{ doctor.name }}
            </h5>
            <p class="text-muted small mb-0 pb-0">
              {{ doctor.qualicifacions }}
            </p>
            <small class="text-success fw-semibold mt-0 pt-0">{{
              doctor.specialty
            }}</small>
            <pre class="fw-semibold mt-1 pt-0 d-none">{{
              doctor.experience
            }}</pre>
            <pre
              class="fw-semibold mt-1 pt-0"
            ><i class="icofont-location-pin "></i>{{
              doctor.institution_or_chamber_address
            }}</pre>

            <div class="my-2 fst-italic">
              Consultation Fee:
              <div class="fw-semibold ps-3">
                <p
                  class="_fee py-0 my-0"
                  v-if="doctor.type && doctor.type.includes('Private Chamber')"
                >
                  Private Chamber - <i class="icofont-taka"></i
                  >{{ doctor.fee_chamber }}
                </p>
                <p
                  class="_fee py-0 my-0"
                  v-if="doctor.type && doctor.type.includes('Video Call')"
                >
                  Video Call - <i class="icofont-taka"></i
                  >{{ doctor.fee_video_call }}
                </p>
                <p
                  class="_fee py-0 my-0"
                  v-if="doctor.type && doctor.type.includes('Home Call')"
                >
                  Home Call - <i class="icofont-taka"></i>1500
                </p>
              </div>
            </div>

            <template v-if="$auth.loggedIn === false">
              <h6 class="text-center my-3 lead">
                Please
                <NuxtLink
                  :to="`/login?redirect=` + $route.fullPath"
                  class="text-decoration-none"
                  >Login</NuxtLink
                >

                to get appointment
              </h6>
            </template>
          </div>
        </div>
      </div>
      <div v-if="$auth.loggedIn" class="col-md-6 bg-white">
        <ValidationObserver
          class="card shadow h-100 p-0"
          v-slot="{ handleSubmit }"
        >
          <div class="card-body">
            <h6 class="mb-4 fw-bold text-uppercase" style="color: #2b325c">
              Make an Appointment
            </h6>

            <form class="" @submit.prevent="handleSubmit(submitForm)">
              <div class="form-group my-2">
                <select
                  class="form-select form-select-sm"
                  required
                  v-model="form_data.type"
                >
                  <option value="" disabled selected>
                    Select Service Type
                  </option>
                  <template v-for="(type, index) in s_type_list">
                    <option
                      :value="type"
                      :key="index"
                      v-if="doctor.type && doctor.type.includes(type)"
                    >
                      {{ type }}
                    </option>
                  </template>
                </select>
              </div>

              <div class="form-group my-2 d-block">
                <label class="form-label" for="patient_name"
                  >Patient name</label
                >

                <input
                  v-model="form_data.patient_name"
                  id="patient_name"
                  class="form-control form-control-sm"
                  placeholder="রোগীর নাম"
                  required
                />
              </div>

              <div class="form-group my-2 d-block">
                <label class="form-label" for="patient_age">Age</label>

                <input
                  v-model="form_data.patient_age"
                  id="patient_age"
                  class="form-control form-control-sm"
                  placeholder="রোগীর বয়স"
                  type="number"
                  required
                />
              </div>
              <div class="form-group my-2 d-block">
                <label class="form-label" for="patient_name">Phone</label>

                <input
                  v-model="form_data.patient_phone"
                  id="patient_phone"
                  class="form-control form-control-sm"
                  placeholder=" "
                  required
                />
              </div>
              <div class="form-group my-2 d-block">
                <label class="form-label" for="patient_name"
                  >Select appointment Date</label
                >

                <input
                  class="form-control form-control-sm"
                  placeholder=" "
                  type="date"
                  :min="new Date().toISOString().split('T')[0]"
                  required
                />
              </div>

              <div class="form-group my-3 d-block">
                <textarea
                  v-model="form_data.details"
                  id="details"
                  class="form-control form-control-sm"
                  placeholder="সংক্ষেপে সমস্যা: যেমন মাথাব্যাথা "
                  rows="2"
                  required
                ></textarea>

                <p
                  v-if="getfee"
                  class="p-1 mt-3 mb-1 text-center lead fw-semibold fst-italic"
                >
                  Total Fee -
                  <span class="text-success"
                    ><i class="icofont-taka"></i>{{ Number(getfee) + 50 }}
                  </span>
                </p>

                <button
                  style="background-color: #2b325c"
                  class="btn btn-dark btn-sm mt-3 w-100 text-uppercase"
                >
                  Make APPOINTMENT
                </button>
              </div>
            </form>
          </div>
        </ValidationObserver>
      </div>
    </div>
  </section>
</template>

<script>
import { ValidationObserver } from "vee-validate";

export default {
  components: {
    ValidationObserver,
  },
  computed: {
    getfee() {
      if (this.form_data.type == "Private Chamber") {
        return this.doctor.fee_chamber;
      }
      const { type } = this.form_data;

      switch (type) {
        case "Private Chamber":
          // code block
          return this.doctor.fee_chamber;
        case "Video Call":
          // code block
          return this.doctor.fee_video_call;

        case "Home Call":
          // code block
          return 1500;
          break;
        default:
        // code block
      }

      return "";
    },
  },
  data() {
    return {
      doctor: {},
      form_data: {
        type: "",
        fee: "",
        patient_name: "",
        patient_age: "",
        patient_phone: this.$auth.user.phone,
        details: "",
        doctor_id: this.$route.query.id ? this.$route.query.id : "",
      },
      s_type_list: ["Private Chamber", "Video Call", "Home Call"],
    };
  },
  methods: {
    async getDoctors() {
      await this.$axios
        .get(`patners/doctor/${this.$route.query.id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + this.$config.apiToken,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            this.doctor = res.data;
          }
        })
        .catch((error) => {
          console.log(error.response);
          // this.$router.push("/doctors");
          console.log(error.response.data.message || error.message);
          // context.commit('error', error)
        });
    },
    async submitForm() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        this.$axios
          .post(`specialist-doctors/appointment`, this.form_data, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            if (res.status === 201) {
            }
            this.$nuxt.$loading.finish();
          })
          .catch((error) => {
            this.$nuxt.$loading.finish();
            console.log(error.message || error.response.data.message);
          });
      });

      return;
    },
  },
  mounted() {
    this.getDoctors();
    console.log(this.$route.fullPath);
  },
};
</script>

<style scoped>
.qualifications {
  font-size: 14px !important;
}
._fee {
  font-size: 13.5px !important;
  line-height: 1.5;
}
</style>
