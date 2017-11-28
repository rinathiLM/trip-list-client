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

const getTrips = function () {
  return $.ajax({
    url: config.apiOrigin + '/trips',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createTrip,
  getTrips
}
