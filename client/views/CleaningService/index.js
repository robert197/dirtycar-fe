import style from './style.css'

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

            <div class={style.mic}>
                <h3>Your satisfaction is: {this.$store.state.satisfaction}</h3>
                <img src="../../../static/mic.png"/>
            </div>
        </div>
    )
  },
  created() {
    this.$store.dispatch('askAboutCleanCar', this.$router)
  }
}
