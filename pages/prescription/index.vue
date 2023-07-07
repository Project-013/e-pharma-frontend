<template>
  <div class="container pb-5 pt-3 mb-5">
    <div class="row shadow">
      <div class="col-md-7 mx-auto">
        <div class="d-flex justify-content-between my-3">
          <h6>Prescriptions</h6>
          <NuxtLink
            to="/prescription/create"
            class="btn btn-sm btn-outline-dark"
            >Add Prescription <i class="icofont-plus"></i
          ></NuxtLink>
        </div>
        <hr />
        <ul class="list-group">
          <template v-for="prescription in prescriptions">
            <NuxtLink
              :to="`/prescription/create?pres_id=${prescription.id}`"
              class="list-group-item shadow py-2 d-flex justify-content-between fw-bold"
              :key="prescription.id"
            >
              <span>
                #{{ prescription.id }}
                {{ JSON.parse(prescription.prescription).patient.name }} -
                <small class="fw-semibold">{{
                  JSON.parse(prescription.prescription).patient.date
                }}</small>
              </span>
              <span><i class="icofont-edit"></i></span>


            </NuxtLink>
          </template>
        </ul>
        <div
          class="alert alert-warning"
          v-if="!prescriptions.length"
          role="alert"
        >
          Nothing Found!
        </div>
      </div>
      <div class="col-md-5 mx-auto">
        <div class="d-flex justify-content-between my-3">
          <h6>Doctors</h6>

          <NuxtLink
            to="/prescription/doctor"
            class="btn btn-sm btn-outline-dark"
            >Add Doctors <i class="icofont-plus"></i
          ></NuxtLink>
        </div>
        <hr />
        <ul class="list-group">
          <template v-for="doctor in doctors">
            <NuxtLink
              :to="`/prescription/doctor?doctor_id=${doctor.id}`"
              class="list-group-item shadow py-2 d-flex justify-content-between fw-bold"
              :key="doctor.id"
            >
              <span>
                {{ JSON.parse(doctor.doctor).name }}
                <small class="fw-semibold small" style="font-size: 10px">
                  {{ JSON.parse(doctor.doctor).qualifications }}</small
                >
              </span>

              <span><i class="icofont-edit"></i></span>
            </NuxtLink>
          </template>
        </ul>
        <div
          class="alert alert-warning"
          v-if="!doctors.length"
          role="alert"
        >
          Nothing Found!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // doctors: [],
      doctor: {
        name: "Dr. Xyz",
        qualifications: "MBBS,FCPS,(Medicine)",
        specialist: "Medicine Specialist",
        experience:
          "Medical Officer \nSylhet MAG Osmani Medical College & Hospital.",
        chamber: "Comfort Medical Services, Kajalshah, Sylhet.",
        chamber_time:
          "প্রতিদিন- বিকাল ৩টা থেকে রাত ৮টা \nশনি থেকে বৃহস্পতিবার (শুক্রবার বন্ধ)",
      },
    };
  },
  computed: {
    prescriptions() {
      return [...this.$store.getters["prescription/getPresList"]];
    },
    doctors() {
      return [...this.$store.getters["prescription/getDoctor"]];
    },
  },
  methods: {},
  mounted() {},
};
</script>

<style></style>
