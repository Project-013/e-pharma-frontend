<template>
  <div>
    <PartialsServices />
    <NuxtLink
      to="/shop"
      class="btn btn-primary w-50 d-block mx-auto my-4 rounded-pill"
    >
      <i class="icofont-shopping-cart"></i>
      <span class="small fw-semibold">Shop Now</span>
    </NuxtLink>
    <PartialsSlider />
    <NuxtLink
      to="/pharmacy"
      class="btn btn-primary w-50 d-block mx-auto my-4 rounded-pill"
    >
      <i class="icofont-ui-search"></i>
      <span class="small fw-semibold">Find Nearest Pharmacy</span>
    </NuxtLink>
    <!-- <PartialsCount /> -->
    <!-- <PartialsPartners /> -->
  </div>
</template>

<script>
export default {};
</script>

<style></style>
