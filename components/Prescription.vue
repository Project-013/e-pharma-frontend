<template>
  <div class="">
    <div class="" id="printable_content">
      <!-- {{ doctor_info }}
      {{ doctor }} -->
      <div class="border rounded __prescription">
        <div class="__doctor_info p-4" style="background-color: #e1f9ff">
          <button
            type="button"
            class="btn btn-outline-secondary btn-sm mb-3 _edit_items ms-auto d-block"
            data-bs-toggle="modal"
            data-bs-target="#EditDoctorsInformation"
          >
            <i class="icofont-edit"></i>
          </button>
          <div>
            <h6 class="text-success fw-bold">{{ doctor_info.name }}</h6>
            <pre style="font-size: 10px" class="text-muted mb-1">{{
              doctor_info.qualifications
            }}</pre>
            <h6 class="fw-semibold mb-0 py-0" style="font-size: 13px">
              {{ doctor_info.specialist }}
            </h6>
            <pre style="font-size: 13px" class="fw-normal mb-1">{{
              doctor_info.experience
            }}</pre>
          </div>

          <!-- Modal Update Doctors Information-->
          <div
            class="modal fade"
            id="EditDoctorsInformation"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="EditDoctorsInformationLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="EditDoctorsInformationLabel">
                    Update Doctors Information
                  </h1>
                </div>
                <div class="modal-body">
                  <form class="">
                    <div class="row text-muted justify-content-center">
                      <div class="col-12">
                        <div class="mb-3">
                          <label for="floatingInput">Doctors Name</label>

                          <input
                            class="form-control"
                            rows="2"
                            placeholder="Enter Doctor Name"
                            v-model="doctor.name"
                          />
                        </div>
                        <div class="mb-3">
                          <label for="floatingInput">Speciality</label>
                          <input
                            class="form-control"
                            placeholder="specialist"
                            v-model="doctor.specialist"
                          />
                        </div>
                        <div class="mb-3">
                          <label for="floatingInput">Qualifications</label>

                          <textarea
                            class="form-control"
                            placeholder="Enter Doctor Name"
                            v-model="doctor.qualifications"
                            rows="2"
                          ></textarea>
                        </div>

                        <div class="mb-3">
                          <label for="floatingInput">Experience</label>

                          <textarea
                            class="form-control"
                            placeholder="experience"
                            v-model="doctor.experience"
                            rows="2"
                          ></textarea>
                        </div>
                        <div class="mb-3">
                          <label for="floatingInput">Chamber Address</label>

                          <textarea
                            class="form-control"
                            placeholder="chamber"
                            v-model="doctor.chamber"
                            rows="2"
                          ></textarea>
                        </div>
                        <div class="mb-3">
                          <label for="floatingInput">Days & Time</label>
                          <textarea
                            class="form-control"
                            placeholder="chamber_time"
                            v-model="doctor.chamber_time"
                            rows="2"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                    @click="onCancel"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    data-bs-dismiss="modal"
                    @click="onSave"
                    class="btn btn-primary"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button
            type="button"
            class="btn btn-outline-secondary btn-sm my-2 _edit_items ms-auto d-block"
            data-bs-toggle="modal"
            data-bs-target="#EditPatientformation"
          >
            <i class="icofont-edit"></i>
          </button>
          <div
            class="__patient_info px-4 border-top border-bottom border-dark d-flex justify-content-between"
          >
            <template v-for="(data, index) of patient">
              <p :key="index" class="my-0 py-1 small" style="font-size: 11px">
                <span class="text-capitalize fw-semibold">{{ index }}</span
                >: {{ data }}
              </p>
            </template>
          </div>

          <!-- Modal Update Patient Information-->
          <div
            class="modal fade"
            id="EditPatientformation"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="EditPatientformationLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="EditPatientformationLabel">
                    Update Patient Information
                  </h1>
                </div>
                <div class="modal-body">
                  <form class="">
                    <div class="row text-muted justify-content-center">
                      <div class="col-12">
                        <div class="mb-3">
                          <label for="floatingInput">Patient Name</label>
                          <input
                            class="form-control"
                            placeholder="Enter Patient Name"
                            v-model="patient.name"
                          />
                        </div>
                        <div class="mb-3">
                          <label for="floatingInput">Age</label>
                          <input
                            class="form-control"
                            placeholder="Enter Patient Age"
                            v-model="patient.age"
                          />
                        </div>
                        <div class="mb-3">
                          <label for="floatingInput">Sex</label>
                          <div class="d-flex">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="Sex"
                                id="Male"
                                value="Male"
                                v-model="patient.sex"
                              />
                              <label class="form-check-label" for="Male">
                                Male
                              </label>
                            </div>
                            <div class="form-check mx-3">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="Sex"
                                id="Female"
                                value="Female"
                                v-model="patient.sex"
                              />
                              <label class="form-check-label" for="Female">
                                Female
                              </label>
                            </div>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="Sex"
                                id="Others"
                                value="Others"
                                v-model="patient.sex"
                              />
                              <label class="form-check-label" for="Others">
                                Others
                              </label>
                            </div>
                          </div>
                        </div>
                        <div class="mb-3">
                          <label for="floatingInput">Date</label>
                          <input
                            class="form-control"
                            type="date"
                            placeholder="Enter Patient Name"
                            v-model="patient.date"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    data-bs-dismiss="modal"
                    class="btn btn-primary"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="__main_body row">
          <div class="col-4 border-end border-dark">
            <div class="p-4">
              <div class="pb-2">
                <h6 class="small mb-0 pb-0">Chief Complaint</h6>

                <ul class="ps-4">
                  <template
                    v-for="(data, index) in information.chief_complaint"
                  >
                    <li :key="index" style="font-size: 10px">{{ data }}</li>
                  </template>
                </ul>
              </div>
              <div class="pb-2">
                <h6 class="small mb-0 pb-0">History</h6>

                <ul class="ps-4">
                  <template v-for="(data, index) in information.history">
                    <li :key="index" style="font-size: 10px">{{ data }}</li>
                  </template>
                </ul>
              </div>
              <div class="pb-2">
                <h6 class="small mb-0 pb-0">On Examinations</h6>

                <ul class="ps-4">
                  <template
                    v-for="(data, index) in information.on_examinations"
                  >
                    <li :key="index" style="font-size: 10px">{{ data }}</li>
                  </template>
                </ul>
              </div>
              <div class="pb-2">
                <h6 class="small mb-0 pb-0">Diagnosis</h6>
                <ul class="ps-4">
                  <template v-for="(data, index) in information.diagnosis">
                    <li :key="index" style="font-size: 10px">{{ data }}</li>
                  </template>
                </ul>
              </div>
              <div class="pb-2">
                <h6 class="small mb-0 pb-0">investigations</h6>

                <ul class="ps-4">
                  <template v-for="(data, index) in information.investigations">
                    <li :key="index" style="font-size: 10px">{{ data }}</li>
                  </template>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-8 p-4">
            <div class="pb-5">
              <h6 class="mb-0 pb-0">Rx.</h6>
              <ol class="ps-4">
                <template v-for="drug in drugs">
                  <li :key="drug">
                    <h6 style="font-size: 10px" class="my-0 py-0 fw-semibold">
                      {{ drug.name }}
                    </h6>
                    <p style="font-size: 10px" class="py-0 my-0">
                      {{ drug.times }} ...............
                      {{ drug.when }} .................. {{ drug.duration }}
                    </p>
                  </li>
                </template>
              </ol>
            </div>
            <div class="pb-2">
              <h6 class="mb-0 pb-0">Advices.</h6>
              <ul class="ps-4">
                <template v-for="(data, index) in information.advices">
                  <li :key="index" style="font-size: 10px">{{ data }}</li>
                </template>
              </ul>
            </div>
            <div class="pb-2">
              <h6 class="mb-0 pb-0">Followup</h6>
              <ul class="ps-4">
                <template v-for="(data, index) in information.followup">
                  <li :key="index" style="font-size: 10px">{{ data }}</li>
                </template>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="__footer px-4 py-2 d-flex justify-content-between"
          style="background-color: #e1f9ff"
        >
          <div>
            <h6 class="fw-semibold my-0 py-1" style="font-size: 12px">
              চেম্বার-
            </h6>
            <pre style="font-size: 11px" class="text-muted mb-1">{{
              doctor.chamber
            }}</pre>
          </div>
          <div>
            <h6 class="fw-semibold my-0 py-1" style="font-size: 12px">
              রোগী দেখার সময়-
            </h6>
            <pre style="font-size: 11px" class="text-muted mb-1">{{
              doctor.chamber_time
            }}</pre>
          </div>
        </div>
      </div>
    </div>
    <div class="__footer bg-light p-3">
      <button class="btn btn-sm btn-dark" @click="printPrescription">
        Print Prescription
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      doctor: {
        name: "Dr. Sajib Sutradhar",
        qualifications:
          "MBBS, BCS (Health), MD (Cardiology) \nFCPS (Cardiology)",
        specialist: "Cardiology Specialist",
        experience:
          "Assistant Professor \nSylhet MAG Osmani Medical College & Hospital.",
        chamber: "ট্রাস্ট মেডিকেল লিঃ, কাজলশাহ ,সিলেট",
        chamber_time:
          "প্রতিদিন- বিকাল ৫টা থেকে রাত ৮টা \nশনি থেকে বৃহস্পতিবার (শুক্রবার বন্ধ)",
      },
      patient: {
        name: "Sajib Sutradhar",
        age: "24",
        sex: "Male",
        date: "24/4/2023",
      },
      information: {
        chief_complaint: ["Fever", "Cold"],
        history: ["HTN", "Br Astana"],
        on_examinations: ["Dehydration", "Dehydration", "Pulse- 85 bpm"],
        diagnosis: ["Virus fever"],
        investigations: ["CT Scan", "X-Ray"],
        followup: ["নিয়মিত ব্যায়াম করবেন", "বেশি বেশি পানি পান করবেন"],
        advices: ["সপ্তাহ পর টেস্ট রিপোর্ট নিয়ে আসবেন"],
      },
      drugs: [
        {
          name: "Tab. Zmax 500mg",
          times: "১+০+১",
          when: "খাবার আগে",
          duration: "৩দিন",
        },
        {
          name: "Tab. Paracitamol 500mg",
          times: "১+০+১",
          when: "খাবার আগে",
          duration: "৩দিন",
        },
      ],
    };
  },
  computed: {
    doctor_info() {
      return { ...this.$store.getters["getDoctor"] };
    },
  },
  methods: {
    onCancel() {
      this.doctor = { ...this.doctor_info };
    },
    onSave() {
      this.$store.commit("setDoctor", { ...this.doctor });
    },
    printPrescription() {
      // console.log("printPrescription called");
      // print();
      // Get HTML to print from element
      const prtHtml = document.getElementById("printable_content").innerHTML;

      // Get all stylesheets HTML
      let stylesHtml = "";
      for (const node of [
        ...document.querySelectorAll('link[rel="stylesheet"], style'),
      ]) {
        stylesHtml += node.outerHTML;
      }

      // Open the print window
      const WinPrint = window.open(
        " ",
        " ",
        "left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0"
      );

      WinPrint.document.write(`<!DOCTYPE html>
<html>
  <head>
    ${stylesHtml}
    <style>
      ._edit_items{
        display: none;
      }
    </style>
  </head>
  <body>
    ${prtHtml}
  </body>
</html>`);

      WinPrint.document.close();
      WinPrint.focus();
      WinPrint.print();
      // WinPrint.close();
    },
  },
  mounted() {
    this.doctor = { ...this.doctor_info };
  },
};
</script>

<style>
.__main_body li {
  font-weight: 400;
}
</style>
