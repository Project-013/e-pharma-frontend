<template>
  <div class="container pb-5 pt-3 mb-5">
    <div class="row shadow p-3 rounded" v-if="$auth.loggedIn">
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
            <li
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
              <div>
                <NuxtLink
                  :to="`/prescription/create?pres_id=${prescription.id}`"
                  class="btn btn-sm btn-dark"
                >
                  <span><i class="icofont-eye"></i></span>
                </NuxtLink>
                <NuxtLink
                  :to="`/prescription/create?pres_id=${prescription.id}`"
                  class="btn btn-sm btn-success"
                >
                  <span><i class="icofont-edit"></i></span>
                </NuxtLink>
                <button
                  class="btn btn-sm btn-danger"
                  @click="onDeletePrescriptions(`${prescription.id}`)"
                >
                  <i class="icofont-trash"></i>
                </button>
              </div>
            </li>
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
            <l
              class="list-group-item shadow py-2 d-flex justify-content-between fw-bold"
              :key="doctor.id"
            >
              <span>
                {{ JSON.parse(doctor.doctor).name }}
                <small class="fw-semibold small" style="font-size: 10px">
                  {{ JSON.parse(doctor.doctor).qualifications }}</small
                >
              </span>
              <div>
                <NuxtLink
                  :to="`/prescription/doctor?doctor_id=${doctor.id}`"
                  class="btn btn-sm btn-dark"
                >
                  <span><i class="icofont-eye"></i></span>
                </NuxtLink>
                <NuxtLink
                  :to="`/prescription/doctor?doctor_id=${doctor.id}`"
                  class="btn btn-sm btn-success"
                >
                  <span><i class="icofont-edit"></i></span>
                </NuxtLink>
                <button
                  class="btn btn-sm btn-danger"
                  @click="onDeleteDoctor(`${doctor.id}`)"
                >
                  <i class="icofont-trash"></i>
                </button>
              </div>
            </l>
          </template>
        </ul>
        <div class="alert alert-warning" v-if="!doctors.length" role="alert">
          Nothing Found!
        </div>
      </div>
    </div>
    <div class="alert alert-warning" v-else role="alert">
      <p class="text-center my-3">
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
      </p>
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
  methods: {
    async onDeleteDoctor(id) {
      const confirm = window.confirm("Are You Sure ?");
      if (confirm == false) {
        return;
      }
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        this.$axios
          .delete(`prescription/doctor/` + id, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            this.$store.dispatch("prescription/getDoctors");
            console.log(res);
            // console.log(res);
            if (res.status === 201) {
            }
            this.$nuxt.$loading.finish();
          })
          .catch((error) => {
            console.log(error);
            this.$nuxt.$loading.finish();
            console.log(error.message || error.response.data.message);
          });
      });

      return;
    },
    async onDeletePrescriptions(id) {
      const confirm = window.confirm("Are You Sure ?");
      if (confirm == false) {
        return;
      }
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        this.$axios
          .delete(`prescription/pres/` + id, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            this.$store.dispatch("prescription/getPrescriptions");
            console.log(res);
            // console.log(res);
            if (res.status === 201) {
            }
            this.$nuxt.$loading.finish();
          })
          .catch((error) => {
            console.log(error);
            this.$nuxt.$loading.finish();
            console.log(error.message || error.response.data.message);
          });
      });

      return;
    },
  },
  mounted() {},
};
</script>

<style></style>
