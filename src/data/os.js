function version (str) {
  return str.replace(/_/g, '.')
}

export default [
  {
    name: 'os x',
    match: '\\((\\w+);.*mac os x ([0-9_]+)',
    order: ['device', 'version'],
    process: {
      version
    }
  },
  {
    name: 'ios',
    match: '\\((\\w+);.*os ([0-9_]+) like mac os x',
    order: ['device', 'version'],
    process: {
      version
    }
  },
  {
    name: 'linux',
    match: 'linux',
    branches: [
      {
        name: 'android',
        match: 'android ([0-9.]+)',
        order: ['version']
      }
    ]
  },
  {
    name: 'windows',
    match: 'windows',
    branches: [
      {
        name: 'windows xp',
        match: 'windows nt 5\\.[12]'
      },
      {
        name: 'windows vista',
        match: 'windows vista nt6\\.0'
      },
      {
        name: 'windows 7',
        match: 'windows nt 6\\.1'
      },
      {
        name: 'windows 8',
        match: 'windows nt 6\\.[23]'
      },
      {
        name: 'windows 10',
        match: 'windows nt (6\\.4|10)'
      }
    ]
  }
]
