import style from './style.css'

export default {
  render(h) {
    return (
      <div class={style.welcome}>
        <div class={style.welcomeText}>
            <img src="../../../static/car2go.png"/>
        </div>
      </div>
    )
  },
  created() {
    setTimeout(() => {
        this.$router.push('welcome')
    }, 2000)
    console.log();
  }
}
