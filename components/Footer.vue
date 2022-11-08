<template>
  <section id="contact" class="footer_wrapper wrapper mt-3">
    <div class="container pb-3">
      <div class="row">
        <div class="col-lg-3 col-md-6 mb-4">
          <h5 class="text-uppercase">sasthosebok.com</h5>

          <div class="contact-info">
            <ul class="list-unstyled p-0">
              <li>
                <a href="#"
                  ><i class="icofont-location-pin me-2"></i>
                  {{
                    $config.uniProject
                      ? "Osmaninagar, Sylhet-3100"
                      : "#533, Kakoli Shoping Center(4th Floor), Zindabazar, Sylhet-3100"
                  }}</a
                >
              </li>
              <li>
                <a href="tel:+8801959970664"
                  ><i class="icofont-ui-call me-2"></i>
                  {{ $config.uniProject ? "+8801771147384" : "+8801959970664" }}
                </a>
              </li>
              <li>
                <a href="mailto:info@sasthosebok.com"
                  ><i class="icofont-ui-message me-2"></i>
                  {{
                    $config.uniProject
                      ? "info@e-pharma.com"
                      : "info@sasthosebok.com"
                  }}</a
                >
              </li>
            </ul>
            <ul class="social-network d-flex align-items-center p-0">
              <li>
                <a href="https://www.facebook.com/sasthosebok" target="_blank"
                  ><i class="icofont-facebook"></i
                ></a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCR63fQJagOYOOiZUUiiz5yg"
                  target="_blank"
                  ><i class="icofont-youtube"></i
                ></a>
              </li>
              <li>
                <a href="#"><i class="icofont-instagram"></i></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-4">
          <h5>Work With Us</h5>
          <ul class="link-widget p-0">
            <li>
              <NuxtLink to="/partners/doctor" class="text-light">
                Register as Doctor
              </NuxtLink>
            </li>

            <li>
              <NuxtLink to="/partners/nurse" class="text-light">
                Register as Nurse/Midwife
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/partners/caregiver" class="text-light">
                Register as Caregiver
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/partners/physiotherapist" class="text-light">
                Register as Physiotherapist
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/partners/dmf-doctor" class="text-light">
                Register as DMF/CP
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/partners/pharmacy" class="text-light">
                Register as Pharmacy
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 mb-4">
          <h5>Our Services</h5>
          <ul class="link-widget p-0">
            <li>
              <NuxtLink to="/doctors" class="text-light">
                Find Doctors
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/" class="text-light"> Find Ambulances </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/" class="text-light">
                Find Oxysen Cylinder
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/call-doctors" class="text-light">
                Call Doctors
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 mb-4">
          <h5>Quick Links</h5>
          <ul class="link-widget p-0">
            <li>
              <NuxtLink to="about">About us</NuxtLink>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>

            <li>
              <NuxtLink to="/faq">FAQ</NuxtLink>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <NuxtLink to="/privacy-policy" class="text-light">
                Privacy Policy
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/privacy-policy" class="text-light">
                Terms & Conditions
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 mb-4 d-none">
          <h5>Newsletter</h5>
          <div class="form-group mb-4">
            <input
              type="email"
              class="form-control bg-transparent"
              placeholder="Enter Your Email Here"
            />
            <button
              type="submit"
              class="main-btn rounded-2 mt-3 border-white text-white"
            >
              Subscribe
            </button>
          </div>
          <h5>Stay Connected</h5>
          <ul class="social-network d-flex align-items-center p-0">
            <li>
              <a href="https://www.facebook.com/sasthosebok" target="_blank"
                ><i class="icofont-facebook"></i
              ></a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCR63fQJagOYOOiZUUiiz5yg"
                target="_blank"
                ><i class="icofont-youtube"></i
              ></a>
            </li>
            <li>
              <a href="#"><i class="icofont-instagram"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container-fluid copyright-section py-1 small">
      <small class="p-0 text-light">
        Copyright &copy;
        <a href="https://sasthosebok.com/" class="">
          <span class="fw-bold">
            {{ $config.uniProject ? "E-pharna" : "sasthosebok.com" }}
          </span>
        </a>
        All Rights Reserved, developed by
        <a
          href="https://www.linkedin.com/in/sajibsd013/"
          target="_blank"
          class=""
          >Sajib Sutradhar</a
        >
      </small>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
