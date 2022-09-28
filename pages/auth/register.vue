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
                  class="input-group-text bg-white px-2"
                  id="addon-wrapping"
                >
                  <img
                    src="@/static/img/icons/user_icon.svg"
                    alt="user icon"
                    width="37"
                  />
                </span>
                <input
                  type="text"
                  required
                  class="form-control py-3 is-invalid"
                  placeholder="Enter your name"
                  aria-label="phone"
                  aria-describedby="addon-wrapping"
                  v-model="form_data.full_name"
                />
              </div>
            </div>
            <div class="input-field pb-3">
              <div class="input-group flex-nowrap">
                <span class="input-group-text bg-white px-2" id="addon-wrapping"
                  >+880</span
                >
                <input
                  type="number"
                  required
                  class="form-control py-3 is-invalid"
                  placeholder="01XXXXXXXXX"
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
                :disabled="!form_data.terms || form_data.phone.length != 11"
                type="submit"
              >
                Sign up
              </button>
            </div>
          </form>
        </ValidationObserver>

        <div class="register-footer text-center pt-3">
          <NuxtLink
            to="/auth/login"
            class="small text-decoration-none text-dark"
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
        terms: false,
      },
    };
  },

  methods: {
    async submitForm() {
      try {
        const response = await this.$axios.post(
          "auth/register",
          this.form_data
        );
        if (response.status === 201) {
          try {
            const response = await this.$auth.loginWith("local", {
              data: this.form_data,
            });
            if (response.status === 200) {
              this.$toast.success("Successfully authenticated");
            }
          } catch (e) {
            if (e.response.data.msg) {
              this.$toast.error(e.response.data.msg);
            } else {
              this.$toast.error("Error!  Try again");
            }
          }
          // this.$toast.success("Sucessful! You can login now...");
          // this.$router.push("/auth/login");
        } else {
          this.$toast.error("Error Found! Try again...");
        }
      } catch (e) {
        const errors = e.response.data;
        if (errors.phone[0]) {
          this.$toast.error("User already exists");
        } else {
          this.$toast.error("Error Found! Try again...");
        }
      }
    },
  },
  beforeCreate() {
    if (this.$auth.$state.loggedIn) {
      this.$router.push("/");
    }
  },
};
</script>
