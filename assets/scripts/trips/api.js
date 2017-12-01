'use strict'

const config = require('../config')
const store = require('../store')

const createTrip = (data) => {
  // console.log('got to create trip api, data is ', data)
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
  // console.log('got to api - show all trips')
  return $.ajax({
    url: config.apiOrigin + '/trips',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteTrip = (tripId) => {
  // console.log('got to delete api, delete trip id is ', tripId)
  return $.ajax({
    url: config.apiOrigin + '/trips/' + tripId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateTrip = (tripId) => {
  return $.ajax({
    url: config.apiOrigin + '/trips/' + tripId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      trip: {
        done: true
      }
    }
  })
}

const updateTripFalse = (tripId) => {
  return $.ajax({
    url: config.apiOrigin + '/trips/' + tripId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      trip: {
        done: false
      }
    }
  })
}

module.exports = {
  createTrip,
  getTrips,
  deleteTrip,
  updateTrip,
  updateTripFalse
}
