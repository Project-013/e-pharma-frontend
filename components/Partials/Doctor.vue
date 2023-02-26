<template>
  <div class="card h-100 p-0 m-1">
    <NuxtLink
      class="col-12 d-flex justify-content-center align-items-center card-img-top"
      :to="`/doctors/doctor/?id=${doctor.id}&stype=${stype}`"
    >
      <img
        :src="$config.apibaseURL + doctor.image_url"
        :alt="doctor.name"
        class="mx-auto d-block rounded-circle my-2"
        width="80"
        height="80"
      />
    </NuxtLink>
    <div class="card-body p-0 px-1 mt-2">
      <NuxtLink :to="`/doctors/doctor/?id=${doctor.id}&stype=${stype}`" >
        <h5 class="mb-2 fw-bold text-uppercase" style="color: #2b325c">
          {{ doctor.name }}
        </h5>
      </NuxtLink>
      <p class="text-success small my-0 lh-1 fw-semibold mb-0 py-0">
        {{ doctor.specialty }}
      </p>
    </div>
    <div class="card-footer ">
      <NuxtLink
        :to="`/doctors/doctor/?id=${doctor.id}&stype=${stype}`"
        class="btn btn-sm btn-dark w-100"
      >
        Book
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    doctor: Object,
    stype: String
  },

  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>

h5 {
  font-size: 95% !important;
}
p {
  font-size: 85% !important;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  h5 {
    font-size: 70% !important;
  }
  p {
    font-size: 70% !important;
  }
}
</style>
