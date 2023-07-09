<template>
  <div class="container pb-5 pt-3 mb-5">
    <div class="row g-4">
      <form class="col-md-6 card p-3" @submit.prevent="onSubmit">
        <h6>Add Doctor Information</h6>

        <div class="row text-muted justify-content-center">
          <div class="col-12">
            <div class="mb-3">
              <label for="floatingInput">Doctors Name</label>

              <input
                class="form-control"
                placeholder="Enter Doctor Name"
                v-model="doctor.name"
              />
            </div>
            <div class="mb-3">
              <label for="floatingInput">Speciality</label>
              <input
                class="form-control"
                placeholder="specialist"
                v-model="doctor.specialist"
              />
            </div>
            <div class="mb-3">
              <label for="floatingInput">Qualifications</label>

              <textarea
                class="form-control"
                placeholder="Enter Doctor Name"
                v-model="doctor.qualifications"
                rows="2"
              ></textarea>
            </div>

            <div class="mb-3">
              <label for="floatingInput">Experience</label>

              <textarea
                class="form-control"
                placeholder="experience"
                v-model="doctor.experience"
                rows="2"
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="floatingInput">Chamber Address</label>

              <textarea
                class="form-control"
                placeholder="Enter Chamber Address"
                v-model="doctor.chamber"
                rows="2"
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="floatingInput">Days & Time</label>
              <textarea
                class="form-control"
                placeholder="Enter chamber time"
                v-model="doctor.chamber_time"
                rows="2"
              ></textarea>
            </div>
          </div>
        </div>
        <button class="btn btn-sm btn-dark" v-if="$route.query.doctor_id">
          Update Doctor
        </button>
        <button class="btn btn-sm btn-dark" v-else>Save Doctor</button>
      </form>
      <div class="col-md-6 card p-3">
        <h6>Preview</h6>
        <div class="__doctor p-4" style="background-color: #e1f9ff">
          <div>
            <h6 class="text-success fw-bold">{{ doctor.name }}</h6>
            <pre style="font-size: 10px" class="text-muted mb-1">{{
              doctor.qualifications
            }}</pre>
            <h6 class="fw-semibold mb-0 py-0" style="font-size: 13px">
              {{ doctor.specialist }}
            </h6>
            <pre style="font-size: 13px" class="fw-normal mb-1">{{
              doctor.experience
            }}</pre>
          </div>
        </div>
        <div
          class="__footer px-4 py-2 mt-5 d-flex justify-content-between"
          style="background-color: #e1f9ff"
        >
          <div>
            <h6 class="fw-semibold my-0 py-1" style="font-size: 12px">
              চেম্বার-
            </h6>
            <pre style="font-size: 11px" class="text-muted mb-1">{{
              doctor.chamber
            }}</pre>
          </div>
          <div>
            <h6 class="fw-semibold my-0 py-1" style="font-size: 12px">
              রোগী দেখার সময়-
            </h6>
            <pre style="font-size: 11px" class="text-muted mb-1">{{
              doctor.chamber_time
            }}</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // prescriptions: [],
      doctor: {
        name: "Dr. Xyz",
        qualifications: "MBBS,FCPS,(Medicine)",
        specialist: "Medicine Specialist",
        experience:
          "Medical Officer \nSylhet MAG Osmani Medical College & Hospital.",
        chamber: "Comfort Medical Services, Kajalshah, Sylhet.",
        chamber_time:
          "প্রতিদিন- বিকাল ৩টা থেকে রাত ৮টা \nশনি থেকে বৃহস্পতিবার (শুক্রবার বন্ধ)",
      },
    };
  },
    beforeCreate() {
    if (this.$auth.$state.loggedIn == false) {
      this.$router.push("/");
    }
  },
  computed: {
    getUserID() {
      if (this.$auth.user.phone) {
        return this.$auth.user.id;
      }
      return "";
    },
  },
  methods: {
    saveDoctor() {
      const payload = {
        doctor: JSON.stringify(this.doctor),
        user_id: this.getUserID,
      };
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        this.$axios
          .post(`/prescription/doctor/`, payload, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            if (res.status === 201) {
              this.$toast.success("Success! ");
              this.$router.push(`/prescription`);
            } else {
              this.$toast.error("Error found! Try again");
            }
            this.$store.dispatch("prescription/getDoctors");

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
    updateDoctor() {
      const payload = {
        doctor: JSON.stringify(this.doctor),
        user_id: this.getUserID,
      };

      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        this.$axios
          .put(`prescription/doctor/${this.$route.query.doctor_id}`, payload, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            console.log(res);
            if (res.status === 200) {
              this.$toast.success("Success! ");
              this.$router.push(`/prescription`);
              this.$store.dispatch("prescription/getDoctors");
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
    getDoctorInfo() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        this.$axios
          .get(`prescription/doctor/${this.$route.query.doctor_id}`, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            this.doctor = JSON.parse(res.data.doctor);

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
    onSubmit() {
      if (this.$route.query.doctor_id) {
        this.updateDoctor();
      } else {
        this.saveDoctor();
      }
    },
  },
  mounted() {
        if (this.$route.query.doctor_id) {
      this.getDoctorInfo();
    }
  },
};
</script>

<style></style>
