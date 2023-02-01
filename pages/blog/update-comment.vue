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
                    <label class="form-label">Comment</label>

                    <textarea
                      v-model="comment.comment"
                      id="details"
                      class="form-control form-control-sm"
                      rows="2"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" class="btn px-4 mt-3 btn-dark">
                    Update
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
export default {
  head() {
    return {
      title: "স্বাস্থ্যসেবক || Update comment",
    };
  },
  data() {
    return {
      comment: {},
    };
  },
  methods: {
    async submitForm() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        this.$axios
          .put(`blog/comment/${this.$route.query.id}/`, this.comment, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            console.log(res);
            if (res.status === 200) {
              this.$toast.success("Success! Updated");
              window.history.back();
              //   this.$router.push(`/blog/post/?id=${this.$route.query.id}`);
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

      console.log();
      return;
    },
    async getblogDetails() {
      await this.$axios
        .get(`blog/comment/` + this.$route.query.id)
        .then((res) => {
          if (res.status === 200) {
            this.comment = res.data;
          } else {
            // this.$router.push("/");
          }
        })
        .catch((error) => {
          //   this.$router.push("/");

          console.log(error.response);
          console.log(error.response.data.message || error.message);
          // context.commit('error', error)
        });
    },
  },
  mounted() {
    this.getblogDetails();
  },
  beforeCreate() {
    if (!this.$auth.$state.loggedIn) {
      this.$router.push("/blog");
    }
  },
};
</script>

<style></style>
