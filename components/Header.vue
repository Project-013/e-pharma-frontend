<template>
  <header>
    <div class="header-top d-none d-lg-block">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-sm-9 col-lg-9">
            <div class="header-top-item">
              <div class="header-top-left">
                <ul>
                  <li>
                    <a href="tel:+8801959970664">
                      <i class="icofont-ui-call"></i>
                      Call : +8801959970664
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@sasthosebok.com">
                      <i class="icofont-ui-message"></i>
                      <span class="__cf_email__">info@sasthosebok.com</span>
                    </a>
                    <a class="d-block text-decoration-none text-white"> </a>
                  </li>
                  <li>
                    <i class="icofont-location-pin"></i>
                    #533, Kakoli Shoping Center(4th Floor), Zindabazar,
                    Sylhet-3100
                  </li>
                  <li v-if="this.$auth.user && this.$auth.user.is_admin">
                    <NuxtLink to="/admin" class="border px-2 py-1 rounded">
                      <i class="icofont-dashboard"></i>
                      Admin Dashboard
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-sm-3 col-lg-3">
            <div class="header-top-item">
              <div class="header-top-right">
                <ul>
                  <li>
                    <a href="#">
                      <i class="icofont-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icofont-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icofont-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style></style>
