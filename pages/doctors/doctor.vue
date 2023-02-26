<template>
  <section class="mb-5 pb-5">
    <div class="container">
      <div class="row g-4 justify-content-center bg-white py-3">
        <div class="col-md-5 col-lg-4">
          <div v-if="get_doctor && get_doctor.name">
            <div class="card _card h-100 p-0">
              <img
                :src="$config.apibaseURL + get_doctor.image_url"
                :alt="get_doctor.name"
                class="w-75 d-block mx-auto py-2 rounded-circle"
              />
              <div class="card-body p- py-3">
                <h5 class="mb-0 fw-bold text-uppercase" style="color: #2b325c">
                  {{ get_doctor.name }}
                </h5>
                <p class="text-muted small mb-0 pb-0">
                  {{ get_doctor.qualicifacions }}
                </p>
                <small class="text-success fw-semibold mt-0 pt-0">{{
                  get_doctor.specialty
                }}</small>
                <pre class="mt-1 pt-2">{{ get_doctor.experience }}</pre>
                <pre class="mt-1 pt-0"><i class="icofont-location-pin "></i> {{
              get_doctor.institution_or_chamber_address
            }}</pre>
                <pre
                  v-if="get_doctor.working_times_chamber"
                  class="small my-0 pt-0"
                ><i class="icofont-clock-time"></i
              > {{ get_doctor.working_times_chamber }}
            </pre>
                <h5
                  v-if="
                    get_doctor.fee_chamber &&
                    form_data.type == 'Private Chamber'
                  "
                  class="p-1 text-center fw-semibold fst-italic"
                >
                  Consultation Fee
                  <span class="text-success"
                    ><i class="icofont-taka"></i>{{ get_doctor.fee_chamber }}
                  </span>
                </h5>
                <h5
                  v-if="
                    get_doctor.fee_video_call && form_data.type == 'Video Call'
                  "
                  class="p-1 text-center fw-semibold fst-italic"
                >
                  Consultation Fee
                  <span class="text-success"
                    ><i class="icofont-taka"></i>{{ get_doctor.fee_video_call }}
                  </span>
                </h5>

                <template v-if="$auth.loggedIn === false">
                  <p class="text-center mark my-3">
                    Please
                    <NuxtLink
                      :to="`/login?redirect=` + $route.fullPath"
                      class="text-decoration-none"
                    >
                      Login
                    </NuxtLink>
                    or
                    <NuxtLink
                      :to="`/register?redirect=` + $route.fullPath"
                      class="text-decoration-none"
                    >
                      Register
                    </NuxtLink>

                    to get appointment
                  </p>
                </template>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="text-center py-5">
              <h4>Nothing Found!</h4>
            </div>
          </div>
        </div>
        <div
          v-if="$auth.loggedIn && !$route.query.type"
          class="col-md-6 bg-white"
        >
          <!-- v-if="$auth.loggedIn && !$route.query.type" -->

          <ValidationObserver class="card h-100 p-0" v-slot="{ handleSubmit }">
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
                        v-if="get_doctor.type && get_doctor.type.includes(type)"
                      >
                        {{ type }}
                      </option>
                    </template>
                  </select>
                </div>
                <div class="form-group my-2">
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
                <div class="form-group my-2">
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
                <div class="form-group my-2" v-if="form_data.type">
                  <label class="form-label" for="patient_name"
                    >Select appointment Date</label
                  >

                  <client-only class=""
                    ><date-picker
                      class="form-control form-control-sm"
                      placeholder="MM/DD/YYYY"
                      format="MM/dd/yyyy"
                      v-model="form_data.date"
                      :disabled-dates="disabledDates"
                      type="date"
                  /></client-only>
                </div>
                <div class="form-group my-2">
                  <label class="form-label" for="patient_name">Phone</label>

                  <input
                    v-model="getPhone"
                    id="patient_phone"
                    class="form-control form-control-sm"
                    placeholder=" "
                    required
                    disabled
                  />
                </div>
                <div class="form-group my-3">
                  <textarea
                    v-model="form_data.details"
                    id="details"
                    class="form-control form-control-sm"
                    placeholder="সংক্ষেপে সমস্যা: যেমন মাথাব্যাথা "
                    rows="3"
                    required
                  ></textarea>
                  <!-- v-if="getfee" -->

                  <p class="p-1 mb-1 text-center lead fw-semibold fst-italic">
                    Total Fee -
                    <span class="text-success"
                      ><i class="icofont-taka"></i>{{ getfee }}
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
    </div>
  </section>
</template>

<script>
import { ValidationObserver } from "vee-validate";

export default {
  components: {
    ValidationObserver,
  },
  head() {
    return {
      title: "Doctor || " + this.get_doctor.name,
    };
  },
  computed: {
    get_doctor() {
      const doctors = this.$store.getters["doctors/doctors"];
      const doctor = doctors.find(
        (doctor) => doctor.id == this.$route.query.id
      );
      return doctor;
    },
    getPhone() {
      if (this.$auth.user.phone) {
        return this.$auth.user.phone;
      }
      return "";
    },
    getUserID() {
      if (this.$auth.user.phone) {
        return this.$auth.user.id;
      }
      return "";
    },
    getfee() {
      switch (this.form_data.type) {
        case "Private Chamber":
          // code block
          return Number(this.get_doctor.fee_chamber);
        case "Video Call":
          // code block
          return Number(this.get_doctor.fee_video_call);

        case "Home Call":
          // code block
          return 1500;
        default:
        // code block
      }

      return "";
    },
    disabledDates() {
      const { type } = this.form_data;
      var date = new Date();
      date.setDate(date.getDate() - 1);
      let disable_days = {
        to: date,
        days: [],
      };

      const days = [];
      let working_days = "";

      switch (type) {
        case "Private Chamber":
          working_days = this.get_doctor.working_days_chamber;
          break;
        case "Video Call":
          working_days = this.get_doctor.working_days_video_call;
          break;

        case "Home Call":
          working_days = this.get_doctor.working_days_home_call;
          break;
        default:
          working_days = "";
      }

      if (working_days) {
        for (const d in this.working_day_list) {
          const day = this.working_day_list[d];
          if (working_days.includes("Everyday")) {
            break;
          } else if (working_days.includes(day) == false) {
            days.push(Number(d));
          }
        }
      }

      disable_days["days"] = days;
      return disable_days;
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
        patient_phone: "",
        details: "",
        date: "",
        user_id: "",
        doctor_id: this.$route.query.id ? this.$route.query.id : "",
      },
      s_type_list: ["Private Chamber", "Video Call", "Home Call"],
      working_day_list: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
    };
  },
  methods: {
    async submitForm() {
      this.form_data.fee = this.getfee;
      this.form_data.patient_phone = this.getPhone;
      this.form_data.user_id = this.getUserID;
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        this.$axios
          .post(`appointment/doctor/`, this.form_data, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            if (res.status === 201) {
              this.$toast.success("Success! we will contact you soon..");
              this.$router.push("/profile");
            } else {
              this.$toast.error("Error found! Try again");
            }

            this.$nuxt.$loading.finish();
          })

          .catch((error) => {
            this.$toast.error("Error found! Try again");

            console.log(error.response);
            this.$nuxt.$loading.finish();
            console.log(error.message || error.response.data.message);
          });
      });

      return;
    },
  },
  mounted() {
    // this.getDoctors();
    if (
      !this.form_data.type &&
      this.$route.query.stype &&
      this.$route.query.stype != "undefined"
    ) {
      this.form_data.type = this.$route.query.stype.replace("-", " ");
    }
  },
};
</script>

<style>
.qualifications {
  font-size: 14px !important;
}
._fee {
  font-size: 13.5px !important;
  line-height: 1.5;
}
.vdp-datepicker * {
  border: none !important;
  width: 100%;
}
.vdp-datepicker input:focus-visible {
  border: none !important;
}
@media only screen and (max-width: 600px) {
  ._card h5 {
    font-size: 90% !important;
  }
  ._card p {
    font-size: 90% !important;
  }
  ._card pre {
    font-size: 80% !important;
  }
}
</style>
