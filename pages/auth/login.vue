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

            <div class="d-grid gap-2">
              <button
                class="btn btn-dark"
                :disabled="form_data.phone.length != 11"
                type="submit"
              >
                Login
              </button>
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
        phone: "",
      },
    };
  },

  methods: {
    async submitForm() {
      const data = {
        phone: this.form_data.phone,
        // password: this.form_data.password,
      };
      // console.log(data);
      try {
        const response = await this.$auth.loginWith("local", { data: data });
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
