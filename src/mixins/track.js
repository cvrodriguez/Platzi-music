const trackMixin = {
  methods: {
    selectTrack () {
      if (!this.track.preview_url) { return }
      this.$store.commit('selectTrack', this.track)
    }
  }

}
export default trackMixin
