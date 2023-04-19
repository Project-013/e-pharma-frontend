<template>
  <div class="container">
    <!-- {{form_data}} -->
    <div class="row m-3">
      <form
        class="col-md-6 shadow p-4 border rounded py-5"
        @submit.prevent="onSubmit"
      >
        <div class="mb-3">
          <label for="" class="form-label text-muted">Select one</label>
          <select
            class="form-select"
            aria-label="Default select example"
            v-model="form_data.to"
          >
            <option value="All">All</option>
            <option value="Customers">Customers</option>
            <option value="Doctor">Doctor</option>
            <option value="Caregiver">Caregiver</option>
            <option value="Nurse">Nurse</option>
            <option value="Partner">Partner</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label text-muted"
            >Message</label
          >
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="4"
            v-model="form_data.msg"
            required
          ></textarea>
          <span class="mb-3 small text-success"
            >160 CHARACTERS REMAINING 1 MESSAGE (S)</span
          >
        </div>

        <div class="mb-3 form-check">
          <input
            type="checkbox"
            class="form-check-input"
            required
            id="exampleCheck1"
          />
          <label class="form-check-label" for="exampleCheck1"
            >Check me out</label
          >
        </div>
        <button type="submit" class="btn btn-success">
          <i class="icofont-location-arrow"></i> Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Messages",
  layout: "admin",
  beforeCreate() {
    if (!this.$auth.$state.loggedIn || this.$auth.user.is_admin === false) {
      this.$router.push("/");
    }
  },
  data() {
    return {
      form_data: {
        msg: 'সবাইকে পবিত্র ঈদুল ফিতরের শুভেচ্ছা "ঈদ মোবারক" স্বাস্থ্যসেবক ডট কম',
        to: "All",
      },
    };
  },
  methods: {
    async onSubmit() {
      await this.$axios
        .post(`send-sms`, this.form_data)
        .then((res) => {
          console.log(res);
          this.$toast.success("Success!"+res.data);
        })
        .catch((error) => {
          this.$toast.error("Error found! Try again");

          console.log(error.response);
          console.log(error.response.data.message || error.message);
          // context.commit('error', error)
        });
    },
  },
};
</script>

<style></style>
