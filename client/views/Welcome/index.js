import style from './style.css'

export default {
  render(h) {
    return (
      <div class={style.welcome}>
        <div class={style.welcomeText} onClick={this.$store.dispatch('start', this.$router)}>
            <img src="../../../static/car2go.png"/>
        </div>
      </div>
    )
  },
  methods: {
    start: () => {
      setTimeout(() => {
        this.$router.push('welcome')
      }, 2000)
    }
  }
}
