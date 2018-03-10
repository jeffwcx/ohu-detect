import Detector from '../../src/index'
import FullDetector from '../../src/full'
import { expect } from 'chai'
import data from './data.json'

describe('test ohu-detect', () => {
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      const v = data[key]
      it(key, () => {
        const detector = new Detector(v.ua)
        expect(detector.os).to.deep.equal(v.os)
        expect(detector.browser).to.deep.equal(v.baseBrowser)
        expect(detector.browserEngine).to.deep.equal(v.browserEngine)
      })
    }
  }
})

describe('test full ohu-detect ', () => {
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      const v = data[key]
      it(key, () => {
        const detector = new FullDetector(v.ua)
        expect(detector.os).to.deep.equal(v.os)
        expect(detector.browser).to.deep.equal(v.browser)
        expect(detector.browserEngine).to.deep.equal(v.browserEngine)
      })
    }
  }
})
