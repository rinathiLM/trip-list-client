'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onCreateTrip = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('data entered is ', data)
  api.createTrip(data)
    .then(ui.createTripSuccess)
    // .then(getTripsUpdate)
    .catch(ui.createTripFailure)
}

const onShowAllTrips = (event) => {
  event.preventDefault()
  $('.location').hide()
  api.getTrips()
    .then(ui.getTripsSuccess)
// had to do the below so that all of these run before my handlebars since the button functionality relies on the below
// .then(() => $('.update).on('submit', onUpdateTrip))
    .then(() => $('.delete-trip').on('click', onDeleteTrip))
    .catch(ui.getTripsFailure)
}

const onDeleteTrip = (event) => {
  event.preventDefault()
  const tripId = $(event.target).data('id')
  console.log('trip to delete is ', tripId)
  $('.modal-backdrop').remove()
  api.deleteTrip(tripId)
    .then(ui.deleteTripSuccess(tripId))
    .then(getTripsAgain)
    // .then(() => $('#delete-trip').on('click', onDeleteTrip))
    .catch(ui.deleteTripFailure)
}

const getTripsAgain = (event) => {
  api.getTrips()
    .then(ui.getTripsSuccess)
    // update handlebars too
    // .then(() => $('.update).on('submit', onUpdateTrip))
    .then(() => $('.delete-trip').on('click', onDeleteTrip))
    .catch(ui.getTripsFailure)
}

const addHandlers = function () {
  $('#enter-location').on('submit', onCreateTrip)
  $('#show-trips').on('click', onShowAllTrips)
  $('.delete-trip').on('click', onDeleteTrip)
}

module.exports = {
  addHandlers
}
