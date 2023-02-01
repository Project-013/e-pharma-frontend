<template>
  <div class="">
    <div class="row justify-content-center justify-content-md-start">
      <div
        v-for="doctor in pageOfItems"
        :key="doctor.id"
        class="col-lg-4 col-md-6 p-sm-3 p-1"
      >
        <div class="card h-100 p-2 _card">
          <div class="row">
            <NuxtLink
              class="col-5 d-flex justify-content-center align-items-center"
              :to="`/doctors/doctor/?id=${doctor.id}&stype=${$route.query.stype}`"
            >
              <img
                :src="$config.apibaseURL + doctor.image_url"
                :alt="doctor.name"
                class="w-100 rounded-circle"
              />
            </NuxtLink>
            <div class="col-7">
              <NuxtLink
                :to="`/doctors/doctor/?id=${doctor.id}&stype=${$route.query.stype}`"
              >
                <h5 class="mb-0 fw-bold text-uppercase" style="color: #2b325c">
                  {{ doctor.name }}
                </h5>
              </NuxtLink>

              <p class="text-muted my-2 lh-1">
                {{ doctor.qualicifacions }}
              </p>
              <p class="text-success small mb-0 lh-1 fw-semibold mt-0 pt-0">
                {{ doctor.specialty }}
              </p>

              <!-- <p>
              Consultation Fee:
              <span class="fw-semibold"
                ><span class="fw-bold" style="font-size: 24px">৳</span>800</span
              >
            </p> -->
              <NuxtLink
                :to="`/doctors/doctor/?id=${doctor.id}&stype=${$route.query.stype}`"
                class="btn btn-sm btn-dark w-100 mt-3"
              >
                Book Appointment
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex align-items-center mt-3">
      <jw-pagination
        :items="doctors"
        :pageSize="9"
        @changePage="onChangePage"
        :labels="customLabels"
        class="mx-auto "
      ></jw-pagination>
    </div>
  </div>
</template>

<script>
import JwPagination from "jw-vue-pagination";

export default {
  props: {
    doctors: Array,
  },
  components: {
    JwPagination,
  },

  data() {
    return {
      pageOfItems: [],
      customLabels: {
        first: "<<",
        last: ">>",
        previous: "<",
        next: ">",
      },
    };
  },
  methods: {
    onChangePage(pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems;
    },
  },
};
</script>

<style scoped>
.qualifications {
  font-size: 13px !important;
}

  ._card h5 {
    font-size: 95% !important;
  }
  ._card p {
    font-size: 85% !important;
  }

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  ._card h5 {
    font-size: 90% !important;
  }
  ._card p {
    font-size: 80% !important;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
}
</style>
