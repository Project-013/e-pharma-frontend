<template>
  <section class="">
    <div class="col-lg-4 col-md-6 col-12 mx-auto py-5">
      <div class="sign-form bg-white mb-5">
        <div class="sign-info">
          <h4 class="mb-4" style="color: #084298">Welcome Back!</h4>
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
              <ValidationProvider rules="required|min:8" v-slot="{ errors }">
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
            <div class="d-flex align-items-center justify-content-between">
              <!-- <span class="d-flex align-items-center">
                <input type="checkbox" v-model="form_data.checkbox" />
                <p class="mt-2 ms-2 small">Keep me signed in</p>
              </span> -->
              <a href="#" class="text-pimary text-decoration-none small pb-1"
                >Forgot your password?</a
              >
            </div>

            <div class="d-grid gap-2">
              <button class="btn btn-dark" type="submit">Sign In</button>
            </div>
          </form>
        </ValidationObserver>
        <div class="signup-footer text-center pt-3">
          <NuxtLink to="/signup" class="text-decoration-none small text-dark"
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
        email: "",
        password: "",
      },
    };
  },

  methods: {
    async submitForm() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        this.$axios
          .post(`/accounts/login`, this.form_data, {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.$config.apiToken,
            },
          })
          .then((res) => {
            this.$toast.show("Logging in...");
            if (res.status === 200) {
              this.$toast.success("Successfully authenticated");
            }
            console.log(res);

            this.$nuxt.$loading.finish();
          })
          .catch((error) => {
            this.$nuxt.$loading.finish();
            console.log(error.message || error.response.data.message);
          });
      });

      return;
    },
  },
};
</script>

<style scoped></style>
