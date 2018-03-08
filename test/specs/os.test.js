import { Detector } from '../../src/index'
import { expect } from 'chai'

describe('test os', () => {
  it('os x', () => {
    const detector = new Detector(navigator.userAgent)
    expect(detector.os).to.deep.equal({
      name: 'os x',
      device: 'Macintosh',
      version: '10.13.3'
    })
  })
})
