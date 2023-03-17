<template>
  <div>
    <div class="card p-2" v-if="getCart.length">
      <div class="card-body p-1">
        <template v-for="(product, index) in getCart">
          <div class="card mb-1 p-1" :key="index">
            <div class="row card-body py-1">
              <div
                class="col-3 pointer"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <img
                  :src="$config.apibaseURL + product.image"
                  :alt="product.name"
                  class="w-100"
                />
              </div>
              <div class="col-7">
                <p
                  class="text-uppercase small fw-bold pointer mb-0"
                  style="color: #2b325c"
                >
                  {{ product.name }}
                </p>
                <p class="my-0 small fw-bold">
                  <span class="fw-bold">৳ </span>{{ product.offer }}
                </p>
              </div>
              <div class="col-2">
                <button
                  @click="removeItem(index)"
                  class="btn btn-sm btn-outline-danger d-block my-auto"
                >
                  <i class="icofont-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </template>
        <p class="my-0 d-flex justify-content-between d-none">
          <span>Product Cost :</span> <span>৳{{ getCost }}</span>
        </p>
        <p class="my-0 d-flex justify-content-between d-none">
          <span>Shipping costs :</span> <span>৳100</span>
        </p>
        <hr />
        <p class="d-flex fw-bold justify-content-between">
          <span>Total cost :</span> <span>৳{{ getCost + 100 }}</span>
        </p>
      </div>
      <div class="card-footer">
        <div>
          <NuxtLink
            :to="$auth.loggedIn ? '/order' : '/login?redirect=/order'"
            class="btn btn-sm btn-dark w-100"
            >Place order</NuxtLink
          >
        </div>
      </div>
    </div>
    <div class="alert alert-dark text-center" role="alert" v-else>
      Empty cart!
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getCart() {
      return [...this.$store.getters["product/items"]];
    },
    getCost() {
      // return this.$store.getters["product/cost"];
      const cost = this.getCart.reduce(
        (total, { offer }) => total + Number(offer),
        0
      );
      return cost;
    },
  },
  methods: {
    removeItem(index) {
      console.log(index);
      const new_cart = [...this.getCart];
      this.getCart.pop(index);
      // console.log(new_cart);
      this.$store.commit("product/setitems", [...this.getCart]);
    },
  },
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
   h6,
   h5 {
    font-size: 60% !important;
  }
   p {
    font-size: 60% !important;
  }

}
</style>
