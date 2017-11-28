'use strict'
const showTripsTemplate = require('../templates/show-trips.handlebars')

const createTripSuccess = function () {
  console.log('successfully created trip')
  $('#message').text('You\'ve successfully entered a trip!')
  $('#enter-location')[0].reset()
}

const createTripFailure = function () {
  console.log('Error creating a trip')
}

const getTripsSuccess = (data) => {
  console.log('got all trips successfully')
  const showTripsHtml = showTripsTemplate({ trips: data.trips })
  $('.content').html(showTripsHtml)
  // $('.location').hide()
  // $('#message').text('')
}

const getTripsFailure = function () {
  console.log('Error getting all trips')
}

module.exports = {
  createTripSuccess,
  createTripFailure,
  getTripsSuccess,
  getTripsFailure
}
