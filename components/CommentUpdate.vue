<template>
  <div
    v-if="$auth.user && $auth.user.id == comment.user.id"
    class="d-flex justify-content-end"
  >
    <!-- {{comment}} -->

    <!-- {{comment}} -->
    <div class="mx-2">
      <NuxtLink
        class="dropdown-item text-dark small"
        :to="'/blog/update-comment?id=' + comment.id"
      >
        <i class="icofont-edit small"></i>
      </NuxtLink>
    </div>
    <div class="">
      <button
        class="dropdown-item text-dark small"
        @click="onDelete(`${comment.id}`)"
      >
        <i class="icofont-trash small"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comments: Array,
    comment: Object,
  },
  methods: {
    async onDelete() {
      const confirm = window.confirm("Are You Sure ?");
      if (confirm == false) {
        return;
      }
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        this.$axios
          .delete(`blog/comment/${this.comment.id}`, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            console.log(res);
            if (res.status === 204) {
              this.$emit("removeFromArray", this.comment);
            }
            this.$nuxt.$loading.finish();
          })
          .catch((error) => {
            console.log(error);
            this.$nuxt.$loading.finish();
            console.log(error.message || error.response.data.message);
          });
      });

      return;
    },
  },
  mounted() {},
};
</script>

<style></style>
