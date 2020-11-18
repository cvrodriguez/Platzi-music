<template lang="pug" >
  .container
    pm-header
    router-view
    pm-footer

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
