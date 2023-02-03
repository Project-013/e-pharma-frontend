<template>
  <div class="mb-5 pt-3 pb-5">
    <div class="container">
      <h5 class="text-dark">বিএমআই ক্যালকুলেটর</h5>
      <hr />
      <p class="small">
        <span class="fw-bold text-primary">বডি মাস ইন্ডেক্স (বিএমআই)</span> হল
        বডি ফ্যাট মাপার ক্যালকুলেটর। এটি মাপা যাবে সংশ্লিষ্ট ব্যক্তির উচ্চতা ও
        ওজনের ভিত্তিতে। নিজের বিএমআই জানতে আপনার ওজন আর উচ্চতা এই ক্যালকুলেটরে
        জমা দিন। বেরিয়ে আসবে আপনার বিএমআই।
      </p>
      <div class="row">
        <div class="col-md-7">
          <div class="card p-0">
            <div class="card-body">
              <form @submit.prevent="submitForm">
                <div class="row g-3">
                  <div class="col-12">
                    <label class="form-label" for="weight">Your Weight </label>
                    <div class="d-flex">
                      <input
                        v-model="weight"
                        id="patient_name"
                        class="form-control form-control-sm"
                        placeholder=" "
                        required
                      />
                      <span class="ms-2 small text-mutet fw-bold">kg</span>
                    </div>
                  </div>
                  <div class="col-12">
                    <label class="form-label" for="height">Your Height </label>
                    <div class="d-flex">
                      <input
                        v-model="feet"
                        id="height"
                        class="form-control form-control-sm"
                        placeholder="  "
                        required
                      />
                      <span class="mx-2 me-3 small text-mutet fw-bold"
                        >feet</span
                      >
                      <input
                        v-model="inches"
                        id="height"
                        class="form-control form-control-sm"
                        placeholder=""
                        required
                      />
                      <span class="ms-2 small text-mutet fw-bold">inches</span>
                    </div>
                  </div>
                </div>

                <button
                  style="background-color: #2b325c"
                  class="btn btn-dark btn-sm mt-3 text-uppercase"
                >
                  Calculate
                </button>
              </form>
            </div>
            <div v-if="this.result" class="card-footer text-center">
              <div
                v-if="Number(this.result) < 18.5"
                class="alert alert-danger"
                role="alert"
              >
                <p class="fw-bold py-0 my-0">
                  Your BMI: {{ this.result.toFixed(2) }} kg/m<sup>2</sup>
                </p>
                কম ওজন
                <p class="small">
                  18,5-এর চেয়ে কম BMI ইঙ্গিত দেয় যে আপনি রোগা, এমনকি
                  অ্যানোরেক্সিয়া বা অপুষ্টির পরিস্থিতির মধ্যে রয়েছেন। তাই এটি
                  সুপারিশ করা হয় যে আপনি একটি স্বাভাবিক সূচকে পৌঁছানোর জন্য ওজন
                  বাড়ান। যাহোক, শুধুমাত্র একজন ডাক্তার আপনার স্বাস্থ্যের অবস্থা
                  সম্পর্কে মন্তব্য করতে পারেন এবং অনুসরণ করার জন্য তার রিপোর্ট
                  অনুযায়ী আপনাকে গাইড করবে।
                </p>
              </div>
              <div
                v-if="
                  Number(this.result) <= 24.9 && Number(this.result) >= 18.5
                "
                class="alert alert-success"
                role="alert"
              >
                <p class="fw-bold py-0 my-0">
                  Your BMI: {{ this.result.toFixed(2) }} kg/m<sup>2</sup>
                </p>
                স্বাভাবিক ওজন
                <p class="small">
                  18,5 এবং 25-এর মধ্যে একটি BMI নির্দেশ করে যে আপনার একটি
                  স্বাভাবিক বিল্ড আছে। এটাও মানে আপনার স্বাস্থ্য সমস্যা হওয়ার
                  সম্ভাবনা কম. যাইহোক, আপনাকে অবশ্যই নিজের যত্ন নিতে হবে,
                  উদাহরণস্বরূপ একটি খেলাধুলা অনুশীলন করে।
                </p>
              </div>
              <div
                v-if="Number(this.result) >= 25 && Number(this.result) <= 29.9"
                class="alert alert-warning"
                role="alert"
              >
                <p class="fw-bold py-0 my-0">
                  Your BMI: {{ this.result.toFixed(2) }} kg/m<sup>2</sup>
                </p>
                অতিরিক্ত ওজন
                <p class="small">
                  25 এবং 29.5-এর মধ্যে BMI নির্দেশ করে যে আপনি উচ্চ রক্তচাপ,
                  ডায়াবেটিস এবং কার্ডিওভাসকুলার সমস্যাগুলির মতো অতিরিক্ত ওজন
                  সম্পর্কিত রোগগুলির জন্য সম্ভাব্য ঝুঁকিতে রয়েছেন। 30 এর পরে,
                  ঝুঁকিগুলি আরও বেশি। আপনার ডাক্তারের সাথে পরামর্শ করার পর,
                  স্বাভাবিক হারে ফিরে যেতে ওজন কমানোর পরামর্শ দেওয়া হয়।
                </p>
              </div>
              <div
                v-if="Number(this.result) >= 30"
                class="alert alert-danger"
                role="alert"
              >
                <p class="fw-bold py-0 my-0">
                  Your BMI: {{ this.result.toFixed(2) }} kg/m<sup>2</sup>
                </p>
                মেদবহুল
                <p class="small">
                  30-এর বেশি BMI নির্দেশ করে যে আপনি উচ্চ রক্তচাপ, ডায়াবেটিস
                  এবং কার্ডিওভাসকুলার সমস্যাগুলির মতো অতিরিক্ত ওজন সম্পর্কিত
                  রোগগুলির জন্য সম্ভাব্য ঝুঁকিতে রয়েছেন। 30 এর পরে, ঝুঁকিগুলি
                  আরও বেশি। আপনার ডাক্তারের সাথে পরামর্শ করার পর, স্বাভাবিক হারে
                  ফিরে যেতে ওজন কমানোর পরামর্শ দেওয়া হয়।
                </p>
              </div>
            </div>
          </div>

          <div class="my-4">
            <h6>BMI Categories:</h6>
            <ul class="list-group small">
              <li class="list-group-item">
                <span class="fw-bold">কম ওজন</span> (Less than 18.5)
              </li>
              <li class="list-group-item">
                <span class="fw-bold">স্বাভাবিক ওজন</span> (18.5 - 24.9)
              </li>
              <li class="list-group-item">
                <span class="fw-bold">অতিরিক্ত ওজন </span> (25 - 29.9)
              </li>
              <li class="list-group-item">
                <span class="fw-bold"> মেদবহুল </span> (30 or greater)
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-5">
          <div class="accordion" id="accordionExample">
            <h5 class="text-dark">FAQs</h5>
            <template v-for="(faq, index) in faqs">
              <div :key="index">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      :data-bs-target="`#collapse-${index}`"
                      aria-expanded="true"
                      :aria-controls="`collapse-${index}`"
                    >
                      <small>{{ faq.ques }}</small>
                    </button>
                  </h2>
                  <div
                    :id="`collapse-${index}`"
                    class="accordion-collapse collapse"
                    :class="index == 0 ? 'show' : 'none'"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <pre>{{ faq.ans }}</pre>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "স্বাস্থ্যসেবক || BMI ",
    };
  },
  data() {
    return {
      faqs: [],
      feet: "",
      inches: "",
      weight: "",
      height_unit: "cm",
      result: "",
    };
  },
  methods: {
    async submitForm() {
      const height = (Number(this.feet) * 12 + Number(this.inches)) * 0.0254;
      // const height = Number(this.height) / 100;

      this.result = Number(this.weight) / (Number(height) * Number(height));
      return;
    },
    async getFaqs() {
      await this.$axios
        .get(`bmi-faqs`)
        .then((res) => {
          if (res.status === 200) {
            this.faqs = res.data;
          }
        })
        .catch((error) => {
          console.log(error.response);
          console.log(error.response.data.message || error.message);
          // context.commit('error', error)
        });
    },
  },
  mounted() {
    this.getFaqs();
  },
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  p ,h2{
    font-size: 80% !important;
  }

}
</style>
