<template>
  <section class="mb-5 pb-5">
    <div class="container">
      <div class="row my-3 justify-content-center">
        <div class="col-md-5">
          <img src="/img/cards/blood.jpg" class="d-block w-100" />
        </div>
        <div class="col-md-5 p-3">
          <h3 class="text-dark mb-3">ই ব্লাড ব্যাংক </h3>
          <p class="text-justify _service_desc">
            <strong class="text-primary"> সিলেট শহরের</strong> যে কোনো জায়গা থেকে যে কোনো সময়ে রক্তের প্রয়োজন হলে       <strong class="text-primary">{{
              $config.uniProject ? "E-health" : "স্বাস্থ্যসেবক ডটকম"
            }}</strong> এর সাথে যোগাযোগ করুন। 
            
          </p>
          <a href="tel:+8801602655774" class="lead fw-bold text-dark"
            ><i class="icofont-ui-call text-primary me-2"></i>
            +8801602655774
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: "স্বাস্থ্যসেবক || Blood donors",
    };
  },
};
</script>

<style scoped></style>
