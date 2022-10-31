<template>
  <footer class="pb-70 mt-5">
    <div class="newsletter-area">
      <div class="container">
        <div class="row newsletter-wrap align-items-center">
          <div class="col-lg-7">
            <div class="newsletter-item">
              <h3>Join Our Newsletter</h3>
              <p>Subscribe for quick update</p>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="newsletter-item">
              <div class="newsletter-form">
                <form class="newsletter-form" data-toggle="validator">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Enter Your Email"
                    name="EMAIL"
                    required
                    autocomplete="off"
                  />
                  <button class="btn newsletter-btn" type="submit">
                    Subscribe
                  </button>
                  <div id="validator-newsletter" class="form-result"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-lg-4">
          <div class="footer-item">
            <div class="footer-contact">
              <h3>Contact Us</h3>
              <ul>
                <li class="">
                  <i class="icofont-ui-message"></i>
                  <a href="mailto:info@sasthosebok.com">
                    <i class="icofont-ui-message"></i>
                    <span class="__cf_email__">info@sasthosebok.com</span>
                  </a>
                </li>
                <li>
                  <i class="icofont-stock-mobile"></i>
                  <a href="tel:+8801771147384"> Call : +8801771147384 </a>
                  <a href="tel:+8801771147384"> Call : +8801771147384 </a>
                </li>
                <li>
                  <i class="icofont-location-pin"></i>
                  #533, Kakoli Shoping Center(4th Floor),Zindabazar, Sylhet-3100
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-2">
          <div class="footer-item">
            <div class="footer-quick">
              <h3>Quick Links</h3>
              <ul>
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
          </div>
        </div>
        <div class="col-sm-6 col-lg-3">
          <div class="footer-item">
            <div class="footer-quick">
              <h3>Work With Us</h3>

              <ul class="link_group">
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
          </div>
        </div>
        <div class="col-sm-6 col-lg-3">
          <div class="footer-item">
            <div class="footer-quick">
              <h3>Our Services</h3>
              <ul class="link_group">
                <li>
                  <NuxtLink to="/doctors" class="text-light">
                    Find Doctors
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/" class="text-light">
                    Find Ambulances
                  </NuxtLink>
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
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped>
footer {
  margin-top: 150px !important;
}
</style>
