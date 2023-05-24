<template>
  <section class="container pb-5 pt-3 mb-5">
    <div class=" col-md-9 col-lg-7" id="accordionExample">
      <h4 class="text-dark my-3">International Journal/ Guidelines</h4>

      <div class="rounded border bg-white mb-4">
        <div class="d-flex align-items-center rounded">
          <img
            src="/img/icons/search.svg"
            style="width: 18px"
            alt=""
            class="ms-3"
          />
          <input
            type="search"
            class="form-control border-0 my-0"
            placeholder="Search Journal/Guidelines"
            v-model="title"
          />
        </div>
      </div>
      <ul
        class="list-group"
        v-for="(guideline, index) in sortedList"
        :key="index"
      >
        <li class="list-group-item my-1">
          <a
            :href="$config.apibaseURL + guideline.paper"
            target="_blank"
            class="small fw-semibold d-block mb-3"
            >{{ guideline.title }}</a
          >
          <!-- <pre>{{guideline.description}}</pre> -->
          <a
            :href="$config.apibaseURL + guideline.paper"
            target="_blank"
            style="font-size: 10px"
            class="btn btn-sm btn-outline-dark d-block d-sm-inline"
            >Download PDF</a
          >
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "guideline",
  head() {
    return {
      title: "স্বাস্থ্যসেবক || Guidelines ",
    };
  },
  computed: {
    sortedList() {
      const filterd_data = this.guidelines.filter(({ title }) => {
        return this.title
          ? title.toUpperCase().includes(this.title.toUpperCase())
          : true;
      });
      return filterd_data;
    },
  },
  data() {
    return {
      guidelines: [],
      title: "",
    };
  },
  methods: {
    async getGuidelines() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        this.$axios
          .get(`guidelines`)
          .then((res) => {
            if (res.status === 200) {
              this.guidelines = res.data;
            }
            this.$nuxt.$loading.finish();
          })
          .catch((error) => {
            this.$nuxt.$loading.finish();

            // console.log(error.response);
            // console.log(error.response.data.message || error.message);
            // context.commit('error', error)
          });
      });
    },
  },
  mounted() {
    this.getGuidelines();
  },
};
</script>
<style scoped>
.accordion-item {
  background: #f9fafd !important;
  border: 1px solid #d8e2ef !important;
  box-shadow: 0px 3px 10px rgba(54, 124, 193, 0.3) !important;
}
@media only screen and (max-width: 600px) {
  p,
  h2 {
    font-size: 80% !important;
  }
}
</style>
