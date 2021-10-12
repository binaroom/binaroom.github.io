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
          <div class="col-md-4" v-for="post in posts" :key="post.id">
            <div class="card mt-4" v-if="posts != ''">
              <div class="card-thumb">
                <img :src="post.jetpack_featured_media_url" class="img">
                <div class="status" v-if="!post.categories[1]">Stok Habis</div>
              </div>
              <div class="card-body">
                <h5>{{ post.title.rendered }}</h5>
                <div class="rating text-warning mb-3">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-half-alt"></i>
                </div>
                <a v-if="!post.categories[1]" class="btn btn-orange disabled" target="_blank">Pesan di Shopee</a>
                <a v-else  class="btn btn-orange" href="https://shopee.co.id/binaroom.id" target="_blank">Pesan di Shopee</a>
              </div>
            </div>
            <div class="mt-4" v-else>
              <em>Loading...</em>
            </div>
          </div>
          <!-- <div class="col-md-4">
            <div class="card mt-4">
              <div class="card-thumb">
                <img src="@/assets/img/raya.jpg" class="img">
                <div class="status">Stok Habis</div>
              </div>
              <div class="card-body">
                <h5>Raya</h5>
                <div class="rating text-warning mb-3">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-half-alt"></i>
                </div>
                <a class="btn btn-orange disabled" target="_blank">Pesan di Shopee</a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mt-4">
              <div class="card-thumb">
                <img src="@/assets/img/black.jpg" class="img">
                <div class="status">Stok Habis</div>
              </div>
              <div class="card-body">
                <h5>Black Series 1</h5>
                <div class="rating text-warning mb-3">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-half-alt"></i>
                </div>
                <a class="btn btn-orange disabled" target="_blank">Pesan di Shopee</a>
              </div>
            </div>
          </div> -->
          
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
      tagline2: `clothing`,
      posts: '',
    }
  },

  mounted() {
    this.getPosts()
  },

  methods: {
    async getPosts() {
      await fetch(`https://public-api.wordpress.com/wp/v2/sites/binaroom.wordpress.com/posts`)
      .then(res => res.json())
      .then(data => {
        this.posts = data
        this.posts.splice(3)
      })
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
  display: block;
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