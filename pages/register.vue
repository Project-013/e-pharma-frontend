<template>
  <section class="main-body">
    <div class="col-lg-4 col-md-6 col-11 mx-auto py-5">
      <div class="p-4 rounded shadow bg-white mb-5">
        <div class="sign-info">
          <h4 class="mb-5" style="color: #084298">
            Register now to explore more!
          </h4>
        </div>
        <ValidationObserver v-slot="{ handleSubmit }">
          <form class="form" @submit.prevent="handleSubmit(submitForm)">
            <div class="input-field pb-3">
              <div class="input-group flex-nowrap">
                <span
                  class="input-group-text bg-white text-center"
                  style="width: 85px"
                  id="addon-wrapping"
                >
                  <img
                    src="@/static/img/icons/user_icon.svg"
                    alt="user icon"
                    width="37"
                    class="d-block mx-auto"
                  />
                </span>
                <input
                  type="text"
                  required
                  class="form-control py-3 is-invalid"
                  placeholder="Enter your name"
                  aria-describedby="addon-wrapping"
                  v-model="form_data.full_name"
                />
              </div>
            </div>
            <div class="input-field pb-3">
              <div class="input-group flex-nowrap">
                <span
                  class="input-group-text bg-white p-0"
                  style="width: 85px"
                  id="addon-wrapping"
                >
                  <select
                    class="form-select form-select-sm border-0 p-3"
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

            <div class="d-flex align-items-center">
              <input type="checkbox" id="checkbox" v-model="form_data.terms" />
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
                class="btn btn-dark"
                :disabled="!form_data.terms || form_data.phone.length != 10"
                type="submit"
              >
                Sign up
              </button>
            </div>
          </form>
        </ValidationObserver>

        <div class="register-footer text-center pt-3">
          <NuxtLink to="/login" class="small text-decoration-none text-dark"
            >Already have an account?
            <span class="text-primary text-decoration-underline">
              Sign In
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
  name: "register",
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      form_data: {
        phone: "",
        full_name: "",
        country_code: "+880",
        terms: false,
      },
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
        full_name: this.form_data.full_name,
      };
      try {
        const response = await this.$axios.post("auth/register", data);
        if (response.status === 201) {
          try {
            const response = await this.$auth.loginWith("local", {
              data: data,
            });
            if (response.status === 200) {
              this.$toast.success("Successfully authenticated");
            }
          } catch (e) {}
        } else {
          this.$toast.error("Error Found! Try again...");
        }
      } catch (e) {
        if (e.response && e.response.data) {
          const errors = e.response.data;
          if (errors.phone && errors.phone[0]) {
            this.$toast.error("User already exists");
          }
        } else {
          this.$toast.error("Registation failed! Try again...");
        }
      }
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
