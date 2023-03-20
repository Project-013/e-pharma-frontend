<template>
  <section class="center_box">
    <div class="container">
      <div class="row g-4 my-3 justify-content-center">
        <div class="col-md-7">
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
                <mark class="d-none" v-if="product.offer != product.price"
                  >{{
                    (100 - (product.offer / product.price) * 100).toFixed(2)
                  }}% off</mark
                >
              </h6>
              <pre class="fw-normal fst-italic my-2"
                >{{ product.description }}
                      </pre
              >
            </div>
          </div>
        </div>
        <div class="col-md-5" >
          <div v-if="$auth.loggedIn" class="bg-white">
            <ValidationObserver
              class="card h-100 p-0"
              v-slot="{ handleSubmit }"
            >
              <div class="card-body">
                <h6 class="mb-3 fw-bold text-uppercase" style="color: #2b325c">
                  Order Now!
                </h6>

                <form class="" @submit.prevent="handleSubmit(submitForm)">
                  <div class="form-group my-2">
                    <label class="form-label" for="name">Your name</label>
                    <input
                      v-model="getName"
                      id="name"
                      class="form-control form-control-sm"
                      required
                    />
                  </div>
                  <div class="form-group my-2">
                    <label class="form-label" for="name">Phone</label>
                    <input
                      v-model="getPhone"
                      id="patient_phone"
                      class="form-control form-control-sm"
                      placeholder=" "
                      required
                      disabled
                    />
                  </div>
                  <div class="my-3">
                    <label class="form-label" for="name">Payment Method</label>

                    <select
                      class="form-select form-select-sm"
                      v-model="form_data.payment_method"
                    >
                      <option value="" disabled selected>
                        Select Payment Method
                      </option>
                      <template v-for="(type, index) in p_method">
                        <option :value="type" :key="index">
                          {{ type }}
                        </option>
                      </template>
                    </select>
                  </div>

                  <div
                    class="form-group my-3"
                    v-if="form_data.payment_method != 'Cash on Delivery'"
                  >
                    <label class="form-label" for="transaction_id"
                      >Transaction ID</label
                    >

                    <input
                      id="patient_name"
                      v-model="form_data.transaction_id"
                      class="form-control form-control-sm"
                    />
                  </div>
                  <div class="form-group my-3">
                    <label class="form-label" for="name">Address</label>
                    <textarea
                      v-model="form_data.address"
                      id="details"
                      class="form-control form-control-sm"
                      rows="2"
                      required
                    ></textarea>
                  </div>

                  <button
                    style="background-color: #2b325c"
                    class="btn btn-dark btn-sm mt-3 w-100 text-uppercase"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ValidationObserver } from "vee-validate";

export default {
  components: {
    ValidationObserver,
  },
  computed: {
    getCart() {
      return [...this.$store.getters["product/items"]];
    },
    product() {
      const products = this.$store.getters["product/product"];
      const product = products.find(
        ({ id }) => id == this.$route.query.productid
      );
      console.log(products);
      return product;
    },

    getCost() {
      // return this.$store.getters["product/cost"];
      const cost = this.getCart.reduce(
        (total, { offer }) => total + Number(offer),
        0
      );
      return cost;
    },
    getPhone() {
      if (this.$auth.user.phone) {
        return this.$auth.user.phone;
      }
      return "";
    },
    getName() {
      if (this.$auth.user.full_name) {
        return this.$auth.user.full_name;
      }
      return "";
    },
    getUserID() {
      if (this.$auth.user.phone) {
        return this.$auth.user.id;
      }
      return "";
    },
  },
  data() {
    return {
      p_method: ["Cash on Delivery", "Bkash", "Nogod", "Rocket", "Upay"],

      form_data: {
        name: "",
        phone: "",
        address: "",
        total_cost: "",
        user_id: "",
        products: [],
        payment_method: "Cash on Delivery",
        transaction_id: "",
      },
    };
  },
  methods: {
    async submitForm() {
      this.form_data.phone = this.getPhone;
      this.form_data.name = this.getName;
      this.form_data.user_id = this.getUserID;
      this.form_data.products = [this.$route.query.productid]
      this.form_data.total_cost = this.getCost;

      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        this.disable_btn = true;
        this.$axios
          .post(`/shop/orders/`, this.form_data, {
            headers: {
              // "Content-Type": "multipart/form-data",
            },
          })
          .then((res) => {
            if (res.status === 201) {
              this.$toast.success("Success! we will contact you soon..");
              this.$router.push("/profile");
            }
            this.$nuxt.$loading.finish();
          })
          .catch((error) => {
            this.$toast.error("Error found! Try again");
            console.log(error.response);

            this.$nuxt.$loading.finish();
            console.log(error.message || error.response.data.message);
          });

        this.disable_btn = false;
      });

      return;
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
   pre {
    font-size: 60% !important;
  }
  img{
    width: 130px!important;
  }

}
</style>
