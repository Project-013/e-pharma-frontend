<template>
  <div class="container">
    <div class="my-5">
      <h6 class="text-dark mb-1 text-uppercase">
        {{ category }}
      </h6>
      <carousel
        :loop="true"
        :autoplay="false"
        :perPage="getInnerWidth < 576 ? 2.1 : getInnerWidth <= 768 ? 4.2 : 5.2"
        :paginationEnabled="false"
      >
        <slide class="" v-for="product in sortedProductList" :key="product.id">
          <PartialsProduct :product="product" />
        </slide>
      </carousel>
    </div>
  </div>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  components: {
    Carousel,
    Slide,
  },
  computed: {
    getInnerWidth() {
      return window.innerWidth;
    },
    sortedProductList() {
      const filterd_data = this.products.filter(({ category }) => {
        return this.category
          ? category.toUpperCase().includes(this.category.toUpperCase())
          : true;
      });
      return filterd_data;
    },
  },
  props: {
    products: Array,
    category: String,
  },
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  h6 {
    font-size: 65% !important;
    line-height: 1.5;
  }
}
</style>
