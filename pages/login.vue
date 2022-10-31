<template>
  <section class="">
    <div class="col-lg-4 col-md-6 col-11 mx-auto py-5">
      <div class="p-4 rounded shadow bg-white mb-5">
        <div class="sign-info">
          <h4 class="mb-5" style="color: #084298">Welcome Back!</h4>
        </div>

        <ValidationObserver v-slot="{ handleSubmit }">
          <form class="form" @submit.prevent="handleSubmit(sendOTP)">
            <div class="input-field pb-3">
              <div class="input-group flex-nowrap">
                <span
                  class="input-group-text bg-white p-0"
                  style="width: 85px"
                  id="addon-wrapping"
                >
                  <select
                    class="form-select form-select-sm border-0"
                    style="font-weight: 500"
                    aria-label=".form-select-sm example"
                    v-model="form_data.country_code"
                  >
                    <!-- <template v-for="(c, index) in CountryCode">
                      <option :value="c.dial_code" :key="index">
                        {{ c.dial_code }}
                      </option>
                    </template> -->
                    <option value="+880">+880</option>

                    <!-- <template v-if="CountryCode.length == 0">
                      <option value="+880">+880</option>
                    </template> -->
                  </select>
                </span>
                <input
                  type="number"
                  required
                  class="form-control py-3"
                  :class="
                    form_data.phone.length != 10
                      ? ` `
                      : `border-success bg-success bg-opacity-25`
                  "
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
                  style="width: 85px"
                  id="addon-wrapping"
                >
                  OPT
                </span>
                <input
                  type="number"
                  required
                  class="form-control py-3"
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
    CountryCode() {
      return this.$store.getters["CountryCode"];
    },
    loginForm() {
      return this.$store.getters["auth_state/loginForm"];
    },
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
      this.disable_btn = true;
      const data = {
        phone: this.form_data.country_code + this.form_data.phone,
        type: this.form_data.type,
      };

      this.$store.commit("auth_state/setLoginForm", { ...this.form_data });

      try {
        const response = await this.$axios.post("send-otp/", data);
        if (response.status === 201) {
          this.form_data.otp_status = true;
          this.form_data.count_down = 180;
          this.countDownTimer();
          this.$store.commit(" auth_state/setLoginForm", { ...this.form_data });

          this.$toast.info("Please enter verification code... ");
        }
      } catch (e) {
        console.log(e.response);
        this.$toast.error("Error Found! Try again...");
      }
      this.disable_btn = false;
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
          this.$store.commit("auth_state/setLoginForm", null);
          this.$store.commit("auth_state/setRegiForm", null);
          this.$toast.success("Successfully authenticated");
        } else {
          this.$toast.error("Login failed! Try again");
        }
      } catch (e) {
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

    const v_form_data = this.loginForm;
    v_form_data ? (this.form_data = { ...v_form_data }) : "";

    this.form_data.count_down > 0 ? this.countDownTimer() : "";
  },
  beforeCreate() {
    if (this.$auth.$state.loggedIn) {
      this.$router.push("/");
    }
  },
};
</script>

<style scoped></style>
