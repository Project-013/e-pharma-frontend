<template>
  <div class="center_box">
    <div class="pb-3 ">
      <PartialsCarousel/>
      <PartialsServices />
    </div>
  </div>
</template>
<!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/63c7fbb047425128790e5cb4/1gn2iubcv';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->
<script>
export default {
  name: "IndexPage",

  mounted() {
    if (this.$route.query.redirect) {
      this.$router.push(this.$route.query.redirect);
    }
  },
  created() {},
};
</script>

<style scoped>
.box {
  height: 1000px;
}
</style>
