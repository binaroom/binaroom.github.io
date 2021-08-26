<template>
  <section class="navigation lobster">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <nav class="navbar navbar-expand-lg navbar-light">
            <router-link :to="{name: navs[0].link}" class="navbar-brand">
              <img src="@/assets/img/logo.webp" class="logo"/>
            </router-link>
            <button
              class="navbar-toggler"
              data-toggle="collapse"
              data-target="#nav-items"
              aria-controls="nav-items"
            >
              <!-- <span class="navbar-toggler-icon"></span> -->
              <i class="fa fa-stream text-white"></i>
            </button>
            <div class="collapse navbar-collapse" id="nav-items">
              <ul class="navbar-nav mx-auto mr-auto align-items-center">
                <li class="nav-item" v-for="(nav,i) in navs" :key="i">
                  <router-link :to="{name: nav.link}" class="nav-link">{{nav.name}}</router-link>
                </li>
                <li class="nav-item">
                  <a href="https://shopee.co.id/binaroom.id" class="nav-link" target="_blank">Shopee</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      navs: [
        {
          name: 'Binaroom',
          link: 'Intro'
        },        
        {
          name: 'Katalog',
          link: 'Katalog'
        },        
        {
          name: 'Contact',
          link: 'Contact'
        },        
      ]
    }
  },
}
</script>


<style scoped>
.navigation {
  background-color: rgba(124, 162, 151, .56);
  /* backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px); */
  box-shadow: 0 5px rgba(230, 230, 230, 0.56);
  font-size: 9px;
  display: block;
}

.logo {
  width: 50px;
  filter: drop-shadow(3px 3px rgba(255, 255, 255, .50));
  transition: .2s all ease-in-out;
}

.logo:hover {
  transform: scale(0.95);
  filter: drop-shadow(1px 1px rgba(255, 255, 255, .50));
}

.navbar-nav.navbar-center {
  position: absolute;
  left: 50%;
  transform: translatex(-50%);
}

.nav-link {
  color: #5C5C5C !important;
  font-size: 25px;
  text-shadow: 3px 3px rgba(255, 255, 255, .50);
}

.nav-link:hover {
  transform: scale(0.99);
  text-shadow: 1px 1px rgba(255, 255, 255, .50);
}

.navbar-toggler {
  border: none !important;
  font-size: 25px;
}
</style>