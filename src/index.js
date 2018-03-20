import os from './data/os'
import browserEngines from './data/browserEngines'
import mobileBrowers from './data/mobileBrowers'
import getDetector from './getDetector'

const Detector = getDetector(os, mobileBrowers, browserEngines)

export default Detector
