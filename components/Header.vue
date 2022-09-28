<template>
  <header class="sticky-top">
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div class="container">
        <NLink class="navbar-brand d-none text-success d-lg-block" to="/">
          <img src="../static/img/logo.png" alt="sasthosebok.com" width="50" />
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
          <!-- <span class="navbar-toggler-icon"></span> -->
          <img src="../static/img/icons/menu.svg" alt="me" width="30" />
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
        <div class="ms-auto">
          <template v-if="$auth.loggedIn">
            <span class="dropdown text-light">
              <a
                class="dropdown-toggle text-dark border rounded p-2 text-decoration-none"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span style="font-size: 14px">
                  welcome

                  <small class="" style="font-weight: 500; color: #084298">{{
                    $auth.user.full_name
                  }}</small
                  >!
                </span>

                <img
                  src="../static/img/icons/user_icon.svg"
                  alt="user icon"
                  width="35"
                />
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end mt-3 text-small"
                aria-labelledby=""
              >
                <li>
                  <NuxtLink to="/profile" class="dropdown-item">
                    Profile
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="profile/setting" class="dropdown-item">
                    Settings
                  </NuxtLink>
                </li>
                <div class="dropdown-divider"></div>
                <li>
                  <a
                    style="cursor: pointer"
                    class="dropdown-item pointer"
                    @click="$auth.logout()"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </span>
          </template>
          <template v-else>
            <NuxtLink class="" to="/auth/login">
              <small class="btn btn-secondary btn-sm px-4">Login </small>
            </NuxtLink>
            <NuxtLink class="" to="/auth/register">
              <small class="btn btn-secondary btn-sm px-3">Register</small>
            </NuxtLink>
          </template>
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
  color: red;
}
.nuxt-link-exact-active {
  color: red !important;
}
</style>
