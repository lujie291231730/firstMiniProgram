// pages/shouye/shouye.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: "hello world",
    img: "/image/icon_API_HL.png",
    arr: ['a','b','c'],
    count: 0,
    login: true
  },

  add:function() {
    this.setData({
      count: this.data.count + 1,
    })
    this.setData({
      login: !this.data.login,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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