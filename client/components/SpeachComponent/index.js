import style from './style.css'
import Waves from '../Waves'
import CleanCar from '../CleanCar'
import Location from '../Location'
import Settings from '../Settings'
import Music from '../Music'

export default {
  created() {
    this.$store.dispatch('listenToUser', this.$router)
  },
  render(h) {
    return (
        <div class={style.services}>
          <Music/>
          <Settings/>
          <Location/>
          <CleanCar/>
          <Waves/>
          <div class={style.microContainer}>
            <img class={style.micro} src="../../../static/mic_eclipse.png"/>
        </div>
      </div>
    )
  }
}
