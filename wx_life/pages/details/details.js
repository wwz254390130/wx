// pages/details/details.js
import wxRequest from '../../utils/requery.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listId:'',
    detailData:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.listId =options.listId
    wxRequest(`shops/${options.listId}`).then(res=>{
      this.setData({
        detailData:res.data
       
      })
      // console.log(res.data)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      wx.setNavigationBarTitle({
        title: this.options.name,
      })
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

  },
  preview:function(e){
    var current = e.target.dataset.img
    wx.previewImage({
      current: current,
      urls: this.data.detailData.images,
    })
  }
})