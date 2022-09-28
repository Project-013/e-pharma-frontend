<template>
  <div class="container">
    <div class="row my-5">
      <div class="col-md-6 p-3 mx-auto">
        <img src="../static/img/working.png" class="d-block w-100" alt="..." />
        <h6 class="text-center fw-bold my-4 Construction">
          <!-- We are Under Construction..! -->
        </h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$toast.info("We are under construction!");
  },
};
</script>

<style>
.Construction {
  position: relative;
  top: -55px;
  color: #42146d;
}
</style>
