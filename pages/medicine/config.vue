<template>
  <section class="mb-5 pb-5">
    <div class="container">
      <div class="row g-4 justify-content-center bg-white py-5">
        <div class="col-md-6" v-if="$route.query.type == 'payment'">
          <div class="card shadow h-100 p-0">
            <img src="/img/pay.jpeg" alt="" class="w-100" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="card shadow h-100 p-0">
            <div class="card-body">
              <h4 class="p-1 mt-3 mb-1 text-center fw-semibold fst-italic">
                Total Fee -
                <span class="text-success"
                  ><i class="icofont-taka"></i>{{ services.fee }}
                </span>
              </h4>

              <form
                action=""
                @submit.prevent="submitForm(services)"
                class="p-0"
              >
                <div class="edit my-3" v-if="$route.query.type == 'edit'">
                  <div class="form-group my-2">
                    <label class="form-label" for="patient_name"
                      >Patient name</label
                    >

                    <input
                      v-model="services.name"
                      id=""
                      class="form-control form-control-sm"
                      required
                    />
                  </div>

                  <div class="form-group my-2">
                    <label class="form-label" for="patient_name">Phone</label>

                    <input
                      v-model="getPhone"
                      id="patient_phone"
                      class="form-control form-control-sm"
                      placeholder=" "
                      required
                      disabled
                    />
                  </div>
                  <div class="form-group my-2">
                    <label class="form-label" for="patient_name"
                      >Medicine</label
                    >

                    <textarea
                      v-model="services.medicine"
                      id="details"
                      class="form-control form-control-sm"
                      rows="2"
                      required
                    ></textarea>
                  </div>
                  <div class="form-group my-2">
                    <label class="form-label" for="patient_name">Address</label>

                    <textarea
                      v-model="services.address"
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
                        :src="$config.apibaseURL + services.image_url"
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
                </div>
                <div class="d-none">
                  <select
                    class="form-select form-select-sm"
                    v-model="services.payment_method"
                  >
                    <option value="" disabled selected>
                      Select Payment Method
                    </option>
                    <template v-for="(type, index) in p_method">
                      <option :value="type" :key="index">
                        {{ type }}
                      </option>
                    </template>
                  </select>
                  <div class="form-group my-2">
                    <label class="form-label" for="transaction_id"
                      >Transaction ID</label
                    >

                    <input
                      id="patient_name"
                      v-model="services.transaction_id"
                      class="form-control form-control-sm"
                    />
                  </div>


                </div>
                                  <button
                    type="submit"
                    class="btn btn-sm mt-3 btn-dark w-100"
                    :disabled="disable_btn"
                  >
                    Submit
                  </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    getPhone() {
      if (this.$auth.user.phone) {
        return this.$auth.user.phone;
      }
      return "";
    },
  },
  data() {
    return {
      services: "",
      p_method: ["Bkash", "Nogod", "Rocket", "Upay"],
      form_data: {
        payment_method: "",
        transaction_id: "",
      },
        image_url: "",

      previewImage: null,

      disable_btn: false,
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
    async getservicess() {
      await this.$axios
        .get(`services/medicine/${this.$route.query.id}`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          if (res.status === 200) {
            this.services = res.data;
          }
        })
        .catch((error) => {
          console.log(error.response);
          console.log(error.response.data.message || error.message);
          // context.commit('error', error)
        });
    },
    async submitForm() {
      if (this.$route.query.type != "edit") {
        this.services.payment_status = "pending";
      }

      const formData = new FormData();
      if(this.image_url){
        formData.append(
          "image_url",
          this.image_url,
          this.image_url["name"]
        );
      }

      for (const obj in this.services) {
        if (obj != 'image_url') {
          formData.append(obj, this.services[obj]);
        }
      }

      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        this.disable_btn = true;
        this.$axios
          .put(
            `services/medicine/` + this.services.id + "/",
            formData,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((res) => {
            console.log(res);
            if (res.status === 200) {
              this.$toast.success("Success! we will contact you soon..");
              this.$router.push("/profile");
            } else {
              this.$toast.error("Error found! Try again");
            }
            this.$nuxt.$loading.finish();
          })
          .catch((error) => {
            console.log(error.response);
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
    this.getservicess();
  },
};
</script>

<style></style>
