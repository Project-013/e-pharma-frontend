<template>
  <section class="container">
    <div class="row justify-content-center my-3">
      <div class="col-md-6 shadow bg-white col-lg-4 p-0">
        <div class="card m-0">
          <img :src="doctor.image_url" :alt="doctor.name" class="w-100" />
          <div class="card-body">
            <h6 class="text-success small">{{ doctor.category }}</h6>
            <h5 class="card-title" style="color: #2b325c">
              {{ doctor.name }}
            </h5>
            <p class="qualifications">{{ doctor.qualifications }}</p>
            <pre class="small">{{ doctor.expericence }}</pre>
            <div class="d-flex">
              <fa :icon="['fa', 'clock']" class="mt-3" />
              <pre
                class="p-2 mb-3"
              ><span class="text-muted">{{ doctor.time }}</span></pre>
            </div>

            <h6 class="mark p-2">
              Consultation Fee -
              <span class="text-danger">{{ doctor.fee }} TAKA</span>
            </h6>
            <h6 class="text-muted text-center small">
              <span class="">{{ doctor.number }}</span>
            </h6>
            <p class="small">
              <em> Final appointment time is confirmed after payment. </em>
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-6 shadow bg-white">
        <div class="row">
          <ValidationObserver
            class="col-md-6 col-11 mx-auto"
            v-slot="{ handleSubmit }"
          >
            <form
              class="form mt-5 text-muted"
              @submit.prevent="handleSubmit(submitForm)"
            >
              <h6>Make an Appointment</h6>

              <ValidationProvider
                class="form-floating my-3 d-block"
                rules="required"
                v-slot="{ errors }"
              >
                <input
                  v-model="form_data.patient_name"
                  id="patient_name"
                  class="is-invalid form-control"
                  placeholder=" "
                />
                <label for="patient_name">Patient name</label>
                <div class="invalid-feedback">
                  {{ errors[0] }}
                </div>
              </ValidationProvider>
              <ValidationProvider
                class="form-floating my-3 d-block"
                rules="required"
                v-slot="{ errors }"
              >
                <input
                  v-model="form_data.patient_age"
                  id="patient_age"
                  class="is-invalid form-control"
                  placeholder=" "
                />
                <label for="patient_age">Age</label>
                <div class="invalid-feedback">
                  {{ errors[0] }}
                </div>
              </ValidationProvider>
              <ValidationProvider
                class="form-floating my-3 d-block"
                rules="required"
                v-slot="{ errors }"
              >
                <input
                  v-model="form_data.patient_phone"
                  id="patient_phone"
                  class="is-invalid form-control"
                  placeholder=" "
                />
                <label for="patient_name">Phone</label>
                <div class="invalid-feedback">
                  {{ errors[0] }}
                </div>
              </ValidationProvider>
              <ValidationProvider
                class="form-group my-3 d-block"
                rules="required"
                v-slot="{ errors }"
              >
                <textarea
                  v-model="form_data.details"
                  id="details"
                  class="is-invalid form-control"
                  placeholder="সংক্ষেপে সমস্যা: যেমন মাথাব্যাথা "
                  rows="4"
                ></textarea>
                <div class="invalid-feedback">
                  {{ errors[0] }}
                </div>

                <h6 class="mark p-2 my-3">
                  Consultation Fee -
                  <span class="text-danger">{{ doctor.fee }} TAKA</span>
                </h6>
                <button class="btn btn-secondary btn-sm w-100">
                  Make payment & Confirm
                </button>
              </ValidationProvider>
            </form>
          </ValidationObserver>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      doctor: {},
      form_data: {
        patient_name: "",
        patient_age: "",
        patient_phone: "",
        details: "",
        doctor_id: this.$route.params.id ? this.$route.params.id : "",
      },
    };
  },
  methods: {
    async getDoctors() {
      await this.$axios
        .get(`call-doctors/${this.$route.params.id}`)
        .then((res) => {
          if (res.status === 200) {
            console.log(res.data);
            this.doctor = res.data;
          }
        })
        .catch((error) => {
          console.log(error.response.data.message || error.message);
          // context.commit('error', error)
        });
    },
    async submitForm() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        this.$axios
          .post(`call-appointments/`, this.form_data, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            if (res.status === 201) {
              console.log(res);
              this.$router.push("/");
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
  },
};
</script>

<style scoped>
.qualifications {
  font-size: 13px !important;
}
</style>
