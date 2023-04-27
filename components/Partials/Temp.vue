<template>
  <div class="container">
    <h5 class="text-dark mb-0 d-none d-md-block">Our Services</h5>

    <div class="row g-2 justify-content-center pt-3">
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
    font-size: 50% !important;
  }
  .service_image {
    width: 80px;
    height: 80px;
  }
}
</style>
