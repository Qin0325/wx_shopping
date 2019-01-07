Page({
  data: {
    isLoading: true,
    list: [],
    focus: true,
    inputValue: ''
  },
  onLoad(option) {
    this.searchList(option)
  },
  onShow() {
    // console.log('onShow')
  },
  onReady() {
    // console.log('onReady')
  },
  changeVal(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  searchList(option) {
    wx.showLoading({
      title: '加载中',
    })
    this.setData({
      isLoading: true,
      inputValue: option.q ? option.q : this.data.inputValue
    })
    wx.request({
      url: 'https://easy-mock.com/mock/5c13534ebb577d1fbc488099/wx/search',
      method: 'GET',
      success: res => {
        // console.log(res)
        this.setData({
          isLoading: false,
          list: res.data.data.list
        })
        wx.hideLoading()
      }
    });
  },
  clearVal() {
    this.setData({
      inputValue: ''
    })
  }
})