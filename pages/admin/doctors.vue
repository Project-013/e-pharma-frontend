<template>
  <div class="container">
    <!-- {{doctors}} -->
    <div class="card p-0 shadow my-3 border-0">
      <DataTable
        title="Doctors"
        :columns="doctors_columns"
        :rows="doctors"
        class="table-responsive"
      >
        <th slot="thead-tr">Actions</th>
        <template slot="tbody-tr" slot-scope="props">
          <td style="width: 200px">
            <button
              class="btn btn-sm btn-primary text-white"
              data-bs-toggle="modal"
              :data-bs-target="`#exampleModal${props.row.id}`"
            >
              <i class="icofont-eye-alt text-light" style="font-size: 14px"></i>
            </button>

            <a target="_blank" class="btn btn-sm btn-success text-white d-none">
              <i class="icofont-edit text-light" style="font-size: 14px"></i>
            </a>
            <a target="_blank" class="btn btn-sm btn-danger text-white d-none">
              <i class="icofont-trash text-light" style="font-size: 14px"></i>
            </a>
          </td>
          <!-- Modal -->
          <div
            class="modal fade"
            :id="`exampleModal${props.row.id}`"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog ">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    {{ props.row.name }}
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <div class="card border-0 h-100 p-0">
                    <img
                      :src="$config.apibaseURL + props.row.image_url"
                      :alt="props.row.name"
                      class="d-block mx-auto py-2 rounded-circle"
                      width="250"
                    />
                    <div class="card-body p- py-3">
                      <h5
                        class="mb-0 fw-bold text-uppercase"
                        style="color: #2b325c"
                      >
                        {{ props.row.name }}
                      </h5>
                      <p class="text-muted small mb-0 pb-0">
                        {{ props.row.qualicifacions }}
                      </p>
                      <small class="text-success fw-semibold mt-0 pt-0">{{
                        props.row.specialty
                      }}</small>
                      <pre class="mt-1 pt-2">{{ props.row.experience }}</pre>
                      <pre
                        class="mt-1 pt-0"
                      ><i class="icofont-location-pin "></i> {{
              props.row.institution_or_chamber_address
            }}</pre>
                      <pre
                        v-if="props.row.working_times_chamber"
                        class="small my-0 pt-0"
                      ><i class="icofont-clock-time"></i
              > {{ props.row.working_times_chamber }}
            </pre>
                      <h5
                        v-if="props.row.fee_chamber"
                        class="p-1 text-center fw-semibold fst-italic"
                      >
                        Consultation Fee
                        <span class="text-success"
                          ><i class="icofont-taka"></i
                          >{{ props.row.fee_chamber }}
                        </span>
                      </h5>
                      <h5
                        v-if="props.row.fee_video_call"
                        class="p-1 text-center fw-semibold fst-italic"
                      >
                        Consultation Fee
                        <span class="text-success"
                          ><i class="icofont-taka"></i
                          >{{ props.row.fee_video_call }}
                        </span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </DataTable>
    </div>
  </div>
</template>

<script>
export default {
  name: "Doctors",
  layout: "admin",
  data() {
    return {
      doctors_columns: [
        { label: "Name", field: "name" },
        { label: "Specialty", field: "specialty" },
        { label: "Mobile", field: "mobile" },
        { label: "Service Type", field: "type" },
        { label: "Consultation Fee (BDT)", field: "fee_chamber" },
      ],
    };
  },
  beforeCreate() {
    if (!this.$auth.$state.loggedIn || this.$auth.user.is_admin === false) {
      this.$router.push("/");
    }
  },
  computed: {
    doctors() {
      return [...this.$store.getters["doctors/doctors"]];
    },
  },
  mounted() {
    // this.$store.dispatch("doctors/getDoctors");
  },
};
</script>

<style></style>
