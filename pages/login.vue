<template>
  <section>
    <div class="col-lg-4 col-md-6 col-12 mx-auto py-3">
      <img
        class="mx-auto d-block"
        src="/img/icons/login.jpeg"
        width="240"
        height="240"
        alt=""
      />

      <div class="p-3 card border-0 bg-white">
        <div class="sign-info">
          <h5 class="mb-3 small">Login now to explore more!</h5>
        </div>

        <ValidationObserver v-slot="{ handleSubmit }">
          <form class="form" @submit.prevent="handleSubmit(sendOTP)">
            <div class="input-field pb-3">
              <label for="" style="font-size:12px;" class="form-label small fw-semibold text-muted mb-0"
                >Type Your Number Without 0</label
              >

              <div class="input-group flex-nowrap">
                <span
                  class="input-group-text bg-white p-0"
                  style="width: 73px"
                  id="addon-wrapping"
                >
                  <select
                    class="form-select form-select-sm border-0 pe-0"
                    style="font-weight: 500"
                    aria-label=".form-select-sm example"
                    v-model="form_data.country_code"
                  >
                    <option value="+880">+880</option>
                  </select>
                </span>
                <input
                  type="number"
                  required
                  class="form-control py-2"
                  placeholder="1XXXXXXXXX"
                  aria-label="phone"
                  aria-describedby="addon-wrapping"
                  v-model="form_data.phone"
                />
              </div>
            </div>

            <div class="d-grid gap-2">
              <button
                class="btn btn-primary btn-sm"
                :disabled="
                  form_data.phone.length != 10 ||
                  form_data.count_down != 0 ||
                  disable_btn
                "
                type="submit"
              >
                <template v-if="form_data.count_down">
                  Send again {{ form_data.count_down }} seconds later
                </template>
                <template v-else>
                  {{
                    form_data.otp_status
                      ? "Resend Verification Code "
                      : "Send Verification Code"
                  }}
                </template>
              </button>
            </div>
          </form>
        </ValidationObserver>
        <ValidationObserver
          v-slot="{ handleSubmit }"
          v-if="form_data.otp_status"
        >
          <form class="form my-4" @submit.prevent="handleSubmit(submitOTP)">
            <div class="input-field pb-3">
              <div class="input-group flex-nowrap">
                <span
                  class="input-group-text bg-white text-center"
                  style="width: 73px"
                  id="addon-wrapping"
                >
                  OPT
                </span>
                <input
                  type="number"
                  required
                  class="form-control py-2"
                  placeholder="Enter Verification Code"
                  aria-describedby="addon-wrapping"
                  v-model="form_data.otp"
                />
              </div>
            </div>

            <div class="d-grid gap-2">
              <button
                class="btn btn-primary btn-sm"
                :disabled="
                  !form_data.otp || form_data.otp.length != 4 || disable_btn2
                "
                type="submit"
              >
                Submit Verification Code
              </button>
            </div>
          </form>
        </ValidationObserver>
        <div class="register-footer text-center pt-3">
          <NuxtLink to="/register" class="text-decoration-none small text-dark"
            >You don't have account?
            <span class="text-primary text-decoration-underline">
              Sign Up
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  name: "SignIn",

  components: {
    ValidationObserver,
    ValidationProvider,
  },

  data() {
    return {
      form_data: {
        country_code: "+880",
        phone: "",
        type: "login",
        otp: "",
        count_down: 0,
        otp_status: false,
      },
      disable_btn: false,
      disable_btn2: false,
      country_code: [],
    };
  },
  computed: {
    // CountryCode() {
    //   return this.$store.getters["CountryCode"];
    // },
    // loginForm() {
    //   return this.$store.getters["auth_state/loginForm"];
    // },
  },

  methods: {
    countDownTimer() {
      if (this.form_data.count_down > 0) {
        setTimeout(() => {
          this.form_data.count_down -= 1;
          // this.$store.commit(" auth_state/setLoginForm", { ...this.form_data });

          this.countDownTimer();
        }, 1000);
      }
    },

    async sendOTP() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start();

        this.disable_btn = true;
        const data = {
          phone: this.form_data.country_code + this.form_data.phone,
          type: this.form_data.type,
        };

        try {
          this.$axios
            .post(`sent-otp/`, data, {
              headers: {
                "Content-Type": "application/json",
              },
            })
            .then((res) => {
              // console.log(res);
              if (res.status === 201) {
                // console.log(res.data);
                this.$toast.info("Please enter verification code... ");
                this.form_data.otp_status = true;
                this.form_data.count_down = 60;
                this.countDownTimer();
                this.$nuxt.$loading.finish();
              }
              this.$nuxt.$loading.finish();
            })
            .catch((error) => {
              // console.log(error.response);
              this.$nuxt.$loading.finish();

              // console.log(error.message || error.response.data.message);
            });
        } catch (e) {
          this.$nuxt.$loading.finish();

          // console.log(e.response);
          this.$toast.error("Error Found! Try again...");
        }
        this.disable_btn = false;
      });
    },
    async submitOTP() {
      this.disable_btn2 = true;

      const data = {
        phone: this.form_data.country_code + this.form_data.phone,
        otp: this.form_data.otp,
      };
      try {
        const response = await this.$auth.loginWith("local", { data: data });

        if (response.status === 200) {
          this.$toast.success("Successfully authenticated");
        } else {
          this.$toast.error("Login failed! Try again");
        }
      } catch (e) {
        // console.log(e.response);
        this.$toast.error("Login failed! Try again");
      }
      this.disable_btn2 = false;

      return;
    },
  },
  mounted() {
    // this.CountryCode = this.CountryCode.length
    //   ? this.CountryCode
    //   : this.$store.dispatch("getCountryCodes");

    // const v_form_data = this.loginForm;
    // v_form_data ? (this.form_data = { ...v_form_data }) : "";

    this.form_data.count_down > 0 ? this.countDownTimer() : "";
  },
};
</script>

<style scoped></style>
