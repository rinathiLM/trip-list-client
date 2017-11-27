'use strict'

const store = require('../store')

const signUpFailure = function () {
  console.log('error signing up')
  $('#signup-message').text('Error on sign up. Please try again.')
}

const signInSuccess = function (response) {
  console.log('successfully logged in')
  $('#message').text('You\'re now signed in.')
  store.user = response.user
  $('#sign-in-modal').modal('hide')
  $('.sign-in-form')[0].reset()
  $('.display-when-logged-in').show()
  $('.hide-when-logged-in').hide()
  $('#sign-up-modal').modal('hide')
  $('.sign-up-form')[0].reset()
}

const signInFailure = function () {
  console.log('error signing in')
  $('#login-message').text('Error on sign in. Please try again.')
}

const signOutSuccess = function () {
  console.log('successfully signed out')
  $('#message').text('You\'re now signed out.')
  store.user = null
  $('.hide-when-logged-in').show()
  $('.display-when-logged-in').hide()
}

const signOutFailure = function () {
  console.log('error signing out')
  $('#message').text('Error on sign out.')
}

const changePasswordSuccess = function () {
  console.log('password change success')
  $('#message').text('Changed password successfully.')
  $('#change-pwd-modal').modal('hide')
  $('.change-pwd-form')[0].reset()
}

const changePasswordFailure = function () {
  console.log('password change error')
  $('#password-message').text('There was an error. Please try again.')
}

module.exports = {
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutFailure,
  signOutSuccess,
  changePasswordSuccess,
  changePasswordFailure
}
