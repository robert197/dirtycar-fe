import style from './style.css'

export default {
  render(h) {
    return (
      <div class={style.welcome}>
        <div class={style.welcomeText}>
            <h2>Welcome Rafael</h2>
        </div>
      </div>
    )
  },
  created() {
    setTimeout(() => {
        this.$router.push('services')
    }, 2000)
  }
}