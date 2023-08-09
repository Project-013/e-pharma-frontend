<template>
  <section class="mb-5 pb-5">
    <div class="container">
      <div class="row g-4 my-3 justify-content-center">
        <div class="col-md-5">
          <img
            src="/img/cards/DeviceCircumcision.jpg"
            alt="ডিভাইস কসমেটিক খৎনা সার্ভিস"
            class="d-block w-100 px-5"
          />
        </div>
        <div class="col-md-5 p-3">
          <h3 class="text-dark mb-3">ডিভাইস কসমেটিক খৎনা সার্ভিস</h3>
          <p class="text-justify _service_desc">
            ঘরে বসে আপনার প্রিয় সন্তানের খৎনা ( মুসলমানী) করান সর্বাধুনিক
            ডিভাইস কসমেটিক মেশিন দ্বারা, যা আপনার সন্তানের জন্য সম্পূর্ণ নিরাপদ
            এবং আরামদায়ক। সিলেটের একদল অভিজ্ঞ চিকিৎসক ইসলামী শরীয়ত মোতাবেক শহরে
            এই ডিজিটাল সেবাটি প্রদান করে আসছেন।
          </p>
          <p class="text-justify _service_desc">
            অর্ডারটি সাবমিট করার পর কিছুক্ষন অপেক্ষা করুন, এডমিন আপনার সাথে
            যোগাযোগ করবে । তারপর
            <strong class="text-primary">
              {{
                $config.uniProject ? "E-health" : "স্বাস্থ্যসেবক ডটকম"
              }}</strong
            >
            কর্তৃক নির্ধারিত ফি প্রদান করে সার্ভিসটি গ্রহন করুন।
          </p>
          <a href="tel:+8801602655774" class="lead fw-bold text-dark"
            ><i class="icofont-ui-call text-primary me-2"></i>
            +8801602655774
          </a>
        </div>
        <div class="col-md-7 mx-auto">
          <template v-if="$auth.loggedIn === false">
            <p class="text-center mark my-3 p-1">
              Please
              <NuxtLink
                :to="`/login?redirect=` + $route.fullPath"
                class="text-decoration-none"
              >
                Login
              </NuxtLink>
              or
              <NuxtLink
                :to="`/register?redirect=` + $route.fullPath"
                class="text-decoration-none"
              >
                Register
              </NuxtLink>

              to get <span class="fw-bold">Device Circumcision</span> Service
            </p>
          </template>
          <div v-if="$auth.loggedIn" class="bg-white">
            <ValidationObserver
              class="card h-100 p-0"
              v-slot="{ handleSubmit }"
            >
              <div class="card-body">
                <h6
                  class="mb-3 fw-bold text-uppercase d-none"
                  style="color: #2b325c"
                >
                  Order Now!
                </h6>

                <form class="" @submit.prevent="handleSubmit(submitForm)">
                  <div class="form-group my-2">
                    <label class="form-label" for="child_name"
                      >শিশুর নাম
                    </label>
                    <input
                      v-model="form_data.child_name"
                      id="child_name"
                      class="form-control form-control-sm"
                      required
                    />
                  </div>
                  <div class="form-group my-2">
                    <label class="form-label" for="gurdians_name"
                      >পিতা/ অভিভাবকের নাম
                    </label>
                    <input
                      v-model="form_data.gurdians_name"
                      id="gurdians_name"
                      class="form-control form-control-sm"
                      required
                    />
                  </div>
                  <div class="form-group my-2 d-none">
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
                  <div class="form-group my-3">
                    <label class="form-label" for="name">ঠিকানা: </label>
                    <textarea
                      v-model="form_data.address"
                      id="details"
                      class="form-control form-control-sm"
                      rows="2"
                      required
                    ></textarea>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                      required
                    />
                    <label class="form-check-label" for="flexCheckDefault" style="font-size:13px">
                      Accept Terms & conditions
                    </label>
                  </div>
                  <p class="small px-3 yext-muted" style="font-size:11.5px; line-height:15px;">I am the service recipient fully voluntarily and knowingly accepting Device Cosmetic Circumcision services for my family/children through digital healthcare provided by sasthosebok.com. I am fully responsible for any side effects of unwanted medicine or any kind of problem during surgery during receiving digital health services. In no way shall this liability fall on health.com. Knowing this well, I am taking this digital healthcare</p>

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
  head() {
    return {
      title: "স্বাস্থ্যসেবক || ডিভাইস কসমেটিক খৎনা সার্ভিস",
    };
  },
  components: {
    ValidationObserver,
  },
  computed: {
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
      form_data: {
        child_name: "",
        gurdians_name: "",
        phone: "",
        address: "",
        user_id: "",
      },
    };
  },
  methods: {
    async submitForm() {
      this.form_data.phone = this.getPhone;
      this.form_data.name = this.getName;
      this.form_data.user_id = this.getUserID;

      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        this.disable_btn = true;
        this.$axios
          .post(`services/device-circumcision/`, this.form_data, {
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

<style scoped></style>
