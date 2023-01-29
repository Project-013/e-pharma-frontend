<template>
  <div class="container">
      <h3 class="text-dark mb-0 d-none d-sm-block" >Our Services</h3>

    <div class="row g-3 justify-content-center pt-3">

      <div class="col-lg-2 col-md-3 col-6 ">
        <NuxtLink to="/doctors?stype=Private-Chamber">
           <img
            src="/img/services/001-advice11.png"
            class="mx-auto d-block pointer border p-3 rounded service_image "
          />
          <h6 class="small text-center mt-2 fw-semibold ">Private Chamber Appoinment</h6>
        </NuxtLink>
      </div>
      <div class="col-lg-2 col-md-3 col-6">
        <NuxtLink to="/nurse">
          <img
            src="/img/services/003-nurse.png"
            class="mx-auto d-block pointer border p-3 rounded service_image"
          />
          <h6 class="small text-center mt-2 fw-semibold">Nurse / Midwife</h6>
        </NuxtLink>
      </div>
      <div class="col-lg-2 col-md-3 col-6">
        <NuxtLink to="/doctors?stype=Home-Call">
          <img
            src="/img/services/002-medical-staff.png"
            class="mx-auto d-block pointer border p-3 rounded service_image"
          />
          <h6 class="small text-center mt-2 fw-semibold">Doctor Home call</h6>
        </NuxtLink>
      </div>
      <div class="col-lg-2 col-md-3 col-6">
        <NuxtLink to="/doctors?stype=Video-Call">
          <img
            src="/img/services/video.png"
            class="mx-auto d-block pointer border p-3 rounded service_image"
          />
          <h6 class="small text-center mt-2 fw-semibold">Video Call (Telemedicine)</h6>
        </NuxtLink>
      </div>
      <div class="col-lg-2 col-md-3 col-6">
        <NuxtLink to="/physiotherapist">
          <img
            src="/img/services/phy.png"
            class="mx-auto d-block pointer border p-3 rounded service_image"
          />
          <h6 class="small text-center mt-2 fw-semibold">Physiotherapist</h6>
        </NuxtLink>
      </div>
      <div class="col-lg-2 col-md-3 col-6">
        <NuxtLink to="/medicine">
          <img
            src="/img/services/medicines.png"
            class="mx-auto d-block pointer border p-3 rounded service_image"
          />
          <h6 class="small text-center mt-2 fw-semibold">Medicine Home Delivery</h6>
        </NuxtLink>
      </div>
      <div class="col-lg-2 col-md-3 col-6">
        <NuxtLink to="/caregivers">
          <img
            src="/img/services/caregivers1.png"
            class="mx-auto d-block pointer border p-3 rounded service_image"
          />
          <h6 class="small text-center mt-2 fw-semibold">Caregivers</h6>
        </NuxtLink>
      </div>
      <div class="col-lg-2 col-md-3 col-6">
        <NuxtLink to="/diagnostic">
          <img
            src="/img/services/blood-test.png"
            class="mx-auto d-block pointer border p-3 rounded service_image"
          />
          <h6 class="small text-center mt-2 fw-semibold">Mobile Diagnostic </h6>
        </NuxtLink>
      </div>
      <div class="col-lg-2 col-md-3 col-6">
        <NuxtLink to="/ambulance">
          <img
            src="/img/services/ambulance.png"
            class="mx-auto d-block pointer border p-3 rounded service_image"
          />
          <h6 class="small text-center mt-2 fw-semibold">Ambulance </h6>
        </NuxtLink>
      </div>
      <div class="col-lg-2 col-md-3 col-6">
        <NuxtLink to="/blood">
          <img
            src="/img/services/blood.png"
            class="mx-auto d-block pointer border p-3 rounded service_image"
          />
          <h6 class="small text-center mt-2 fw-semibold">Blood Donors </h6>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
   
  },
};
</script>

<style scoped>
/* Extra small devices (phones, 600px and down) */
  h6 {
    font-size: 75% !important;
  }
  .service_image{
    width: 150px;
    height: 150px;
  }
@media only screen and (max-width: 600px) {
  h6 {
    font-size: 55% !important;
  }
  .service_image{
    width: 110px;
    height: 110px;
  }
}
</style>
