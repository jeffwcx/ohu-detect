function version (str) {
  return str.replace(/_/g, '.')
}

function device (str) {
  return str.toLowerCase()
}

export default [
  {
    name: 'os x',
    match: '\\((\\w+);.*mac os x ([0-9_\\.]+)',
    order: ['device', 'version'],
    process: {
      version,
      device
    }
  },
  {
    name: 'ios',
    match: '\\((\\w+)(?:;|\\s).*os ([0-9_\\.]+) like mac os x',
    order: ['device', 'version'],
    process: {
      version,
      device
    }
  },
  {
    name: 'linux',
    match: 'linux',
    post: [
      {
        name: 'android',
        match: 'android ([0-9.]+)',
        order: ['version']
      }
    ]
  },
  {
    name: 'windows',
    match: 'windows nt ([0-9.]+)',
    order: ['version'],
    process: {
      version (str) {
        if (str === '5.1' || str === '5.2') {
          return 'xp'
        } else if (str === '6.0') {
          return 'vista'
        } else if (str === '6.1') {
          return '7'
        } else if (str === '6.2' || str === '6.3') {
          return '8'
        } else if (str === '6.4' || str === '10.0') {
          return '10'
        }
        return 'nt' + str
      }
    }
  }
]
