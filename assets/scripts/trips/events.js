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

const addHandlers = function () {
  $('#enter-location').on('submit', onCreateTrip)
}

module.exports = {
  addHandlers
}
