import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  inputText: ''
}

const mutations = {
  INPUTTEXT (state, text) {
    state.inputText = text
  }
}

const actions = {
  listenToUser ({ commit }) {
    let speech
    setTimeout(() => {
      speech = new webkitSpeechRecognition()
      speech.lang = 'en'
      speech.start()
    }, 2000)
    speech.addEventListener('result', (event) => {
      for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
            commit('INPUTTEXT', event.results[i][0].transcript)
            var msg = new SpeechSynthesisUtterance('Hello Robert, you said ' + event.results[i][0].transcript)
            window.speechSynthesis.speak(msg)
        }
      }
    }, false)
  },
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 200)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
