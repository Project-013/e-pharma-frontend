<template>
  <div>
    <ul class="navbar-nav mx-auto mt-lg-0">
      <li class="nav-item">
        <NLink class="nav-link" aria-current="page" to="/"> Home </NLink>
      </li>

      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Services
        </a>
        <ul class="dropdown-menu">
          <li>
            <NLink class="dropdown-item" to="/doctors"> Find Doctorts </NLink>
          </li>

          <li>
            <NLink class="dropdown-item" to="/nurse"> Find Nurse </NLink>
          </li>
          <li>
            <NLink class="dropdown-item" to="/caregivers">
              Find Caregivers
            </NLink>
          </li>

          <li>
            <NLink class="dropdown-item" to="/physiotherapist">
              Find Physiotherapist
            </NLink>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Doctors
        </a>
        <ul class="dropdown-menu">
          <li>
            <NLink class="dropdown-item" to="/doctors"> Find Doctorts </NLink>
          </li>
        </ul>
      </li>
      <li class="nav-item d-none">
        <NLink class="nav-link" to="/blog"> Blog </NLink>
      </li>
      <li class="nav-item">
        <NLink class="nav-link" to="/about"> What are we? </NLink>
      </li>
      <li class="nav-item">
        <NLink class="nav-link" to="/contact-us"> Contact us</NLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
