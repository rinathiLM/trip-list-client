'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('data is ', data)
  api.signUp(data)
    .then(api.signUpSignIn)
    .then(ui.signInSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('data is ', data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = (event) => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('data is ', data)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const clearLoginForm = () => {
  $('.sign-in-form')[0].reset()
}

const clearSignUpForm = () => {
  $('.sign-up-form')[0].reset()
}

const clearPassForm = () => {
  $('.change-pwd-form')[0].reset()
}

const clearPassMessage = () => {
  $('#password-message').text('')
}

const clearLoginMessage = () => {
  $('#login-message').text('')
}

const clearSignUpMessage = () => {
  $('#signup-message').text('')
}

const addHandlers = function () {
  $('.sign-up-form').on('submit', onSignUp)
  $('.sign-in-form').on('submit', onSignIn)
  $('.change-pwd-form').on('submit', onChangePassword)
  $('.sign-out-link').on('click', onSignOut)
  $('#sign-in-modal').on('hidden.bs.modal', clearLoginForm)
  $('#sign-in-modal').on('show.bs.modal', clearLoginMessage)
  $('#sign-up-modal').on('hidden.bs.modal', clearSignUpForm)
  $('#sign-up-modal').on('show.bs.modal', clearSignUpMessage)
  $('#change-pwd-modal').on('hidden.bs.modal', clearPassForm)
  $('#change-pwd-modal').on('show.bs.modal', clearPassMessage)
}

module.exports = {
  addHandlers
}
