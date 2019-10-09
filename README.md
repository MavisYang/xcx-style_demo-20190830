<!--
 * @Description: In User Settings Edit
 * @Author: miaomiao.yang
 * @Date: 2019-03-08 17:54:59
 * @LastEditTime: 2019-09-20 18:03:49
 * @LastEditors: Please set LastEditors
 -->
## 小程序学习第一波

- [不懂的，没有用到的](#不懂的，没有用到的)
- [template的用法](#template的用法)
- [WXS响应事件](#WXS响应事件)
- [转发的两种方式](#转发的两种方式)
- [文件](#文件)
- [创建离屏canvas实例](#创建离屏canvas实例)

### 不懂的，没有用到的
**2019.09.20**
### 1.创建离屏canvas实例
[wx.createOffscreenCanvas()](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.createOffscreenCanvas.html)
### 2.动态转发信息
[wx.updateShareMenu](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share/updatable-message.html)

**2019.09.20**


### 转发的两种方式

[转发的调试](https://developers.weixin.qq.com/miniprogram/dev/devtools/different.html#普通的转发)支持请查看 `普通转发的调试支持` 和 `带 shareTicket 的转发`

>带 shareTicket的转发只有转发到群里才能达到相关信息

`wx.updateShareMenu`不会用。需要再找资料。
`wx.getShareInfo`:获取转发详细信息

如需要展示群名称，可以使用[开放数据组件open-data](https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html)

### [文件](https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.saveFile.html)
- `wx.saveFile`:保存文件到本地。注意：saveFile 会把临时文件移动，因此调用成功后传入的 tempFilePath 将不可用
- `wx.getSavedFileList`:获取该小程序下已保存的本地缓存文件列表
- `wx.openDocument`:打开pdf文档      
-  `wx.getFileSystemManager()` 文件管理器，可以保存删除一些文件 
用法：将图片数据流生成图片添加到image标签中或者绘画到canvas中
```
canvasBase64:function (base64_url) {
    return new Promise((resolve, reject) => {
    const filePath = `${wx.env.USER_DATA_PATH}/temp_image.jpeg`;
    const buffer = wx.base64ToArrayBuffer(base64_url);
    wx.getFileSystemManager().writeFile({
      filePath,
      data: buffer,
      encoding: 'binary',
      success() {
        return resolve(filePath);
      },
      fail() {
        reject(new Error('ERROR_BASE64SRC_WRITE'));
      },
    });
  });
}

```

**20190919**

### WXS响应事件

[wxs响应事件](https://developers.weixin.qq.com/miniprogram/dev/framework/view/interactive-animation.html)是为了减少通信的次数，让事件在视图层（Webview）响应

总结：很像运用js写效果。


### template的用法
```
template
  - template.wxml

<template name='itemList'>
    <image class='item-img' src='{{listItem.picImg}}' />
    <view>{{listItem.name}}</view>
</template>


home
    -home.wxml
<import src='../../template/template.wxml'/>
<template is='itemList' data='{{listItem}}'></template>

```

注意： 
1. template的样式不能写在template.wxss中，要写在引入<template>的home.wxss或者app.wxss
2. app.json的pages中不需要引入该wxml

- 订单列表
```
<view class="noCodeBox bgWriteColor" wx:if="{{!orderList.length}}">
    <image class="imgCenter" src="/images/pic_delivery_empty.png"></image>
    <text class="noCodeText">暂无订单信息</text>
</view>
<scroll-view class="scroll" wx:else 
    scroll-y="true" 
    bindscrolltolower='loadMoreList' style="height: 100%;">


    <view  wx:if='{{!isMore}}' class='noMore'>
        <text>没有更多了</text>
    </view>
    <view wx:else class='noMore'>
        <text>下拉加载更多</text>
    </view>
</scroll-view>
```

