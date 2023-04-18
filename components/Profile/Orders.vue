<template>
  <div class="my-2">
    <div v-if="orders.length">
      <div class="table-responsive">
        <table class="table small table-sm table_service">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Products</th>
              <th scope="col">Order Status</th>
              <th scope="col">Address</th>
              <th scope="col">Total Cost</th>
              <th scope="col">Date</th>
              <th scope="col" class="d-none">Action</th>
            </tr>
          </thead>
          <tbody v-for="order in orders" :key="order.id">
            <!-- {{order}} -->
            <tr>
              <td>{{ order.name }}</td>

              <td class="d-none">
                <span
                  class="badge"
                  :class="
                    order.payment_status == `pending`
                      ? 'text-bg-warning'
                      : order.payment_status == `unpaid`
                      ? 'text-bg-danger'
                      : order.payment_status == `paid`
                      ? 'text-bg-success'
                      : 'text-bg-primary'
                  "
                  >{{ order.payment_status }}
                </span>
              </td>

              <td>
                <ul
                  v-for="(product) in order.products"
                  :key="product.id"
                  class="list-group "
                >
                  <li class="list-group-item border-0 py-1 p-0">
                    <NuxtLink
                      :to="`/shop/product?productid=${product.id}`"
                      class="fw-semibold"
                      >{{ product.name }}</NuxtLink
                    >
                  </li>
                </ul>
              </td>
              <td>
                <span
                  class="badge"
                  :class="
                    order.service_status == `pending`
                      ? 'text-bg-warning'
                      : order.service_status == `cancelled`
                      ? 'text-bg-danger'
                      : order.service_status == `completed`
                      ? 'text-bg-success'
                      : 'text-bg-primary'
                  "
                  >{{ order.service_status }}
                </span>
              </td>
              <td>{{ order.address }}</td>
              <td>৳{{ order.total_cost }}</td>
              <td>
                {{ new Date(order.created_date).toLocaleString() }}
              </td>
              <td class="d-none">
                <div class="d-flex">
                  <div class="mx-2">
                    <button
                      class="dropdown-item text-dark small"
                      @click="onDelete(`${order.id}`)"
                    >
                      <i class="icofont-trash small"></i>
                    </button>
                  </div>
                  <div class="">
                    <NuxtLink
                      class="small btn btn-dark btn-sm"
                      :to="'/medicine/config?type=edit&id=' + order.id"
                    >
                      view
                    </NuxtLink>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-else>
      <div class="alert alert-primary" role="alert">Nothing Found!</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: [],
      p_method: ["Bkash", "Nogod", "Rocket", "Upay"],
      form_data: {
        payment_method: "",
        transaction_id: "",
      },
      disable_btn: false,
    };
  },

  methods: {
    async getorders() {
      await this.$axios
        .get(`shop/orders/?user_id=${this.$auth.user.id}`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          // console.log(res);
          if (res.status === 200) {
            this.orders = res.data;
          }
        })
        .catch((error) => {
          console.log(error.response);
          console.log(error.response.data.message || error.message);
          // context.commit('error', error)
        });
    },
    async onDelete(id) {
      const confirm = window.confirm("Are You Sure ?");
      if (confirm == false) {
        return;
      }
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        this.disable_btn = true;
        this.$axios
          .delete(`order/medicine/` + id + "/", {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            this.getorders();

            // console.log(res);
            if (res.status === 201) {
            }
            this.$nuxt.$loading.finish();
          })
          .catch((error) => {
            console.log(error);
            this.$nuxt.$loading.finish();
            console.log(error.message || error.response.data.message);
          });

        this.disable_btn = false;
      });

      return;
    },
  },
  mounted() {
    this.getorders();
  },
};
</script>

<style></style>
