
export default [
  {
    name: 'chrome',
    match: 'chrome\\/([0-9.]+)',
    order: ['version'],
    pre: [
      {
        name: 'edge',
        match: 'edge\\/([0-9.]+)',
        order: ['version']
      },
      {
        name: 'opera',
        match: 'opr\\/([0-9.]+)',
        order: ['version']
      }
    ]
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
    name: 'ie',
    match: 'msie\\s([0-9.]+)',
    order: ['version'],
    pre: [
      // ie11 special
      {
        name: 'ie',
        match: 'rv:(11.0)',
        order: ['version']
      }
    ]
  },
  {
    name: 'opera',
    match: 'opera\\/([0-9.]+)',
    order: ['version']
  }
]
