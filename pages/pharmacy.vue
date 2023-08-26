<template>
  <section class="container pb-5 pt-3 mb-5">
    <div class="col-md-9 col-lg-7 w-md-100">
      <h4 class="text-dark my-3">Find Nearest Pharmacy</h4>

      <div class="rounded border bg-white mb-4">
        <div class="d-flex align-items-center rounded">
          <img
            src="/img/icons/search.svg"
            style="width: 18px"
            alt=""
            class="ms-3"
          />
          <input
            type="search"
            class="form-control border-0 my-0"
            placeholder="Enter pharmacy name or address"
            v-model="search"
          />
        </div>
      </div>
      <ul class="list-group" v-for="(pharma, index) in sortedList" :key="index">
        <li
          class="list-group-item my-1 d-block justify-content-between d-md-flex"
        >
          <div>
            <h6 class="mb-0 pb-0">{{ pharma.pharmacy_name }}</h6>
            <small class="fw-semibold text-success my-0 py-0"
              >{{ pharma.city }} City</small
            >

            <div class="my-3" v-if="pharma.short_description != 'N/A'">
              <pre style="font-size: 12px">{{ pharma.short_description }}</pre>
            </div>
          </div>

          <div
            style="width: 80px; height: 80px"
            class="d-flex justify-content-center align-items-center"
          >
            <a
              :href="'tel:' + pharma.mobile"
              target="_blank"
              class="card bg-light shadow-sm small border-0 p-2"
            >
              <i class="fs-1 icofont-ui-call text-success mb-2"></i>
              <h6 class="py-0 my-1 fw-semibold small">Call Now</h6>
            </a>
          </div>

          <!-- {{pharma}} -->
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "pharma",
  head() {
    return {
      title: "স্বাস্থ্যসেবক || pharmacy ",
    };
  },
  computed: {
    sortedList() {
      const filterd_data = this.pharmacy.filter(
        ({ pharmacy_name, short_description }) => {
          return this.search
            ? pharmacy_name.toUpperCase().includes(this.search.toUpperCase()) ||
                short_description
                  .toUpperCase()
                  .includes(this.search.toUpperCase())
            : true;
        }
      );
      return filterd_data;
    },
  },
  data() {
    return {
      pharmacy: [],
      search: "",
    };
  },
  methods: {
    async getpharmacy() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        this.$axios
          .get(`patners/pharmacy/`)
          .then((res) => {
            if (res.status === 200) {
              this.pharmacy = res.data;
            }
            this.$nuxt.$loading.finish();
          })
          .catch((error) => {
            // console.log(error.response);
            // console.log(error.response.data.message || error.message);
            this.$nuxt.$loading.finish();
            // context.commit('error', error)
          });
      });
    },
  },
  mounted() {
    this.getpharmacy();
  },
};
</script>
<style scoped>
.accordion-item {
  background: #f9fafd !important;
  border: 1px solid #d8e2ef !important;
  box-shadow: 0px 3px 10px rgba(54, 124, 193, 0.3) !important;
}
@media only screen and (max-width: 600px) {
  p,
  h2 {
    font-size: 80% !important;
  }
}
</style>
