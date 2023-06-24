<template>
  <div class="mb-5 pb-5">
    <div class="container">
      <div class="row g-4 justify-content-center bg-white py-5">
        <div class="col-md-6 d-none" v-if="$route.query.type == 'payment'">
          <div class="card shadow h-100 p-0 ">
            <img src="/img/pay.jpeg" alt="" class="w-100" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="card shadow h-100 p-0">
            <div class="card-body">
              <h4 class="p-1 mt-3 mb-1 text-center fw-semibold fst-italic">
                Total Fee -
                <span class="text-success"
                  ><i class="icofont-taka"></i>{{ appointment.fee }}
                </span>
              </h4>

              <form
                action=""
                @submit.prevent="submitForm(appointment)"
                class="p-0"
              >
                <div class="edit my-3" v-if="$route.query.type == 'edit'">
                  <div class="form-group my-2">
                    <label class="form-label" for="patient_name"
                      >Patient name</label
                    >

                    <input
                      v-model="appointment.patient_name"
                      id="patient_name"
                      class="form-control form-control-sm"
                      placeholder="রোগীর নাম"
                      required
                    />
                  </div>
                  <div class="form-group my-2">
                    <label class="form-label" for="patient_age">Age</label>

                    <input
                      v-model="appointment.patient_age"
                      id="patient_age"
                      class="form-control form-control-sm"
                      placeholder="রোগীর বয়স"
                      type="number"
                      required
                    />
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
                  <div class="form-group my-2">
                    <label class="form-label" for="patient_name"
                      >সংক্ষেপে সমস্যা: যেমন মাথাব্যাথা</label
                    >

                    <textarea
                      v-model="appointment.details"
                      id="details"
                      class="form-control form-control-sm"
                      placeholder="সংক্ষেপে সমস্যা: যেমন মাথাব্যাথা "
                      rows="3"
                      required
                    ></textarea>
                  </div>
                </div>
                <div class="" v-if="$route.query.type == 'payment'">
                  <select
                    class="form-select form-select-sm"
                    v-model="appointment.payment_method"
                  >
                    <option value="" disabled selected>
                      Select Payment Method
                    </option>
                    <template v-for="(type, index) in p_method">
                      <option :value="type" :key="index">
                        {{ type }}
                      </option>
                    </template>
                  </select>
                  <div class="form-group my-2">
                    <label class="form-label" for="transaction_id"
                      >Transaction ID</label
                    >

                    <input
                      id="patient_name"
                      v-model="appointment.transaction_id"
                      class="form-control form-control-sm"
                    />
                  </div>

                  
                </div>
                <button
                    type="submit"
                    class="btn btn-sm mt-3 btn-dark w-100"
                    :disabled="disable_btn"
                  >
                    Submit
                  </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getPhone() {
      if (this.$auth.user.phone) {
        return this.$auth.user.phone;
      }
      return "";
    },
  },
  data() {
    return {
      appointment: "",
      p_method: ["Bkash", "Nogod", "Rocket", "Upay"],
      form_data: {
        payment_method: "",
        transaction_id: "",
      },
      disable_btn: false,
    };
  },
  methods: {
    async getAppointments() {
      await this.$axios
        .get(`appointment/doctor/${this.$route.query.id}`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          if (res.status === 200) {
            this.appointment = res.data;
          }
        })
        .catch((error) => {
          console.log(error.response);
          console.log(error.response.data.message || error.message);
          // context.commit('error', error)
        });
    },
    async submitForm() {
      if (this.$route.query.type != "edit") {
        this.appointment.payment_status = "pending";
      }
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        this.disable_btn = true;
        this.$axios
          .put(
            `appointment/doctor/` + this.appointment.id + "/",
            this.appointment,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((res) => {
            console.log(res);
            if (res.status === 200) {
              this.$toast.success("Success! we will contact you soon..");
              this.$router.push("/profile");
            } else {
              this.$toast.error("Error found! Try again");
            }
            this.$nuxt.$loading.finish();
          })
          .catch((error) => {
            console.log(error);
            this.$toast.error("Error found! Try again");

            this.$nuxt.$loading.finish();
            console.log(error.message || error.response.data.message);
          });

        this.disable_btn = false;
      });

      return;
    },
  },
  mounted() {
    this.getAppointments();
  },
};
</script>

<style></style>
