<template>
  <section class="container">
    <div class="wrapper pt-5">
      <div class="container">
        <div class="row g-3 g-md-5 justify-content-center">
          <div class="col-lg-3  col-md-4  col-4 ">
            <NuxtLink to="/doctors?stype=Private-Chamber">
              <img
                src="~/static/img/services/private.png"
                class="w-50 mx-auto d-block pointer"
              />
            <h6 class="small text-center mt-3">Private Chamber</h6>

            </NuxtLink>
          </div>
          <div class="col-lg-3  col-md-4  col-4 ">
            <NuxtLink to="/nurse">
              <img
                src="~/static/img/services/nurse.png"
                class="w-50 mx-auto d-block pointer"
              />
            <h6 class="small text-center mt-3 ">Nurse / Caregivers</h6>

            </NuxtLink>

          </div>
          <div class="col-lg-3  col-md-4  col-4 ">
            <NuxtLink to="/doctors?stype=Home-Call">
              <img
                src="~/static/img/services/24-hours.png"
                class="w-50 mx-auto d-block pointer"
              />
            <h6 class="small text-center mt-3">Home Call</h6>

            </NuxtLink>

          </div>
          <div class="col-lg-3  col-md-4  col-4 ">
            <NuxtLink to="/doctors?stype=Video-Call">
              <img
                src="~/static/img/services/Video.png"
                class="w-50 mx-auto d-block pointer"

              />
            <h6 class="small text-center mt-3">Video Call</h6>

            </NuxtLink>
          </div>

          <div class="col-lg-3  col-md-4  col-4 ">
            <NuxtLink to="/physiotherapist">
              <img
                src="~/static/img/services/physiotherapy.png"
                class="w-50 mx-auto d-block pointer"
              />
            <h6 class="small text-center mt-3">Physiotherapist</h6>

            </NuxtLink>

          </div>

          <div class="col-lg-3  col-md-4  col-4 ">
            <NuxtLink to="/medicine">
              <img
                src="~/static/img/services/medicines.png"
                class="w-50 mx-auto d-block pointer"

              />
              <h6 class="small text-center mt-3">Home Medicine</h6>
            </NuxtLink>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
   h6 {
    font-size: 55% !important;
  }
}
</style>
