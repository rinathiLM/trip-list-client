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
  api.getTrips()
    .then(ui.getTripsSuccess)
// had to do the below so that all of these run before my handlebars since the button functionality relies on the below
// .then(() => $('.update-hike-form').on('submit', onUpdateHike))
// .then(() => $('.delete-hike-link').on('click', onDeleteHike))
    .catch(ui.getTripsFailure)
}

const addHandlers = function () {
  $('#enter-location').on('submit', onCreateTrip)
  $('#show-trips').on('click', onShowAllTrips)
}

module.exports = {
  addHandlers
}
