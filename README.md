# ohu-detect

Detect your browser!

## Usage

### In es6+ (you can use it in browser or node)

``` javascript
import Detector from 'ohu-detect'
const detector = new Detector(navigator.userAgent)

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
<script src="https://unpkg.com/ohu-detect/dist/ohu-detect.min.js"></script>
<script>
  var detector = new Detector(navigator.userAgent)
</script>
```

Some people may just want to detect basic browsers, so I write another version.

``` html
<script src="https://unpkg.com/ohu-detect/dist/ohu-detect.base.min.js"></script>
<script>
  var detector = new Detector(navigator.userAgent)
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

following is popular mobile browsers in China

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

