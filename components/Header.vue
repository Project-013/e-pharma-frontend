<template>
  <header class="sticky-top">
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div class="container">
        <NLink class="navbar-brand d-none text-success d-lg-block" to="/">
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
        <div class="text-center">
          <NuxtLink class="btn btn-outline-dark" to="/signin">signin</NuxtLink>
          <NuxtLink class="btn btn-outline-dark" to="/signup">signup</NuxtLink>
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
  /* color: #11040a; */
}
.nuxt-link-exact-active {
  /* color: #11040a !important; */
}
</style>
