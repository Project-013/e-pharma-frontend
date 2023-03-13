<template>
  <div>
    <div class="card" v-if="getCart.length">
      <div class="card-body">
        <template v-for="(product, index) in getCart">
          <div class="card mb-1" :key="index">
            <div class="row">
              <div
                class="col-3 pointer"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <img
                  :src="$config.apibaseURL + product.image_url"
                  :alt="product.name"
                  class="w-100 rounded-circle"
                />
              </div>
              <div class="col-7">
                <p
                  class="text-uppercase small fw-bold pointer mb-0"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  style="color: #2b325c"
                >
                  {{ product.name }}
                </p>

                <p class="my-0 small fw-bold">
                  <span class="fw-bold">৳</span>{{ product.price }}
                </p>
                <!-- <h6>Quantity {{ product.quantity }}</h6> -->
              </div>
              <div class="col-2">
                <button
                  @click="removeItem(index)"
                  class="btn btn-sm btn-outline-dark"
                >
                  x
                </button>
              </div>
            </div>
          </div>
        </template>
        <p class="my-0">Product Cost : ৳{{ getCost }}</p>
        <p class="my-0">Shipping costs : ৳100</p>
        <hr />
        <h6>Total costs : ৳{{ getCost + 100 }}</h6>
      </div>
      <div class="card-footer">
        <div>
          <NuxtLink 
          
            :to="
            $auth.loggedIn
              ? '/order'
              : '/login?redirect=/order'
          "
           class="btn btn-sm btn-dark w-100"
          >Place order</NuxtLink>
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
    getCost() {
      return this.$store.getters["product/cost"];
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

<style></style>
