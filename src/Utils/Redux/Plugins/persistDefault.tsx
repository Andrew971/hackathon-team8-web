import createRematchPersist from '@rematch/persist'
// see options API below
const options = {
  whitelist: ['sharedModel','userModel', 'cartModel'],
  throttle: 5000,
  version: 2,
}

export default createRematchPersist(options)