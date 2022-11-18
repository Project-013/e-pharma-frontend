<template>
  <div class="">
    <div
      class="row justify-content-center justify-content-md-start g-sm-5 gy-3 _card"
    >
      <div
        v-for="doctor in pageOfItems"
        :key="doctor.id"
        class="col-lg-3 col-md-4 col-6 p-sm-3 p-1"
      >
        <div class="card h-100 shadow p-0 m-0">
          <NuxtLink :to="'/doctors/doctor/?id=' + doctor.id">
            <img
              :src="$config.apibaseURL + doctor.image_url"
              :alt="doctor.name"
              class="w-100"
            />
          </NuxtLink>
          <div class="card-body pb-1">
            <h5 class="mb-0 fw-bold text-uppercase" style="color: #2b325c">
              {{ doctor.name }}
            </h5>
            <p class="text-muted small mb-0 pb-0">
              {{ doctor.qualicifacions }}
            </p>
            <small class="text-success fw-semibold mt-0 pt-0">{{
              doctor.specialty
            }}</small>

            <!-- <p>
              Consultation Fee:
              <span class="fw-semibold"
                ><span class="fw-bold" style="font-size: 24px">৳</span>800</span
              >
            </p> -->
          </div>
          <div class="card-footer bg-white border-0 pb-3">
            <NuxtLink
              :to="'/doctors/doctor/?id=' + doctor.id"
              class="btn btn-sm btn-dark w-100 d-flex align-items-center justify-content-center"
            >
              Book <span class="d-none d-sm-block ms-1"> Appointment</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex align-items-center mt-3">
      <jw-pagination
        :items="doctors"
        :pageSize="12"
        @changePage="onChangePage"
        :labels="customLabels"
        class="mx-auto"
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

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  ._card * {
    font-size: 96% !important;
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
