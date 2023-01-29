<template>
  <div
    v-if="$auth.user && $auth.user.id == blog.user.id"
    class="d-flex justify-content-end"
  >
    <div class="mx-2">
      <NuxtLink
        class="dropdown-item text-dark small"
        :to="'/blog/update?id=' + blog.id"
      >
        <i class="icofont-edit small"></i>
      </NuxtLink>
    </div>
    <div class="">
      <button
        class="dropdown-item text-dark small"
        @click="onDelete(`${blog.id}`)"
      >
        <i class="icofont-trash small"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blog: Object,
  },
  methods: {
    async onDelete() {
      const confirm = window.confirm("Are You Sure ?");
      if (confirm == false) {
        return;
      }
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        this.disable_btn = true;
        this.$axios
          .delete(`blog/${this.blog.id}`, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            console.log(res);
            if (res.status === 204) {
              if ((this.$route.fullPath = "/blog")) {
              } else {
                this.$router.push("/blog");
              }
            }
            this.$nuxt.$loading.finish();
          })
          .catch((error) => {
            console.log(error);
            this.$nuxt.$loading.finish();
            console.log(error.message || error.response.data.message);
          });

        this.disable_btn = false;
      });

      return;
    },
  },
  mounted() {
    console.log();
  },
};
</script>

<style></style>
