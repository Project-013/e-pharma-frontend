<template>
  <section class="">
    <div class="col-lg-4 col-md-6 col-12 mx-auto py-5">
      <div class="sign-form bg-white mb-5">
        <div class="sign-info">
          <h4 class="mb-5" style="color: #084298">Welcome Back!</h4>
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
        <div class="register-footer text-center pt-3">
          <NuxtLink
            to="/auth/register"
            class="text-decoration-none small text-dark"
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
      const data = {
        email: this.form_data.email,
        password: this.form_data.password,
      };
      // console.log(data);
      try {
        const response = await this.$auth.loginWith("local", { data: data });
        if (response.status === 200) {
          this.$toast.success("Successfully authenticated");
        }
        // this.$auth.$storage.setUniversal('email', response.data.email)
        // await this.$auth.setUserToken(response.data.access_token, response.data.refresh_token)
      } catch (e) {
        this.$toast.error(e.response.data.msg);
      }

      return;
    },
  },
  beforeCreate() {
    if (this.$auth.$state.loggedIn) {
      this.$router.push("/");
    }
  },
};
</script>

<style scoped></style>
