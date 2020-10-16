export default function $ajax(options) {
  return new Promise((resolve, reject) => {
    wx.showLoading({
      title: '加载中...',
      mask: true
    })
    wx.request({
      url: options.url,
      method: options.method || 'get',
      data: options.data || {},
      timeout: 5000,
      success(res) {
        resolve(res)
        wx.hideLoading({
          success: (res) => {},
        })
      },
      fail: reject
    })
  })
}