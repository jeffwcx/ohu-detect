import { Detector } from '../../src/index'
import { expect } from 'chai'
import data from './data.json'

describe('test ohu-detect', () => {
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      const v = data[key]
      it(key, () => {
        const detector = new Detector(v.ua)
        console.log(detector.os, v.os)
        console.log(detector.browser, v.browser)
        console.log(detector.browserEngine, v.browserEngine)
        expect(detector.os).to.deep.equal(v.os)
        expect(detector.browser).to.deep.equal(v.browser)
        expect(detector.browserEngine).to.deep.equal(v.browserEngine)
      })
    }
  }
})
