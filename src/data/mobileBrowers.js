import browsers from './browsers'

export default [
  // qq browser
  {
    name: 'qqbrowser',
    match: 'mqqbrowser\\/([0-9.]+)',
    order: ['version'],
    pre: [
      {
        name: 'wechat',
        match: 'micromessenger\\/([0-9.]+)',
        order: ['version']
      },
      {
        name: 'qq',
        match: '\\sqq\\/([0-9.]+)\\s',
        order: ['version']
      }
    ]
  },
  // uc
  {
    name: 'uc',
    match: 'ucbrowser\\/([0-9.]+)',
    order: ['version'],
    pre: [
      {
        name: 'alipay',
        match: 'alipayclient\\/([0-9.]+)',
        order: ['version']
      }
    ]
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
  ...browsers
]
