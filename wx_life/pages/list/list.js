// pages/list/list.js
import wxRequset from '../../utils/requery.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    listId: 0,
    pages: 0,
    limit: 10,
    q: "",
    shops: [],
    hasMore: true,
    inputShowed: false,
    inputVal: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.listId = options.listId
    this.data.name = options.name
    this.getListData()
  },
  getListData() {
    if (!this.data.hasMore) return;
    this.data.pages++
    wxRequset(`categories/${this.data.listId}/shops?_page=${this.data.pages}&_limit=${this.data.limit}&q=${this.data.q}`).then(res=>{
      wx.stopPullDownRefresh()
      const total = parseInt(res.header['X-Total-Count'])
      const newArray =[...this.data.shops,...res.data]
      this.setData({
        shops:newArray,
        hasMore: newArray.length<total
      })
    })

    // wx.request({
    //   url: `https://locally.uieee.com/categories/${this.data.listId}/shops?_page=${this.data.pages}&_limit=${this.data.limit}&q=${this.data.q}`,
    //   success: res => {


    //     const total = parseInt(res.header["X-Total-Count"])
    //     console.log()
    //     const newArray = [...this.data.shops, ...res.data]
    //     this.setData({
    //       shops: newArray,
    //       hasMore: newArray.length < total

    //     })
    //     wx.stopPullDownRefresh()
    //   }
    // })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.data.name,
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
    this.setData({
      pages: 0,
      hasMore: true,
      q: "",
      shops: [],
    }, () => {
      this.getListData()
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.getListData()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
    this.loadData()
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
    this.loadData()
  },
  // clearInput: function () {
  //  this.hideInput()
  // },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  searchData(){
    // this.data.q = this.data.inputVal
    this.loadData()
  },
  loadData(){ 
    this.data.q = this.data.inputVal
    this.setData({
      shops: [],
      pages: 0,
      hasMore: true
    }, () => {
      this.getListData()
    })
  },

  goDetails(e){
    console.log(e)
    wx.navigateTo({
      url: `/pages/details/details?listId=${e.currentTarget.dataset.listid}&name=${this.data.name}`,
    })
  }
})