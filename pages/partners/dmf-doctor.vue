<template>
  <section class="center_box">
    <div class="col-lg-7 col-md-10 col-11 mx-auto py-3">
      <div class="p-4 rounded shadow bg-light border mb-5">
        <h4 class="mb-3">
          Register as
          <span style="color: #084298"> DMF/CP! </span>
        </h4>
        <ValidationObserver v-slot="{ handleSubmit }">
          <form
            class="form small row g-3"
            @submit.prevent="handleSubmit(submitForm)"
          >
            <div class="col-12">
              <label for=" " class="form-label">Name of DMF/CP</label>
              <input
                v-model="form_data.name"
                id="name"
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
              <label for=" " class="form-label"
                >Educational Qualifications</label
              >

              <div class="d-flex flex-wrap">
                <template v-for="e in doctor_education_program">
                  <div class="me-3 mb-0" :key="e">
                    <input
                      class="form-check-input"
                      :required="qualicifacions.length ? false : true"
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
                <template  v-if="qualicifacions.includes(`Others`)">
                  <div class="" rules="required">
                    <input
                      v-model="others_q"
                      id=" name"
                      class="form-control form-control-sm py-0"
                      placeholder="others"
                    />
                  </div>
                </template>
              </div>
            </div>
            <div class="col-md-6">
              <label for=" " class="form-label">Speciality</label>
              <input
                v-model="form_data.specialty"
                id=" name"
                class="form-control form-control-sm"
                required
              />
            </div>

            <div class="col-md-6">
              <label for=" " class="form-label"
                >Insititute/Chamber Address</label
              >

              <input
                v-model="form_data.institution_or_chamber_address"
                id=" nid"
                class="form-control form-control-sm"
                required
              />
            </div>
            <div class="col-md-12">
              <label class="form-label">Day of service</label>
              <div class="d-flex flex-wrap">
                <template v-for="day in working_day_list">
                  <div class="mb-0 me-3" :key="day">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      :value="day"
                      :id="day"
                      v-model="working_days"
                      :required="working_days.length ? false : true"
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
                      :required="working_ward.length ? false : true"
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
              <label for=" " class="form-label">
                Select working area of {{ form_data.city }} city
              </label>
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

            <div class="col-6 d-flex justify-content-center">
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
                <span class="btn btn-sm btn-secondary small py-0">{{
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
            <div class="col-6 d-flex justify-content-center">
              <label
                for="formFile2"
                class="text-center"
                style="cursor: pointer"
              >
                <img
                  v-if="previewImage2"
                  :src="previewImage2"
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
                <span class="btn btn-sm btn-secondary small py-0">{{
                  previewImage2
                    ? "Change certificate"
                    : "Upload Your BMDC certificate"
                }}</span>
              </label>
              <input
                class="form-control form-control-sm upload_image d-none"
                type="file"
                id="formFile2"
                accept=".jpeg,.jpg,.png,image/jpeg,image/png"
                aria-label="upload image button"
                @change="uploadImage2"
                required
              />
            </div>

            <div class="col-12">
              <label class="form-label">Experience</label>

              <textarea
                v-model="form_data.experience"
                id="details"
                class="form-control form-control-sm"
                rows="2"
                required
              ></textarea>
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
                  <!-- :disabled="phone.length != 10 || disable_btn" -->

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
  name: "Doctor",
  components: {
    ValidationObserver,
    ValidationProvider,
  },

  data() {
    return {
      previewImage: null,
      previewImage2: null,
      form_data: {
        mobile: "",
        name: "",
        specialty: "",
        experience: "",
        qualicifacions: "",
        city: "",
        working_area: "",
        working_days: "",
        working_times: "",
        short_description: "",
        whatsapp_number: "",
        institution_or_chamber_address: "",
        gender: "male",
        payment_method: "Bkash",
        payment_number: "",
      },
      image_url: "",
      certificate: "",
      disable_btn: false,
      others_q: "",
      working_ward: [],
      working_area: [],
      working_days: [],
      working_times: [],
      qualicifacions: [],

      working_day_list: this.$store.getters["data/working_day_list"],
      working_time_list: this.$store.getters["data/working_time_list"],
      doctor_education_program:
        this.$store.getters["data/dmf_doctor_education_program"],
      gender_list: ["male", "female", "others"],
      payment_sys_list: ["Bkash", "Nogod", "Rocket", "Upay"],
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
    uploadImage2(e) {
      this.certificate = e.target.files[0];

      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.previewImage2 = e.target.result;
        console.log(this.certificate["name"]);
      };
    },
    async submitForm() {
      if (this.others_q && !this.qualicifacions.includes(this.others_q)) {
        this.qualicifacions.push(this.others_q);
      }
      this.form_data.working_area = this.working_area.toString();
      this.form_data.working = this.working_days.toString();
      this.form_data.qualicifacions = this.qualicifacions.toString();

      const formData = new FormData();
      formData.append("image_url", this.image_url, this.image_url["name"]);
      formData.append(
        "certificate",
        this.certificate,
        this.certificate["name"]
      );
      for (const obj in this.form_data) {
        formData.append(obj, this.form_data[obj]);
      }

      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        this.disable_btn = true;
        this.$axios
          .post(`patners/dmf-doctor-regi/`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
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
              if (err_data.mobile) {
                this.$toast.error("Already Registered!");
              } else {
                this.$toast.error("Error found! Try again");
              }
            } else {
              this.$toast.error("Error found! Try again");
            }
            console.log(error.response);

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

<style scoped></style>
