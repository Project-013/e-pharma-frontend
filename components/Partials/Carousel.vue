<template>
  <div>
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="false"
    >
      <div class="carousel-indicators d-none">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <NuxtLink to="/doctors">
            <nuxt-img src="/img/slider/slider1.png"   class="d-block w-100" />
          </NuxtLink>
        </div>
        <div class="carousel-item">
          <NuxtLink to="/nurse">
            <nuxt-img src="/img/slider/slider2.png"   class="d-block w-100" />
          </NuxtLink>
        </div>
        <div class="carousel-item">
          <NuxtLink to="/physiotherapist">
            <nuxt-img src="/img/slider/slider3.png"   class="d-block w-100" />
          </NuxtLink>
        </div>
        <div class="carousel-item">
          <NuxtLink to="/medicine">
            <nuxt-img src="/img/slider/slider4.png"   class="d-block w-100" />
          </NuxtLink>
        </div>
        <div class="carousel-item">
          <NuxtLink to="/caregivers">
            <nuxt-img src="/img/slider/slider5.png"   class="d-block w-100" />
          </NuxtLink>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
