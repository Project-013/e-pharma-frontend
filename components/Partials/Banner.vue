<template>
  <section id="home" class="home">
    <div class="banner_wrapper wrapper">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 order-1 order-lg-0">
            <h3 class="heading_1">Quality Digital Healthcare</h3>
            <h1 class="heading_2">Services Is Our Commitment</h1>
            <p class="small">
              <span class="fw-bold">
                {{ $config.uniProject ? "E-health" : "sasthosebok.com" }}
              </span>
              is a complete online service oriented healthcare organization. The
              purpose of which is to ensure digital healthcare to the people of
              the country...
            </p>
            <NuxtLink to="/doctors" class="main-btn mt-4 fill-btn"
              >Appointment</NuxtLink
            >
            <NuxtLink to="/about" class="main-btn mt-4 ms-3"
              >Learn More</NuxtLink
            >
          </div>
          <div class="col-lg-6">
            <div class="banner-area">
              <div class="banner-item">
                <div class="banner-right">
                  <img
                    src="/assets/img/home-three/1.png"
                    alt="Banner"
                    class="w-100 banner_image"
                  />
                  <img
                    src="/assets/img/home-three/2.png"
                    alt="Banner"
                    class="w-100"
                  />
                  <img
                    src="/assets/img/home-three/2.png"
                    alt="Banner"
                    class="w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="wrapper pt-5">
      <div class="container">
        <h3 class="text-dark">Our Services</h3>

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
          <div class="col-lg-3 col-md-4 col-6 d-none">
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

<style scoped></style>
