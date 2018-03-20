import os from './data/os'
import browserEngines from './data/browserEngines'
import browsers from './data/browsers'
import getDetector from './getDetector'

const Detector = getDetector(os, browsers, browserEngines)

export default Detector
