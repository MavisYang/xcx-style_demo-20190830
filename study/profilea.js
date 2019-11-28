/*
 * @Author: yangmiaomiao
 * @Date: 2019-11-28 14:19:09
 * @LastEditors: yangmiaomiao
 * @LastEditTime: 2019-11-28 14:53:49
 * @Description: 
 */
const CURRENT = 'dev'
const PROFILES = {
  'dev': {
    'online': false,
    'domain': 'http://dev:8080' // 把 <ip dev> 写进本地 hosts 文件, ip 表示对应后端开发的地址
  },
  'test': {
    'online': false,
    'domain': 'http://test-api.xxx.com'
  },
  'prod': {
    'online': true,
    'domain': 'https://api.xxx.com'
  }
}
const ENV = PROFILES[CURRENT]

export { ENV }

/** 
导入，修改CURRENT值
import { ENV } from './profile.js'

...

if (!ENV.online) {
  console.log('xxx')
}

...

wx.request({
  url: ENV.domain + '/xxx/xxx'
  ...
})
*/