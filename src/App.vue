<template>
  <div id="app">
    <nprogress-container></nprogress-container>
    <SocialMedia/>
    <Navigation/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import NprogressContainer from 'vue-nprogress/src/NprogressContainer'
import SocialMedia from './components/SocialMedia.vue'
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    NprogressContainer,
    SocialMedia,
    Navigation,
    Footer,
  }
}
</script>