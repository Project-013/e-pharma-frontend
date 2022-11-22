<template>
  <div v-if="loading" class="loading-page row">
    <div class="d-flex justify-content-center align-items-center">
      <div class="spinner-grow" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
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
  z-index: 99999 !important;
}
</style>
