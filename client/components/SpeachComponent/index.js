import style from './style.css'
import Waves from '../Waves'
import CleanCar from '../CleanCar'

export default {
  methods: {
  },
  created() {
    this.$store.dispatch('listenToUser')
  },
  render(h) {
    return (
        <div class={style.services}>
          <CleanCar/>
          <Waves/>
          <div class={style.microContainer}>
            <img class={style.micro} src="../../../static/mic_eclipse.png"/>
        </div>
      </div>
    )
  }
}
