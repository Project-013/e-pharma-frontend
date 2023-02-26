<template>
  <div class="container">
    <div class="row g-2 justify-content-center ">
      <h5 class="text-dark mb-0 ">Register as</h5>
      <div class="col-lg-2 col-md-3 col-4">
        <NuxtLink to="/partners/doctor">
          <img
            src="/img/services/private.png"
            class="mx-auto d-block pointer border p-2 rounded service_image"
          />
          <h6 class="small text-center mt-3">Doctor</h6>
        </NuxtLink>
      </div>
      <div class="col-lg-2 col-md-3 col-4">
        <NuxtLink to="/partners/nurse">
          <img
            src="/img/services/nurse.png"
            class="mx-auto d-block pointer border p-2 rounded service_image"
          />
          <h6 class="small text-center mt-3">Nurse / Midwife</h6>
        </NuxtLink>
      </div>
      <div class="col-lg-2 col-md-3 col-4">
        <NuxtLink to="/partners/caregiver">
          <img
            src="/img/services/old.png"
            class="mx-auto d-block pointer border p-2 rounded service_image"
          />
          <h6 class="small text-center mt-3">Caregivers</h6>
        </NuxtLink>
      </div>
      <div class="col-lg-2 col-md-3 col-4">
        <NuxtLink to="/partners/physiotherapist">
          <img
            src="/img/services/physiotherapy.png"
            class="mx-auto d-block pointer border p-2 rounded service_image"
          />
          <h6 class="small text-center mt-3">Physiotherapist</h6>
        </NuxtLink>
      </div>
      <div class="col-lg-2 col-md-3 col-4">
        <NuxtLink to="/partners/Pharmacy">
          <img
            src="/img/services/004-pharmacy.png"
            class="mx-auto d-block pointer border p-2 rounded service_image"
          />
          <h6 class="small text-center mt-3">Partner (Pharmacy)!</h6>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h6 {
  font-size: 70% !important;
}
.service_image {
  width: 150px;
  height: 150px;
}
@media only screen and (max-width: 600px) {
  h5 {
    font-size: 90% !important;
  }
  h6 {
    font-size: 50% !important;
  }
  .service_image {
    width: 80px;
    height: 80px;
  }
}
</style>
