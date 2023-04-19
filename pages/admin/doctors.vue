<template>
  <div class="container">
    <!-- {{doctors}} -->
    <div class="card shadow p-4 border-0">
      <DataTable
        title="Doctors"
        :columns="doctors_columns"
        :rows="doctors_rows"
      >
        <th slot="thead-tr">Actions</th>
        <template slot="tbody-tr" slot-scope="props">
          <td style="width:150px">
            <a
              :href="props.row"
              target="_blank"
              class="btn btn-sm btn-dark d-none"
            >
              <i
                class="icofont-download text-white icofont_icon"
                style="font-size: 14px"
              ></i>
            </a>
            <a target="_blank" class="btn btn-sm btn-success text-white">
              <i class="icofont-edit text-light" style="font-size: 14px"></i>
            </a>
            <a target="_blank" class="btn btn-sm btn-danger text-white">
              <i class="icofont-trash text-light" style="font-size: 14px"></i>
            </a>
          </td>
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
        { label: "Type", field: "type" },
        { label: "Fee", field: "fee_chamber" },
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
      return this.$store.getters["doctors/doctors"];
    },
    doctors_rows() {
      const data = [];
      for (let doctor of this.doctors) {
        console.log(doctor);
        const { name, specialty, mobile,type,fee_chamber } = doctor;
        data.push({ name, specialty,mobile,type,fee_chamber: `${fee_chamber} BDT` });
      }
      return data;
    },
  },
  mounted() {
    this.$store.dispatch("doctors/getDoctors");
  },
};
</script>

<style></style>
