const baseUrl =`https://locally.uieee.com/`;

const wxRequset = (url,data={})=>{
  return new Promise((resolve,reject)=>{
    wx.request({
      url: `${baseUrl}${url}`,
      data:data,
      success:res=>{
        resolve(res)
      },
      fail:err=>{
        reject(err)
      }
    })
  })
}
export default wxRequset