import Vue from 'vue'
import Vuex from 'vuex'
import trackServices from '../services/track'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    track: {}
  },
  getters: {
    trackTitle (state) {
      if (!state.track.name) { return '' }
      return `${state.track.name} - ${state.track.artists[0].name}`
    }
  },
  mutations: {
    selectTrack (state, track) {
      state.track = track
    }
  },
  actions: {
    getTrackById (context, payload) {
      return trackServices.getById(payload.id)
        .then(res => {
          context.commit('selectTrack', res)
          return res
        })
    }

  },
  modules: {
  }
})
