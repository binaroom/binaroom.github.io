<template>
  <section class="footer gothic">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <p class="color-2 text-center">
            &copy; {{ year }}. Made with <i class="fa fa-heart"></i> by
            <strong><router-link :to="{name: 'About'}" class="link color-2">binaroom</router-link></strong>.
          </p>
        </div>
      </div>
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
  padding: 20px 0 20px 0;
  /* background: url('~@/assets/img/FOOTER.png') no-repeat center center; */
  /* background-color: #B5CAC4;
  box-shadow: 15px -10px rgba(216, 216, 216, .30); */
  font-size: 13px;
}
.footer .link {
  text-decoration: underline;
}
.footer .link:hover {
  color: #5C5C5C
}
</style>
