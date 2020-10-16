// pages/category/category.js
import $ajax from '../../utils/ajax'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter: 0
  },

  switchTabItem(event) {
    console.log(event)
  },

  headCounterIncrement() {
    const head = this.selectComponent('#head')
    // 直接调用组件里面的方法
    head.headCounterIncrement(20)
    // console.log(head)
    // head.setData({
      // counter: head.data.counter + 10
    // })
  },

  increment(event) {
    console.log(event)
    this.setData({
      counter: ++this.data.counter
    })
  },

  goScroll() {
    wx.navigateTo({
      url: '/pages/scroll/scroll?id=20',
      success: (res) => {
        console.log(res)
      }
    })
  },

  goCart() {
    wx.switchTab({
      url: '/pages/cart/cart',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    $ajax({
      url: 'http://152.136.185.210:8000/api/w6/recommend',
      method: 'get',
    }).then(res => {
      console.log(res)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})