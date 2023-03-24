<template>
  <div class="card h-100 p-2 _card m-1">
    <div class="row g-3 card-body p-0">
      <NuxtLink :to="`/shop/product?productid=${product.id}`">
        <img
          :src="$config.apibaseURL + product.image"
          :alt="product.name"
          class="w-100"
        />
      </NuxtLink>

      <div class="col-12">
        <h6
          class="mb-0 fw-bold text-uppercase-none pointer"
          data-bs-toggle="modal"
          :data-bs-target="`#exampleModal${product.id}`"
          style="color: #2b325c"
        >
          {{ product.name }}
        </h6>
        <p class="fw-bold text-success my-0">
          {{ product.category }}
        </p>
        <h6>
          <span class="fw-bold">৳ </span>{{ product.offer }}

          <del
            class="fw-normal text-danger ms-2"
            v-if="product.offer != product.price"
            >৳ {{ product.price }}</del
          >
        </h6>
        <h6 class="my-2 d-none" v-if="product.offer != product.price">
          <mark class="d-none"
            >{{ (100 - (product.offer / product.price) * 100).toFixed(2) }}%
            off</mark
          >
        </h6>
        <!-- Button trigger modal -->
      </div>
    </div>
    <div class="card-footer px-0 d-flex justify-content-between">
      <NuxtLink
        class="btn btn-sm btn-dark px-2"
        style="font-size: 10px"
        :to="`/shop/product?productid=${product.id}`"
      >
        Buy Now
      </NuxtLink>
      <button
        @click="addToCart(product)"
        class="btn btn-sm btn-dark px-2 ms-2"
        style="font-size: 10px"
      >
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },

  computed: {
    getitems() {
      return this.$store.getters["product/items"];
    },
  },

  data() {
    return {
      items: [],

      cart: {
        items: [],
        cost: "",
        total_cost: "",
      },
    };
  },
  methods: {
    addToCart(product) {
      const { id, name, image, offer } = product;
      this.items = [...this.$store.getters["product/items"]];
      this.items.push({ id, name, image, offer });
      this.$store.commit("product/setitems", [...this.items]);
      this.$toast.info("Added to cart");
    },
  },
  mounted() {
    this.items = [...this.getitems];
  },
};
</script>

<style scoped>
._card h6,
._card h5 {
  font-size: 90% !important;
}
._card p {
  font-size: 80% !important;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  ._card h6,
  ._card h5 {
    font-size: 65% !important;
  }
  ._card p {
    font-size: 65% !important;
  }
  ._card pre {
    font-size: 65% !important;
  }
}
</style>
