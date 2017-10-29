import style from './style.css'

export default {
  render(h) {
    return (
        <div class={style.page}>
            <div class={style.imagesWraper}>
                <div class={style.leftPicture}>
                    <img src="../../../static/right-car-pic.jpeg"/>
                </div>
                <div class={style.rightPicture} >
                    <img class={style.rightPicture} src="../../../static/left-car-pic.jpeg"/>
                </div>
            </div>
            <div class={style.mic}>
                <img src="../../../static/mic.png"/>
            </div>
        </div>
    )
  }
}
