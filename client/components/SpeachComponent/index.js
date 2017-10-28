import style from './style.css'
import Waves from '../Waves'

export default {
  methods: {
  },
  created() {
    this.$store.dispatch('listenToUser')
  },
  render(h) {
    return (
        <div class={style.services}>
          <Waves/>
          <div class={style.microContainer}>
            <img class={style.micro} src="../../../static/mic_eclipse.png"/>
        </div>
      </div>
    )
  }
}
