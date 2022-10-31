<template>
  <footer class="pt-5 pb-2">
    <div class="container">
      <div class="row gy-5 g-sm-5">
        <div class="col-lg-3 col-md-6">
          <div class="d-flex align-items-center mb-2">
            <img src="/img/logo.png" alt="me" width="70" class="pb-3" />
          </div>

          <div class="text-white">
            <p>
              #533, Kakoli Shoping Center(4th Floor),<br />
              Zindabazar, Sylhet-3100
            </p>
            <div class="my-2">
              <a href="#" class="text-white">
                <img src="/img/icons/fb.svg" style="width: 30px" alt="" />
              </a>
              <a href="#" class="text-white mx-1">
                <img src="/img/icons/twitter.svg" style="width: 30px" alt="" />
              </a>
              <a href="#" class="text-white">
                <img src="/img/icons/youtube.svg" style="width: 30px" alt="" />
              </a>
            </div>
            <!-- <a
              class="d-block text-decoration-none text-white"
              href="tel:+8801771147384"
              >+8801771147384</a
            > -->
            <a
              class="d-block text-decoration-none text-white"
              href="mailto:info@sasthosebok.com"
            >
              info@sasthosebok.com
            </a>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <h5 class="text-white mb-4">Important Links</h5>
          <ul class="link_group">
            <li>
              <NuxtLink to="/faq" class="text-light footer_link">
                FAQs
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about-us" class="text-light footer_link"
                >About us</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/contact-us" class="text-light footer_link">
                Contact us
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/privacy-policy" class="text-light footer_link">
                Privacy Policy
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/privacy-policy" class="text-light footer_link">
                Terms & Conditions
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6">
          <h5 class="text-white mb-4">For Patients</h5>
          <ul class="link_group">
            <li>
              <NuxtLink to="/faq" class="text-light footer_link">
                Find Doctors
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about-us" class="text-light footer_link">
                Find Ambulances
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact-us" class="text-light footer_link">
                Call Doctors
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/privacy-policy" class="text-light footer_link">
                Privacy Policy
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/privacy-policy" class="text-light footer_link">
                Terms & Conditions
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6">
          <h5 class="text-white mb-4">Work with us</h5>
          <ul class="link_group">
            <li>
              <NuxtLink to="/partners/doctor" class="text-light footer_link">
                Register as Doctor
              </NuxtLink>
            </li>

            <li></li>
            <li>
              <NuxtLink to="/partners/pharmacy" class="text-light footer_link">
                Register as Pharmacy
              </NuxtLink>
            </li>

            <li></li>
            <li>
              <NuxtLink to="/partners/nurse" class="text-light footer_link">
                Register as Nurse/Brother
              </NuxtLink>
            </li>

            <li>
              <NuxtLink to="/partners/caregiver" class="text-light footer_link">
                Register as Caregiver
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/partners/physiotherapist"
                class="text-light footer_link"
              >
                Register as Physiotherapist
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="text-center text-light small pt-4">
        <small class="py-1">
          <span class="fw-bold">sasthosebok.com</span>
          . All Rights Reserved - Developed by
          <a
            href="https://www.linkedin.com/in/sajibsd013/"
            target="_blank"
            class="text-white"
          >
            Sajib Sutradhar</a
          >
        </small>
      </div>
    </div>
    <div class="messenger">
      <NuxtLink to="/">
        <img src="../static/img/msg.png" class="" width="70px" />
      </NuxtLink>
    </div>
  </footer>
</template>
<style scoped>
footer {
  background: #2b325c;
  position: relative;
  margin-top: 100px !important;
}

.footer_link {
  line-height: 30px !important;
  color: white !important;
  opacity: 1;
  text-decoration: none;
}
.footer_link:hover {
  color: #ff0065 !important;
}
.link_group {
  margin: 0;
  list-style: none;
  padding-left: 0;
}

.messenger {
  position: absolute !important;
  right: 15px;
  top: -90px;
}
</style>
