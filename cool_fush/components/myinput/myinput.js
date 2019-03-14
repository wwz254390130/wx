// components/myinput/myinput.js
const app =getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      myInput:Object,
 
  
  },

  /**
   * 组件的初始数据
   */
  data: {
       title:'获取验证码',
      //  count: timeInterval,
       interval:-1,
    isgetingVcode:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getVcode(e){
      console.log(e)
    },
    onIputBlur(e){
      switch(this.data.myInput.type){
        case "mobile" :
        app.globalData.mobile = e.detail.value
        break;
        case "vcode" :
        app.globalData.vcode = e.detail.value
        break;
      }
      console.log(app.globalData)
    },
    validateMobile(){//手机号码正则
      const reg = /^1[3-9]\d{9}$/
      if (!(reg.test(app.globalData.mobile))){
        return false
      }
      return true
    },
    getVcode(){
      const res = this.validateMobile()
      if(!res){
        wx.showToast({
          title: '手机号码验证失败',
          image:'/images/error.png',
          mask:true,
          duration:2000
        })
        return
      }
    }

  }
})
