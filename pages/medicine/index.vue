<template>
  <section class="center_box">
    <div class="container">
      <div class="row g-4 my-3 justify-content-center">
        <div class="col-md-5">
          <img src="/img/cards/png-6.png"
           alt="মেডিসিন হোম ডেলিভারি সার্ভিস"
           class="d-block w-100" />
        </div>
        <div class="col-md-5 p-3">
          <h3 class="text-dark mb-3">মেডিসিন হোম ডেলিভারি সার্ভিস</h3>
          <p class="text-justify _service_desc">
            <strong class="text-primary"> সিলেট শহরের</strong> মধ্যে
            <strong class="text-primary"> {{$config.uniProject
                        ? "E-health"
                        : "স্বাস্থ্যসেবক ডটকম"
                    }}</strong> দিচ্ছে
            সবচাইতে দ্রুত মেডিসিন হোম ডেলিভারি সার্ভিস। নির্ধারিত নাম্বারে একটি
            ফোনকল কিংবা whatsapp অথবা অ্যাপ এর মাধ্যমে প্রেসক্রিপশনের কিংবা
            ওষুধের ইমেজ সেন্ড করলেই {{$config.uniProject
                        ? "E-health"
                        : "স্বাস্থ্যসেবক ডটকম"
                    }} কর্তৃক অনুমোদিত একজন
            ফার্মেসি সেবাদানকারী দ্রুত আপনার বাসায় প্রয়োজনীয় ঔষধ পৌঁছে দিয়ে
            আসবে।
          </p>
          <p class="text-justify _service_desc">
            অর্ডারটি সাবমিট করার পর কিছুক্ষন অপেক্ষা করুন, এডমিন আপনার সাথে
            যোগাযোগ করবে । তারপর
            <strong class="text-primary"> {{$config.uniProject
                        ? "E-health"
                        : "স্বাস্থ্যসেবক ডটকম"
                    }}</strong> কর্তৃক
            নির্ধারিত ফি প্রদান করে সার্ভিসটি গ্রহন করুন।
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

              to get <span class="fw-bold">MEDICINE HOME DELIVERY</span> Service
            </p>
          </template>
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
                  <div class="form-group my-3">
                    <label class="form-label" for="name"
                      >Name of medicine</label
                    >
                    <textarea
                      v-model="form_data.medicine"
                      id="details"
                      class="form-control form-control-sm"
                      rows="2"
                      required
                    ></textarea>
                  </div>

                  <div class="my-3 d-flex justify-content-center">
                    <label
                      for="formFile"
                      class="text-center"
                      style="cursor: pointer"
                    >
                      <img
                        v-if="previewImage"
                        :src="previewImage"
                        width="200"
                        class="uploading-image d-block mb-1 mx-auto border rounded p-1"
                      />
                      <img
                        v-else
                        src="~/static/img/add.jpg"
                        alt=""
                        class="d-block mb-1 mx-auto border rounded p-1"
                        width="180"
                      />
                      <span class="btn btn-sm btn-secondary py-0">{{
                        previewImage
                          ? "Change Prescription"
                          : "Upload Prescription"
                      }}</span>
                    </label>
                    <input
                      class="form-control form-control-sm upload_image d-none"
                      type="file"
                      id="formFile"
                      accept=".jpeg,.jpg,.png,image/jpeg,image/png"
                      aria-label="upload image button"
                      @change="uploadImage"
                    />
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
  head() {
    return {
      title: "স্বাস্থ্যসেবক || মেডিসিন হোম ডেলিভারি",
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
        name: "",
        phone: "",
        address: "",
        medicine: "",
        user_id: "",
      },
      previewImage: null,
      image_url: "",
    };
  },
  methods: {
    uploadImage(e) {
      this.image_url = e.target.files[0];
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.previewImage = e.target.result;
        console.log(this.image_url["name"]);
      };
    },
    async submitForm() {
      this.form_data.phone = this.getPhone;
      this.form_data.name = this.getName;
      this.form_data.user_id = this.getUserID;
      const formData = new FormData();
      if (this.image_url) {
        formData.append("image_url", this.image_url, this.image_url["name"]);
      }
      for (const obj in this.form_data) {
        formData.append(obj, this.form_data[obj]);
      }

      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        this.disable_btn = true;
        this.$axios
          .post(`services/medicine/`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
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
