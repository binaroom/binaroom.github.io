<template>
  <div>
    <section class="intro">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="bg-intro">
              <img src="@/assets/img/INTRO-2.png" class="bg" data-aos="fade-down" data-aos-duration="900">
              <div class="text color-1 offset-md-1 lobster">
                <h1 data-aos="fade-up" data-aos-duration="1000" style="white-space:pre-line">{{ tagline1 }}<span class="lobster">{{ tagline2 }}</span>.</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="series">
      <div class="container">
        <div class="row">
          <div class="col-md-4"><h3 data-aos="fade-up">new arrival.</h3></div>
        </div>
        <div class="row" data-aos="fade-up" data-aos-duration="600">
          <div class="col-md-12 mt-3 text-center" v-if="loading">
            <sync-loader color="#7CA297" />
          </div>
          <div class="col-md-4" v-for="post in posts" :key="post.id">
            <div class="card mt-4">
              <div class="card-thumb">
                <img :src="post.image" class="img">
                <div class="status" v-if="post.stocks < 1">Stok Habis</div>
              </div>
              <div class="card-body">
                <h4 class="title">{{ post.name }}</h4>
                <!-- <div class="rating text-warning mb-3">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-half-alt"></i>
                </div> -->
                <h5>Rp{{ post.price }}</h5>
                <a v-if="post.stocks < 1" class="btn btn-green btn-block btn-lg disabled" target="_blank">Pesan di Shopee</a>
                <a v-else class="btn btn-green btn-block btn-lg" :href="post.exlink" target="_blank">Pesan di Shopee</a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {SyncLoader} from '@saeris/vue-spinners'
import filterStock from '../functions/filterStock'

export default {
  components: {
    SyncLoader
  },

  data() {
    return {
      tagline1: `Your Favorite
                `,
      tagline2: `Clothing`,
      posts: '',
      loading: true,
    }
  },

  mounted() {
    this.getPosts()
  },

  methods: {
    async getPosts() {
      let { data, error } = await this.$supabase
        .from('products')
        .select(`
          id, created_at, name,
          category(nama),
          price, image, stocks, published, isReady, exlink
        `)
        .eq('published', true)
        .order('created_at', { ascending: false })

      if (data) {
        this.posts = filterStock(data);
        this.posts.splice(3)
        this.loading = false
      }

      if (error) {
        console.error(error)
      }
    },
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

h4 {
  font-weight: bold;
}

h1 {
  font-size: 4vmax;
}
</style>