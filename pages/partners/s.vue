<template>
  <section class="main-body">
    <div class="col-lg-7 col-md-10 col-11 mx-auto py-5">
      <div class="p-4 rounded shadow bg-light border mb-5 fw-bold">
        <h4 class="mb-5">
          Register as
          <span style="color: #084298">সেবক DMF/CP! </span>
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
                v-model="form_data.specialty"
                id=" name"
                class="is-invalid form-control"
              />
              <label for="specialty">যে বিষয়ে বিশেযজ্ঞ</label>
              <div class="invalid-feedback">
                {{ errors[0] }}
              </div>
            </ValidationProvider>
            <h6 class="small text-dark">শিক্ষাগত যোগ্যতা</h6>
            <div class="d-flex flex-wrap mb-4">
              <template v-for="e in dmf_doctor_education_program">
                <div class="me-3 mb-3" :key="e">
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
              <template class="" v-if="qualicifacions.includes(`Others`)">
                <ValidationProvider
                  class=""
                  rules="required"
                  v-slot="{ errors }"
                >
                  <input
                    v-model="others_q"
                    id=" name"
                    class="is-invalid form-control py-0"
                    placeholder="others"
                  />
                  <!-- <label for="patient_name">অন্যান্য </label> -->
                  <div class="invalid-feedback">
                    {{ errors[0] }}
                  </div>
                </ValidationProvider>
              </template>
            </div>

            <div class="input-field pb-3">
              <h6 class="small text-dark">ফোন নাম্বার</h6>
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
                v-model="form_data.bmdc_regi_no"
                id=" nid"
                class="is-invalid form-control"
                type="number"
              />
              <label for="nid">BMDC রেজিস্ট্রেশন নম্বর </label>
              <div class="invalid-feedback">
                {{ errors[0] }}
              </div>
            </ValidationProvider>
            <ValidationProvider
              class="form-floating my-3 d-block"
              rules="required|numeric"
              v-slot="{ errors }"
            >
              <input
                v-model="form_data.nid"
                id=" nid"
                class="is-invalid form-control"
                type="number"
              />
              <label for="nid">জাতীয় পরিচয়পত্র নম্বর </label>
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
                v-model="form_data.institution_or_chamber_address"
                id=" nid"
                class="is-invalid form-control"
              />
              <label for="nid"
                >বর্তমান প্রতিষ্ঠানের নাম/ চেম্বারের ঠিকানা
              </label>
              <div class="invalid-feedback">
                {{ errors[0] }}
              </div>
            </ValidationProvider>
            <h6 class="small text-dark">যে যে দিন সেবা দিতে ইচ্ছুক</h6>
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

            <h6 class="small text-dark">যে সময়ে সেবা দিতে ইচ্ছুক</h6>
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
            <h6 class="small text-dark">সেবার ধরন</h6>
            <div class="d-flex flex-wrap mb-4">
              <div class="mb-3 me-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="Home Call"
                  id="HomeCall"
                  v-model="type"
                />
                <label class="form-check-label" for="HomeCall">
                  Home Call
                </label>
              </div>
              <div class="mb-3 me-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="Video Call"
                  id="VideoCall"
                  v-model="type"
                />
                <label class="form-check-label" for="VideoCall">
                  Video Call
                </label>
              </div>
            </div>
            <template v-if="type.includes(`Home Call`)">
              <h6 class="small text-dark">
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
            </template>

            <h6 class="small text-dark mt-2">অভিজ্ঞতার বিবরণ</h6>
            <ValidationProvider
              class="form-group my-3 d-block"
              rules="required"
              v-slot="{ errors }"
            >
              <textarea
                v-model="form_data.experience"
                id="details"
                class="is-invalid form-control"
                rows="2"
              ></textarea>
              <div class="invalid-feedback">
                {{ errors[0] }}
              </div>
            </ValidationProvider>
            <h6 class="small text-dark mt-2">আপনার সম্পর্কে লিখুন</h6>
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
                <input type="checkbox" id="checkbox" name="checkbox" required />
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
        specialty: "",
        bmdc_regi_no: "",
        type: "",
        experience: "",
        qualicifacions: "",
        working_area: "",
        working_days: "",
        working_times: "",
        short_description: "",
        // image_url: "",
        country_code: "+880",
        nid: "",
        institution_or_chamber_address: "",
      },
      disable_btn: false,
      others_q: "",
      working_area: [],
      working_days: [],
      working_times: [],
      qualicifacions: [],
      type: [],
      working_day_list: this.$store.getters["info/working_day_list"],
      working_time_list: this.$store.getters["info/working_time_list"],
      dmf_doctor_education_program:
        this.$store.getters["info/dmf_doctor_education_program"],
    };
  },
  computed: {
    CountryCode() {
      return this.$store.getters["CountryCode"];
    },
  },

  methods: {
    async submitForm() {
      if (this.others_q && !this.qualicifacions.includes(this.others_q)) {
        this.qualicifacions.push(this.others_q);
      }
      this.form_data.mobile = "+880" + this.phone;
      this.form_data.working_area = this.working_area.toString();
      this.form_data.working_days = this.working_days.toString();
      this.form_data.working_times = this.working_times.toString();
      this.form_data.qualicifacions = this.qualicifacions.toString();
      this.form_data.type = this.type.toString();
      console.log(this.form_data);
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        this.disable_btn = true;
        this.$axios
          .post(`patners/dmf-doctor-regi/`, this.form_data, {
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
