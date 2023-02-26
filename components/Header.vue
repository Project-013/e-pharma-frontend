<template>
  <header>
    <div class="header-top d-none d-lg-block">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-sm-9 col-lg-9">
            <ul class="list-group list-group-horizontal p-0 small">
              <li class="list-group-item border-0 small">
                <a
                  href="tel:+8801959970664"
                  class="text-dark text-decoration-none"
                >
                  <i class="icofont-ui-call text-primary"></i>
                  {{ $config.uniProject ? "+8801771147384" : "+8801959970664" }}
                </a>
              </li>
              <li class="list-group-item border-0 small">
                <a
                  href="mailto:info@sasthosebok.com"
                  class="text-dark text-decoration-none"
                >
                  <i class="icofont-ui-message text-primary"></i>
                  <span class="__cf_email__">
                    {{
                      $config.uniProject
                        ? "info@e-health.com"
                        : "info@sasthosebok.com"
                    }}
                  </span>
                </a>
              </li>
              <li class="list-group-item border-0 small text-dark">
                <i class="icofont-location-pin text-primary"></i>

                {{
                  $config.uniProject
                    ? "Osmaninagar, Sylhet-3100"
                    : "#533, Kakoli Shoping Center(4th Floor), Zindabazar, Sylhet-3100"
                }}
              </li>
              <li
                class="list-group-item border-0 small"
                v-if="this.$auth.user && this.$auth.user.is_admin"
              >
                <NuxtLink to="/admin" class="border px-2 py-1 rounded">
                  <i class="icofont-dashboard"></i>
                  Admin Dashboard
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="col-sm-3 col-lg-3 d-flex justify-content-end">
            <ul class="list-group list-group-horizontal">
              <li class="list-group-item border-0 text-dark px-2">
                <a
                  href="https://www.facebook.com/sasthosebok"
                  target="_blank"
                  class="social-icon text-decoration-none"
                >
                  <i class="icofont-facebook"></i>
                </a>
              </li>
              <li class="list-group-item border-0 small text-dark px-0">
                <a
                  href="https://www.youtube.com/channel/UCR63fQJagOYOOiZUUiiz5yg"
                  target="_blank"
                  class="social-icon text-decoration-none"
                >
                  <i class="icofont-youtube"></i>
                </a>
              </li>
              <li class="list-group-item border-0 small text-dark px-2">
                <a href="#" class="social-icon text-decoration-none">
                  <i class="icofont-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </header>
</template>

<script>
export default {};
</script>



<style>


</style>
