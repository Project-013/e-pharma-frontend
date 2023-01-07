<template>
  <div class="my-2">
    <div v-if="Homediagnostics.length">
      <h6 class="fw-bold ">Home diagnostic</h6>

      <!-- {{ Homediagnostics }} -->
      <div
        class="card mb-3 p-0"
        v-for="services in Homediagnostics"
        :key="services.id"
      >
        <div class="row card-body">
          <div class="col-12 mb-2 d-flex justify-content-end">
            <div class="mx-2">
              <NuxtLink
                class="dropdown-item text-dark small"
                :to="'/diagnostic/config?type=edit&id=' + services.id"
              >
                <i class="icofont-edit small"></i>
              </NuxtLink>
            </div>
            <div class="">
              <button
                class="dropdown-item text-dark small"
                @click="onDelete(`${services.id}`)"
              >
                <i class="icofont-trash small"></i>
              </button>
            </div>
          </div>
          <div class="col-sm-6">
            <h6 class="mb-0 fw-bold text-uppercase">
              Name :
              {{ services.name }}
            </h6>
            <p class="text-dark small mb-0 pb-0">
              phone:
              {{ services.phone }}
            </p>
       
            <p class="text-dark mb-0 pb-0">
              Address :
              {{ services.address }}
            </p>
           <div class="my-2">
            <p class="text-dark mb-0 pb-0">Prescription:</p>
             <img
                :src="$config.apibaseURL + services.image_url"
                class="d-block mb-1 border rounded p-1"
                width="300"
              />
           </div>

          </div>
          <div class="col-sm-6" >
            <p class="text-dark small mb-0 pb-0" v-if="services.fee">
              Payment Status:
              <span
                class="badge"
                :class="
                  services.payment_status == `pending`
                    ? 'text-bg-warning'
                    : services.payment_status == `unpaid`
                    ? 'text-bg-danger'
                    : 'text-bg-success'
                "
                >{{ services.payment_status }}
              </span>
            </p>
            <p class="text-dark small mb-0 pb-0">
              Service Status:
              <span
                class="badge"
                :class="
                  services.service_status == `pending`
                    ? 'text-bg-warning'
                    : services.service_status == `cancelled`
                    ? 'text-bg-danger'
                    : services.service_status == `completed`
                    ? 'text-bg-success'
                    : 'text-bg-primary'
                "
                >{{ services.service_status }}
              </span>
            </p>
            <h5 class="p-1 mt-3 mb-1 text-center fw-semibold fst-italic" v-if="services.fee">
              Total Fee -
              <span class="text-success"
                ><i class="icofont-taka"></i>{{ services.fee }}
              </span>
            </h5>

            <NuxtLink
              v-if="
                services.payment_status == `unpaid` &&
                services.fee != 0 &&
                services.service_status == `approved` 
              "
              class="btn btn-sm mt-3 btn-dark w-100"
              :to="'/diagnostic/config?type=payment&id=' + services.id"
              >Make Payment</NuxtLink
            >
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
      Homediagnostics: [],
      p_method: ["Bkash", "Nogod", "Rocket", "Upay"],
      form_data: {
        payment_method: "",
        transaction_id: "",
      },
      disable_btn: false,
    };
  },

  methods: {
    async getHomediagnostics() {
      await this.$axios
        .get(`services/diagnostic/?user_id=${this.$auth.user.id}`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
            console.log(res);
          if (res.status === 200) {
            this.Homediagnostics = res.data;
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
          .delete(`services/diagnostic/` + id + "/", {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            this.getHomediagnostics();

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
    this.getHomediagnostics();
  },
};
</script>

<style></style>
