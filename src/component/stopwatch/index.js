// component/stopwatch/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    text: '00:00.000',
   
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _start() {
      console.log('_start')
      var convertTimeStampToString = function (ts) {
        var ms = String(1000 + Math.floor(ts) % 1000).slice(1)
        var s = String(100 + Math.floor(ts / 1000) % 60).slice(1)
        var m = Math.floor(ts / 60000)
        if (m < 10) m = '0' + m
        return m + ':' + s + '.' + ms
      }
      this.setData({
        text: convertTimeStampToString(0)
      })
      var startTime = Date.now()
      var self = this
      this._interval = setInterval(function () {
        self.setData({
          text: convertTimeStampToString(Date.now() - startTime)
        })
      }, 33)
    },
    _stop() {
      console.log('_stop')
      clearInterval(this._interval)
    },
  }
})