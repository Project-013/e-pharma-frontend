<template>
  <article class="mb-5 pb-5 pt-3" v-if="blog.id">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-8">
          <BlogUpdate :blog="blog" />
          <h2 class="blog-post-title text-dark">{{ blog.title }}</h2>

          <p class="small text-muted">
            {{
              new Date(blog.created_date).toLocaleDateString("en-us", {
                weekday: "long",
                year: "numeric",
                month: "short",
                day: "numeric",
              })
            }}
            by
            <span class="text-primary fw-bold">{{ blog.user.full_name }}</span>
          </p>

          <hr />
          <div v-html="blog.desc"></div>
        </div>
        <div class="col-lg-4 card p-0">
          <div class="card-body">
      
            <Comments :blogId="blog.id" />
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
    head() {
    return {
      title: "স্বাস্থ্যসেবক || "+this.blog.title,
    };
  },

  data() {
    return {
      blog: [],
    };
  },
  methods: {
    async getblogDetails() {
      await this.$axios
        .get(`blog/` + this.$route.query.id)
        .then((res) => {
          if (res.status === 200) {
            this.blog = res.data;
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
    async submitForm() {
      this.form_data.user = this.getUserID;
      this.form_data.blog = this.blog.id;

      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        this.$axios
          .post(`blog/comment`, this.form_data, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            if (res.status === 201) {
              this.$toast.success("Success!");
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
  mounted() {
    this.getblogDetails();
  },
};
</script>

<style scoped></style>
