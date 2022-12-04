<template>
  <section id="home" class="home">
    <div class="banner_wrapper wrapper">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 order-1 order-lg-0">
            <h4 class="heading_1 text-white">Quality Digital Healthcare</h4>
            <h1 class="heading_2">Services Is Our Commitment</h1>
            <div class="">
              <p class="small d-none d-md-block">
                <span class="fw-bold">
                  {{ $config.uniProject ? "E-health" : "sasthosebok.com" }}
                </span>
                is a complete online service oriented healthcare organization.
                The purpose of which is to ensure digital healthcare to the
                people of the country...
              </p>
              <NuxtLink to="/doctors" class="main-btn mt-4 fill-btn small"
                >Appointment <i class="icofont-arrow-right"></i
              ></NuxtLink>
              <NuxtLink to="/about" class="main-btn mt-4 ms-1 small"
                >Learn More <i class="icofont-info-circle"></i
              ></NuxtLink>
            </div>
          </div>
          <div class="col-lg-6 d-none d-lg-block">
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
  </section>
</template>

<script>
export default {};
</script>

<style scoped></style>
