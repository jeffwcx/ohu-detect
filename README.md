# ohu-detect

## ⚠️ still working, not release!

## Usage

### In es6+

``` javascript
import { Detect } from 'ohu-detect'
const detector = new Detect(navigator.userAgent)
detector.os
detector.browser
detector.browserEngine
```

### In browser

``` html
<link rel="stylesheet" href="https://unpkg.com/ohu-detect/dist/ohu-detect.min.css">
<script>
  var detector = new ohu.Detector(navigator.userAgent)
  detector.os
  detector.browser
  detector.browserEngine
</script>
```
