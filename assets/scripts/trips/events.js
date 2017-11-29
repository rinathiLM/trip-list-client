'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onCreateTrip = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('data entered is ', data)
  // api.createTrip(data)
  //   .then(ui.createTripSuccess)
  //   .catch(ui.createTripFailure)
}

const onShowAllTrips = (event) => {
  event.preventDefault()
  api.getTrips()
    .then(ui.getTripsSuccess)
    // have to enable this since update/delete is in handlebars
    .then(() => $('.update-trip').on('click', onUpdateTrip))
    .then(() => $('.undo-update').on('click', onUndoUpdate))
    .then(() => $('.delete-trip').on('click', onDeleteTrip))
    .catch(ui.getTripsFailure)
}

const onDeleteTrip = (event) => {
  event.preventDefault()
  const tripId = $(event.target).data('id')
  console.log('trip to delete is ', tripId)
  api.deleteTrip(tripId)
    .then(ui.deleteTripSuccess(tripId))
    .then(getTripsAgain)
    .catch(ui.deleteTripFailure)
}

const onUpdateTrip = (event) => {
  event.preventDefault()
  console.log('yes is clicked in update modal')
  const tripId = $(event.target).data('id')
  console.log('trip to edit id is ', tripId)
  api.updateTrip(tripId)
    .then(ui.updateTripSuccess(tripId))
    .then(getTripsAgain)
    .catch(ui.updateTripFailure)
}

const onUndoUpdate = (event) => {
  event.preventDefault()
  console.log('not yet is clicked in update modal')
  const tripId = $(event.target).data('id')
  console.log('trip to edit id is ', tripId)
  api.updateTripFalse(tripId)
    .then(ui.updateTripFalseSuccess(tripId))
    .then(getTripsAgain)
    .catch(ui.updateTripFalseFailure)
}

const getTripsAgain = (event) => {
  api.getTrips()
    .then(ui.getTripsSuccess)
    // have to enable this since update/delete is in handlebars
    .then(() => $('.update-trip').on('click', onUpdateTrip))
    .then(() => $('.undo-update').on('click', onUndoUpdate))
    .then(() => $('.delete-trip').on('click', onDeleteTrip))
    .catch(ui.getTripsFailure)
}

const goBack = (event) => {
  $('.content').empty()
  $('.location').show()
  $('#map').show()
  $('#location-entry').val('')
  $('.back-btn').hide()
}

const clearUpdateMessage = () => {
  $('#clearUpdate').text('')
}

const clearDeleteMessage = () => {
  $('#clearDelete').text('')
}

const addHandlers = function () {
  $('#enter-location').on('submit', onCreateTrip)
  $('#show-trips').on('click', onShowAllTrips)
  $('.delete-trip').on('click', onDeleteTrip)
  $('.update-trip').on('click', onUpdateTrip)
  $('.back-btn').on('click', goBack)
  $('.undo-update').on('click', onUndoUpdate)
  $('#update-trip-modal').on('show.bs.modal', clearUpdateMessage)
  $('#delete-trip-modal').on('show.bs.modal', clearDeleteMessage)
}

module.exports = {
  addHandlers
}
