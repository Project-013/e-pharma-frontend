<template>
  <section class="center_box">
    <div class="container">
      <div class="row my-3 justify-content-center">
        <div class="col-md-5">
          <img src="/img/cards/old-lady-with-nurse.jpg" class="d-block w-100" />
        </div>
        <div class="col-md-5 p-3">
          <h3 class="text-dark mb-3">কেয়ারগিভার সেবা</h3>
          <p class="text-justify _service_desc">
            অস্ত্রোপচারের পর অথবা প্যারালাইসিস রোগী কিংবা যে কোন বয়স্ক ও অসুস্থ
            রোগীর প্রাইমারি চিকিৎসা প্রদান, ঔষধ খাওয়ানো, হাঁটাচলা করতে সহায়তা
            কিংবা গোসল করানো এরকম সার্বিক খেয়াল রাখার জন্য সিলেট শহরের মধ্যে হোম
            কেয়ারগিভার সার্ভিস দেয়া হয়।
            <strong class="text-primary"> সিলেট শহরের</strong> অভিজ্ঞ কেয়ারগিভার
            দ্বারা সার্ভিসটি পরিচালনা করা হয়। আমদের আছে পুরুষ রোগীর জন্য পুরুষ
            কেয়ারগিভার এবং মহিলাদের জন্য মহিলা কেয়ারগিভার। সার্ভিসটি পেতে কল
            করুন।
          </p>
          <a href="tel:+8801602655774" class="lead fw-bold text-dark"
            ><i class="icofont-ui-call text-primary me-2"></i>
            +8801602655774
          </a>
        </div>
        <div class="col-md-7 mx-auto">
          <template v-if="$auth.loggedIn === false">
            <p class="text-center mark my-3 p-1">
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

              to get <span class="fw-bold">MOBILE DIAGNOSTIC</span> Service
            </p>
          </template>
          <div v-if="$auth.loggedIn" class="bg-white">
            <ValidationObserver
              class="card h-100 p-0"
              v-slot="{ handleSubmit }"
            >
              <div class="card-body">
                <h6 class="mb-3 fw-bold text-uppercase" style="color: #2b325c">
                  Get Service Now!
                </h6>

                <form class="" @submit.prevent="handleSubmit(submitForm)">
                  <div class="form-group my-2">
                    <label class="form-label" for="name">Your name</label>
                    <input
                      v-model="getName"
                      id="name"
                      class="form-control form-control-sm"
                      required
                    />
                  </div>
                  <div class="form-group my-2">
                    <label class="form-label" for="name">Phone</label>
                    <input
                      v-model="getPhone"
                      id="patient_phone"
                      class="form-control form-control-sm"
                      placeholder=" "
                      required
                      disabled
                    />
                  </div>
                  <div class="form-group my-3">
                    <label class="form-label" for="name">Address</label>
                    <textarea
                      v-model="form_data.address"
                      id="details"
                      class="form-control form-control-sm"
                      rows="2"
                      required
                    ></textarea>
                  </div>

                  <div class="my-3 d-flex justify-content-center">
                    <label
                      for="formFile"
                      class="text-center"
                      style="cursor: pointer"
                    >
                      <img
                        v-if="previewImage"
                        :src="previewImage"
                        width="200"
                        class="uploading-image d-block mb-1 mx-auto border rounded p-1"
                      />
                      <img
                        v-else
                        src="~/static/img/add.jpg"
                        alt=""
                        class="d-block mb-1 mx-auto border rounded p-1"
                        width="180"
                      />
                      <span class="btn btn-sm btn-secondary py-0">{{
                        previewImage
                          ? "Change Prescription"
                          : "Upload Prescription"
                      }}</span>
                    </label>
                    <input
                      class="form-control form-control-sm upload_image d-none"
                      type="file"
                      id="formFile"
                      accept=".jpeg,.jpg,.png,image/jpeg,image/png"
                      aria-label="upload image button"
                      @change="uploadImage"
                      required
                    />
                  </div>
                  <button
                    style="background-color: #2b325c"
                    class="btn btn-dark btn-sm mt-3 w-100 text-uppercase"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped></style>
