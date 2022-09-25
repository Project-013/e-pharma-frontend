<template>
  <div class="row justify-content-center justify-content-md-start g-5">
    <template v-for="(doctor, index) in doctors">
      <div class="col-lg-3 col-md-4 col-11" :key="index">
        <div class="card h-100 shadow">
          <NuxtLink :to="'/doctors/doctor/?id=' + doctor.id">
            <img :src="doctor.image_url" :alt="doctor.name" class="w-100" />
          </NuxtLink>
          <div class="card-body pb-0">
            <h6 class="text-success small">{{ doctor.speciality }}</h6>
            <h5 class="card-title" style="color: #2b325c">
              {{ doctor.name }}
            </h5>
            <p class="qualifications">{{ doctor.qualifications }}</p>
          </div>
          <div class="card-footer bg-white border-0 pb-3">
            <h6 class="mark p-2 mb-3">
              Consultation Fee -
              <span class="text-danger">{{ doctor.fee }} TAKA</span>
            </h6>
            <h6 class="text-muted text-center small">
              <span class="">{{ doctor.number }}</span>
            </h6>
            <NuxtLink
              :to="'/doctors/doctor/?id=' + doctor.id"
              class="btn btn-sm btn-dark w-100"
            >
              Make Appointment
            </NuxtLink>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    doctors: Array,
  },
};
</script>

<style scoped>
.qualifications {
  font-size: 13px !important;
}
</style>
