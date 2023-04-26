<template>
  <div class="container">
    <div class="card shadow p-0 border-0 my-3">
      <DataTable
        title="Guidelines"
        :columns="guidelines_columns"
        :rows="guidelines"
      >
        <th slot="thead-tr">Actions</th>
        <template slot="tbody-tr" slot-scope="props">
          <td style="width: 190px">
            <a
              :href="props.row.paper"
              target="_blank"
              class="btn btn-sm btn-dark"
            >
              <i
                class="icofont-download text-white icofont_icon"
                style="font-size: 14px"
              ></i>
            </a>
            <a
              :href="props.row.paper"
              target="_blank"
              class="btn btn-sm btn-success text-white"
            >
              <i class="icofont-edit text-light" style="font-size: 14px"></i>
            </a>
            <a
              :href="props.row.paper"
              target="_blank"
              class="btn btn-sm btn-danger text-white"
            >
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
  name: "Guidelines",
  layout: "admin",
  beforeCreate() {
    if (!this.$auth.$state.loggedIn || this.$auth.user.is_admin === false) {
      this.$router.push("/");
    }
  },
  head() {
    return {
      title: "Admin || Guidelines ",
    };
  },
  computed: {},
  data() {
    return {
      guidelines: [],
      guidelines_columns: [
        { label: "Title", field: "title" },
        // { label: "Paper", field: "paper", html: true },
      ],
    };
  },
  methods: {
    async getGuidelines() {
      this.$nextTick(() => {
        this.$axios
          .get(`guidelines`)
          .then((res) => {
            if (res.status === 200) {
              this.guidelines = res.data;
            }
          })
          .catch((error) => {
            console.log(error.response);
            console.log(error.response.data.message || error.message);
            // context.commit('error', error)
          });
      });
    },
  },
  mounted() {
    this.getGuidelines();
  },
};
</script>

<style scoped>
.icofont_icon {
  font-size: 12px !important;
}
</style>
