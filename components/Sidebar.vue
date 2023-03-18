<template>
  <div id="sidebar" class="d-none d-md-block" v-if="getCart.length">
    <button
      class="sidebar_btn d-flex align-items-center"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasScrolling"
      aria-controls="offcanvasScrolling"
    >
      <i class="icofont-curved-left bg-white text-dark rounded-circle"></i>
      <span class="small ms-2 d-none d-md-block"> Cart</span>
    </button>

    <div
      class="offcanvas offcanvas-end sidebar_body"
      data-bs-scroll="true"
      data-bs-backdrop="false"
      tabindex="-1"
      id="offcanvasScrolling"
      aria-labelledby="offcanvasScrollingLabel"
    >
      <div class="offcanvas-body">
        <button
          type="button "
          class="sidebar_close_btn d-flex align-items-center"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i class="icofont-curved-right bg-white text-dark rounded-circle"></i>
        </button>

        <Cart />
          <div>
            <NuxtLink
              :to="$auth.loggedIn ? '/shop/cart' : '/login?redirect=/shop/cart'"
              class="btn btn-sm btn-dark w-100"
              >Place order</NuxtLink
            >
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   computed: {
    getCart() {
      return [...this.$store.getters["product/items"]];
    },
  },
  mounted() {
    this.$store.dispatch("product/getProduct");
    // this.getTotal()
  },
};
</script>

<style scoped>
#sidebar {
  position: relative;
}
.sidebar_btn {
  background-color: rgb(122, 19, 191);

  color: white;
  border: none;
  padding: 5px 5px;
  border-radius: 40px 0px 0px 40px;
  cursor: pointer;
  position: fixed;
  top: 240px;
  right: 0;
  z-index: 1000;
  font-size: 26px !important;
}

.sidebar_close_btn {
  background-color: rgb(122, 19, 191);
  color: white;
  border: none;
  padding: 5px 5px;
  border-radius: 40px 0px 0px 40px;
  cursor: pointer;
  position: absolute;
  top: 240px;
  left: -35px;
  font-size: 26px !important;
}
</style>
