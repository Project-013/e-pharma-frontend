<template>
  <section class="main-body">
    <div class="col-lg-7 col-md-10 col-11 mx-auto py-5">
      <div class="p-3 card bg-white border mb-5">
        <h4 class="mb-3">
          Register as <span style="color: #084298"> Partner (Pharmacy)!</span>
        </h4>
        <ValidationObserver v-slot="{ handleSubmit }">
          <form
            class="form small row g-3"
            @submit.prevent="handleSubmit(submitForm)"
          >
            <div class="col-md-6">
              <label for="" class="form-label">Name of Pharmacy </label>
              <input
                v-model="form_data.pharmacy_name"
                id=" name"
                class="form-control form-control-sm"
                required
              />
            </div>
            <div class="col-md-6">
              <label for=" " class="form-label">Your Name</label>
              <input
                v-model="form_data.name"
                id="name"
                class="form-control form-control-sm"
              />
            </div>

            <div class="col-md-6">
              <label for=" " class="form-label">Mobile No</label>
              <ValidationProvider
                rules="required|numeric|length:11"
                v-slot="{ errors }"
              >
                <input
                  type="number"
                  required
                  class="form-control form-control-sm is-invalid"
                  placeholder="01XXXXXXXXX"
                  aria-label="phone"
                  v-model="form_data.mobile"
                />
                <div class="invalid-feedback">
                  {{ errors[0] }}
                </div>
              </ValidationProvider>
            </div>

            <div class="col-md-6">
              <label for="tred_licence" class="form-label">
                Trade Licence No
              </label>

              <input
                v-model="form_data.tred_licence"
                class="form-control form-control-sm"
                type="number"
                required
              />
            </div>
            <div class="col-md-6">
              <label for="nid" class="form-label">NID No </label>
              <input
                v-model="form_data.nid"
                id=" nid"
                type="number"
                class="form-control form-control-sm"
                required
              />
            </div>
            <div class="col-md-6">
              <label for=" " class="form-label">Service Providers Name</label>

              <input
                v-model="form_data.service_provider_name"
                id="name"
                class="form-control form-control-sm"
                required
              />
            </div>
            <div class="col-md-6">
              <label for="" class="form-label"
                >Service Providers Mobile No</label
              >
              <ValidationProvider
                rules="required|numeric|length:11"
                v-slot="{ errors }"
              >
                <input
                  type="number"
                  required
                  class="form-control form-control-sm is-invalid"
                  placeholder="01XXXXXXXXX"
                  aria-label="phone"
                  v-model="form_data.service_provider_mobile"
                />
                <div class="invalid-feedback">
                  {{ errors[0] }}
                </div>
              </ValidationProvider>
            </div>
            <div class="col-md-6">
              <label for=" " class="form-label">Select city</label>
              <select
                class="form-select form-select-sm"
                aria-label="Default select example"
                v-model="form_data.city"
                required
              >
                <option value="" disabled selected>Select one</option>

                <template v-for="(city, index) in getCity">
                  <option
                    :value="city.name"
                    :key="index"
                    :disabled="city.length == 0"
                  >
                    {{ city.name }}
                  </option>
                </template>
              </select>
            </div>
            <div class="col-12" v-if="form_data.city">
              <label for=" " class="form-label"
                >Select Ward of {{ form_data.city }} city</label
              >

              <div class="d-flex flex-wrap" v-if="form_data.city">
                <template v-for="ward in getWard">
                  <div class="mb-3 me-3 d-flex" :key="ward">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      :value="ward"
                      :required="working_ward.length ? false : true"
                      :id="ward"
                      v-model="working_ward"
                    />
                    <label class="ms-2 form-check-label" :for="ward">
                      {{ ward }}
                    </label>
                  </div>
                </template>
              </div>
            </div>
            <div class="col-12" v-if="working_ward.length">
              <label for=" " class="form-label"
                >Select working area of {{ form_data.city }} city</label
              >
              <div class="d-flex flex-wrap">
                <template v-for="ward in getArea">
                  <div class="mb-3 me-3 d-flex" :key="ward">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      :required="working_area.length ? false : true"
                      :value="ward"
                      :id="`Home` + ward"
                      v-model="working_area"
                    />
                    <label class="ms-2 form-check-label" :for="`Home` + ward">
                      {{ ward }}
                    </label>
                  </div>
                </template>
              </div>
            </div>

            <div class="col-md-6">
              <label for=" " class="form-label">Payment Method</label>
              <div class="d-flex flex-wrap">
                <template v-for="p in payment_sys_list">
                  <div class="me-3 mb-0" :key="p">
                    <input
                      class="form-check-input"
                      type="radio"
                      :value="p"
                      :id="p"
                      v-model="form_data.payment_method"
                      required
                    />

                    <label class="form-check-label" :for="p">
                      {{ p }}
                    </label>
                  </div>
                </template>
              </div>
            </div>
            <div class="col-md-6">
              <label for=" " class="form-label"
                >{{ form_data.payment_method }} Number</label
              >
              <ValidationProvider
                rules="required|numeric|length:11"
                v-slot="{ errors }"
              >
                <input
                  type="number"
                  required
                  class="form-control form-control-sm is-invalid"
                  placeholder="01XXXXXXXXX"
                  v-model="form_data.payment_number"
                />
                <div class="invalid-feedback">
                  {{ errors[0] }}
                </div>
              </ValidationProvider>
            </div>

            <div class="col-12">
              <label class="form-label">Write about yourself</label>

              <textarea
                v-model="form_data.short_description"
                id="details"
                class="form-control form-control-sm"
                rows="2"
                required
              ></textarea>
            </div>
            <div>
              <div class="d-flex align-items-center mb-2">
                <input type="checkbox" id="checkbox" name="checkbox" required />
                <label for="checkbox" class="ms-1 small">
                  Accept the
                  <a href="#" class="text-primary text-decoration-none"
                    >Terms</a
                  >
                  and
                  <a href="#" class="text-primary text-decoration-none"
                    >Privacy Policy</a
                  >
                </label>
              </div>

              <div class="d-grid gap-2">
                <button class="btn btn-primary btn-sm" type="submit">
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
  name: "physiotherapist",
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  computed: {
    getAddress() {
      const address = this.$store.getters["data/address"];
      return address;
    },
    getCity() {
      const address = this.$store.getters["data/address"];
      const city = [];

      for (const i in address) {
        const city_obj = {
          name: i,
          length: Object.keys(address[i]).length,
        };

        city.push(city_obj);
        console.log(Object.keys(address[i]).length);
      }
      return city;
    },
    getWard() {
      const address = this.$store.getters["data/address"];
      const city = this.form_data.city;
      const ward_list = address[city];
      const ward = [];

      for (const i in ward_list) {
        ward.push(i);
      }

      return ward;
    },
    getArea() {
      const address = this.$store.getters["data/address"];
      const city = this.form_data.city;
      const wards = this.working_ward;
      const area = [];

      for (const i in wards) {
        const word = wards[i];
        const area_arr = address[city][word];
        area.push(...area_arr);
      }

      return area;
    },
  },

  data() {
    return {
      phone: "",
      phone2: "",
      form_data: {
        mobile: "+880",
        name: "",
        pharmacy_name: "",
        working_area: "",
        short_description: "",
        // image_url: "",
        city: "",
        nid: "",
        payment_method: "Bkash",
        payment_number: "",
        tred_licence: "",
        service_provider_name: "",
        service_provider_mobile: "",
      },
      disable_btn: false,
      working_ward: [],
      working_area: [],
      working_day_list: this.$store.getters["info/working_day_list"],
      working_time_list: this.$store.getters["info/working_time_list"],
      pt_education_program: this.$store.getters["info/pt_education_program"],
      payment_sys_list: ["Bkash", "Nogod", "Rocket", "Upay"],
    };
  },

  methods: {
    async submitForm() {
      this.form_data.working_area = this.working_area.toString();
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        this.disable_btn = true;
        this.$axios
          .post(`patners/partner-regi/`, this.form_data, {
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
            if (error.response && error.response.data) {
              const err_data = error.response.data;
              if (err_data.mobile || err_data.nid || err_data.tred_licence) {
                this.$toast.error("Already Registered!");
              } else {
                this.$toast.error("Error found! Try again");
              }
            } else {
              this.$toast.error("Error found! Try again");
            }

            this.$nuxt.$loading.finish();
            console.log(error.message || error.response.data.message);
          });

        this.disable_btn = false;
      });

      return;
    },
  },
  mounted() {
    this.$store.dispatch("data/getAddress");
  },
};
</script>
