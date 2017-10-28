import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  startWave: false
}

const mutations = {
  STARTWAVE (state) {
    state.startWave = true
  }
}

const actions = {
  listenToUser ({ commit }, router) {
    let speech
    const msg = new SpeechSynthesisUtterance('Is everything to your satisfaction?')
    window.speechSynthesis.speak(msg)

    setTimeout(() => {
      speech = new webkitSpeechRecognition()
      speech.lang = 'en'
      speech.start()
      commit('STARTWAVE')
      speech.addEventListener('result', (event) => {
        for (var i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
              var msg = new SpeechSynthesisUtterance('You said ' + event.results[i][0].transcript)
              window.speechSynthesis.speak(msg)
              const msg = new SpeechSynthesisUtterance('Is the car clean?')
              window.speechSynthesis.speak(msg)
              router.push('cleaning-service')
          }
        }
      }, false)
    }, 3200)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
