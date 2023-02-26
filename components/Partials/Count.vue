<template>
  <div class="container">
    <div class="row g-2 g-sm-5 my-2 text-center">
      <div v-for="data in data_list" class="col-3" :key="data.icon">
        <div class="card bg-light shadow-sm border-0 py-3 p-1 ">
          <i class="fs-1 text-success mb-2" :class="data.icon"></i>
          <p class="py-0 my-0 fw-bold">{{ data.number }}+</p>
          <h6 class="py-0 my-1 fw-semibold">{{ data.key }}</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data_list: [
        {
          icon: "icofont-doctor-alt",
          key: "Doctors",
          number: 200,
        },
        {
          icon: "icofont-nurse-alt",
          key: "Nurses",
          number: 100,
        },

        {
          icon: "icofont-nurse",
          key: "Caregivers",
          number: 50,
        },
                {
          icon: "icofont-users-alt-3",
          key: "Partners",
          number: 50,
        },
      ],
    };
  },
};
</script>

<style scoped>
h6 {
  font-size: 70% !important;
}

@media only screen and (max-width: 600px) {
  h6 {
    font-size: 56% !important;
  }
  p {
    font-size: 75% !important;
  }
}
</style>
