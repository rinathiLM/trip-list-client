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
  $('#message').text('')
  $('.location').hide()
  $('.back-btn').show()
}

const getTripsFailure = function () {
  console.log('Error getting all trips')
}

const deleteTripSuccess = (tripId) => {
  console.log('deleted trip successfully')
  $('.modal-backdrop').remove()
}

const deleteTripFailure = () => {
  console.log('Error deleting trip')
  $('#delete-message').text('Error deleting this entry, please try again.')
}

const updateTripSuccess = (data) => {
  console.log('updated trip successfully, data returned is ', data)
  $('.modal-backdrop').remove()
}

const updateTripFailure = () => {
  console.log('Error updating trip')
  $('#update-message').text('Error udpating this entry, please try again.')
}

const updateTripFalseSuccess = (data) => {
  console.log('updated trip successfully, data returned is ', data)
  $('.modal-backdrop').remove()
}

const updateTripFalseFailure = () => {
  console.log('Error updating trip')
  $('#update-message').text('Error udpating this entry, please try again.')
}

module.exports = {
  createTripSuccess,
  createTripFailure,
  getTripsSuccess,
  getTripsFailure,
  deleteTripSuccess,
  deleteTripFailure,
  updateTripSuccess,
  updateTripFailure,
  updateTripFalseSuccess,
  updateTripFalseFailure
}
