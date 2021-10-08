<template>
  <section class="footer gothic">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 290"><path fill="#7CA297" fill-opacity="0.56" d="M0,128L80,149.3C160,171,320,213,480,208C640,203,800,149,960,154.7C1120,160,1280,224,1360,256L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 270"><path fill="#7CA297" fill-opacity="0.56" d="M0,192L80,197.3C160,203,320,213,480,202.7C640,192,800,160,960,160C1120,160,1280,192,1360,208L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> -->
    <div class="teks text-center">
      &copy; 2020. Made with <i class="fa fa-heart"></i> by
      <strong><router-link :to="{name: 'About'}" class="link color-2">binaroom</router-link></strong>.
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      year: ``
    }
  },
  mounted() {
    this.showYear()
  },
  methods: {
    showYear() {
      let y = new Date()
      this.year = y.getFullYear()
    }
  }
}
</script>

<style scoped>
.footer {
  width: 100%;
  margin-top: 50px;
  padding-top: 20px;
  font-size: 1.7vh;
}
.footer .teks {
  color: #fff;
  padding-bottom: 30px;
  background-color: rgba(124, 162, 151, .56);
}
.footer .link {
  text-decoration: none;
  color: #fff;
}
.footer .link:hover {
  text-decoration: underline;
}
</style>
