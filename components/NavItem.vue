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
            <NLink class="dropdown-item" to="/doctors"> Find Doctors </NLink>
          </li>

          <li>
            <NLink class="dropdown-item" to="/nurse">
              Find Nurse/Caregiver
            </NLink>
          </li>
          <li>
            <NLink class="dropdown-item" to="/physiotherapist">
              Find Physiotherapist
            </NLink>
          </li>
          <li>
            <NLink class="dropdown-item" to="/medicine">
              Medcine Home Delivery
            </NLink>
          </li>
          <li>
            <NLink class="dropdown-item" to="/diagnostic">
              Mobile Diagnostic
            </NLink>
          </li>
          <li>
            <NLink class="dropdown-item" to="/pharmacy"> Find Pharmacy </NLink>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown d-none">
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
            <NLink class="dropdown-item" to="/doctors/?stype=Private-Chamber">
              Private Chamber</NLink
            >
          </li>
          <li>
            <NLink class="dropdown-item" to="/doctors/?stype=Home-Call">
              Home Call</NLink
            >
          </li>
          <li>
            <NLink class="dropdown-item" to="/doctors/?stype=Video-Call">
              Video Call (Telemedicine)</NLink
            >
          </li>
        </ul>
      </li>

      <li class="nav-item">
        <NLink class="nav-link" to="/guidelines"> Guidelines </NLink>
      </li>
      <li class="nav-item">
        <NLink class="nav-link" to="/blog"> Blog </NLink>
      </li>
      <li class="nav-item">
        <NLink class="nav-link" to="/shop"> Shop </NLink>
      </li>
      <li class="nav-item">
        <NLink class="nav-link" to="/bmi"> BMI Calculator </NLink>
      </li>
      <li class="nav-item">
        <NLink class="nav-link" to="/career">Career</NLink>
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
