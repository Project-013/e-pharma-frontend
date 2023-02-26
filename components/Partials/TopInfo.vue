<template>
  <div class="container">
    <div class="row gx-4 my-3 text-center">
      <div v-for="data in data_list" class="col-4 " :key="data.icon">
        <a :href="data.href" target="_blank" class="card bg-light shadow-sm border-0 p-2 ">
          <i class="fs-1 text-success mb-2" :class="data.icon"></i>
          <h6 class="py-0 my-1 fw-semibold small">{{ data.key }}</h6>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data_list: [
        {
          icon: "icofont-ui-call",
          key: "Call Now",
          href: "tel:+8801959970664",
        },
        {
          icon: "icofont-whatsapp",
          key: "Whatsapp",
          href: "https://wa.me/message/FGJT7DOW244PP1",
        },
        {
          icon: "icofont-send-mail",
          key: "Send Mail",
          href: "mailto:info@sasthosebok.com",
        },
      ],
    };
  },
};
</script>

<style scoped>
h6 {
  font-size: 70% !important;
}

@media only screen and (max-width: 600px) {
  h6 {
    font-size: 56% !important;
  }
  p {
    font-size: 75% !important;
  }
}
</style>
