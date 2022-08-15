<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg  fixed-top background ">
    <!-- bg-info navbar-info -->
    <div class="container">
      <a href="#" class="navbar-brand">E-Pharma</a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navmenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navmenu">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a href="#home" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a href="#shop" class="nav-link">Shop</a>
          </li>
          <li class="nav-item">
            <a href="#services" class="nav-link">Services</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#pages"
              role="button"
              data-bs-toggle="dropdown"
              >Pages</a
            >
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Page-1</a></li>
              <li><a class="dropdown-item" href="#">Page-2</a></li>
              <li><a class="dropdown-item" href="#">Page-3</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#blog" class="nav-link">Blog</a>
          </li>
          <li class="nav-item">
            <a href="#contact" class="nav-link">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.background{
  background-color:#C1D5A4

}
.navbar-nav li a{
  color:#002B5B;
  font-weight:600;
}
.navbar-nav li a:hover{
  background-color:#3FA796;
  border-radius:5px;
}
</style>
