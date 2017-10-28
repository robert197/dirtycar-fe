import style from './style.css'

export default {
  methods: {
  },
  created() {
    this.$store.dispatch('listenToUser')
  },
  render(h) {
    return (
          <div class={style.services}>
            <div class={style.microContainer}>
            <div id={style.wave}>
            <div class={style.wave1}></div>
            <div class={style.wave2}></div>
            <div class={style.wave3}></div>
            <div class={style.wave4}></div>
            <div class={style.wave5}></div>
          </div>
          <div id={style.shadow}>
            <div class={style.shadow1}></div>
            <div class={style.shadow2}></div>
            <div class={style.shadow3}></div>
            <div class={style.shadow4}></div>
            <div class={style.shadow5}></div>
          </div>
          <img class={style.micro} src="../../../static/mic_eclipse.png"/>
        </div>
      </div>
    )
  }
}
