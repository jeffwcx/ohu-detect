
export default [
  // qq browser
  {
    name: 'qq',
    match: '\\sqq\\/([0-9.]+)\\s',
    order: ['version']
  }, {
    name: 'wechat',
    match: 'micromessenger\\/([0-9.]+)',
    order: ['version']
  },
  {
    name: 'qqbrowser',
    match: 'mqqbrowser\\/([0-9.]+)',
    order: ['version']
  },
  // uc
  {
    name: 'alipay',
    match: 'alipayclient\\/([0-9.]+)',
    order: ['version']
  },
  {
    name: 'uc',
    match: 'ucbrowser\\/([0-9.]+)',
    order: ['version']
  },
  // baidu
  {
    name: 'baidu',
    match: 'baiduboxapp\\/([0-9.]+)',
    order: ['version']
  },
  {
    name: 'baidubrowser',
    match: 'baidubrowser\\/([0-9.]+)',
    order: ['version']
  },
  // liebao
  {
    name: 'liebao',
    match: 'liebaofast\\/([0-9.]+)',
    order: ['version']
  },
  // sougou
  {
    name: 'sogou',
    match: 'sogoumobilebrowser\\/([0-9.]+)',
    order: ['version']
  },
  {
    name: 'opera',
    match: 'opr\\/([0-9.]+)',
    order: ['version']
  },
  {
    name: 'edge',
    match: 'edge\\/([0-9.]+)',
    order: ['version']
  },
  {
    name: 'chrome',
    match: 'chrome\\/([0-9.]+)',
    order: ['version']
  },
  // ie11 special
  {
    name: 'ie',
    match: 'rv:(11.0)',
    order: ['version']
  },
  {
    name: 'ie',
    match: 'msie\\s([0-9.]+)',
    order: ['version']
  },
  {
    name: 'firefox',
    match: 'firefox\\/([0-9.]+)',
    order: ['version']
  },
  {
    name: 'safari',
    match: 'version\\/([0-9.]+).*safari',
    order: ['version']
  },
  {
    name: 'opera',
    match: 'opera\\/([0-9.]+)',
    order: ['version']
  }
]
