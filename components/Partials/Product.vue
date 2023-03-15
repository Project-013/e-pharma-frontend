<template>
  <div class="card h-100 p-2 _card">
    <div class="row card-body p-0">
      <div
        class="col-12 pointer"
      >
        <img
          :src="$config.apibaseURL + product.image"
          :alt="product.name"
          class="w-100"
        />
      </div>
      <div class="col-12">
        <h6
          class="mb-0 fw-bold text-uppercase pointer"
          style="color: #2b325c"
        >
          {{ product.name }}
        </h6>
        <p class="fw-bold text-success my-0">
          {{ product.category }}
        </p>
        <h6><span class="fw-bold">৳ </span>{{ product.offer }}</h6>
        <h6 class="" v-if="product.offer != product.price">
          <del class="fw-normal text-danger">৳ {{ product.price }}</del>
          <mark
            >{{ (100 - (product.offer / product.price) * 100).toFixed(2) }}%
            off</mark
          >
        </h6>


      </div>
    </div>
    <div class="card-footer">
               <!-- Button trigger modal -->
        <button @click="addToCart(product)" class="btn btn-sm btn-dark d-none">
          Add to Cart
        </button>
        <a
          href="tel:+8801959970664"
          target="_blank"
          class="btn btn-sm btn-dark"
        >
          <i class="icofont-shopping-cart"></i>

          Buy Now
        </a>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },

  computed: {},

  data() {
    return {};
  },
  methods: {},
  mounted() {},
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
