function isMobile (str) {
  if (str) {
    return true
  }
  return false
}

export default [
  {
    name: 'firefox',
    match: 'firefox\\/([0-9.]+)',
    order: ['version']
  }, {
    name: 'ie',
    match: 'msie ([0-9.]+);.*(iemobile)?',
    order: ['version', 'isMobile'],
    process: {
      isMobile
    }
  }, {
    name: 'safari',
    match: 'version\\/([0-9.]+) (mobile.+)?safari',
    order: ['version', 'isMobile'],
    process: {
      isMobile
    }
  }, {
    name: 'chrome',
    match: 'chrome\\/([0-9.]+) (mobile)?',
    order: ['version', 'isMobile'],
    process: {
      isMobile
    },
    branches: [
      {
        name: 'opera',
        match: 'opr\\/([0-9.]+)',
        order: ['version']
      },
      {
        name: 'uc',
        match: 'ucbrowser\\/([0-9.]+)',
        order: ['version'],
        branches: [
          {
            name: 'alipay',
            match: 'alipayclient\\/([0-9.]+)',
            order: ['version']
          }
        ]
      },
      {
        name: 'qqbrowser',
        match: 'mqqbrowser\\/([0-9.]+)',
        order: ['version'],
        branches: [
          {
            name: 'qq',
            match: 'qq\\/([0-9.]+)',
            order: ['version']
          }, {
            name: 'wechat',
            match: 'micromessenger\\/([0-9]+)',
            order: ['version']
          }
        ]
      },
      {
        name: 'liebao',
        match: 'liebaofast\\/([0-9]+)',
        order: ['version']
      }
    ]
  }, {
    name: 'opera',
    match: 'opera\\/([0-9.]+)',
    order: ['version']
  }
]
