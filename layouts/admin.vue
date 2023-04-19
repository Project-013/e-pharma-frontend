<template>
  <div class="root ">
      <AdminNavbar />
      <Nuxt style="margin-left:210px"/>
  </div>
</template>

<script>
export default {
  computed: {
  },
  mounted() {
    this.$store.dispatch("doctors/getDoctors");
    this.$store.dispatch("product/getProduct");
    console.log("Called Data!");
  },
};
</script>

<style >
@import url(http://fonts.googleapis.com/icon?family=Material+Icons);
.sorting {
  /* font-size: 16px !important; */
  font-weight: 500 !important;
}
table tr td {
  /* display: none!important; */
  white-space: normal !important;
}

ul.material-pagination {
  list-style-type: none;
}
.nuxt_root {
  min-height: 100vh !important;
}
</style>
