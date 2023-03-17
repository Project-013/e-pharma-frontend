<template>
  <div class="container">
    <!-- {{getTopDoctorList}} -->
    <div class="my-5">
      <h5 class="text-dark mb-1 text-uppercase">
        Get Specialist Doctor's Appoinment
      </h5>
      <carousel
        :loop="true"
        :autoplay="false"
        :perPage="getInnerWidth < 576 ? 2.2 : getInnerWidth <= 768 ? 4.2 : 5.2"
        :paginationEnabled="false"
      >
        <slide class="" v-for="doctor in getTopDoctorList" :key="doctor.id">
          <PartialsDoctor :doctor="doctor" />
        </slide>
      </carousel>
    </div>

    <div class="my-5">
      <h5 class="text-dark mb-1 text-uppercase">
        Shop
      </h5>
      <carousel
        :loop="true"
        :autoplay="false"
        :perPage="getInnerWidth < 576 ? 2.1 : getInnerWidth <= 768 ? 4.2 : 5.2"
        :paginationEnabled="false"
      >
        <slide
          class=""
          v-for="product in get_product"
          :key="product.id"
        >
          <PartialsProduct :product="product"  />
        </slide>
      </carousel>
    </div>
  </div>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  components: {
    Carousel,
    Slide,
  },
  computed: {
    getInnerWidth() {
      return window.innerWidth;
    },
    get_doctors() {
      return this.$store.getters["doctors/doctors"];
    },
    get_product() {
      return this.$store.getters["product/product"];
    },

    getPrivateChamberDoctorList() {
      const filterd_data = this.get_doctors.filter(({ status, type }) => {
        return status == "approved" && type.includes("Private Chamber");
      });
      return filterd_data;
    },
    getTopDoctorList() {
      const data1 = this.get_doctors.filter(({ status, cat }) => {
        return status == "approved" && !cat.includes("top");
      });
      const data2 = this.get_doctors.filter(({ status, cat }) => {
        return status == "approved" && cat.includes("top");
      });
      return [...data2,...data1];
    },
  },
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  h5 {
    font-size: 65% !important;
    line-height: 1.5;
  }
}
</style>
