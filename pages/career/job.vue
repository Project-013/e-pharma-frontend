<template>
  <section class="mb-5 pb-5" v-if="job.requirements">
    <div class="banner_wrapper p-3">
      <div class="container">
        <div class="my-3">
          <h2 class="heading_2">{{ job.title }} ({{ job.job_nature }})</h2>
          <h5 class="text-light">{{ job.depertment }}</h5>
          <!-- <p class="small my-0 py-0"><i class="icofont-home"></i> {{job.job_nature}}</p> -->
          <p class="lead my-0 py-0">
            <i class="icofont-location-pin"></i> Location: {{ job.location }}
          </p>
        </div>
      </div>
    </div>
    <div class="container my-4">
      <div>
        <h4>Key Requirements:</h4>
        <pre class="ps-3 fw-normal">{{ job.requirements }}</pre>
      </div>
      <div>
        <h4>Regular Responsibilities:</h4>
        <pre class="ps-3 fw-normal">{{ job.responsibilities }}</pre>
      </div>
      <div>
        <h4>Benefits You’ll Enjoy:</h4>
        <pre class="ps-3 fw-normal">{{ job.benefits }}</pre>
      </div>
      <div>
        <h4>Salary:</h4>
        <pre class="ps-3 fw-normal">{{ job.salary }}</pre>
      </div>
      <div>
        <h4>Job Nature:</h4>
        <pre class="ps-3 fw-normal">{{ job.job_nature }}</pre>
      </div>
      <div>
        <h4>Working Schedule:</h4>
        <pre class="ps-3 fw-normal">{{ job.working_schedule }}</pre>
      </div>
      <div>
        <h4>Job Location:</h4>
        <pre class="ps-3 fw-normal">{{ job.location }}</pre>
      </div>
      <div>
        <h4>Deadline:</h4>
        <pre class="ps-3 fw-normal">{{
          new Date(job.last_date).toLocaleString()
        }}</pre>
      </div>
      <div class="d-flex justify-content-center my-3">
        <a
          :href="`mailto:career@sasthosebok.com?subject=` + job.title"
          class="btn btn-dark btn-sm px-5 "
          >Apply Now</a
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "career",
  data() {
    return {
      job: [],
      form_data: {},
    };
  },
  methods: {
    async getJobDetails() {
      await this.$axios
        .get(`career/job/` + this.$route.query.id)
        .then((res) => {
          if (res.status === 200) {
            this.job = res.data;
          } else {
            this.$router.push("/");
          }
        })
        .catch((error) => {
          this.$router.push("/");

          console.log(error.response);
          console.log(error.response.data.message || error.message);
          // context.commit('error', error)
        });
    },
  },
  mounted() {
    this.getJobDetails();
  },
};
</script>

<style></style>
