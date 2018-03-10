import wepy from 'wepy'

const loading = {
}

export default class testMixin extends wepy.mixin {
  onLoad () {
    this.showToast()
  }
  noMore () {
    wepy.showToast({
      title: '没有更多了...',
      icon: 'none',
      duration: 1500
    })
  }
  showToast () {
    wepy.showToast({
      title: '拼命加载中...',
      icon: 'loading',
      duration: 3000
    })
  }
  hideToast () {
    wepy.hideToast()
  }
}
