<template>
  <div v-if="loading" class="loading-page row">
    <div class="spinner_box p-5 col-md-4 mx-auto">
      <div class="spinner-grow text-success spinner" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <p class="small msg text-dark fw-bold">{{ msg }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    msg: null,
  }),
  methods: {
    start(msg = null) {
      this.loading = true;
      this.msg = msg;
    },

    finish() {
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  text-align: center;
  background-color: lightgrey;
}
.spinner_box {
  /* background-color: rgb(128, 128, 128, 1) !important; */
  margin-top: 10rem;
  /* height: 200px; */
  /* box-shadow: 0px 3px 10px rgba(54, 124, 193, 0.3); */
  /* border-radius: 8px; */
}
.msg {
  /* color: rgb(15, 3, 15); */
}
</style>
