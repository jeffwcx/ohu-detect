import os from './data/os'
import browserEngines from './data/browserEngines'
import browsers from './data/browsers'

export class Detector {
  constructor (ua) {
    this.ua = ua
    this._getOsStr()
    this._detectOS()
    this._detectBrowser()
    this._detectBrowserEngine()
  }
  _getOsStr () {
    this.osStr = this.ua.match(/\((.*?)\)/)[1]
  }
  _match (data, result) {
    data.some((item) => {
      const mg = this.ua.match(new RegExp(item.match, 'i'))
      if (mg !== null) {
        result.name = item.name
        for (let i = 1, j = 0; i < mg.length; i += 1, j += 1) {
          const matchName = item.order[j]
          let matchResult = mg[i]
          if (item.process && item.process[matchName]) {
            matchResult = item.process[matchName](matchResult)
          }
          result[item.order[j]] = matchResult
        }
        // if has branches
        if (item.branches) {
          this._match(item.branches, result)
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