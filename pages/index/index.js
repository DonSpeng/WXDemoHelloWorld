//index.js
//获取应用实例
var flag=true;
var color="";
var app = getApp()
Page({
  data: {
    //window: 'Hello World',
    color:"window",
    userInfo: {}
  },
  click: function(){
     if(flag){
        color = "window-new";
        flag = false;
      }else{
        color = "window";
        flag = true;
      }
      this.setData({
        color:color
      });
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
  
})
