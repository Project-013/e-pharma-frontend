<template>
  <div class="mb-5 pb-5 pt-3">
    <div class="container">
      <div class="row g-3 justify-content-center bg-white">
        <div class="col-md-9">
          <div class="card shadow h-100 p-0">
            <div class="card-body">
              <form action="" @submit.prevent="submitForm" class="p-0">
                <div class="">
                  <div class="form-group my-2">
                    <label class="form-label" for="">Blog Title</label>

                    <input
                      id="title"
                      v-model="form_data.title"
                      class="form-control form-control-sm"
                    />
                  </div>

                  <div class="form-group my-2">
                    <label class="form-label">Write Short Description</label>

                    <textarea
                      v-model="form_data.short_desc"
                      id="details"
                      class="form-control form-control-sm"
                      rows="2"
                      required
                    ></textarea>
                  </div>
                  <div class="form-group my-2">
                    <label class="form-label">Content</label>
                    <jodit-editor v-model="form_data.desc" />
                  </div>

                  <button type="submit" class="btn px-4 mt-3 btn-dark">
                    Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "jodit/build/jodit.min.css";
import { JoditEditor } from "jodit-vue";
export default {
  components: { JoditEditor },
  head() {
    return {
      title: "স্বাস্থ্যসেবক || Create post",
    };
  },

  computed: {
    getUserID() {
      if (this.$auth.user.phone) {
        return this.$auth.user.id;
      }
      return "";
    },
  },

  data() {
    return {
      form_data: {
        title: "",
        short_desc: "",
        user: "",
        desc: "",
      },
    };
  },
  methods: {
    async submitForm() {
      this.form_data.user = this.getUserID;

      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        this.$axios
          .post(`blog/`, this.form_data, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            if (res.status === 201) {
              this.$toast.success("Success!");
              this.$router.push("/blog");
            } else {
              this.$toast.error("Error found! Try again");
            }

            this.$nuxt.$loading.finish();
          })

          .catch((error) => {
            this.$toast.error("Error found! Try again");

            console.log(error.response);
            this.$nuxt.$loading.finish();
            console.log(error.message || error.response.data.message);
          });
      });

      return;
    },
  },
  mounted() {},
  beforeCreate() {
    if (!this.$auth.$state.loggedIn) {
      this.$router.push("/blog");
    }
  },
};
</script>

<style></style>
