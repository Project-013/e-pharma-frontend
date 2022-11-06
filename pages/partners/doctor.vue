<template>
  <section class="main-body">
    <div class="col-lg-7 col-md-10 col-11 mx-auto py-5">
      <div class="p-4 rounded shadow bg-light border mb-5">
        <h4 class="mb-5">
          Register as
          <span style="color: #084298">সেবক Doctor ! </span>
        </h4>
        <ValidationObserver v-slot="{ handleSubmit }">
          <form
            class="form small row g-3"
            @submit.prevent="handleSubmit(submitForm)"
          >
            <div class="col-12">
              <label for=" " class="form-label">Name of Doctor</label>
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
              <label for=" " class="form-label">Degree</label>

              <div class="d-flex flex-wrap">
                <div class="me-3 mb-0">
                  <input
                    class="form-check-input text-dark"
                    type="checkbox"
                    value="MBBS"
                    id="MBBS"
                    disabled
                    v-model="qualicifacions"
                  />
                  <label class="form-check-label" for="MBBS"> MBBS </label>
                </div>
                <template v-for="e in doctor_education_program">
                  <div class="me-3 mb-0" :key="e">
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
            <div class="col-lg-6">
              <label for=" " class="form-label">Speciality</label>
              <select
                class="form-select form-select-sm"
                aria-label="Default select example"
                v-model="form_data.specialty"
                required
              >
                <option value="" disabled selected>select one</option>
                <template v-for="(spesialist, index) in getSpesialistList">
                  <option :value="spesialist" :key="index">
                    {{ spesialist }}
                  </option>
                </template>
              </select>
            </div>
            <div class="col-lg-6">
              <label for=" " class="form-label">BMDC Regi. No </label>

              <input
                v-model="form_data.bmdc_regi_no"
                id=" nid"
                class="form-control form-control-sm"
                required
                type="number"
              />
            </div>

            <div class="col-12 d-none">
              <input
                v-model="form_data.nid"
                id=" nid"
                class="form-control form-control-sm"
                required
              />
              <label for="nid">জাতীয় পরিচয়পত্র নম্বর </label>
            </div>

            <div class="col-12">
              <label for=" " class="form-label"
                >The service you want to provide</label
              >
              <div class="d-flex flex-wrap">
                <template v-for="t in s_type_list">
                  <div class="me-3 mb-0" :key="t">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      :value="t"
                      :id="t"
                      v-model="type"
                      :required="type.length ? false : true"
                    />
                    <label class="form-check-label" :for="t">
                      {{ t }}
                    </label>
                  </div>
                </template>
              </div>
            </div>

            <div
              class="card border-muted"
              v-if="type.includes(`Doctor Appointment`)"
            >
              <div class="card-body row g-3">
                <h6 class="small">**Required for Doctor Appointment Service</h6>
                <div class="col-12">
                  <label for=" " class="form-label">Day of service</label>

                  <div class="d-flex flex-wrap">
                    <template v-for="day in working_day_list">
                      <div class="mb-0 me-3" :key="day">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          :value="day"
                          :id="`Appointment` + day"
                          v-model="working_days_c"
                          :disabled="
                            working_days_c.includes(`Everyday`) &&
                            day != `Everyday`
                          "
                        />
                        <label
                          class="form-check-label"
                          :for="`Appointment` + day"
                        >
                          {{ day }}
                        </label>
                      </div>
                    </template>
                  </div>
                </div>
                <div class="col-md-6">
                  <label for=" " class="form-label">Service Time</label>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    placeholder="Ex. 1PM to 10PM"
                    v-model="form_data.working_times_chamber"
                    :required="
                      type.includes(`Doctor Appointment`) ? true : false
                    "
                  />
                </div>
                <div class="col-md-6">
                  <label for=" " class="form-label">Consultation Fee</label>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    placeholder="Enter amount"
                    v-model="form_data.fee_chamber"
                    :required="
                      type.includes(`Doctor Appointment`) ? true : false
                    "
                  />
                </div>
              </div>
            </div>
            <div class="card border-muted" v-if="type.includes(`Home Call`)">
              <div class="card-body row g-3">
                <h6 class="small">**Required for Home Call Service</h6>
                <div class="col-12">
                  <label for=" " class="form-label">Day of service</label>

                  <div class="d-flex flex-wrap">
                    <template v-for="day in working_day_list">
                      <div class="mb-0 me-3" :key="day">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          :value="day"
                          :id="`Home` + day"
                          v-model="working_days_h"
                          :disabled="
                            working_days_h.includes(`Everyday`) &&
                            day != `Everyday`
                          "
                        />
                        <label class="form-check-label" :for="`Home` + day">
                          {{ day }}
                        </label>
                      </div>
                    </template>
                  </div>
                </div>
                <div class="col-12">
                  <label for=" " class="form-label">Service Time</label>
                  <div class="d-flex flex-wrap">
                    <template v-for="time in working_time_list">
                      <div class="me-3" :key="time">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          :value="time"
                          :id="`Home` + time"
                          v-model="working_times_h"
                          :disabled="
                            working_times_h.includes(`All Day`) &&
                            time != `All Day`
                          "
                        />
                        <label class="form-check-label" :for="`Home` + time">
                          {{ time }}
                        </label>
                      </div>
                    </template>
                  </div>
                </div>
                <div class="col-md-6 d-none">
                  <label for=" " class="form-label">Consultation Fee</label>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    placeholder="Enter amount"
                    v-model="form_data.fee_home_call"
                    :required="type.includes(`Home Call`) ? true : false"
                  />
                </div>

                <div class="col-md-6">
                  <label for=" " class="form-label">Select city</label>
                  <select
                    class="form-select form-select-sm"
                    aria-label="Default select example"
                    v-model="form_data.city"
                    required
                  >
                    <option value="" disabled selected>select one</option>

                    <template v-for="(city, index) in getCity">
                      <option :value="city" :key="index">{{ city }}</option>
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
                          :id="`Home` + ward"
                          v-model="working_area"
                        />
                        <label
                          class="ms-2 form-check-label"
                          :for="`Home` + ward"
                        >
                          {{ ward }}
                        </label>
                      </div>
                    </template>
                  </div>
                </div>
              </div>
            </div>
            <div class="card border-muted" v-if="type.includes(`Video Call`)">
              <div class="card-body row g-3">
                <h6 class="small">**Required for Video Call Service</h6>
                <div class="col-12">
                  <label for=" " class="form-label">Day of service</label>

                  <div class="d-flex flex-wrap">
                    <template v-for="day in working_day_list">
                      <div class="mb-0 me-3" :key="day">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          :value="day"
                          :id="`Video` + day"
                          v-model="working_days_v"
                          :disabled="
                            working_days_v.includes(`Everyday`) &&
                            day != `Everyday`
                          "
                        />
                        <label class="form-check-label" :for="`Video` + day">
                          {{ day }}
                        </label>
                      </div>
                    </template>
                  </div>
                </div>
                <div class="col-12">
                  <label for=" " class="form-label">Service Time</label>
                  <div class="d-flex flex-wrap">
                    <template v-for="time in working_time_list">
                      <div class="me-3" :key="time">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          :value="time"
                          :id="`Video` + time"
                          v-model="working_times_v"
                          :disabled="
                            working_times_v.includes(`All Day`) &&
                            time != `All Day`
                          "
                        />
                        <label class="form-check-label" :for="`Video` + time">
                          {{ time }}
                        </label>
                      </div>
                    </template>
                  </div>
                </div>
                <div class="col-md-6">
                  <label for=" " class="form-label">Consultation Fee</label>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    placeholder="Enter amount"
                    v-model="form_data.fee_video_call"
                    :required="type.includes(`Video Call`) ? true : false"
                  />
                </div>

                <div class="col-md-6">
                  <label for=" " class="form-label">Whatsapp Number</label>
                  <ValidationProvider rules="length:11" v-slot="{ errors }">
                    <input
                      type="number"
                      :required="type.includes(`Video Call`) ? true : false"
                      class="form-control form-control-sm is-invalid"
                      placeholder="01XXXXXXXXX"
                      aria-label="phone"
                      v-model="form_data.whatsapp_number"
                    />
                    <div class="invalid-feedback">
                      {{ errors[0] }}
                    </div>
                  </ValidationProvider>
                </div>
              </div>
            </div>

            <div class="col-lg-12">
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

            <div class="col-12">
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
            <div class="col-12">
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
            <div class="col-12">
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
              <label
                for="formFile"
                class="d-block text-center"
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
                <span class="btn btn-sm btn-outline-dark py-0">{{
                  previewImage ? "Change photo" : "Add photo"
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

            <div class="form-group my-3">
              <label for="formFile" class="form-label">Experience</label>

              <textarea
                v-model="form_data.experience"
                id="details"
                class="form-control form-control-sm"
                rows="2"
                required
              ></textarea>
            </div>
            <div class="form-group my-3 d-block">
              <label for="formFile" class="form-label"
                >Write about yourself</label
              >

              <textarea
                v-model="form_data.short_description"
                id="details"
                class="is-invalid form-control form-control-sm"
                rows="2"
                required
              ></textarea>
            </div>
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
      form_data: {
        mobile: "+880",
        name: "",
        specialty: "",
        bmdc_regi_no: "",
        type: "",
        experience: "",
        qualicifacions: "",
        city: "",
        working_area: "",
        working_days_chamber: "",
        working_days_home_call: "",
        working_days_video_call: "",
        working_times_chamber: "",
        working_times_home_call: "",
        working_times_video_call: "",
        fee_chamber: "",
        fee_home_call: "00",
        fee_video_call: "",
        short_description: "",
        whatsapp_number: "",
        nid: "N/A",
        institution_or_chamber_address: "",
        gender: "male",
        payment_method: "Bkash",
        payment_number: "",
      },
      image_url: "",
      disable_btn: false,
      others_q: "",
      working_ward: [],
      working_area: [],
      working_days_c: [],
      working_days_h: [],
      working_days_v: [],
      working_times_h: [],
      working_times_v: [],
      qualicifacions: ["MBBS"],
      type: [],
      spesialist_list: this.$store.getters["data/spesialist"],
      working_day_list: this.$store.getters["data/working_day_list"],
      working_time_list: this.$store.getters["data/working_time_list"],
      doctor_education_program:
        this.$store.getters["data/doctor_education_program"],
      s_type_list: ["Doctor Appointment", "Home Call", "Video Call"],
      gender_list: ["male", "female", "others"],
      payment_sys_list: ["Bkash", "Nogod", "Rocket", "Upay"],
    };
  },
  computed: {
    getSpesialistList() {
      return this.$store.getters["data/spesialist_list"];
    },
    getAddress() {
      const address = this.$store.getters["data/address"];
      return address;
    },
    getCity() {
      const address = this.$store.getters["data/address"];
      const city = [];

      for (const i in address) {
        city.push(i);
        console.log(address[i]);
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
        console.log();
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
      if (this.others_q && !this.qualicifacions.includes(this.others_q)) {
        this.qualicifacions.push(this.others_q);
      }
      this.form_data.working_area = this.working_area.toString();
      this.form_data.working_days_chamber = this.working_days_c.toString();
      this.form_data.working_days_home_call = this.working_days_h.toString();
      this.form_data.working_days_video_call = this.working_days_v.toString();
      this.form_data.working_times_home_call = this.working_times_h.toString();
      this.form_data.working_times_video_call = this.working_times_v.toString();
      this.form_data.qualicifacions = this.qualicifacions.toString();
      this.form_data.type = this.type.toString();

      const formData = new FormData();
      formData.append("image_url", this.image_url, this.image_url["name"]);
      for (const obj in this.form_data) {
        formData.append(obj, this.form_data[obj]);
      }

      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        this.disable_btn = true;
        this.$axios
          .post(`patners/doctor-regi/`, formData, {
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
  mounted() {
    this.$store.dispatch("data/getAddress");
    this.$store.dispatch("data/getSpesialistList");
  },
};
</script>

<style scoped></style>
