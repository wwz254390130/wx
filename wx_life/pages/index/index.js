//index.js
import wxRequset from '../../utils/requery.js'
//获取应用实例
const app = getApp()
Page({
  data:{
    swipers:[],
    categorys:[]
   },
  onLoad(){
    this.getSwiperData()
    this.getCategoryData()
  },
  getSwiperData(){
    wxRequset(`slides`).then(res=>{
      this.setData({
        swipers:res.data
      })
    })

    // wx.request({
    //   url: 'https://locally.uieee.com/slides',
    //   success:res=>{
    //     this.setData({
    //       swipers:res.data
    //     })
    //   }
    // })
  
  },
  getCategoryData(){
    wxRequset(`categories`).then(res=>{
      this.setData({
        categorys:res.data
      })
    })

    // wx.request({
    //   url:'https://locally.uieee.com/categories',
    //   success:res=>{
    //     this.setData({   
    //       categorys:res.data
    //     })
    //   }
    // })
  },
  goList(e){
    console.log(e)
   
    wx.navigateTo({
      url: `/pages/list/list?listId=${e.target.dataset.id}&name=${e.target.dataset.name}`,
    })
  }
  

})
