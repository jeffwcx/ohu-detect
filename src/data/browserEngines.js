export default [
  {
    name: 'trident',
    match: 'trident\\/([0-9.]+)',
    order: ['version']
  },
  {
    name: 'gecko',
    match: 'gecko\\/(\\d+)',
    order: ['version']
  },
  {
    name: 'webkit',
    match: 'webkit\\/([0-9.]+)',
    order: ['version']
  },
  {
    name: 'presto',
    match: 'presto\\/([0-9.]+)',
    order: ['version']
  }
]
