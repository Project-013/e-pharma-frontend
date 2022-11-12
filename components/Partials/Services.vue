<template>
  <section class="container">
    <div class="wrapper pt-5">
      <div class="container">
        <h3 class="text-dark" v-if="!$config.isApp">Our Services</h3>

        <div class="row g-3 g-md-5 justify-content-center">
          <div class="col-lg-3 col-md-4 col-6">
            <NuxtLink to="/doctors">
              <img
                src="~/static/img/services/s1.svg"
                class="w-100 p-0 pointer rounded-3 shadow service-image"
              />
            </NuxtLink>
          </div>
          <div class="col-lg-3 col-md-4 col-6">
            <img
              src="~/static/img/services/s2.svg"
              class="w-100 p-0 pointer rounded-3 shadow service-image"
              title="Coming Soon"
            />
          </div>
          <div class="col-lg-3 col-md-4 col-6">
            <img
              src="~/static/img/services/s3.svg"
              class="w-100 p-0 pointer rounded-3 shadow service-image"
              title="Coming Soon"
            />
          </div>
          <div class="col-lg-3 col-md-4 col-6">
            <img
              src="~/static/img/services/s4.svg"
              class="w-100 p-0 pointer rounded-3 shadow service-image"
              title="Coming Soon"
            />
          </div>
          <div class="col-lg-3 col-md-4 col-6">
            <img
              src="~/static/img/services/s5.svg"
              class="w-100 p-0 pointer rounded-3 shadow service-image"
              title="Coming Soon"
            />
          </div>
          <div class="col-lg-3 col-md-4 col-6">
            <img
              src="~/static/img/services/s6.svg"
              class="w-100 p-0 pointer rounded-3 shadow service-image"
              title="Coming Soon"
            />
          </div>
          <div class="col-lg-3 col-md-4 col-6">
            <img
              src="~/static/img/services/s7.svg"
              class="w-100 p-0 pointer rounded-3 shadow service-image"
              title="Coming Soon"
            />
          </div>
          <div class="col-lg-3 col-md-4 col-6">
            <img
              src="~/static/img/services/s8.svg"
              class="w-100 p-0 pointer rounded-3 shadow service-image"
              title="Coming Soon"
            />
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
