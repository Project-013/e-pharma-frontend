<template>
  <div class="my-2">
    <div v-if="appointments.length">
      <h6 class="fw-bold small d-none">DOCTORS APPOINTMENTS</h6>
      <div class="table-responsive">
        <table class="table small table-sm table_service">
          <thead>
            <tr>
              <th scope="col">Patient</th>
              <th scope="col">Service</th>
              <th scope="col">Date</th>
              <th scope="col">Doctor</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody v-for="appointment in appointments" :key="appointment.id">
            <tr>
              <th>{{ appointment.patient_name }}</th>
              <td>{{ appointment.type }}</td>
              <td>{{ new Date(appointment.date).toLocaleString() }}</td>
              <td>
                <NuxtLink
                  class="btn btn-sm btn-dark"
                  :to="'/doctors/doctor/?type=v&id=' + appointment.doctor_id"
                  >View</NuxtLink
                >
              </td>
              <td>
                <span
                  class="badge"
                  :class="
                    appointment.service_status == `pending`
                      ? 'text-bg-warning'
                      : appointment.service_status == `cancelled`
                      ? 'text-bg-danger'
                      : appointment.service_status == `completed`
                      ? 'text-bg-success'
                      : 'text-bg-primary'
                  "
                  >{{ appointment.service_status }}
                </span>
              </td>
              <td>
                <div class="d-flex">
                  <div>
                    <NuxtLink
                      class="dropdown-item text-dark small"
                      :to="'/doctors/config?type=edit&id=' + appointment.id"
                    >
                      <i class="icofont-edit small"></i>
                    </NuxtLink>
                  </div>
                  <div class="mx-2">
                    <button
                      class="dropdown-item text-dark small"
                      @click="onDelete(`${appointment.id}`)"
                    >
                      <i class="icofont-trash small"></i>
                    </button>
                  </div>
                  <div class="">
                    <NuxtLink
                      class="small btn btn-dark btn-sm"
                      :to="'/doctors/config?type=edit&id=' + appointment.id"
                    >
                      view
                    </NuxtLink>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- {{ appointments }} -->
      <div
        class="card mb-3 p-0 d-none"
        v-for="appointment in appointments"
        :key="appointment.id"
      >
        <div class="row card-body">
          <div class="col-12 mb-2 d-flex justify-content-end">
            <div class="mx-2">
              <NuxtLink
                class="dropdown-item text-dark small"
                :to="'/doctors/config?type=edit&id=' + appointment.id"
              >
                <i class="icofont-edit small"></i>
              </NuxtLink>
            </div>
            <div class="">
              <button
                class="dropdown-item text-dark small"
                @click="onDelete(`${appointment.id}`)"
              >
                <i class="icofont-trash small"></i>
              </button>
            </div>
          </div>
          <div class="col-sm-6">
            <h6 class="mb-0 fw-bold small text-uppercase">
              Name :
              {{ appointment.patient_name }}
            </h6>
            <p class="text-dark small mb-0 pb-0 d-none">
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
            <p class="text-dark mb-0 pb-0 d-none">
              Details :
              {{ appointment.details }}
            </p>
          </div>
          <div class="col-sm-6 d-none">
            <p class="text-dark small mb-0 pb-0" v-if="appointment.fee != 0">
              Payment Status:
              <span
                class="badge"
                :class="
                  appointment.payment_status == `pending`
                    ? 'text-bg-warning'
                    : appointment.payment_status == `unpaid`
                    ? 'text-bg-danger'
                    : 'text-bg-success'
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
                    : appointment.service_status == `completed`
                    ? 'text-bg-success'
                    : 'text-bg-primary'
                "
                >{{ appointment.service_status }}
              </span>
            </p>
            <h5 class="p-1 mt-3 mb-1 text-center fw-semibold fst-italic">
              Total Fee -
              <span class="text-success"
                ><i class="icofont-taka"></i>{{ appointment.fee }}
              </span>
            </h5>

            <NuxtLink
              v-if="
                appointment.payment_status == `unpaid` &&
                appointment.fee != 0 &&
                appointment.service_status == `approved`
              "
              class="btn btn-sm mt-3 btn-dark w-100"
              :to="'/doctors/config?type=payment&id=' + appointment.id"
              >Make Payment</NuxtLink
            >
          </div>
          <NuxtLink
            class="btn btn-sm mt-3 btn-dark w-100"
            :to="'/doctors/doctor/?type=v&id=' + appointment.doctor_id"
            >View Doctors Profile</NuxtLink
          >
        </div>
      </div>
    </div>
    <div v-else>
      <div class="alert alert-primary" role="alert">Nothing Found!</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      appointments: [],
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
      this.$axios
        .get(`appointment/doctor/?user_id=${this.$auth.user.id}`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          if (res.status === 200) {
            this.appointments = res.data;
          }
        })
        .catch((error) => {
          console.log(error.response);
          console.log(error.response.data.message || error.message);
          // context.commit('error', error)
        });
    },
    async onDelete(id) {
      const confirm = window.confirm("Are You Sure ?");
      if (confirm == false) {
        return;
      }
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        this.disable_btn = true;
        this.$axios
          .delete(`appointment/doctor/` + id + "/", {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            this.getAppointments();

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
