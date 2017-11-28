'use strict'

const createTripSuccess = function () {
  console.log('successfully created trip')
  $('#message').text('You\'ve successfully entered a trip!')
  $('#enter-location')[0].reset()
}

const createTripFailure = function () {
  console.log('error creating trip')
}

module.exports = {
  createTripSuccess,
  createTripFailure
}
