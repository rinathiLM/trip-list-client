'use strict'

const config = require('../config')
const store = require('../store')

const createTrip = (data) => {
  console.log('got to create trip api, data is ', data)
  return $.ajax({
    url: config.apiOrigin + '/trips',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createTrip
}
