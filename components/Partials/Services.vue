<template>
  <div class="container">
    <div class="row g-2 g-md-4 justify-content-center -glow pt-3">
      <h3 class="text-dark mb-0 d-none d-sm-block" >Our Services</h3>

      <div class="col-lg-3 col-md-4 col-6">
        <NuxtLink to="/doctors?stype=Private-Chamber">
          <img
            src="/img/services/001-advice.png"
            class="w-50 mx-auto d-block pointer"
          />
          <h6 class="small text-center mt-3">Private Chamber Appoinment</h6>
        </NuxtLink>
      </div>
      <div class="col-lg-3 col-md-4 col-6">
        <NuxtLink to="/nurse">
          <img
            src="/img/services/003-nurse.png"
            class="w-50 mx-auto d-block pointer"
          />
          <h6 class="small text-center mt-3">Nurse / Midwife</h6>
        </NuxtLink>
      </div>
      <div class="col-lg-3 col-md-4 col-6">
        <NuxtLink to="/doctors?stype=Home-Call">
          <img
            src="/img/services/002-medical-staff.png"
            class="w-50 mx-auto d-block pointer"
          />
          <h6 class="small text-center mt-3">Doctor Home call</h6>
        </NuxtLink>
      </div>
      <div class="col-lg-3 col-md-4 col-6">
        <NuxtLink to="/doctors?stype=Video-Call">
          <img
            src="/img/services/video.png"
            class="w-50 mx-auto d-block pointer"
          />
          <h6 class="small text-center mt-3">Video Call (Telemedicine)</h6>
        </NuxtLink>
      </div>
      <div class="col-lg-3 col-md-4 col-6">
        <NuxtLink to="/physiotherapist">
          <img
            src="/img/services/phy.png"
            class="w-50 mx-auto d-block pointer"
          />
          <h6 class="small text-center mt-3">Physiotherapist</h6>
        </NuxtLink>
      </div>
      <div class="col-lg-3 col-md-4 col-6">
        <NuxtLink to="/medicine">
          <img
            src="/img/services/medicines.png"
            class="w-50 mx-auto d-block pointer"
          />
          <h6 class="small text-center mt-3">Medicine Home Delivery</h6>
        </NuxtLink>
      </div>
      <div class="col-lg-3 col-md-4 col-6">
        <NuxtLink to="/caregivers">
          <img
            src="/img/services/caregivers1.png"
            class="w-50 mx-auto d-block pointer"
          />
          <h6 class="small text-center mt-3">Caregivers</h6>
        </NuxtLink>
      </div>
      <div class="col-lg-3 col-md-4 col-6">
        <NuxtLink to="/diagnostic">
          <img
            src="/img/services/blood-test.png"
            class="w-50 mx-auto d-block pointer"
          />
          <h6 class="small text-center mt-3">Mobile Diagnostic </h6>
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
