<template>
  <section class="mb-5 pb-5">
    <div class="banner_wrapper p-3">
      <div class="container">
        <div class="my-3">
          <h1 class="heading_2 text-light">Open Positions</h1>
        </div>
      </div>
    </div>
    <div class="container mt-4">
      <div class="row g-3">
        <template v-for="(job, index) in jobs">
          <NuxtLink :to="`/career/job?id=`+job.id" :key="index" class="col-md-8 col-11 mx-auto">
          <div class="border p-3 rounded pointer shadow row">
            <div class="col-md-8">
              <h3 class="text-dark">{{job.title}}</h3>
              <h6 class="">{{job.depertment}}</h6>
              <!-- <p class="small my-0 py-0"><i class="icofont-home"></i> {{job.job_nature}}</p> -->
              <p class="small my-0 py-0"><i class="icofont-location-pin"></i> Location: {{job.location}}</p>
              <p class="small my-0 py-0"><i class="icofont-money"></i> Salary: {{job.salary}}</p>
            </div>
            <div
              class="col-md-4 d-flex align-items-center justify-content-center"
            >
              <button class="btn btn-sm btn-outline-dark">View More</button>
            </div>
          </div>
        </NuxtLink>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "career",
  data() {
    return {
      jobs: [],
    };
  },
  methods: {
    async getjob() {
      await this.$axios
        .get(`career/job`)
        .then((res) => {
          if (res.status === 200) {
            this.jobs = res.data;
          }
        })
        .catch((error) => {
          console.log(error.response);
          console.log(error.response.data.message || error.message);
          // context.commit('error', error)
        });
    },
  },
  mounted() {
    this.getjob();
  },
};
</script>

<style></style>
