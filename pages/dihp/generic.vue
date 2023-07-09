<template>
  <div class="container pb-5 pt-3 mb-5">
    <!-- {{genericList}} -->
    <div class="col-md-5 mx-auto">
      <h6>Drugs by Generic</h6>
      <ul
        class="list-group"
        v-for="(generic, index) in genericList"
        :key="index"
      >
        <li class="list-group-item my-1">
          <NuxtLink
            :to="`/dihp/drugs?generic=${generic.replace(/\+/g,'-plus-')}`"
            class="link-dark fw-semibold small d-flex justify-content-center align-items-center"
          >
            <div>
              <img src="/img/services/pills2.png" width="20" class="me-2" />
              {{ generic }}
            </div>
            <i class="icofont-arrow-right ms-auto"></i>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    drugs() {
      return this.$store.getters["product/drugs"];
    },
    genericList() {
      const generic = [];
      for (const drug of this.drugs) {
        const generic_name = drug.generic_name;
        // console.log(drug.generic_name);
        if (!generic.includes(generic_name)) {
          generic.push(generic_name);
        }
      }
      return generic;
    },
  },
};
</script>

<style></style>
