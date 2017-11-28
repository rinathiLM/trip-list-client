'use strict'
const showTripsTemplate = require('../templates/show-trips.handlebars')

const createTripSuccess = () => {
  console.log('successfully created trip')
  $('#message').text('You\'ve successfully entered a trip!')
  $('#enter-location')[0].reset()
}

const createTripFailure = () => {
  console.log('Error creating a trip')
}

const getTripsSuccess = (data) => {
  console.log('got all trips successfully')
  const showTripsHtml = showTripsTemplate({ trips: data.trips })
  $('.content').html(showTripsHtml)
  // $('#message').text('')
}

const getTripsFailure = function () {
  console.log('Error getting all trips')
}

const deleteTripSuccess = (tripId) => {
  console.log('delete trip successfully')
}

const deleteTripFailure = () => {
  console.log('Error deleting trip')
}

module.exports = {
  createTripSuccess,
  createTripFailure,
  getTripsSuccess,
  getTripsFailure,
  deleteTripSuccess,
  deleteTripFailure
}
