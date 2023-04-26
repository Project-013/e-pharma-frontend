<template>
  <div class="container">
      <form
        class="col-lg-6 col-md-8 mx-auto shadow border rounded py-5 my-3 px-3"
        @submit.prevent="onSubmit"
      >
        <h4>Send Promotional SMS</h4>
        <p class="small text-warning" style="font-size:12.5px">
          মার্কেটিং/প্রোমোশনাল এসএমএস বাংলা ভাষাতে প্রেরন না করলে অ্যাকাউন্ট
          বন্ধ করা হবে।
        </p>
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
          <div class="mb-3 mt-1 small text-success" v-if="form_data.msg.length"
            > <strong>{{
              Math.ceil(form_data.msg.length / 70) * 70 - form_data.msg.length
            }}</strong>
            CHARACTERS REMAINING
            <strong>{{ Math.ceil(form_data.msg.length / 70) }}</strong> MESSAGE (S)</div
          >
          <p class="text-muted small my-2 fst-italic" style="font-size:11.5px">*Note: Not Supported Characters ~ ^ { } [ ] \ | এই ক্যারেক্টারগুলো এসএমএস এ দিবেন না ।</p>
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
        <button type="submit" class="btn btn-success w-100">
          <i class="icofont-location-arrow"></i> Submit
        </button>
      </form>
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
        msg: "",
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
          this.$toast.success("Success!" + res.data);
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
