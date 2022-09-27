<template>
  <header class="sticky-top">
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div class="container">
        <NLink
          class="navbar-brand text-success d-flex align-items-center"
          to="/"
        >
          <img src="../static/img/logo.png" alt="me" width="50" />
          <!-- <p class="small ms-2" style="font-size: 15px">
            জরুরী মুহুর্তে, <br />
            জীবনের প্রয়োজনে
          </p> -->
        </NLink>

        <button
          class="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse mx-auto"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav mx-auto align-items-center">
            <li class="nav-item">
              <NLink class="nav-link" aria-current="page" to="/"> Home </NLink>
            </li>
            <li class="nav-item">
              <NLink class="nav-link" to="/doctors">Find Doctorts </NLink>
            </li>
            <li class="nav-item">
              <NLink class="nav-link" to="/call-doctors">Call Doctor </NLink>
            </li>
            <li class="nav-item">
              <NLink class="nav-link" to="/about"> Who we are? </NLink>
            </li>
            <li class="nav-item">
              <NLink class="nav-link" to="/contact-us"> Contact us</NLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style>
.navbar-nav li a:hover {
  color: #ff0065;
}
.nuxt-link-exact-active {
  color: #ff0065 !important;
}
</style>
