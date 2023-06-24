<template>
  <div class="container">
    <h5 class="mt-4">Make Payment</h5>
    <small class="small fw-semibold"
      >Enter amount {{ $route.query.amount }}
    </small>
    <p class="small mark">Please wait a while</p>
    <iframe
      @load="onMyFrameLoad"
      src="https://shop.bkash.com/sasthosebokcom01959970664/paymentlink/default-payment"
      frameborder="0"
      class="w-100 vh-100"
    ></iframe>
  </div>
</template>

<script>
export default {
  methods: {
    onMyFrameLoad(e) {

    },
  },
  mounted() {
    // const amount = document.getElementsById('input-16');
  },
};
</script>

<style></style>
