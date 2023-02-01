<template>
  <section class="mb-5 pb-5 pt-3">
    <div class="container">
      <div class="p-md-5 p-3 border border-muted rounded bg-light">
        <h1 class="text-dark">
          Welcome to <span class="text-success">Health</span> Blog
        </h1>
        <hr class="mt-4" />
        <p class="mb-0">
          This is a peer to peer blog for sharing knowledge with each other.
        </p>
      </div>
      <template v-if="$auth.loggedIn === false">
        <p class="text-center mark my-3 p-3">
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

          to <span class="fw-bold">Create Post</span>
        </p>
      </template>
      <div v-else class="text-center py-3">
        <NuxtLink
          class="btn btn-lg btn-outline-secondary py-2 px-sm-5"
          to="/blog/create"
          >Create New Post <i class="icofont-pencil-alt-2 ms-2"></i>
        </NuxtLink>
      </div>

      <div class="col-md-7">
        <div v-for="blog in pageOfItems" :key="blog.id">
          <Blog :blog="blog" />
          <!-- <div class="card p-0 my-2">
            <div class="row card-body">
              <div
                class="col-4 d-flex justify-content-center align-items-center "
              >
                <img
                v-if="blog.image_url"
                  :src="$config.apibaseURL + blog.image_url"
                  :alt="blog.title"
                  class="w-100"
                />
              </div>
              <div class="col-8">
                <h5 class="card-title mb-0">
                  {{ blog.title }}
                </h5>
                <p class="mt-0 small text-muted">
                  {{
                    new Date(blog.created_date).toLocaleDateString("en-us", {
                      weekday: "long",
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  by <span class="text-primary fw-bold">admin</span>
                </p>
                
                <p class="card-text">{{ blog.short_desc }}...</p>

                <NuxtLink :to="`/blog/post/?id=${blog.id}`" class="">
                  Continue Reading
                </NuxtLink>
              </div>
            </div>
          </div> -->
        </div>
        <div class="d-flex align-items-center mt-3">
          <jw-pagination
            :items="blogs"
            :pageSize="8"
            @changePage="onChangePage"
            :labels="customLabels"
            class="mx-auto"
          ></jw-pagination>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import JwPagination from "jw-vue-pagination";

export default {
  head() {
    return {
      title: "স্বাস্থ্যসেবক || Blog",
    };
  },
  components: {
    JwPagination,
  },
  data() {
    return {
      pageOfItems: [],
      customLabels: {
        first: "<<",
        last: ">>",
        previous: "<",
        next: ">",
      },
      blogs: [],
    };
  },
  methods: {
    onChangePage(pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems;
    },
    async getBlogs() {
      await this.$axios
        .get(`blog/`)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            this.blogs = res.data;
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
    this.getBlogs();
  },
};
</script>

<style></style>
