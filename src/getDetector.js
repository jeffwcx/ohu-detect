/**
 * get detector according to different data
 */

export default function getDetector (os, browsers, browserEngines) {
  return class Detector {
    constructor (ua) {
      this.ua = ua
      this._detectOS()
      this._detectBrowser()
      this._detectBrowserEngine()
    }
    _match (data, result) {
      data.some((item) => {
        if (item.pre) {
          this._match(item.pre, result)
          if (result.name) return true
        }
        const mg = this.ua.match(new RegExp(item.match, 'i'))
        if (mg !== null) {
          result.name = item.name
          if (item.order) {
            for (let i = 0, j = 1; i < item.order.length; i += 1, j += 1) {
              const matchName = item.order[i]
              let matchResult = mg[j]
              if (item.process && item.process[matchName]) {
                matchResult = item.process[matchName](matchResult)
              }
              result[matchName] = matchResult
            }
          }
          if (item.post) {
            this._match(item.post, result)
          }
          return true
        }
        return false
      })
    }
    _detectOS () {
      this.os = {}
      this._match(os, this.os)
    }
    _detectBrowserEngine () {
      this.browserEngine = {}
      this._match(browserEngines, this.browserEngine)
    }
    _detectBrowser () {
      this.browser = {}
      this._match(browsers, this.browser)
    }
  }
}
