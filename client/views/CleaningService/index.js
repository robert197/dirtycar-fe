import style from './style.css'
import Waves from '../../components/Waves'

export default {
  render(h) {
    return (
        <div class={style.page}>
            <div class={style.imagesWraper}>
             
                <div>
                    <img class={style.picture1} src="../../../static/right-car-pic.jpeg"/>
                </div>
             
                <div>
                    <img class={style.picture2} src="../../../static/left-car-pic.jpeg"/>
                </div>
                
            </div>

            <div class={style.bottomPart}>
                <h3>Your satisfaction is: {this.$store.state.satisfaction}</h3>
                <div class={style.mic}>
                    <Waves class={style.waves}/>
                    <img src="../../../static/mic.png"/>
                </div>
            </div>
        </div>
    )
  },
  created() {
    setTimeout(() => {
        this.$store.dispatch('askAboutCleanCar', this.$router)
    }, 1800)
  }
}
