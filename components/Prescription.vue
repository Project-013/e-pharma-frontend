<template>
  <div class="">
    <div class="" id="printable_content">
      <div class="border rounded __prescription">
        <div class="__doctor_info p-4" style="background-color: #e1f9ff">
          <div class="mb-3 col-md-4 _edit_items" v-if="!$route.query.pres_id">
            <label for="floatingInput">Select Doctor</label>

            <select
              class="form-select form-select-sm"
              aria-label="Default select example"
              v-model="doctor_id"
              required
            >
              <template v-for="doctor in doctors">
                <option :value="doctor.id" :key="doctor.id">{{ JSON.parse(doctor.doctor).name }}--
                <small class="fw-semibold small" style="font-size: 10px">
                  {{ JSON.parse(doctor.doctor).qualifications }}</small
                ></option>
              </template>
            </select>
          </div>

          <div>
            <h6 class="text-success fw-bold">{{ doctor.name }}</h6>
            <pre style="font-size: 10px" class="text-muted mb-1">{{
              doctor.qualifications
            }}</pre>
            <h6 class="fw-semibold mb-0 py-0" style="font-size: 13px">
              {{ doctor.specialist }}
            </h6>
            <pre style="font-size: 13px" class="fw-normal mb-1">{{
              doctor.experience
            }}</pre>
          </div>
        </div>
        <div>
          <button
            type="button"
            class="btn btn-outline-secondary btn-sm my-2 _edit_items ms-3"
            data-bs-toggle="modal"
            data-bs-target="#EditPatientformation"
          >
            Edit Patient Information <i class="icofont-edit"></i>
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
        </div>
        <div class="__main_body row">
          <div class="col-4 border-end border-dark">
            <div class="p-4">
              <div class="pb-2">
                <div class="d-flex">
                  <h6 class="small mb-0 pb-0">Chief Complaint</h6>
                  <button
                    type="button"
                    class="btn btn-outline-secondary btn-sm _edit_items ms-auto"
                    data-bs-toggle="modal"
                    data-bs-target="#Add_chief_complaint"
                  >
                    <i class="icofont-plus"></i>
                  </button>
                </div>

                <ul class="ps-4">
                  <template v-if="!information.chief_complaint.length">
                    <li :key="index" style="font-size: 10px">N/A</li>
                  </template>
                  <template
                    v-for="(data, index) in information.chief_complaint"
                  >
                    <li :key="index" style="font-size: 10px">{{ data }}</li>
                  </template>
                </ul>
              </div>
              <div class="pb-2">
                <div class="d-flex">
                  <h6 class="small mb-0 pb-0">History</h6>
                  <button
                    type="button"
                    class="btn btn-outline-secondary btn-sm _edit_items ms-auto"
                    data-bs-toggle="modal"
                    data-bs-target="#Add_history"
                  >
                    <i class="icofont-plus"></i>
                  </button>
                </div>

                <ul class="ps-4">
                  <template v-if="!information.history.length">
                    <li :key="index" style="font-size: 10px">N/A</li>
                  </template>
                  <template v-for="(data, index) in information.history">
                    <li :key="index" style="font-size: 10px">{{ data }}</li>
                  </template>
                </ul>
              </div>
              <div class="pb-2">
                <div class="d-flex">
                  <h6 class="small mb-0 pb-0">On Examinations</h6>
                  <button
                    type="button"
                    class="btn btn-outline-secondary btn-sm _edit_items ms-auto"
                    data-bs-toggle="modal"
                    data-bs-target="#add_on_examinations"
                  >
                    <i class="icofont-plus"></i>
                  </button>
                </div>

                <ul class="ps-4">
                  <template v-if="!information.on_examinations.length">
                    <li :key="index" style="font-size: 10px">N/A</li>
                  </template>
                  <template
                    v-for="(data, index) in information.on_examinations"
                  >
                    <li :key="index" style="font-size: 10px">{{ data }}</li>
                  </template>
                </ul>
              </div>
              <div class="pb-2">
                <div class="d-flex">
                  <h6 class="small mb-0 pb-0">Diagnosis</h6>
                  <button
                    type="button"
                    class="btn btn-outline-secondary btn-sm _edit_items ms-auto"
                    data-bs-toggle="modal"
                    data-bs-target="#add_diagnosis"
                  >
                    <i class="icofont-plus"></i>
                  </button>
                </div>
                <ul class="ps-4">
                  <template v-if="!information.diagnosis.length">
                    <li :key="index" style="font-size: 10px">N/A</li>
                  </template>
                  <template v-for="(data, index) in information.diagnosis">
                    <li :key="index" style="font-size: 10px">{{ data }}</li>
                  </template>
                </ul>
              </div>
              <div class="pb-2">
                <div class="d-flex">
                  <h6 class="small mb-0 pb-0">Investigations</h6>
                  <button
                    type="button"
                    class="btn btn-outline-secondary btn-sm _edit_items ms-auto"
                    data-bs-toggle="modal"
                    data-bs-target="#add_investigations"
                  >
                    <i class="icofont-plus"></i>
                  </button>
                </div>

                <ul class="ps-4">
                  <template v-if="!information.investigations.length">
                    <li :key="index" style="font-size: 10px">N/A</li>
                  </template>
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
              <template v-if="!drugs.length">
                <small :key="index" class="ms-3" style="font-size: 10px"
                  >No drug selected!</small
                >
              </template>
              <ol class="ps-4">
                <template v-for="drug in drugs">
                  <li :key="drug">
                    <h6 style="font-size: 10px" class="my-0 py-0 fw-semibold">
                      {{ drug.name }}
                    </h6>
                    <p style="font-size: 10px" class="py-0 my-0">
                      {{ drug.times }} ...............
                      {{ drug.when }} .................. {{ drug.duration }}Days
                    </p>
                  </li>
                </template>
              </ol>
              <button
                type="button"
                class="btn btn-outline-secondary btn-sm _edit_items mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#add_medicine"
              >
                Add Drug <i class="icofont-plus"></i>
              </button>
            </div>
            <div class="pb-2">
              <div class="d-flex">
                <h6 class="small mb-0 pb-0">Advices</h6>
                <button
                  type="button"
                  class="btn btn-outline-secondary btn-sm _edit_items ms-auto"
                  data-bs-toggle="modal"
                  data-bs-target="#add_advices"
                >
                  <i class="icofont-plus"></i>
                </button>
              </div>
              <ul class="ps-4">
                <template v-if="!information.advices.length">
                  <li :key="index" style="font-size: 10px">N/A</li>
                </template>
                <template v-for="(data, index) in information.advices">
                  <li :key="index" style="font-size: 10px">{{ data }}</li>
                </template>
              </ul>
            </div>
            <div class="pb-2">
              <div class="d-flex">
                <h6 class="small mb-0 pb-0">Followup</h6>
                <button
                  type="button"
                  class="btn btn-outline-secondary btn-sm _edit_items ms-auto"
                  data-bs-toggle="modal"
                  data-bs-target="#add_followup"
                >
                  <i class="icofont-plus"></i>
                </button>
              </div>
              <ul class="ps-4">
                <template v-if="!information.followup.length">
                  <li :key="index" style="font-size: 10px">N/A</li>
                </template>
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
    <!-- {{ drugs_list }} -->
    <!-- Modal add_medicine-->
    <div
      class="modal fade"
      id="add_medicine"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="add_medicineLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="add_medicineLabel">Add Drug</h1>
          </div>
          <div class="modal-body">
            <form class="">
              <div class="row text-muted justify-content-center">
                <div class="col-12">
                  <div class="mb-3">
                    <label for="floatingInput">Drug Name</label>
                    <input
                      class="form-control"
                      placeholder="Enter Drug Name"
                      v-model="drug.name"
                      list="drug_name_list"
                      required
                    />
                  </div>
                </div>
                <datalist id="drug_name_list">
                  <template v-for="drug in sortedDrugs">
                    <option :key="drug.id">
                      {{ drug.medicine_type }}. {{ drug.medicine_name }} ({{
                        drug.weight
                      }})
                    </option>
                  </template>
                </datalist>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label for="floatingInput">Times</label>

                    <select
                      class="form-select"
                      aria-label="Default select example"
                      v-model="drug.times"
                      required
                    >
                      <template v-for="time in times">
                        <option :value="time" :key="time">{{ time }}</option>
                      </template>
                    </select>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label for="floatingInput">When</label>

                    <select
                      class="form-select"
                      aria-label="Default select example"
                      v-model="drug.when"
                      required
                    >
                      <option value="খাবার আগে">খাবার আগে</option>
                      <option value="খাবার আগে">খাবার পর</option>
                    </select>
                  </div>
                </div>

                <div class="col-12">
                  <div class="mb-3">
                    <label for="floatingInput">Duration (Days)</label>
                    <input
                      class="form-control"
                      placeholder="Enter duration "
                      v-model="drug.duration"
                      type="number"
                      required
                    />
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
              @click="onCancelMedicine"
            >
              Cancel
            </button>
            <button
              type="button"
              data-bs-dismiss="modal"
              class="btn btn-primary"
              @click="addMedicine"
            >
              Add Medicine
            </button>
          </div>
        </div>
      </div>
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
    <!-- Modal chief_complaient -->
    <div
      class="modal fade"
      id="Add_chief_complaint"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="Add_chief_complaintLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="Add_chief_complaint">
              Add chief complaint
            </h1>
          </div>
          <div class="modal-body">
            <template v-for="data in data_list.chief_complaient">
              <div class="form-check form-check-inline" :key="data.id">
                <input
                  class="form-check-input"
                  type="checkbox"
                  :value="data.chief_complaient"
                  v-model="information.chief_complaint"
                  :id="`chief_complaient${data.id}`"
                />
                <label
                  class="form-check-label"
                  :for="`chief_complaient${data.id}`"
                >
                  {{ data.chief_complaient }}
                </label>
              </div>
            </template>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              data-bs-dismiss="modal"
              class="btn btn-primary"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal history -->
    <div
      class="modal fade"
      id="Add_history"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="Add_historyLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="Add_history">Add History</h1>
          </div>
          <div class="modal-body">
            <template v-for="data in data_list.history">
              <div class="form-check form-check-inline" :key="data.id">
                <input
                  class="form-check-input"
                  type="checkbox"
                  :value="data.history"
                  v-model="information.history"
                  :id="`history${data.id}`"
                />
                <label class="form-check-label" :for="`history${data.id}`">
                  {{ data.history }}
                </label>
              </div>
            </template>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              data-bs-dismiss="modal"
              class="btn btn-primary"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal add_on_examinations -->
    <div
      class="modal fade"
      id="add_on_examinations"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="add_on_examinationsLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="">Add Examinations</h1>
          </div>
          <div class="modal-body">
            <template v-for="data in data_list.examinations">
              <div class="form-check form-check-inline" :key="data.id">
                <input
                  class="form-check-input"
                  type="checkbox"
                  :value="data.examinations"
                  v-model="information.on_examinations"
                  :id="`on_examinations${data.id}`"
                />
                <label
                  class="form-check-label"
                  :for="`on_examinations${data.id}`"
                >
                  {{ data.examinations }}
                </label>
              </div>
            </template>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              data-bs-dismiss="modal"
              class="btn btn-primary"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal diagnosis -->
    <div
      class="modal fade"
      id="add_diagnosis"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="add_diagnosisLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="">Add Diagnosis</h1>
          </div>
          <div class="modal-body">
            <template v-for="data in data_list.diagosis">
              <div class="form-check form-check-inline" :key="data.id">
                <input
                  class="form-check-input"
                  type="checkbox"
                  :value="data.diagosis"
                  v-model="information.diagnosis"
                  :id="`diagnosis${data.id}`"
                />
                <label class="form-check-label" :for="`diagnosis${data.id}`">
                  {{ data.diagosis }}
                </label>
              </div>
            </template>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              data-bs-dismiss="modal"
              class="btn btn-primary"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal investigations -->
    <div
      class="modal fade"
      id="add_investigations"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="add_investigationsLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="">Add Investigations</h1>
          </div>
          <div class="modal-body">
            <template v-for="data in data_list.investigations">
              <div class="form-check form-check-inline" :key="data.id">
                <input
                  class="form-check-input"
                  type="checkbox"
                  :value="data.investigations"
                  v-model="information.investigations"
                  :id="`investigations${data.id}`"
                />
                <label
                  class="form-check-label"
                  :for="`investigations${data.id}`"
                >
                  {{ data.investigations }}
                </label>
              </div>
            </template>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              data-bs-dismiss="modal"
              class="btn btn-primary"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal advices -->
    <div
      class="modal fade"
      id="add_advices"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="add_advicesLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="">Add Advices</h1>
          </div>
          <div class="modal-body">
            <template v-for="data in data_list.advices">
              <div class="form-check form-check-inline" :key="data.id">
                <input
                  class="form-check-input"
                  type="checkbox"
                  :value="data.advices"
                  v-model="information.advices"
                  :id="`advices${data.id}`"
                />
                <label class="form-check-label" :for="`advices${data.id}`">
                  {{ data.advices }}
                </label>
              </div>
            </template>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              data-bs-dismiss="modal"
              class="btn btn-primary"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--  Modal followup -->
    <div
      class="modal fade"
      id="add_followup"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="add_followupLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="">Add Followup</h1>
          </div>
          <div class="modal-body">
            <template v-for="data in data_list.followup">
              <div class="form-check form-check-inline" :key="data.id">
                <input
                  class="form-check-input"
                  type="checkbox"
                  :value="data.followup"
                  v-model="information.followup"
                  :id="`followup${data.id}`"
                />
                <label class="form-check-label" :for="`followup${data.id}`">
                  {{ data.followup }}
                </label>
              </div>
            </template>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              data-bs-dismiss="modal"
              class="btn btn-primary"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal followup -->
    <div
      class="modal fade"
      id="add_followup"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="add_followupLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="">Add Followup</h1>
          </div>
          <div class="modal-body">
            <template v-for="data in data_list.followup">
              <div class="form-check form-check-inline" :key="data.id">
                <input
                  class="form-check-input"
                  type="checkbox"
                  :value="data.followup"
                  v-model="information.followup"
                  :id="`followup${data.id}`"
                />
                <label class="form-check-label" :for="`followup${data.id}`">
                  {{ data.followup }}
                </label>
              </div>
            </template>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              data-bs-dismiss="modal"
              class="btn btn-primary"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="__footer bg-light p-3">
      <button
        class="btn btn-sm btn-dark"
        v-if="$route.query.pres_id"
        @click="updatePrescription"
      >
        Update Prescription
      </button>
      <button class="btn btn-sm btn-dark" v-else @click="savePrescription">
        Save Prescription
      </button>
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
      // doctor_info: this.getDoctorInfo,
      doctor_id:"",
      doctor: {
        name: "",
        qualifications: "",
        specialist: "",
        experience: "",
        chamber: "",
        chamber_time: "",
      },
      patient: {
        name: "",
        age: "",
        sex: "",
        date: "",
      },
      information: {
        chief_complaint: [],
        history: [],
        on_examinations: [],
        diagnosis: [],
        investigations: [],
        followup: [],
        advices: [],
      },
      drug: {
        name: "",
        times: "",
        when: "",
        duration: "",
      },
      drugs: [],
      times: ["1+1+1", "1+0+1", "0+1+1", "1+1+0", "0+0+1", "0+1+0", "1+0+0"],
    };
  },
  computed: {
    doctors() {
      return [...this.$store.getters["prescription/getDoctor"]];
    },
    get_pres() {
      const prescriptions = [
        ...this.$store.getters["prescription/getPresList"],
      ];
      const pres = prescriptions.find(
        (pres) => pres.id == this.$route.query.pres_id
      );
      return pres;
    },
    getUserID() {
      if (this.$auth.user.phone) {
        return this.$auth.user.id;
      }
      return "";
    },

    data_list() {
      return { ...this.$store.getters["prescription/getData"] };
    },
    drugs_list() {
      return this.$store.getters["product/drugs"];
    },
    sortedDrugs() {
      let drug_list = this.drugs_list;

      drug_list = drug_list.filter(({ medicine_name }) => {
        return this.drug.name
          ? medicine_name.toUpperCase().includes(this.drug.name.toUpperCase())
          : true;
      });

      return drug_list;
    },
  },
  methods: {


    addMedicine() {
      this.drugs.push(this.drug);
      this.drug = {
        name: "",
        times: "",
        when: "",
        duration: "",
      };
    },
    onCancelMedicine() {
      this.drug = {
        name: "",
        times: "",
        when: "",
        duration: "",
      };
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
    savePrescription() {
      const prescription = {
        doctor: this.doctor,
        patient: this.patient,
        information: this.information,
        drugs: this.drugs,
      };
      // console.log(payload);
      const payload = {
        prescription: JSON.stringify(prescription),
        user_id: this.getUserID,
      };
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        this.$axios
          .post(`/prescription/pres/`, payload, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            if (res.status === 201) {
              this.$toast.success("Success! ");
              this.$router.push(`/prescription`);
            } else {
              this.$toast.error("Error found! Try again");
            }
              this.$store.dispatch("prescription/getPrescriptions");


            this.$nuxt.$loading.finish();
          })

          .catch((error) => {
            this.$toast.error("Error found! Try again");

            console.log(error.response);
            this.$nuxt.$loading.finish();
            console.log(error.message || error.response.data.message);
          });
      });

      return;
    },
    updatePrescription() {
      const prescription = {
        doctor: this.doctor,
        patient: this.patient,
        information: this.information,
        drugs: this.drugs,
      };
      // console.log(payload);
      const payload = {
        prescription: JSON.stringify(prescription),
        user_id: this.getUserID,
      };
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        this.$axios
          .put(`prescription/pres/${this.$route.query.pres_id}`, payload, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            console.log(res);
            if (res.status === 200) {
              this.$toast.success("Success! ");
              this.$router.push(`/prescription`);
              this.$store.dispatch("prescription/getPrescriptions");
            } else {
              this.$toast.error("Error found! Try again");
            }

            this.$nuxt.$loading.finish();
          })

          .catch((error) => {
            this.$toast.error("Error found! Try again");

            console.log(error.response);
            this.$nuxt.$loading.finish();
            console.log(error.message || error.response.data.message);
          });
      });

      return;
    },
    getPrescriptionInfo() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        this.$axios
          .get(`prescription/pres/${this.$route.query.pres_id}`, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            console.log(res.data.prescription);
            const pres = JSON.parse(res.data.prescription);
            this.patient = pres.patient;
            this.drugs = pres.drugs;
            this.information = pres.information;
            this.doctor = pres.doctor;

            this.$nuxt.$loading.finish();
          })

          .catch((error) => {
            this.$toast.error("Error found! Try again");

            console.log(error.response);
            this.$nuxt.$loading.finish();
            console.log(error.message || error.response.data.message);
          });
      });

      return;
    },
  },
  watch:{
    "doctor_id"(newValue) {
      console.log(newValue);
      const doctor = this.doctors.find(
        (doc) => doc.id == newValue
      );
      this.doctor = JSON.parse(doctor.doctor)
      
    },

  },
  mounted() {
    // this.$store.dispatch("prescription/getPrescriptions");

    if (this.$route.query.pres_id) {
      this.getPrescriptionInfo();
    }
  },
};
</script>

<style>
.__main_body li {
  font-weight: 400;
}
</style>
