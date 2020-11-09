<template lang="pug" >
#home
  pm-notification(v-show="showNotification")
    p(slot="body") No hay resultados
  pm-notification(v-show="!showNotification")
    p(slot="body1") No hay resultados
  pm-loader(v-show="isLoading")
  section.section(v-show="!isLoading")
    nav.nav.has-shadow
      .container
        input.input.is-large(
          type="text",
          placeholder='Buscar cancion',
          v-model='searchQuery')
        a.button.is-info.is-large(@click='search') Bucar
        a.button.is-danger.is-large &times
        p.small {{searchMessage}}
    .container
      .columns.is-multiline
        .column.is-one-quarter(v-for='t in tracks')
          pm-track(
            :class="{'is-active': t.id == selectedTrack}",
            :track="t",
            @select="setSelectedTrack"
            )

</template>
<script>
import trackServices from '@/services/track'
import pmTrack from '../components/Track.vue'
import pmLoader from '../components/shared/Loader.vue'
import pmNotification from '../components/shared/Notification.vue'

export default {
  name: 'Home',
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      selectedTrack: '',
      showNotification: false
    }
  },
  components: {
    pmTrack,
    pmLoader,
    pmNotification
  },

  computed: {
    searchMessage () {
      return `Encontrados:${this.tracks.length}`
    }
  },
  methods: {
    search () {
      if (!this.searchQuery) { return }
      this.isLoading = true
      trackServices.search(this.searchQuery).then(res => {
        this.showNotification = res.tracks.total === 0
        this.tracks = res.tracks.items
        this.isLoading = false
      })
    },
    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  },
  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  }
}
</script>
<style lang="scss">
.is-active{
  border: 3px #23d160 solid;
}

</style>
