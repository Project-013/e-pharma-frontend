<template>
  <section class="">
    <div class="banner_wrapper p-sm-5 p-3">
      <div class="container">
        <div class="mt-5">
          <h1 class="heading_2">Fina A Nurse Now</h1>
          <p class="small text-justify"></p>
        </div>
        <div class="row mt-5 g-3 mb-0">
          <div class="col-md-4">
            <div class="rounded bg-white">
              <div class="d-flex align-items-center px-2 rounded">
                <img
                  src="/img/icons/search.svg"
                  style="width: 18px"
                  alt=""
                  class="me-2"
                />
                <input
                  type="search"
                  class="form-control form-select-sm border-0 my-0"
                  placeholder="Search Nurse by name"
                />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <select
              class="form-select form-select-sm"
              aria-label="Default select example"
              required
            >
              <option value="" disabled selected>Select Area</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <div class="container my-5">
      <div>
        <div
          class="alert alert-warning display-6 text-center py-5"
          role="alert"
        >
          Coming soon!
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped></style>
