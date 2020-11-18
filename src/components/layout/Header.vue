<template lang='pug'>
    section.hero.is-success
        .hero-head
            header.navbar
                .container
                    .nav-left
                      .nav-item
                        strong 🎸 Platzi Music
                    .nav-right.nav-menu
        .hero-body
          .container.has-text-centered
            h1.title Platzi Music
            h2.subtitle Canciones que estab buenisimas
            PmPlayer
        .level-left
          router-link.nav-item(to="/search") Buscar |
          router-link.nav-item(to="/about") Nosotros
</template>
<script>
import PmPlayer from '../Player.vue'
export default {
  components: { PmPlayer }

}
</script>
<style lang="scss" scoped>
.hero-body {
    padding: 0rem 0rem
}

</style>
