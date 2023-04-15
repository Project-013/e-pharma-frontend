<template>
  <section class="mb-5 pb-5">
    <div class="bg-light p-3">
      <div class="container">
        <div class="my-3 d-none">
          <h1 class="heading_2 text-dark">Our products</h1>
        </div>
        <div class="row g-3 mb-0">
          <div class="col-md-6">
            <label class="form-label" for="">Search Product</label>

            <div class="rounded border bg-white">
              <div class="d-flex align-items-center rounded">
                <img
                  src="/img/icons/search.svg"
                  style="width: 18px"
                  alt=""
                  class="ms-2"
                />
                <input
                  type="search"
                  class="form-control form-control-sm border-0 my-0"
                  placeholder="Search Product"
                  v-model="name"
                />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <label class="form-label" for="">Select Category</label>
            <select
              class="form-select form-select-sm"
              aria-label="Default select example"
              v-model="category"
              required
            >
              <option value="">All</option>
              <template v-for="(cat, index) in getCategorylist">
                <!-- <li class="list-group-item" ></li> -->
                <option :value="cat" :key="index">{{ cat }}</option>
              </template>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row g-3">
        <div class="col-lg-2 d-none d-lg-block">
          <h6 class="mt-3">Categories</h6>
          <ul class="list-group d-flex">
            <NuxtLink
              class="list-group-item small"
              to="/shop"
              :class="!$route.query.category ? 'active' : ''"
              >All</NuxtLink
            >
            <template v-for="(cat, index) in getCategorylist">
              <!-- <li class="list-group-item" ></li> -->
              <NuxtLink
                class="list-group-item small"
                :class="$route.query.category == cat ? 'active' : ''"
                :to="`/shop?category=${cat}`"
                :key="index"
                >{{ cat }}</NuxtLink
              >
            </template>
          </ul>
        </div>
        <div class="col-lg-10">
          <div class="row" v-if="sortedProductList.length">
            <Product class="" :product="sortedProductList" />
          </div>
          <div v-else>
            <div class="text-center py-5">
              <h4>Nothing Found!</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div v-for="(category, index) of getCategorylist" :key="index">
        <ShopSlider :products="get_product" :category="category" />
      </div>
    </div>
  </section>
</template>

<script>
import ShopSlider from "~/components/Partials/ShopSlider.vue";
export default {
  components: { ShopSlider },
  head() {
    return {
      title: "স্বাস্থ্যসেবক || Shop  ",
    };
  },
  data() {
    return {
      product: [],
      name: "",
      category: "",
    };
  },
  computed: {
    get_product() {
      return this.$store.getters["product/product"];
    },

    sortedProductList() {
      const filterd_data = this.get_product.filter(({ category, name }) => {
        return (
          (this.name
            ? name.toUpperCase().includes(this.name.toUpperCase())
            : true) &&
          (this.type ? type.includes(this.type) : true) &&
          (this.category ? category == this.category : true)
        );
      });
      return filterd_data;
    },
    getCategorylist() {
      const list = [];
      this.get_product.map(({ category }) => {
        if (list.includes(category) == false) {
          list.push(category);
        }
        return;
      });

      return list.sort();
    },
  },

  methods: {},

  watch: {
    category(to, from) {
      this.$router.push("/shop?category=" + to.replace(" ", "-"));
    },
  },
  mounted() {
    // this.getproduct();
    if (this.$route.query.category) {
      this.category = this.$route.query.category.replace("-", " ");
    }
  },
};
</script>

<style scoped></style>
