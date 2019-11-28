// pages/201909/com_index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    started:false,
    tempFilePath:'',
    saveFilePath:''
  },

  handle_start:function(){
    this.setData({
      started:true
    })
    this.selectComponent('#stopwatch')._start()
  },
  handle_stop:function(){
    this.setData({
      started: false
    })
    this.selectComponent('#stopwatch')._stop()
  },
  saveFile:function(){
    let that = this
    wx.chooseImage({
      success: function(res) {
        const tempFilePath = res.tempFilePaths[0]
        // that.setData({ tempFilePath})
        // 保存文件到本地。注意：saveFile 会把临时文件移动，因此调用成功后传入的 tempFilePath 将不可用
        wx.saveFile({
          tempFilePath: tempFilePath,
          success: function (res) { 
            const saveFilePath = res.savedFilePath
            console.log(res, 'res')
            that.setData({ saveFilePath})
          },
          fail: function (res) { },
          complete: function (res) { },
        })
      },
    })
  },
  //获取保存到本地的文件和 wx.saveFile相对
  getSavedFileList:function(){
    wx.getSavedFileList({
      success(res){
        console.log('getSavedFileList',res)
        if (res.fileList.length>0){
          // 删除临时文件
          // wx.removeSavedFile({
          //   filePath: res.fileList[0].filePath,
          //   complete(res) {
          //     console.log('removeSavedFile',res)
          //   }
          // })
          // 获取临时文件的信息
          wx.getFileInfo({
            filePath: res.fileList[0].filePath,
            complete(res) {
              console.log('getFileInfo',res)
            }
          })
        }
        
      }
    })
  },
  drawCanvas:function (params) {
    let cvsCtx =  wx.createOffscreenCanvas('')
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
    let fx = wx.getFileSystemManager()
    console.log(fx)
    // fx.saveFile()

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