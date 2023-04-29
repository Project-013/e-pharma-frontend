<template>
  <div class="container pb-5 pt-3 mb-5">
    <!-- {{ chamber }} -->
    <div class="col-md-10 mx-auto d-none">
      <h5>Create </h5>
      <form class="border rounded p-3">
        <div>
          <h6>Chamber Informations</h6>

          <div class="row text-muted justify-content-center">
            <div class="col-md-6">
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  placeholder="Enter Doctor Name"
                  v-model="chamber.doctor_name"
                />
                <label for="floatingInput">Enter Doctors Name</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  placeholder="Enter Doctor Name"
                  v-model="chamber.chamber_name"
                />
                <label for="floatingInput"
                  >Enter hospital or Chamber Name</label
                >
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-floating">
                <textarea
                  class="form-control"
                  placeholder="Enter Doctor Name"
                  v-model="chamber.time"
                />
                <label for="floatingTextarea"
                  >Time (Eg.: Sat-Mon, 10:00am - 06:00pm )</label
                >
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <Prescription /> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      chamber: {
        doctor_name: "",
        chamber_name: "",
        time: "",
      },
    };
  },
};
</script>

<style></style>
