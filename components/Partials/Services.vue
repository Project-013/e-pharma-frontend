<template>
  <section class="container">
    <div class="wrapper pt-5">
      <div class="container">
        <h3 class="text-dark" v-if="!$config.isApp">Our Services</h3>

        <div class="row g-3 g-md-5 justify-content-center">
          <div class="col-lg-3 col-md-4 col-6">
            <NuxtLink to="/doctors">
              <img
                src="~/static/img/services/Dr_apointment.svg"
                class="w-100 p-0 pointer rounded-3 shadow service-image"
              />
            </NuxtLink>
          </div>
          <div class="col-lg-3 col-md-4 col-6">
            <NuxtLink to="/doctors?stype=Home-Call">
              <img
                src="~/static/img/services/home.svg"
                class="w-100 p-0 pointer rounded-3 shadow service-image"
              />
            </NuxtLink>
          </div>
          <div class="col-lg-3 col-md-4 col-6">
            <NuxtLink to="/doctors?stype=Video-Call">
              <img
                src="~/static/img/services/Video.svg"
                class="w-100 p-0 pointer rounded-3 shadow service-image"
              />
            </NuxtLink>
          </div>

          <div class="col-lg-3 col-md-4 col-6">
            <NuxtLink to="/physiotherapist">
              <img
                src="~/static/img/services/physiotherapist.svg"
                class="w-100 p-0 pointer rounded-3 shadow service-image"
                title="Coming Soon"
              />
            </NuxtLink>
          </div>
          <div class="col-lg-3 col-md-4 col-6">
            <NuxtLink to="/nurse">
              <img
                src="~/static/img/services/caregivers.svg"
                class="w-100 p-0 pointer rounded-3 shadow service-image"
                title="Coming Soon"
              />
            </NuxtLink>
          </div>
          <div class="col-lg-3 col-md-4 col-6">
            <NuxtLink to="/medicine">
              <img
                src="~/static/img/services/medicine.svg"
                class="w-100 p-0 pointer rounded-3 shadow service-image"
                title="Coming Soon"
              />
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

<style></style>
