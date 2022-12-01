<template>
  <div class="my-3">
    <h5 class="fw-bold my-3">YOUR APPOINTMENTS</h5>
    <div class="card mb-3 p-0">
      <div class="row card-body">
        <div class="col-sm-6">
          <h6 class="mb-0 fw-bold text-uppercase">
            Name :
            {{ appointment.patient_name }}
          </h6>
          <p class="text-dark small mb-0 pb-0">
            Patient age :
            {{ appointment.patient_age }} year
          </p>
          <p class="text-dark small mb-0 pb-0">
            phone:
            {{ appointment.patient_phone }}
          </p>
          <p class="text-dark small mb-0 pb-0">
            Service type:
            {{ appointment.type }}
          </p>
          <p class="text-dark mb-0 pb-0 mark fw-semibold small">
            Date:
            {{ new Date(appointment.date).toLocaleString() }}
          </p>
          <p class="text-dark small mb-0 pb-0">
            Payment Status:
            <span
              class="badge"
              :class="
                appointment.payment_status == `pending`
                  ? 'text-bg-warning'
                  : appointment.payment_status == `cancelled`
                  ? 'text-bg-danger'
                  : 'text-bg-primary'
              "
              >{{ appointment.payment_status }}
            </span>
          </p>
          <p class="text-dark small mb-0 pb-0">
            Service Status:
            <span
              class="badge"
              :class="
                appointment.service_status == `pending`
                  ? 'text-bg-warning'
                  : appointment.service_status == `cancelled`
                  ? 'text-bg-danger'
                  : 'text-bg-primary'
              "
              >{{ appointment.service_status }}
            </span>
          </p>
          <p class="text-dark mb-0 pb-0">
            Details :
            {{ appointment.details }}
          </p>
        </div>
        <div class="col-sm-6">
          <p class="p-1 mt-3 mb-1 text-center fw-semibold fst-italic">
            Total Fee -
            <span class="text-success"
              ><i class="icofont-taka"></i>{{ appointment.fee }}
            </span>
          </p>

          <form
            action=""
            @submit.prevent="submitForm(appointment)"
            class="card p-0"
            v-if="
              appointment.payment_status != `paid` &&
              appointment.service_status != `pending`
            "
          >
            <div class="card-body">
              <select
                class="form-select form-select-sm"
                v-model="form_data.payment_method"
                required
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
                  v-model="form_data.transaction_id"
                  class="form-control form-control-sm"
                  required
                />
              </div>

              <button
                type="submit"
                class="btn btn-sm mt-3 btn-dark w-100"
                :disabled="disable_btn"
              >
                Make Payment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
    async submitForm(appointment) {
      appointment.payment_method = this.form_data.payment_method;
      appointment.transaction_id = this.form_data.transaction_id;
      console.log(appointment);

      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        this.disable_btn = true;
        this.$axios
          .put(`appointment/doctor/` + appointment.id + "/", appointment, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            console.log(res);
            if (res.status === 201) {
            }
            this.$nuxt.$loading.finish();
          })
          .catch((error) => {
            console.log(error);
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
