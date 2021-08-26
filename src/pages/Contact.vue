<template>
  <div>
    <section class="contact">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="mt-5 mb-5" data-aos="fade-up">
              <h1 class="mb-4">contact.</h1>
              <address class="address">
                {{ address }}
              </address>
              
              <h1 class="mt-3">follow us.</h1>
              <div class="mt-4">
                <a href="https://shopee.co.id/binaroom.id" class="text-ig" target="_blank"><img src="@/assets/img/shopee-logo.png" class="icon"></a>
                <a href="https://instagram.com/binaroom.id" class="ml-3 text-ig" target="_blank"><i class="fab fa-instagram fa-2x"></i></a>
                <a href="https://twitter.com/binaroomID" class="ml-3 text-twitter" target="_blank"><i class="fab fa-twitter fa-2x"></i></a>
                <a href="https://www.youtube.com/channel/UC1kCnoTTQtYXmotd8nT1u3Q" target="_blank" class="ml-3 text-yt"><i class="fab fa-youtube fa-2x"></i></a>
                <a href="https://api.whatsapp.com/send?phone=6282117059260" target="_blank" class="ml-3 text-wa"><i class="fab fa-whatsapp fa-2x"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="maps" data-aos="fade-up" data-aos-duration="600"></section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      address: `Perum Bumi Malayu Asri
                Jalan Raya Samarang
                Mekarwangi
                Tarogong Kaler
                Kab.Garut 44151`,
      email: `binaroom.id@gmail.com`
    }
  }
}
</script>

<style scoped>
.text-wa {
  color: #25D366;
}
.text-mail {
  color: #FBBC05;
}
.text-ig {
  color: #C32AA3;
}
.text-twitter {
  color: #1DA1F2;
}
.text-yt {
  color: #FF0000;
}

.maps {
  width: 100%;
  height: 100vh;
  background: url('~@/assets/img/maps.jpg') no-repeat center center;
  display: block;
  background-size: cover;
}
.icon {
  width: 30px;
  position: relative;
  top: -10px;
}
.address {
  white-space:pre-line
}
</style>