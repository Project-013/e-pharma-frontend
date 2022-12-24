<template>
  <div class="container">
    <div class="row g-2 g-md-4 justify-content-center placeholder-glow pt-3">
      <h3 class="text-dark mb-0 ">Our Services</h3>

      <div class="col-lg-3 col-md-4 col-6">
        <NuxtLink to="/doctors?stype=Private-Chamber">
          <img
            src="~/static/img/services/001-advice.png"
            class="w-50 mx-auto d-block pointer"
          />
          <h6 class="small text-center mt-3">Private Chamber Appoionment</h6>
        </NuxtLink>
      </div>
      <div class="col-lg-3 col-md-4 col-6">
        <NuxtLink to="/nurse">
          <img
            src="~/static/img/services/003-nurse.png"
            class="w-50 mx-auto d-block pointer"
          />
          <h6 class="small text-center mt-3">Nurse / Midwife</h6>
        </NuxtLink>
      </div>
      <div class="col-lg-3 col-md-4 col-6">
        <NuxtLink to="/doctors?stype=Home-Call">
          <img
            src="~/static/img/services/002-medical-staff.png"
            class="w-50 mx-auto d-block pointer"
          />
          <h6 class="small text-center mt-3">Doctor Home call</h6>
        </NuxtLink>
      </div>
      <div class="col-lg-3 col-md-4 col-6">
        <NuxtLink to="/doctors?stype=Video-Call">
          <img
            src="~/static/img/services/Video.png"
            class="w-50 mx-auto d-block pointer"
          />
          <h6 class="small text-center mt-3">Video Call (Telemedicine)</h6>
        </NuxtLink>
      </div>
      <div class="col-lg-3 col-md-4 col-6">
        <NuxtLink to="/physiotherapist">
          <img
            src="~/static/img/services/phy.png"
            class="w-50 mx-auto d-block pointer"
          />
          <h6 class="small text-center mt-3">Physiotherapist</h6>
        </NuxtLink>
      </div>
      <div class="col-lg-3 col-md-4 col-6">
        <NuxtLink to="/medicine">
          <img
            src="~/static/img/services/medicines.png"
            class="w-50 mx-auto d-block pointer"
          />
          <h6 class="small text-center mt-3">Medicine Home Delivery</h6>
        </NuxtLink>
      </div>
      <div class="col-lg-3 col-md-4 col-6">
        <NuxtLink to="/caregivers">
          <img
            src="~/static/img/services/caregivers1.png"
            class="w-50 mx-auto d-block pointer"
          />
          <h6 class="small text-center mt-3">Caregivers</h6>
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
