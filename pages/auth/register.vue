<template>
  <section class="main-body">
    <div class="col-lg-4 col-md-6 col-12 mx-auto py-5">
      <div class="sign-form bg-white">
        <div class="sign-info">
          <h4 class="mb-5" style="color: #084298">
            Register now to explore more!
          </h4>
        </div>
        <ValidationObserver v-slot="{ handleSubmit }">
          <form class="form" @submit.prevent="handleSubmit(submitForm)">
            <div class="input-field">
              <ValidationProvider rules="required|email" v-slot="{ errors }">
                <input v-model="form_data.email" class="is-invalid" required />
                <label>E-mail</label>
                <div class="invalid-feedback">
                  {{ errors[0] }}
                </div>
              </ValidationProvider>
            </div>
            <div class="input-field">
              <ValidationProvider rules="required" v-slot="{ errors }">
                <input
                  v-model="form_data.date_of_birth"
                  class="is-invalid"
                  type="date"
                />
                <label>Date of birth</label>
                <div class="invalid-feedback">
                  {{ errors[0] }}
                </div>
              </ValidationProvider>
            </div>
            <div class="input-field">
              <ValidationProvider
                rules="required|min:8"
                v-slot="{ errors }"
                vid="password"
              >
                <input
                  type="password"
                  v-model="form_data.password"
                  class="is-invalid"
                  required
                />
                <label>Password</label>
                <div class="invalid-feedback">
                  {{ errors[0] }}
                </div>
              </ValidationProvider>
            </div>
            <div class="input-field">
              <ValidationProvider
                rules="required|confirmed:password"
                v-slot="{ errors }"
              >
                <input
                  type="password"
                  v-model="form_data.password2"
                  class="is-invalid"
                  required
                />
                <label>Re-enter Password</label>
                <div class="invalid-feedback">
                  {{ errors[0] }}
                </div>
              </ValidationProvider>
            </div>
            <div class="d-flex align-items-center">
              <input type="checkbox" id="checkbox" v-model="form_data.terms" />
              <p for="checkbox" class="mt-2 ms-2 small">
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
                :disabled="!form_data.terms"
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
        email: "sajibsd013@gmail.com",
        password: "sajibsd013@gmail.com",
        password2: "sajibsd013@gmail.com",
        date_of_birth: "",
        terms: false,
      },
      custom_error: {
        isError: false,
        message: null,
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
          this.$toast.error("Sucessful! You can login now...");
          this.$router.push("/auth/login");
        }

        console.log(response);
      } catch (e) {
        const errors = e.response.data;
        console.log();
        for (const error in errors) {
          if (error == "email") {
            this.$toast.error("User already exists");
          }
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
