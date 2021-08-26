<template>
  <div>
    <section class="intro">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="bg-intro p-5">
              <img src="@/assets/img/HOME-INTRO-3.png" class="bg" data-aos="fade-up" data-aos-duration="900">
              <div class="text color-1 offset-md-1">
                <h1 class="display-1" data-aos="fade-down" data-aos-duration="1000" style="white-space:pre-line">{{ tagline1 }}<span class="gothic-bold">{{ tagline2 }}</span>.</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="series">
      <div class="container">
        <div class="row">
          <div class="col-md-4"><h1 class="h3" data-aos="fade-up">new arrival.</h1></div>
        </div>
        <div class="row" data-aos="fade-up" data-aos-duration="600">
          <div class="col-md-4">
            <div class="card mt-4">
              <div class="card-thumb">
                <img src="@/assets/img/gamis-pattern.jpg" class="img">
              </div>
              <div class="card-body">
                <h5>Gamis Pattern</h5>
                <div class="rating text-warning mb-3">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-half-alt"></i>
                </div>
                <a class="btn btn-orange" href="https://shopee.co.id/GAMIS-SIMPLE-PATTERN-SERIES-1-i.363344204.5197513137" target="_blank">Pesan di Shopee</a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mt-4">
              <div class="card-thumb">
                <img src="@/assets/img/gamis-pattern-2.jpg" class="img">
              </div>
              <div class="card-body">
                <h5>Gamis Pattern 2</h5>
                <div class="rating text-warning mb-3">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-half-alt"></i>
                </div>
                <a class="btn btn-orange" href="https://shopee.co.id/GAMIS-SIMPLE-PATTERN-SERIES-1-i.363344204.5197513137" target="_blank">Pesan di Shopee</a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tagline1: `your
                favorite
                `,
      tagline2: `clothing`
    }
  }
}
</script>

<style scoped>
.intro {
  width: 100%;
  margin-bottom: 70px;
}

.intro .bg-intro {
  display: inline-block;
  position: relative;
}

.intro .bg-intro .bg {
  width: 100%;
}

.series {
  margin-top: 0;
  padding-top: 0;
}
.series .img {
  width: 100%;
  padding: 0;
  margin: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
</style>