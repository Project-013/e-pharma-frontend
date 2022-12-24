<template>
  <div class="container">
    <div class="row g-2 g-md-4 justify-content-center placeholder-glow pt-5">
      <h3 class="text-dark mb-0">Register as</h3>
      <div class="col-lg-3 col-md-4 col-6">
        <NuxtLink to="/partners/doctor">
          <nuxt-img
            src="/img/services/private.png"
            class="w-50 mx-auto d-block pointer"
            placeholder
          />
          <h6 class="small text-center mt-3">Doctor</h6>
        </NuxtLink>
      </div>
      <div class="col-lg-3 col-md-4 col-6">
        <NuxtLink to="/partners/nurse">
          <nuxt-img
            src="/img/services/nurse.png"
            class="w-50 mx-auto d-block pointer"
            placeholder
          />
          <h6 class="small text-center mt-3">Nurse / Midwife</h6>
        </NuxtLink>
      </div>
      <div class="col-lg-3 col-md-4 col-6">
        <NuxtLink to="/partners/caregiver">
          <nuxt-img
            src="/img/services/old.png"
            class="w-50 mx-auto d-block pointer"
            placeholder
          />
          <h6 class="small text-center mt-3">Caregivers</h6>
        </NuxtLink>
      </div>
      <div class="col-lg-3 col-md-4 col-6">
        <NuxtLink to="/partners/physiotherapist">
          <nuxt-img
            src="/img/services/physiotherapy.png"
            class="w-50 mx-auto d-block pointer"
            placeholder
          />
          <h6 class="small text-center mt-3">Physiotherapist</h6>
        </NuxtLink>
      </div>
      <div class="col-lg-3 col-md-4 col-6">
        <NuxtLink to="/partners/Pharmacy">
          <nuxt-img
            src="/img/services/004-pharmacy.png"
            class="w-50 mx-auto d-block pointer"
            placeholder
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
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  h6 {
    font-size: 65% !important;
  }
}
</style>
