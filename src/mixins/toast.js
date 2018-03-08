import wepy from 'wepy'

const loading = {
  title: '拼命加载中...',
  icon: 'loading',
  duration: 3000
}

export default class testMixin extends wepy.mixin {
  onLoad () {
    this.showToast()
  }
  showToast () {
    wepy.showToast(loading)
  }
  hideToast () {
    wepy.hideToast()
  }
}
