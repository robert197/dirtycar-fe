import style from './style.css'

export default {
  methods: {
    listenToUser() {
      this.$store.dispatch('listenToUser')
    }
  },
  render(h) {
    return (
      <div class="counter-wrapper">
        <div class={style.counter}>
          {this.$store.state.inputText}
        </div>
        <button on-click={this.listenToUser}>Listen</button>
      </div>
    )
  }
}
