<template>
  <section class="">
    <div class="col-lg-4 col-md-6 col-11 mx-auto py-5">
      <div class="p-4 rounded shadow bg-white mb-5">
        <div class="sign-info">
          <h4 class="mb-5" style="color: #084298">Welcome Back!</h4>
        </div>
        <ValidationObserver v-slot="{ handleSubmit }">
          <form class="form" @submit.prevent="handleSubmit(submitForm)">
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
                    <template v-for="(c, index) in CountryCode">
                      <option :value="c.dial_code" :key="index">
                        {{ c.dial_code }}
                      </option>
                    </template>
                  </select>
                </span>
                <input
                  type="number"
                  required
                  class="form-control py-3"
                  placeholder="1XXXXXXXXX"
                  aria-label="phone"
                  aria-describedby="addon-wrapping"
                  v-model="form_data.phone"
                />
              </div>
            </div>

            <div class="d-grid gap-2">
              <button
                class="btn btn-dark"
                :disabled="form_data.phone.length != 10"
                type="submit"
              >
                Login
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
      },
      country_code: [],
    };
  },
  computed: {
    CountryCode() {
      return this.$store.getters["CountryCode"];
    },
  },

  methods: {
    async submitForm() {
      const data = {
        phone: this.form_data.country_code + this.form_data.phone,
      };
      try {
        const response = await this.$auth.loginWith("local", { data: data });
        if (response.status === 200) {
          this.$toast.success("Successfully authenticated");
        } else {
          this.$toast.error("Login failed! Try again");
        }
      } catch (e) {
        this.$toast.error("Login failed! Try again");
      }

      return;
    },
  },
  mounted() {
    this.CountryCode = this.CountryCode.length
      ? this.CountryCode
      : this.$store.dispatch("getCountryCodes");
  },
  beforeCreate() {
    if (this.$auth.$state.loggedIn) {
      this.$router.push("/");
    }
  },
};
</script>

<style scoped></style>
