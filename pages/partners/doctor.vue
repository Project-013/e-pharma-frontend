<template>
  <section class="main-body">
    <div class="col-lg-7 col-md-10 col-11 mx-auto py-5">
      <div class="p-4 rounded shadow bg-light border mb-5">
        <h4 class="mb-5">
          Register as
          <span style="color: #084298">সেবক Doctor ! </span>
        </h4>
        <form class="form small row g-3" @submit.prevent="submitForm">
          <div class="col-12">
            <label for=" " class="form-label">Name of Doctor</label>

            <input
              v-model="form_data.name"
              id=" name"
              class="form-control form-control-sm"
              required
            />
          </div>

          <div class="col-12">
            <label for=" " class="form-label">Degree</label>

            <div class="d-flex flex-wrap">
              <div class="me-3 mb-3">
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
          <div class="col-lg-4">
            <label for=" " class="form-label">Spesialist</label>
            <select
              class="form-select form-select-sm"
              aria-label="Default select example"
              v-model="form_data.specialty"
              required
            >
              <option value="" disabled selected>select one</option>
              <template v-for="(spesialist, index) in spesialist_list">
                <option :value="spesialist" :key="index">
                  {{ spesialist }}
                </option>
              </template>
            </select>
          </div>
          <div class="col-lg-4">
            <label for=" " class="form-label">BMDC Regi. No </label>

            <input
              v-model="form_data.bmdc_regi_no"
              id=" nid"
              class="form-control form-control-sm"
              required
              type="number"
            />
          </div>
          <div class="col-lg-4">
            <label for=" " class="form-label">Insititute/Chamber Address</label>

            <input
              v-model="form_data.institution_or_chamber_address"
              id=" nid"
              class="form-control form-control-sm"
              required
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
            <label for=" " class="form-label">The day you want to serve</label>

            <div class="d-flex flex-wrap">
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
                    required
                  />
                  <label class="form-check-label" :for="day">
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
                    required
                  />
                  <label class="form-check-label" :for="time">
                    {{ time }}
                  </label>
                </div>
              </template>
            </div>
          </div>

          <div class="col-12">
            <label for=" " class="form-label">Type of Service</label>

            <div class="d-flex flex-wrap">
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
          </div>
          <template v-if="type.includes(`Home Call`)">
            <div class="col-12">
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
            <div class="col-12">
              <div class="" v-if="form_data.city">
                <template v-for="word in getWord">
                  <div class="mb-3 me-3 d-flex" :key="word">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      :value="word"
                      :id="word"
                      v-model="working_area"
                    />
                    <label
                      class="ms-2 form-check-label"
                      style="width: fit-content"
                      :for="word"
                    >
                      {{ word.join(", ") }}
                    </label>
                  </div>
                </template>
              </div>
            </div>
          </template>

          <div class="col-12">
            <label for=" " class="form-label">Mobile No</label>

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
                class="form-control form-control-sm py-3"
                placeholder="1XXXXXXXXX"
                aria-label="phone"
                aria-describedby="addon-wrapping"
                v-model="phone"
              />
            </div>
          </div>

          <div class="col-12">
            <img
              v-if="previewImage"
              :src="previewImage"
              width="200"
              class="uploading-image d-block mb-1 mx-auto border rounded p-1"
            />
            <label for="formFile" class="form-label">Upload your photo</label>
            <input
              class="form-control form-control-sm"
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
                <a href="#" class="text-primary text-decoration-none">Terms</a>
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
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "nurse",

  data() {
    return {
      phone: "",
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
        working_days: "",
        working_times: "",
        short_description: "",
        country_code: "+880",
        nid: "N/A",
        institution_or_chamber_address: "",
      },
      image_url: "",
      disable_btn: false,
      others_q: "",
      working_area: [],
      working_days: [],
      working_times: [],
      qualicifacions: ["MBBS"],
      type: [],
      spesialist_list: this.$store.getters["info/spesialist"],
      working_day_list: this.$store.getters["info/working_day_list"],
      working_time_list: this.$store.getters["info/working_time_list"],
      doctor_education_program:
        this.$store.getters["info/doctor_education_program"],
    };
  },
  computed: {
    getAddress() {
      const address = this.$store.getters["info/address"];
      return address;
    },
    getCity() {
      const address = this.$store.getters["info/address"];
      const city = [];

      for (const i in address) {
        city.push(i);
      }
      city.push("Dhaka");
      city.push("Khulna");

      return city;
    },
    getWord() {
      const address = this.$store.getters["info/address"];
      const city = this.form_data.city;
      const word = address[city];

      return word;
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
      this.form_data.mobile = "+880" + this.phone;
      this.form_data.working_area = this.working_area.toString();
      this.form_data.working_days = this.working_days.toString();
      this.form_data.working_times = this.working_times.toString();
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
    this.$store.dispatch("info/getAddress");
  },
};
</script>
