# ohu-detect

## Usage

### In es6+ (you can use it in browser or node)

``` javascript
import { Detect } from 'ohu-detect'
const detector = new Detect(navigator.userAgent)
detector.os
detector.browser

```

Get operating system
``` javascript
detector.os

{
  name: 'os x',
  device: 'macintosh', // option
  version: '10.13.3'
}
```

Get browser name and version
``` javascript
detector.browser

{
  name: 'firefox',
  version: '58.0'
}
```

Get browser engine name and version
```javascript
detector.browserEngine

{
  name: 'gecko',
  version: '20100101'
}
```

### In browser

``` html
<link rel="stylesheet" href="https://unpkg.com/ohu-detect/dist/ohu-detect.min.css">
<script>
  var detector = new ohu.Detector(navigator.userAgent)
</script>
```

## Support

### Support OS

+ os x
+ ios (iphone, ipad, ipod)
+ android
+ windows
    + windows xp
      ``` javascript
      {
        name: 'windows',
        version: "xp"
      }
      ```
    + windows vista
      ``` javascript
      {
        name: 'windows',
        version: "vista"
      }
      ```
    + windows 7
    + windows 8
    + windows 10
    + when unknown
      ``` javascript
      {
        name: 'windows',
        version: "nt6.5"
      }
      ```
+ linux

### Support Browsers

+ chrome
+ firefox
+ ie
+ edge
+ safari
+ opera

following is popular browsers in China

+ qqbrowser(QQ手机浏览器)
+ qq(QQ内置浏览器)
+ wechat(微信内置浏览器)
+ uc(UC浏览器)
+ alipay(支付宝内置浏览器)
+ baidubrowser(百度手机浏览器)
+ baidu(百度APP内置浏览器)
+ liebao(猎豹浏览器)
+ sogou(搜狗浏览器)

### Support Browser Engines

+ trident
+ gecko
+ webkit
+ presto
