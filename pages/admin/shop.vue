<template>
  <div class="container">
    <div class="card shadow p-2 my-3 border-0">
      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            class="nav-link active"
            id="nav-products-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-products"
            type="button"
            role="tab"
            aria-controls="nav-products"
            aria-selected="true"
          >
            Products
          </button>
          <button
            class="nav-link"
            id="nav-orders-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-orders"
            type="button"
            role="tab"
            aria-controls="nav-orders"
            aria-selected="false"
          >
            Orders
          </button>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div
          class="tab-pane fade show active"
          id="nav-products"
          role="tabpanel"
          aria-labelledby="nav-products-tab"
          tabindex="0"
        >
          <!-- {{products}} -->
          <DataTable
            title="Products"
            :columns="products_columns"
            :rows="products"
            class="table-responsive"
          >
            <th slot="thead-tr">Actions</th>
            <template slot="tbody-tr" slot-scope="props">
              <td style="width: 200px">
                <button
                  class="btn btn-sm btn-primary text-white"
                  data-bs-toggle="modal"
                  :data-bs-target="`#exampleModal${props.row.id}`"
                >
                  <i
                    class="icofont-eye-alt text-light"
                    style="font-size: 14px"
                  ></i>
                </button>
                <a target="_blank" class="btn btn-sm btn-success text-white d-none">
                  <i
                    class="icofont-edit text-light"
                    style="font-size: 14px"
                  ></i>
                </a>
                <a target="_blank" class="btn btn-sm btn-danger text-white d-none">
                  <i
                    class="icofont-trash text-light"
                    style="font-size: 14px"
                  ></i>
                </a>
              </td>

              <!-- Modal -->
              <div
                class="modal fade"
                :id="`exampleModal${props.row.id}`"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        {{ props.row.name }}
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div class="card p-1 border-0">
                        <img
                          :src="$config.apibaseURL + props.row.image"
                          :alt="props.row.name"
                          width="250"
                          class="mx-auto"
                        />
                        <div class="card-body">
                          <h6 class="mb-0 fw-bold text-uppercase pointer">
                            {{ props.row.name }}
                          </h6>
                          <p class="fw-bold text-success my-0">
                            {{ props.row.category }}
                          </p>

                          <h6 class="fw-semibold my-2">
                            <span class="fw-bold">৳ </span>{{ props.row.offer }}

                            <del class="fw-normal text-danger ms-2"
                              >৳ {{ props.row.price }}</del
                            >
                            <mark
                              class="d-none"
                              v-if="props.row.offer != props.row.price"
                              >{{
                                (
                                  100 -
                                  (props.row.offer / props.row.price) * 100
                                ).toFixed(2)
                              }}% off</mark
                            >
                          </h6>
                          <pre class="fw-normal fst-italic my-2"
                            >{{ props.row.description }}
                      </pre
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </DataTable>
        </div>
        <div
          class="tab-pane fade"
          id="nav-orders"
          role="tabpanel"
          aria-labelledby="nav-orders-tab"
          tabindex="0"
        >
          ...
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Shop",
  layout: "admin",
  beforeCreate() {
    if (!this.$auth.$state.loggedIn || this.$auth.user.is_admin === false) {
      this.$router.push("/");
    }
  },
  data() {
    return {
      products_columns: [
        { label: "Name", field: "name" },
        { label: "Category", field: "category" },
        { label: "Orginal Price (BDT)", field: "price" },
        { label: "Offer price (BDT)", field: "offer" },
      ],
    };
  },
  computed: {
    products() {
      return [...this.$store.getters["product/product"]];
    },
  },
  methods: {},
  mounted() {},
};
</script>

<style></style>
