import './style.css'

export default {
  data() {
    return {
    }
  },
  render(h) {
    return (
        <div id="app" style="margin: -8px; background-color: black">
          <router-view></router-view>
        </div>
    )
  }
}
