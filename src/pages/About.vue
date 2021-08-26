<template>
  <section class="binaroom">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="mt-5 mb-5" data-aos="fade-up">
            <h5 class="text-center mb-3">
              <i class="fas fa-quote-left"></i> Miliki dan jadikan binaroom <span class="strong">your favorite clothing</span> <i class="fas fa-quote-right"></i>
            </h5>
            <h1>binaroom.</h1>
            <p class="mt-3">
              "<strong>Bina</strong>"(mebangun, bangun, berkembang), "<strong>room</strong>" (ruang, tempat) yang 
              menjadi 1 kata bermakna yaitu <strong><em>ruang untuk berkembang</em></strong>, yang akan terus berkembang, 
              membangun apa yang diimpikan setiap orang yang berkaitan dengannya. 
            </p>
            <p>
              Berawal dari tidak memiliki, ingin memiliki, ingin menghasilkan barang yang tidak di miliki, 
              dengan dorongan yang kuat dan paksaan sehingga terlahirlah binaroom dengan mimpi mimpinyaa 
              yang satu persatu in syaa allah pasti bisa terealisasikan.
            </p>

            <h1>logo.</h1>
            <div class="mb-3 mt-3">
              <img src="@/assets/img/logo.png" alt="logo" class="logo" data-aos="zoom-in" data-aos-duration="800" />
            </div>
            <div class="mb-3">
              <img src="@/assets/img/logo2.jpg" alt="logo" class="logo2" data-aos="zoom-in" data-aos-duration="800" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      text: ``
    }
  }
}
</script>

<style scoped>
.binaroom {
  width: 100%;
  height: auto;
}
.binaroom .logo {
  width: 15vh;
}
.binaroom .logo2 {
  width: 30vmax;
}
.strong {
  font-weight: bold;
  border-bottom: 2px dotted #515151;
}
</style>
