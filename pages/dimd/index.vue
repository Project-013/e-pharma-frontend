<template>
  <div class="container pb-5 pt-3 mb-5">
    <div class="row g-2 justify-content-center">
      <div class="col-lg-2 col-md-3 col-4">
        <NuxtLink to="/dimd/drugs">
          <img
            src="/img/services/drugs.png"
            class="mx-auto d-block pointer border p-2 rounded service_image"
          />
          <h6 class="small text-center mt-2 fw-semibold">Search</h6>
        </NuxtLink>
      </div>
      <div class="col-lg-2 col-md-3 col-4">
        <NuxtLink to="/dimd/generic">
          <img
            src="/img/services/pills2.png"
            class="mx-auto d-block pointer border p-2 rounded service_image"
          />
          <h6 class="small text-center mt-2 fw-semibold">Drug by Generic</h6>
        </NuxtLink>
      </div>

      <div class="col-lg-2 col-md-3 col-4">
        <NuxtLink to="/guidelines">
          <img
            src="/img/services/report.png"
            class="mx-auto d-block pointer border p-2 rounded service_image"
          />
          <h6 class="small text-center mt-2 fw-semibold">Guidelines</h6>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {},
};
</script>

<style scoped>
/* Extra small devices (phones, 600px and down) */
h6 {
  font-size: 70% !important;
}
.service_image {
  width: 150px;
  height: 150px;
}
@media only screen and (max-width: 600px) {
  h6 {
    font-size: 60% !important;
  }
  .service_image {
    width: 80px;
    height: 80px;
  }
}
</style>
