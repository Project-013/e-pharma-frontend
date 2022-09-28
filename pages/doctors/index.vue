<template>
  <section class="container">
    <div class="row my-4">
      <div class="col-md-6 d-flex justify-content-center align-items-center">
        <div class="">
          <h1 class="display-5 text-success">বিশেষজ্ঞদের প্রাইভেট চেম্বার</h1>
          <p class="small">
            দক্ষ চিকিৎসক ও রোগীর দূরত্ব কমিয়ে উন্নত স্বাস্থ্যপরামর্শ উন্মুক্ত
            করার লক্ষ্যে
          </p>
          <div class="search_box mb-4">
            <div class="d-flex align-items-center px-2 rounded">
              <img
                src="/img/icons/search.svg"
                style="width: 18px"
                alt=""
                class="me-2"
              />
              <input
                type="search"
                class="form-control border-0"
                placeholder="Search doctor "
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ugjyU7qdn8c?autoplay=1&loop=1&playlist=ugjyU7qdn8c"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          class="w-100"
        ></iframe>
      </div>
    </div>
    <div class="doctors my-5">
      <Doctors :doctors="doctors" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      doctors: [],
    };
  },
  methods: {
    async getDoctors() {
      await this.$axios
        .get(`specialist-doctors`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          if (res.status === 200) {
            this.doctors = res.data;
          }
        })
        .catch((error) => {
          console.log(error.response.data.message || error.message);
          // context.commit('error', error)
        });
    },
  },
  mounted() {
    this.getDoctors();
  },
};
</script>

<style scoped>
.search_box {
  background-color: white !important;
  border-radius: 10px;
}
</style>
