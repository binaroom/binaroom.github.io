<template>
  <section class="katalog">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="mt-5 mb-5">
            <h1 data-aos="fade-up">katalog.</h1>
            <div class="row" data-aos="fade-up" data-aos-duration="600">
              <div class="col-md-12 mt-3 text-center" v-if="loading">
                <sync-loader color="#7CA297" />
              </div>
              <div class="col-md-4" v-for="post in posts" :key="post.id">
                <div class="card mt-5" v-if="posts != ''">
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
                    <a v-if="post.stocks < 1" class="btn btn-green disabled" target="_blank">Pesan di Shopee</a>
                    <a v-else class="btn btn-green" :href="post.exlink" target="_blank">Pesan di Shopee</a>
                    <!-- <a class="btn btn-orange" href="https://shopee.co.id/Gamis-Basic-Sarah-Dress-Gamis-vintage-i.363344204.8694503403" target="_blank">Pesan di Shopee</a> -->
                  </div>
                </div>
                <div class="mt-4" v-else>
                  <em>Loading...</em>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { SyncLoader } from '@saeris/vue-spinners'
import filterStock from '../functions/filterStock'

export default {
  components: {
    SyncLoader
  },

  data() {
    return {
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
        this.posts = filterStock(data)
        this.loading = false
      }

      if (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style scoped>
.katalog {
  width: 100%;
  height: auto;
}
.katalog .img {
  width: 100%;
  padding: 0;
  margin: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
h4 {
  font-weight: bold;
}
</style>