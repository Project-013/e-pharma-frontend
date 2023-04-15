<template>
  <div class="container">
    <div class="my-5">
      <h6 class="text-dark mb-1 ">
        {{type}}
      </h6>
      <carousel
        :loop="true"
        :autoplay="false"
        :perPage="getInnerWidth < 576 ? 2.2 : getInnerWidth <= 768 ? 4.2 : 5.2"
        :paginationEnabled="false"
      >
        <slide class="" v-for="doctor in sortedDoctorList" :key="doctor.id">
          <PartialsDoctor :doctor="doctor" />
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
    sortedDoctorList() {
      const filterd_data = this.doctors.filter(({ type }) => {
        return this.type
          ? type.toUpperCase().includes(this.type.toUpperCase())
          : true;
      });
      return filterd_data;
    },
  },
  props: {
    doctors: Array,
    type: String,
  },
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  h6 {
    font-size: 65% !important;
    line-height: 1.5;
  }
}
</style>
