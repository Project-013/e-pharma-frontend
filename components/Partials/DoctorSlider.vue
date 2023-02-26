<template>
  <div class="container">
    <div class="my-5">
      <h5 class="text-dark mb-1 text-uppercase">Get Get Specialist Doctor's Chamber Appoinment</h5>
      <carousel
        :loop="true"
        :autoplay="false"
        :perPage="getInnerWidth<576 ? 2.2:( getInnerWidth<=768 ? 4.2:5.2) "
        :paginationEnabled="false"
      >
        <slide class="" v-for="doctor in getPrivateChamberDoctorList"  :key="doctor.id">
          <PartialsDoctor :doctor="doctor" stype="Private-Chamber" />
        </slide>
      </carousel>
    </div>
    <div class="my-5 d-none">
      <h5 class="text-dark mb-1 text-uppercase">Get Telemedicine ( Video call) Service From Specialist Doctors</h5>
      <carousel
        :loop="true"
        :autoplay="false"
        :perPage="getInnerWidth<576 ? 2.2:( getInnerWidth<=768 ? 4.2:5.2) "

        :paginationEnabled="false"
      >
        <slide class="" v-for="doctor in getVideoCallDoctorList" :key="doctor.id">
          <PartialsDoctor :doctor="doctor" stype="Video-Call" />
        </slide>
      </carousel>
    </div>
    <div class="my-5 d-none">
      <h5 class="text-dark mb-1 text-uppercase">Get the Services of Specialist Doctors at Your Home</h5>
      <carousel
        :loop="true"
        :autoplay="false"
        :perPage="getInnerWidth<576 ? 2.2:( getInnerWidth<=768 ? 4.2:5.2) "

        :paginationEnabled="false"
      >
        <slide class="" v-for="doctor in getHomeCallDoctorList" :key="doctor.id">
          <PartialsDoctor :doctor="doctor" stype="Home-Call" />
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
    getInnerWidth(){
      return window.innerWidth
    },
    get_doctors() {
      return this.$store.getters["doctors/doctors"];
    },
    getPrivateChamberDoctorList() {
      const filterd_data = this.get_doctors.filter(
        ({ status, type }) => {
          return status == "approved" && type.includes("Private Chamber");
        }
      );
      return filterd_data;
    },
    getVideoCallDoctorList() {
      const filterd_data = this.get_doctors.filter(
        ({ status, type }) => {
          return status == "approved" && type.includes("Video Call");
        }
      );
      return filterd_data;
    },
    getHomeCallDoctorList() {
      const filterd_data = this.get_doctors.filter(
        ({ status, type }) => {
          return status == "approved" && type.includes("Home Call") ;
        }
      );
      return filterd_data;
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
