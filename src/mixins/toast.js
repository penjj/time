import wepy from 'wepy'

export default class testMixin extends wepy.mixin {
  onLoad () {  // onLoad生命周期
    this.showToast()
  }
  noMore () {  // 普通方法直接定义到class的静态方法
    wepy.showToast({  // wepy.showToast 等同于 wx.showToast
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
