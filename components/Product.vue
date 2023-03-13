<template>
  <div class="">
    <div class="row justify-content-center justify-content-md-start">
      <div
        v-for="product in pageOfItems"
        :key="product.id"
        class="col-lg-4 col-md-4 p-sm-3 p-1"
      >
        <!-- {{product}} -->
        <div class="card h-100 p-2 _card">
          <div class="row">
            <div
              class="col-5 pointer"
              data-bs-toggle="modal"
              :data-bs-target="`#exampleModal${product.id}`"
            >
              <img
                :src="$config.apibaseURL + product.image"
                :alt="product.name"
                class="w-100"
              />
            </div>
            <div class="col-7">
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
              <h6 class="my-2">
                <span class="fw-bold" style="font-size: 24px">৳</span
                >{{ product.offer }}
                <del class="ms-3 fw-normal">৳{{ product.price }}</del>
                <br />
                <mark class=""
                  >{{
                    (100 - (product.offer / product.price) * 100).toFixed(2)
                  }}% off</mark
                >
              </h6>
              <!-- Button trigger modal -->
              <button
                @click="addToCart(product)"
                class="btn btn-sm btn-dark d-none"
              >
                Add to Cart
              </button>
              <a
                href="tel:+8801959970664"
                target="_blank"
                class="btn btn-sm btn-dark"
              >
              Buy Now
              </a>

              <button
                type="button"
                class="btn btn-sm btn-dark w-100 mt-2 d-none"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Add to Bag
              </button>
            </div>
          </div>

          <!-- Modal -->
          <div
            class="modal fade"
            :id="`exampleModal${product.id}`"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
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
                  <div class="card">
                    <img
                      :src="$config.apibaseURL + product.image"
                      :alt="product.name"
                      width="130"
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
                        <span class="fw-bold" style="font-size: 24px">৳</span
                        >{{ product.price }}
                        <mark class="ms-3">{{ product.offer }}% off</mark>
                      </h6>
                      <pre class="fw-semibold my-2"
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
      <jw-pagination
        :items="product"
        :pageSize="6"
        @changePage="onChangePage"
        :labels="customLabels"
        class="mx-auto"
      ></jw-pagination>
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
      this.pageOfItems = pageOfItems;
    },
    addToCart(product) {
      const { id, name, image_url } = product;
      const price = Math.ceil((product.price / 100) * (100 - product.offer));
      this.items = [...this.$store.getters["product/items"]];
      this.items.push({ id, name, image_url, price });
      this.$store.commit("product/setitems", [...this.items]);
      var cost = 0;
      this.items.map(({ price }) => {
        cost = Number(cost) + Number(price);
      });
      this.$store.commit("product/setcost", cost);

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
._card h6 {
  font-size: 90% !important;
}
._card h5 {
  font-size: 90% !important;
}
._card p {
  font-size: 80% !important;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  ._card h6 {
    font-size: 90% !important;
  }
  ._card h5 {
    font-size: 90% !important;
  }
  ._card p {
    font-size: 80% !important;
  }
}
</style>
