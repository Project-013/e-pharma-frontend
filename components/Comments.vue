<template>
  <div>
    <template v-if="$auth.loggedIn === false">
      <p class="text-center mark my-2 p-2">
        Please
        <NuxtLink
          :to="`/login?redirect=` + $route.fullPath"
          class="text-decoration-none"
        >
          Login
        </NuxtLink>
        or
        <NuxtLink
          :to="`/register?redirect=` + $route.fullPath"
          class="text-decoration-none"
        >
          Register
        </NuxtLink>

        to <span class="fw-bold">Comment</span>
      </p>
    </template>
    <div v-else class="py-3">
    <form action="" @submit.prevent="submitForm" class="p-0">
      <div class="form-group">
        <label class="form-label">Write Comment</label>

        <textarea
          v-model="form_data.comment"
          id="details"
          class="form-control form-control-sm"
          rows="2"
          required
        ></textarea>
      </div>
      <button type="submit" class="btn px-4 mt-3 btn-dark">Post Comment</button>
    </form>
    </div>

    <!-- {{ form_data }} -->
    <div v-for="comment in comments" :key="comment.id">
      <div class="card p-0 my-2 _card">
        <!-- {{ comments }} -->
        <div class="card-body">
          <CommentUpdate
            :comment="comment"
            :comments="comments"
            @removeFromArray="removeArray($event)"
          />
          <p class="my-0 fw-bold small">
            <img
              src="../static/img/icons/user_icon.svg"
              alt="sasthosebok.com"
              class=""
              width="20"
            />
            {{ comment.user.full_name }}
            <small class="text-muted fw-normal"
              >at

              {{
                new Date(comment.created_date).toLocaleDateString("en-us", {
                  weekday: "long",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })
              }}
            </small>
          </p>

          <small>{{ comment.comment }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
      comments: [],
      form_data: {
        comment: "",
        user: "",
        blog: "",
      },
    };
  },
  props: {
    blogId: Number,
  },
  methods: {
    removeArray(cmnt) {
      // console.log("Called!", data);
      this.comments = this.comments.filter((comment) => comment != cmnt);
    },
    async submitForm() {
      this.form_data.user = this.getUserID;
      this.form_data.blog = this.blogId;

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
              this.form_data.comment = "";

              this.getBlogComments();
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
    async getBlogComments() {
      await this.$axios
        .get(`blog/comment?blog=${this.blogId}`)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            this.comments = res.data;
          }
        })
        .catch((error) => {
          console.log(error.response);
          console.log(error.response.data.message || error.message);
          // context.commit('error', error)
        });
    },
  },
  mounted() {
    this.getBlogComments();
  },
};
</script>

<style></style>
