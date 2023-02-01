<template>
  <div>
    <div
      class="offcanvas offcanvas-top w-100 h-100 p-2"
      :class="show ? 'show' : 'hide'"
      tabindex="-1"
      data-bs-scroll="true"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
 
      <div class="offcanvas-body">
        <div class="card border p-0 rounded shadow">
          <i class="icofont-info-circle text-info display-2 my-0 pt-2 px-2"></i>
          <div class="card-body my-0 py-0 pb-5">
            <h5 class="my-2">DECLARATION</h5>
            <p class="small fw-muted text-justify">
              sasthosebok.com is a complete online service oriented healthcare
              organization. The purpose of which is to ensure digital healthcare
              to the people of the country. Most of the people in the country
              face many difficulties in accessing health care for themselves or
              their families. Many of them do not know that healthcare can be
              ensured easily in this era of digitization.
            </p>
            <p class="small fw-muted text-justify">
              All the digital healthcare services you can enjoy through
              sasthosebok.com include specialist doctor appointments, dedicated
              home nursing services, instant blood pressure or diabetes tests or
              nebulizers through Sebok Partners, expert nutritionist advice,
              home physiotherapists Service is one of them.
            </p>
            <p class="small fw-muted text-justify">
              You can easily ensure the good health of your family by using the
              digital platform of sasthosebok.com Because no matter where we
              live, no matter how we live, first of all the happiness and peace
              of our family and loved ones is real. In order to keep our family
              a little better, we work inhumanly at home and abroad with a
              smile. So come to the digital platform of sasthosebok.com and keep
              yourself and your family well.
            </p>
          </div>
          <div class="card-footer acccept_btn border-0 bg-white">
            <button
              class="btn btn-dark text-white w-75 d-block mx-auto"
              @click="onAccept"
              data-bs-dismiss="offcanvas" aria-label="Close"
            >
              I Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isAccept() {
      return this.$store.getters["isAccept"];
    },
  },
  data() {
    return {
      show: true,
    };
  },
  methods: {
    onAccept() {
      this.show = !this.show;
      this.$store.commit("setAccept", true);
    },
  },
  mounted() {
    console.log(this.isAccept);

    if (this.isAccept == true) {
      console.log("Called");
      this.show = false;
    } else {
      this.show = true;
    }
  },
};
</script>

<style>
.offcanvas {
  /* height: 90%!important; */
}

.acccept_content {
  height: 100px;
  height: 100%;
  overflow-y: scroll;
}
.acccept_btn {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
}
</style>
