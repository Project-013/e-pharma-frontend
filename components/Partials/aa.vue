<template>
  <section class="container">
    <div class="wrapper pt-5">
      <div class="container">
        <h3 class="text-dark" v-if="!$config.isApp">Our Services</h3>

        <div class="row g-3 g-md-5 justify-content-center">
          <div
            v-for="(s, i) in services"
            :key="i"
            class="col-lg-3 col-md-4 col-6"
          >
            <NuxtLink :to="s.path">
              <img
                :src="$config.apibaseURL + s.image_url"
                :alt="s.name"
                class="w-100 p-0 pointer rounded-3 shadow service-image"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      services: [],
    };
  },
  methods: {
    async getServices() {
      await this.$axios
        .get(`services`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          if (res.status === 200) {
            this.services = res.data;
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
    this.getServices();
  },
};
</script>

<style></style>
