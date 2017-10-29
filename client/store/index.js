import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  startWave: false,
  startCleanSerivce: true,
  satisfaction: null
}

const mutations = {
  STARTWAVE (state) {
    state.startWave = true
  },
  STARTCLEANSERVICE () {
    state.startCleanSerivce = true;
  }
}

const actions = {

  start({commit}, router) {
    router.push('welcome')
  },

  askAboutCleanCar({commit}, router) {
    let speech;
    const msg = new SpeechSynthesisUtterance('I took this pictures of this car, is it still clean?')
    window.speechSynthesis.speak(msg)

    setTimeout(() => {
      commit('STARTWAVE')
      speech = new webkitSpeechRecognition()
      speech.lang = 'en'
      speech.start()
      speech.addEventListener('result', (event) => {
        for (var i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
              var msg = new SpeechSynthesisUtterance('You said ' + event.results[i][0].transcript)
              window.speechSynthesis.speak(msg)
              // speak to api
              axios.post('https://speechservice-dirtycar.training.altemista.cloud/question1',
              {"text": event.results[i][0].transcript})
                .then((res) => {
                  console.log(res)
                })
                .then(() => {
                  router.push('cleaning-service')
                })
                .catch((err) => {
                  console.log(err)
                })
          }
        }
      }, false)
    }, 3000)
  },

  listenToUser ({ commit }, router) {
    let speech
    const msg = new SpeechSynthesisUtterance('Is everything to your satisfaction?')
    window.speechSynthesis.speak(msg)

    setTimeout(() => {
      commit('STARTWAVE')
      speech = new webkitSpeechRecognition()
      speech.lang = 'en'
      speech.start()
      speech.addEventListener('result', (event) => {
        for (var i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
              var msg = new SpeechSynthesisUtterance('You said ' + event.results[i][0].transcript)
              window.speechSynthesis.speak(msg)
              // speak to api
              axios.post('https://speechservice-dirtycar.training.altemista.cloud/question1',
              {"text": event.results[i][0].transcript})
                .then((res) => {
                  console.log(res)
                  this.state.satisfaction = (res.data.documents[0].score * 100).toString().split('.')[0] + '%';
                })
                .then(() => {
                  router.push('cleaning-service')
                })
                .catch((err) => {
                  console.log(err)
                })
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
