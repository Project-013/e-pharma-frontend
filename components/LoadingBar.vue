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

<style scoped></style>
