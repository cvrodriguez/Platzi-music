<template >

  <div id="app">
    <div id="nav">
      <h1>Hola Vue</h1>
       <pm-header>
       </pm-header>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
<pm-footer></pm-footer>
  </div>
</template>

<script>
import pmFooter from './components/layout/Footer.vue'
import pmHeader from './components/layout/Header.vue'

export default {
  name: 'app',

  components: {
    pmFooter,
    pmHeader

  }
}

</script>

<style lang="scss">
@import './scss/main.scss';

</style>
