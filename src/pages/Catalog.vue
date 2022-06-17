<template>
  <section class="catalog">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="mt-5 mb-5">
            <h1 data-aos="fade-up">catalog.</h1>
            <div class="alert alert-success mt-3 mb-4" data-aos="fade-up" data-aos-duration="700">
              Lihat ukuran yang pas buat kamu <router-link to="/size">Disini</router-link>.
            </div>
            <div class="row" data-aos="fade-up" data-aos-duration="600">
              <div class="col-md-4" v-for="post in posts" :key="post.id">
                <div class="card mb-5">
                  <div class="card-thumb">
                    <img :src="post.image" class="img">
                    <div class="status" v-if="post.stocks < 1">Stok Habis</div>
                  </div>
                  <div class="card-body">
                    <h4 class="title">{{ post.name }}</h4>
                    <h5>Rp{{ post.price }}</h5>
                    <a v-if="post.stocks < 1" class="btn btn-green btn-block btn-lg disabled" target="_blank">Pesan di Shopee</a>
                    <a v-else class="btn btn-green btn-block btn-lg" :href="post.exlink" target="_blank">Pesan di Shopee</a>
                  </div>
                </div>
              </div>
              <div class="col-md-12 mt-5 mb-3 text-center" v-if="loading">
                <sync-loader color="#7CA297" />
              </div>
            </div>
            <div class="row">
              <div class="col mb-3 mt-5">
                <div v-if="!loading && posts.length < count" class="text-center">
                  <button @click="loadMore" class="btn btn-green btn-lg">
                    <i class="fas fa-grin-hearts"></i>
                    intip lainnya
                  </button>
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
      count: 0
    }
  },

  mounted() {
    this.getPosts()
    this.getAllProducts()
  },

  methods: {
    async getAllProducts() {
      let { data, error } = await this.$supabase
        .from('products')
        .select('id')
      // ambil jumlah data saat ini. compare dengan limit untuk validasi loadMore
      if(data) this.count = data.length
      if(error) console.error(error)
    },

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
        .range(0, 8)

      if (data) {
        this.posts = filterStock(data)
        this.loading = false
      }

      if (error) console.error(error)
      return data
    },

    async loadMore() {
      this.loading = true // sambil nunggu data, tampilkan loading :D
      let limitStart = this.posts.length // batas awal untuk range limit data
      let limitEnd = limitStart + 5 // batas akhir range limit data
      let { data, error } = await this.$supabase
        .from('products')
        .select(`
          id, created_at, name,
          category(nama),
          price, image, stocks, published, isReady, exlink
        `)
        .eq('published', true)
        .order('created_at', { ascending: false })
        .range(limitStart, limitEnd)
      
      if (data) {
        for (let i = 0; i < data.length; i++) {
          // masukkan object dari array ke this.posts!
          this.posts.push(data[i])
        }
        
        // terus filter lagi semua data dengan yang baru di load 
        this.posts = filterStock(this.posts)
        this.loading = false
      }

      if (error) console.error(error)
    }
  }
}
</script>

<style scoped>
.catalog {
  width: 100%;
  height: auto;
}
.catalog .img {
  width: 100%;
  padding: 0;
  margin: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
h4 {
  font-weight: bold;
}
a, a:hover {
  color: inherit;
  text-decoration: underline;
}
</style>