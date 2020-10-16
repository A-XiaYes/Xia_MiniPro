//app.js
App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    wx.getUserInfo({
      withCredentials: true,
      success: (result) => {
        console.log(result)
      },
      fail: (res) => {},
      complete: (res) => {},
    })

    // 取出token
    const token = wx.getStorageSync('token')
    // 判断token是否有值
    if (token) {
      // 有值 验证token是否过期
      this.checkToken(token)
    } else {
      // 没有token 重新登录
      this.login()
    }
  },

  login() {
    wx.login({
      timeout: 5000,
      success: (res) => {
        const code = res.code
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code
          },
          success: (res) => {
            // console.log(res)
            // 取出token
            const token = res.data.token
            // token存到globelData
            this.globelData.token = token
            // 本地储存token
            wx.setStorageSync('token', token)
          }
        })
      }
    })
  },

  checkToken(token) {
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'post',
      header: {
        token
      },
      success: (res) => {
        console.log(res)
        if (!res.data.errCode) {
          console.log('token有效')
          this.globelData.token = token
        } else {
          this.login()
        }
      }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log(options)
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },

  globelData: {
    name: 'Ar.xiawq',
    age: 18,
    token: ''
  }
})
