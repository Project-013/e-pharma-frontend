<template>
  <section class="main-body">
    <div class="col-lg-7 col-md-10 col-11 mx-auto py-5">
      <div class="p-4 rounded shadow bg-light mb-5 border">
        <h4 class="mb-3">
          Register as
          <span style="color: #084298"> Nurse/Midwife!</span>
        </h4>
        <ValidationObserver v-slot="{ handleSubmit }">
          <form
            class="form row g-3 small"
            @submit.prevent="handleSubmit(submitForm)"
          >
            <div class="col-12">
              <label for="" class="form-label">Name of Nurse/Midwife </label>

              <input
                v-model="form_data.name"
                id=" name"
                class="form-control form-control-sm"
                required
              />
            </div>
            <div class="col-md-4">
              <label for=" " class="form-label">Gender</label>
              <div class="d-flex flex-wrap">
                <template v-for="g in gender_list">
                  <div class="me-3 mb-0" :key="g">
                    <input
                      class="form-check-input"
                      type="radio"
                      :value="g"
                      :id="g"
                      v-model="form_data.gender"
                      checked
                      required
                    />

                    <label class="form-check-label" :for="g">
                      {{ g }}
                    </label>
                  </div>
                </template>
              </div>
            </div>
            <div class="col-md-8">
              <label for="institution" class="form-label"
                >Educational Qualifications</label
              >

              <div class="d-flex flex-wrap">
                <template v-for="e in nursing_education_program">
                  <div class="mb-0 me-3" :key="e">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      :required="qualicifacions.length ? false : true"
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
            </div>
            <div class="col-md-12">
              <label for="institution" class="form-label"
                >Current Insititute</label
              >
              <input
                v-model="form_data.institution"
                id=" name"
                class="form-control form-control-sm"
                required
              />
            </div>
            <div class="col-md-12">
              <label class="form-label">Day of service</label>
              <div class="d-flex flex-wrap">
                <template v-for="day in working_day_list">
                  <div class="mb-3 me-3" :key="day">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      :value="day"
                      :id="day"
                      :required="working_days.length ? false : true"
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
            </div>
            <div class="col-md-12">
              <label for="" class="form-label">Service Time</label>
              <div class="d-flex flex-wrap">
                <template v-for="time in working_time_list">
                  <div class="mb-3 me-3" :key="time">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      :value="time"
                      :id="time"
                      :required="working_times.length ? false : true"
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
            </div>

            <div class="col-md-4">
              <label for="" class="form-label">Mobile No</label>
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
            <div class="col-md-4">
              <label for="nid" class="form-label">NID No </label>

              <input
                v-model="form_data.nid"
                type="number"
                id=" nid"
                class="form-control form-control-sm"
                required
              />
            </div>
            <div class="col-md-4">
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
                      :id="ward"
                      v-model="working_ward"
                      :required="working_ward.length ? false : true"
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
                      :value="ward"
                      :id="ward"
                      v-model="working_area"
                      :required="working_area.length ? false : true"
                    />
                    <label class="ms-2 form-check-label" :for="ward">
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

            <div class="col-12 d-flex justify-content-center">
              <label for="formFile" class="text-center" style="cursor: pointer">
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
                  previewImage ? "Change photo" : "Upload Your Photo"
                }}</span>
              </label>
              <input
                class="form-control form-control-sm upload_image d-none"
                type="file"
                id="formFile"
                accept=".jpeg,.jpg,.png,image/jpeg,image/png"
                aria-label="upload image button"
                @change="uploadImage"
                required
              />
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
  name: "nurse",
  components: {
    ValidationObserver,
    ValidationProvider,
  },

  data() {
    return {
      previewImage: null,

      form_data: {
        mobile: "",
        name: "",
        qualicifacions: "",
        working_area: "",
        working_days: "",
        working_times: "",
        short_description: "",
        institution: "",
        city: "",
        nid: "",
        payment_method: "Bkash",
        payment_number: "",
        gender: "male",
      },
      image_url: "",

      disable_btn: false,
      working_ward: [],
      working_area: [],
      working_days: [],
      working_times: [],
      qualicifacions: [],
      gender_list: ["male", "female", "others"],
      payment_sys_list: ["Bkash", "Nogod", "Rocket", "Upay"],
      working_day_list: this.$store.getters["info/working_day_list"],
      working_time_list: this.$store.getters["info/working_time_list"],
      nursing_education_program:
        this.$store.getters["info/nursing_education_program"],
    };
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
      this.form_data.working_area = this.working_area.toString();
      this.form_data.working_days = this.working_days.toString();
      this.form_data.working_times = this.working_times.toString();
      this.form_data.qualicifacions = this.qualicifacions.toString();
      console.log(this.form_data);

      const formData = new FormData();
      formData.append("image_url", this.image_url, this.image_url["name"]);
      for (const obj in this.form_data) {
        formData.append(obj, this.form_data[obj]);
      }
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        this.disable_btn = true;
        this.$axios
          .post(`patners/nurse-regi/`, formData, {
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
              if (err_data.mobile || err_data.nid) {
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
