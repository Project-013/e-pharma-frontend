<template>
  <div class="container">
    <h5 class="text-dark mb-0 d-none d-md-block">Our Services</h5>

    <div class="row g-2 justify-content-center pt-3">
      <div class="col-lg-2 col-md-3 col-4">
        <NuxtLink to="/doctors">
          <img
            alt="Private Chamber Appoinment"
            src="/img/services/001-advice.png"
            class="mx-auto d-block pointer border p-2 rounded service_image"
          />
          <h6 class="small text-center mt-2 fw-semibold">
            Doctor Service (Chamber Appointment/ Video call/ Home call)
          </h6>
        </NuxtLink>
      </div>
      <div class="col-lg-2 col-md-3 col-4 d-none">
        <NuxtLink to="/doctors?stype=Private-Chamber">
          <img
            alt="Private Chamber Appoinment"
            src="/img/services/001-advice.png"
            class="mx-auto d-block pointer border p-2 rounded service_image"
          />
          <h6 class="small text-center mt-2 fw-semibold">
            Private Chamber Appoinment
          </h6>
        </NuxtLink>
      </div>
      <div class="col-lg-2 col-md-3 col-4">
        <NuxtLink to="/nurse">
          <img
            src="/img/services/003-nurse.png"
            class="mx-auto d-block pointer border p-2 rounded service_image"
          />
          <h6 class="small text-center mt-2 fw-semibold">Home Nursing / Caregivers</h6>
        </NuxtLink>
      </div>
      <div class="col-lg-2 col-md-3 col-4 d-none">
        <NuxtLink to="/doctors?stype=Home-Call">
          <img
            src="/img/services/002-medical-staff.png"
            class="mx-auto d-block pointer border p-2 rounded service_image"
          />
          <h6 class="small text-center mt-2 fw-semibold">Doctor Home call</h6>
        </NuxtLink>
      </div>
      <div class="col-lg-2 col-md-3 col-4 d-none">
        <NuxtLink to="/doctors?stype=Video-Call">
          <img
            src="/img/services/video.png"
            class="mx-auto d-block pointer border p-2 rounded service_image"
          />
          <h6 class="small text-center mt-2 fw-semibold">
            Video Call (Telemedicine)
          </h6>
        </NuxtLink>
      </div>
      <div class="col-lg-2 col-md-3 col-4">
        <NuxtLink to="/guidelines">
          <img
            src="/img/services/report.png"
            class="mx-auto d-block pointer border p-2 rounded service_image"
          />
          <h6 class="small text-center mt-2 fw-semibold">International Journal/ Guidelines</h6>
        </NuxtLink>
      </div>
      <div class="col-lg-2 col-md-3 col-4 d-none">
        <NuxtLink to="/physiotherapist">
          <img
            src="/img/services/phy.png"
            class="mx-auto d-block pointer border p-2 rounded service_image"
          />
          <h6 class="small text-center mt-2 fw-semibold">Home Physiotherapist</h6>
        </NuxtLink>
      </div>
      <div class="col-lg-2 col-md-3 col-4">
        <NuxtLink to="/medicine">
          <img
            src="/img/services/medicines.png"
            class="mx-auto d-block pointer border p-2 rounded service_image"
          />
          <h6 class="small text-center mt-2 fw-semibold">
            Medicine Home Delivery
          </h6>
        </NuxtLink>
      </div>
      <div class="col-lg-2 col-md-3 col-4 d-none">
        <NuxtLink to="/caregivers">
          <img
            src="/img/services/caregivers1.png"
            class="mx-auto d-block pointer border p-2 rounded service_image"
          />
          <h6 class="small text-center mt-2 fw-semibold">Caregivers</h6>
        </NuxtLink>
      </div>
      <div class="col-lg-2 col-md-3 col-4">
        <NuxtLink to="/diagnostic">
          <img
            src="/img/services/blood-test.png"
            class="mx-auto d-block pointer border p-2 rounded service_image"
          />
          <!-- <h6 class="small text-center mt-2 fw-semibold">Mobile Diagnostic</h6> -->
          <h6 class="small text-center mt-2 fw-semibold">Home Sample Collection</h6>
        </NuxtLink>
      </div>
      <div class="col-lg-2 col-md-3 col-4">
        <NuxtLink to="/ambulance">
          <img
            src="/img/services/ambulance.png"
            class="mx-auto d-block pointer border p-2 rounded service_image"
          />
          <h6 class="small text-center mt-2 fw-semibold">Ambulance</h6>
        </NuxtLink>
      </div>
      <div class="col-lg-2 col-md-3 col-4">
        <NuxtLink to="/oxygen">
          <img
            src="/img/services/oxygen.png"
            class="mx-auto d-block pointer border p-2 rounded service_image"
          />
          <h6 class="small text-center mt-2 fw-semibold">Emergency Oxygen home delivery</h6>
        </NuxtLink>
      </div>
      <div class="col-lg-2 col-md-3 col-4 d-none">
        <NuxtLink to="/blood">
          <img
            src="/img/services/blood.png"
            class="mx-auto d-block pointer border p-2 rounded service_image"
          />
          <h6 class="small text-center mt-2 fw-semibold">E-Blood Bank</h6>
        </NuxtLink>
      </div>
      <div class="col-lg-2 col-md-3 col-4">
        <NuxtLink to="/children-care">
          <img
            src="/img/services/feeding.png"
            class="mx-auto d-block pointer border p-2 rounded service_image"
          />
          <h6 class="small text-center mt-2 fw-semibold">Children's home care services</h6>
        </NuxtLink>
      </div>
      <div class="col-lg-2 col-md-3 col-4">
        <NuxtLink to="/dimd">
          <img
            src="/img/services/pills.png"
            class="mx-auto d-block pointer border p-2 rounded service_image"
          />
          <h6 class="small text-center mt-2 fw-semibold">DIMD</h6>
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
