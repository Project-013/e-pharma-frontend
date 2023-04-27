<template>
  <div class="container pb-5 pt-3 mb-5">
    <!-- {{drugs}} -->
    <div class="col-md-5 mx-auto">
      <h6 class="mb-3">Drugs by Brand</h6>

      <ul class="list-group" v-for="(Brand, index) in BrandList" :key="index">
        <li class="list-group-item my-1">
          <NuxtLink
            to="/dimd"
            class="link-dark fw-semibold small d-flex justify-content-center align-items-center"
          >
            <div>
              <img src="/img/services/drugs.png" width="20" class="me-2" />
              {{ Brand }}
            </div>
            <i class="icofont-arrow-right ms-auto"></i>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    drugs() {
      return this.$store.getters["product/drugs"];
    },
    BrandList() {
      const brand_arr = [];
      for (const drug of this.drugs) {
        const brand_name = drug.brand_name;
        // console.log(drug.Brand_name);
        if (!brand_arr.includes(brand_name)) {
          brand_arr.push(brand_name);
        }
      }
      return brand_arr;
    },
  },
};
</script>

<style></style>
