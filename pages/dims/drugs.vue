<template>
  <div class="container pb-5 pt-3 mb-5">
    <div class="col-md-5 mx-auto">
      <div v-if="generic">
        <h6>Brands of: {{ generic }}</h6>

        <div class="rounded border bg-white mb-4">
          <div class="d-flex align-items-center rounded">
            <img
              src="/img/icons/search.svg"
              style="width: 18px"
              alt=""
              class="ms-3"
            />
            <input
              type="search"
              class="form-control border-0 my-0"
              placeholder="Search By Company Name"
              v-model="brand_name"
            />
          </div>
        </div>
      </div>
      <div class="rounded border bg-white mb-4" v-else>
        <div class="d-flex align-items-center rounded">
          <img
            src="/img/icons/search.svg"
            style="width: 18px"
            alt=""
            class="ms-3"
          />
          <input
            type="search"
            class="form-control border-0 my-0"
            placeholder="Search By Name"
            v-model="medicine_name"
          />
        </div>
      </div>
      <ul class="list-group" v-for="(drug, index) in sortedDrugs" :key="index">
        <li
          class="list-group-item my-1"
          style="cursor:pointer;"
          data-bs-toggle="modal"
          :data-bs-target="`#exampleModal${index}`"
        >
          <div class="row drugs">
            <div
              class="col-4 d-flex flex-column justify-content-center align-items-center position-relative"
            >
              <span
                class="fw-semibold medicine_type text-primary border border-primary mb-1"
                >{{ drug.medicine_type }}</span
              >
              <img src="/img/services/drugs.png" width="40" class="my-4" />
            </div>
            <div class="col-8">
              <h6 class="mb-0">{{ drug.medicine_name }}</h6>
              <p class="my-0 py-0">{{ drug.weight }}</p>
              <p class="my-0 py-0">{{ drug.generic_name }}</p>
              <p class="my-0 py-0 fw-semibold text-success">
                {{ drug.brand_name }}
              </p>
            </div>
          </div>
        </li>
        <div
          class="modal fade"
          :id="`exampleModal${index}`"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  {{ drug.medicine_name }} <span style="font-weight:400; font-size:11px;">({{ drug.weight }})</span>
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
                  <div class="card-body p- py-3">
                    <pre class="fw-normal">{{drug.description}}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ul>
      <div class="alert alert-warning" role="alert" v-if="!sortedDrugs.length">
        Nothing Found!
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    generic() {
      return this.$route.query.generic;
    },
    drugs() {
      return this.$store.getters["product/drugs"];
    },
    sortedDrugs() {
      let drug_list = this.drugs;
      if (this.generic) {
        drug_list = this.drugs.filter(
          ({ generic_name }) => generic_name == this.generic
        );
      }
      drug_list = drug_list.filter(({ medicine_name }) => {
        return this.medicine_name
          ? medicine_name
              .toUpperCase()
              .includes(this.medicine_name.toUpperCase())
          : true;
      });
      drug_list = drug_list.filter(({ brand_name }) => {
        return this.brand_name
          ? brand_name.toUpperCase().includes(this.brand_name.toUpperCase())
          : true;
      });
      return drug_list;
    },
  },
  data() {
    return {
      medicine_name: "",
      brand_name: "",
    };
  },
};
</script>
<style scoped>
.medicine_type {
  font-size: 10px;
  padding: 2px 6px;
  width: 100%;
  text-align: center;
  border-radius: 12px 0px;
  position: absolute;
  top: 0;
  /* background-color: #eceff3; */
}
h6{
    font-size: 90%;
}
.drugs p {
  font-size: 12px;
  line-height: 1.7;
}
</style>
