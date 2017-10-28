import SpeachComponent from 'components/SpeachComponent'
import style from './style.css'

export default {
  render(h) {
    return (
      <transition>
        <div class={style.page}>
          <SpeachComponent />
          <p>
            ANYTHING ANYTHING ANYTHING
          </p>
        </div>
      </transition>
    )
  }
}
