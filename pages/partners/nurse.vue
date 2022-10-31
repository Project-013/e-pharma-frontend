<template>
  <section class="main-body">
    <div class="col-lg-7 col-md-10 col-11 mx-auto py-5">
      <div class="p-4 rounded shadow bg-light mb-5 fw-bold border">
        <h4 class="mb-5">
          Register as
          <span style="color: #084298">সেবক Nurse/Midwife</span>
        </h4>
        <ValidationObserver v-slot="{ handleSubmit }">
          <form class="form" @submit.prevent="handleSubmit(submitForm)">
            <ValidationProvider
              class="form-floating my-3 d-block"
              rules="required"
              v-slot="{ errors }"
            >
              <input
                v-model="form_data.name"
                id=" name"
                class="is-invalid form-control"
              />
              <label for="patient_name">আপনার নাম</label>
              <div class="invalid-feedback">
                {{ errors[0] }}
              </div>
            </ValidationProvider>
            <ValidationProvider
              class="form-floating my-3 d-block"
              rules="required"
              v-slot="{ errors }"
            >
              <input
                v-model="form_data.institution"
                id=" name"
                class="is-invalid form-control"
              />
              <label for="institution">বর্তমান প্রতিষ্ঠানের নাম</label>
              <div class="invalid-feedback">
                {{ errors[0] }}
              </div>
            </ValidationProvider>

            <h6 class="small text-muted">শিক্ষাগত যোগ্যতা</h6>
            <div class="d-flex flex-wrap mb-4">
              <template v-for="e in nursing_education_program">
                <div class="mb-3 me-3" :key="e">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :value="e"
                    :id="e"
                    v-model="qualicifacions"
                  />
                  <label class="form-check-label" :for="e">
                    {{ e }}
                  </label>
                </div>
              </template>
            </div>
            <h6 class="small text-muted">লিঙ্গ</h6>
            <div class="d-flex flex-wrap mb-4">
              <div class="mb-3 me-3">
                <input
                  class="form-check-input"
                  type="radio"
                  value="male"
                  id="male"
                  v-model="form_data.gender"
                />
                <label class="form-check-label" for="male"> male </label>
              </div>
              <div class="mb-3 me-3">
                <input
                  class="form-check-input"
                  type="radio"
                  value="female"
                  id="female"
                  v-model="form_data.gender"
                />
                <label class="form-check-label" for="female"> female </label>
              </div>
              <div class="mb-3 me-3">
                <input
                  class="form-check-input"
                  type="radio"
                  value="others"
                  id="others"
                  v-model="form_data.gender"
                />
                <label class="form-check-label" for="others"> others </label>
              </div>
            </div>

            <h6 class="small text-muted">যে যে দিন সেবা দিতে ইচ্ছুক</h6>
            <div class="d-flex flex-wrap mb-4">
              <template v-for="day in working_day_list">
                <div class="mb-3 me-3" :key="day">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :value="day"
                    :id="day"
                    v-model="working_days"
                    :disabled="
                      working_days.includes(`Everyday`) && day != `Everyday`
                    "
                  />
                  <label class="form-check-label" :for="day">
                    {{ day }}
                  </label>
                </div>
              </template>
            </div>
            <h6 class="small text-muted">যে সময়ে সেবা দিতে ইচ্ছুক</h6>
            <div class="d-flex flex-wrap mb-4">
              <template v-for="time in working_time_list">
                <div class="mb-3 me-3" :key="time">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :value="time"
                    :id="time"
                    v-model="working_times"
                    :disabled="
                      working_times.includes(`All Day`) && time != `All Day`
                    "
                  />
                  <label class="form-check-label" :for="time">
                    {{ time }}
                  </label>
                </div>
              </template>
            </div>
            <h6 class="small text-muted">
              সিলেট শহরের যে যে ওয়ার্ডে সেবা দিতে ইচ্ছুক
            </h6>
            <div class="d-flex flex-wrap mb-4">
              <template v-for="i in 27">
                <div class="mb-3 me-3" :key="i">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :value="i"
                    :id="i"
                    v-model="working_area"
                  />
                  <label class="form-check-label" :for="i"> {{ i }} </label>
                </div>
              </template>
            </div>
            <div class="input-field pb-3">
              <h6 class="small text-muted">ফোন নাম্বার</h6>
              <div class="input-group flex-nowrap">
                <span
                  class="input-group-text bg-light p-0"
                  style="width: 85px"
                  id="addon-wrapping"
                >
                  <select
                    class="form-select form-select-sm border-0 p-3"
                    style="font-weight: 500"
                    aria-label=".form-select-sm example"
                  >
                    <option value="+880">+880</option>
                  </select>
                </span>

                <input
                  type="number"
                  required
                  class="form-control py-3"
                  placeholder="1XXXXXXXXX"
                  aria-label="phone"
                  aria-describedby="addon-wrapping"
                  v-model="phone"
                />
              </div>
            </div>
            <ValidationProvider
              class="form-floating my-3 d-block"
              rules="required|numeric"
              v-slot="{ errors }"
            >
              <input
                v-model="form_data.nid"
                type="number"
                id=" nid"
                class="is-invalid form-control"
              />
              <label for="nid">জাতীয় পরিচয়পত্র নম্বর </label>
              <div class="invalid-feedback">
                {{ errors[0] }}
              </div>
            </ValidationProvider>
            <h6 class="small text-muted mt-2">আপনার সম্পর্কে লিখুন</h6>
            <ValidationProvider
              class="form-group my-3 d-block"
              rules="required"
              v-slot="{ errors }"
            >
              <textarea
                v-model="form_data.short_description"
                id="details"
                class="is-invalid form-control"
                rows="2"
              ></textarea>
              <div class="invalid-feedback">
                {{ errors[0] }}
              </div>
            </ValidationProvider>
            <div>
              <div class="d-flex align-items-center">
                <input type="checkbox" id="checkbox" required />
                <p for="checkbox" class="mt-3 ms-2 small">
                  Accept the
                  <a href="#" class="text-primary text-decoration-none"
                    >Terms</a
                  >
                  and
                  <a href="#" class="text-primary text-decoration-none"
                    >Privacy Policy</a
                  >
                </p>
              </div>

              <div class="d-grid gap-2">
                <button
                  class="btn btn-primary btn-sm"
                  :disabled="phone.length != 10 || disable_btn"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </section>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  name: "nurse",
  components: {
    ValidationObserver,
    ValidationProvider,
  },

  data() {
    return {
      phone: "",
      form_data: {
        mobile: "+880",
        name: "",
        qualicifacions: "",
        working_area: "",
        working_days: "",
        working_times: "",
        short_description: "",
        institution: "",
        // image_url: "",
        country_code: "+880",
        nid: "",
        gender: "",
      },
      disable_btn: false,
      working_area: [],
      working_days: [],
      working_times: [],
      qualicifacions: [],
      working_day_list: this.$store.getters["info/working_day_list"],
      working_time_list: this.$store.getters["info/working_time_list"],
      nursing_education_program:
        this.$store.getters["info/nursing_education_program"],
    };
  },
  computed: {
    CountryCode() {
      return this.$store.getters["CountryCode"];
    },
  },

  methods: {
    async submitForm() {
      this.form_data.mobile = "+880" + this.phone;
      this.form_data.working_area = this.working_area.toString();
      this.form_data.working_days = this.working_days.toString();
      this.form_data.working_times = this.working_times.toString();
      this.form_data.qualicifacions = this.qualicifacions.toString();
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        this.disable_btn = true;
        this.$axios
          .post(`patners/nurse-regi/`, this.form_data, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            if (res.status === 201) {
              this.$toast.success("Success! we will contact you soon..");
              this.$router.push("/success");
            }
            this.$nuxt.$loading.finish();
          })
          .catch((error) => {
            console.log(error.response);
            if (error.response) {
              console.log(error.response);
            }
            this.$toast.error("Error found! Try again");

            this.$nuxt.$loading.finish();
            console.log(error.message || error.response.data.message);
          });

        this.disable_btn = false;
      });

      return;
    },
  },
  mounted() {},
};
</script>
