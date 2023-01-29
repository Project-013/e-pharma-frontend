<template>
  <div class="card p-0 my-2 _card">
    <div class="row card-body">
      <div class="col-4 d-flex justify-content-center align-items-center d-none">
        <img
          v-if="blog.image_url"
          :src="$config.apibaseURL + blog.image_url"
          :alt="blog.title"
          class="w-100 "
        />
        <img
          v-else
          src="~/static/img/blog.jpg"
          class="w-100"

          :alt="blog.title"
        />
        
      </div>
      <div class="col-12">
        <BlogUpdate :blog="blog"/>
        <NuxtLink :to="`/blog/post/?id=${blog.id}`" class="card-title mb-0 h5">
          {{ blog.title }}
        </NuxtLink>
        <p class="mt-0 small text-muted">
          {{
            new Date(blog.created_date).toLocaleDateString("en-us", {
              weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
            })
          }}
          by <span class="text-primary fw-bold">{{blog.user.full_name}}</span>
        </p>

        <p class="card-text">{{ blog.short_desc }}...</p>

        <NuxtLink :to="`/blog/post/?id=${blog.id}`" class="">
          Continue Reading
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
props: {
    blog: Object,
  },
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  ._card .h5 {
    font-size: 90% !important;
  }
  ._card .small{
    font-size: 70% !important;
  }
  ._card p {
    font-size: 90% !important;
  }
}
</style>
