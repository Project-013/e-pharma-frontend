<template>
  <div class="">
    <div class="row justify-content-center justify-content-md-start">
      <div
        v-for="product in pageOfItems"
        :key="product.id"
        class="col-lg-2 col-md-3 col-6 p-sm-3 p-1"
      >
        <div class="card h-100 p-2 _card">
          <div class="row g-3 card-body p-0">
            <div
              class="col-12 pointer"
              data-bs-toggle="modal"
              :data-bs-target="`#exampleModal${product.id}`"
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

                <del class="fw-normal text-danger ms-2"
                  >৳ {{ product.price }}</del
                >
              </h6>
              <h6 class="my-2 d-none" v-if="product.offer != product.price">
                <mark class="d-none"
                  >{{
                    (100 - (product.offer / product.price) * 100).toFixed(2)
                  }}% off</mark
                >
              </h6>
              <!-- Button trigger modal -->
            </div>
          </div>
          <div class="card-footer px-0 d-flex justify-content-between">
            <NuxtLink class="btn btn-sm btn-dark " style="font-size:12px" :to="`/shop/product?productid=${product.id}`">
              Buy Now
            </NuxtLink>
            <button
              @click="addToCart(product)"
              class="btn btn-sm btn-dark "
              style="font-size:12px"
            >
              Add to Cart
            </button>
          </div>

          <!-- Modal -->
          <div
            class="modal"
            :id="`exampleModal${product.id}`"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title text-dark" id="exampleModalLabel">
                    {{ product.name }}
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <div class="card p-1">
                    <img
                      :src="$config.apibaseURL + product.image"
                      :alt="product.name"
                      width="250"
                      class="mx-auto"
                    />
                    <div class="card-body">
                      <h6 class="mb-0 fw-bold text-uppercase pointer">
                        {{ product.name }}
                      </h6>
                      <p class="fw-bold text-success my-0">
                        {{ product.category }}
                      </p>

                      <h6 class="fw-semibold my-2">
                        <span class="fw-bold">৳ </span>{{ product.offer }}

                        <del class="fw-normal text-danger ms-2"
                          >৳ {{ product.price }}</del
                        >
                        <mark
                          class="d-none"
                          v-if="product.offer != product.price"
                          >{{
                            (
                              100 -
                              (product.offer / product.price) * 100
                            ).toFixed(2)
                          }}% off</mark
                        >
                      </h6>
                      <pre class="fw-normal fst-italic my-2"
                        >{{ product.description }}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex align-items-center mt-3">
      <JwPagination
        :items="product"
        :initialPage="initialPage"
        :maxPages="3"
        :pageSize="12"
        @changePage="onChangePage"
        :labels="customLabels"
        class="mx-auto"
      ></JwPagination>
    </div>
  </div>
</template>

<script>
import JwPagination from "jw-vue-pagination";

export default {
  props: {
    product: Array,
  },
  components: {
    JwPagination,
  },
  computed: {
    getitems() {
      return this.$store.getters["product/items"];
    },
    initialPage() {
      let page = 1;
      return page;
    },
  },

  data() {
    return {
      pageOfItems: [],
      customLabels: {
        first: "<<",
        last: ">>",
        previous: "<",
        next: ">",
      },
      items: [],

      cart: {
        items: [],
        cost: "",
        total_cost: "",
      },
    };
  },
  methods: {
    onChangePage(pageOfItems) {
      // update page of items
      console.log(pageOfItems);

      this.pageOfItems = pageOfItems;
    },
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
.qualifications {
  font-size: 13px !important;
}
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
    font-size: 75% !important;
  }
  ._card p {
    font-size: 65% !important;
  }
  ._card pre {
    font-size: 75% !important;
  }
}
</style>
