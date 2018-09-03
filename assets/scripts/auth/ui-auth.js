'use strict'
const store = require('../store.js')

// What it should look like on load, and when logged out
const initialDisplay = function () {
  $('#jumbotron, #new-workout, #signup-card, #acct-options, #workout-options, #change-password-card, #see-one-workout').hide()
}
// View on first login
const homeDisplay = function () {
  initialDisplay()
  $('#login-card').hide()
  $('#new-Workout, #workout-options, #acct-options').show()
}

const signUpSuccess = function () {
  $('#signup-card input').val('')
  alert('A great success')
}

const signUpFail = function () {
  alert('Failed miserably!')
}

const logInSuccess = function (data) {
  store.user = data.user
  console.log(data.user, 'data back from api on login')
  $('#login input').val('')
  $('#login-card').hide()
  $('#new-Workout, #workout-options, #acct-options').show()
}

const logInFail = function () {
  alert('BOOOOOOOOO! BOOOOOOOOO!')
}

const logOutSuccess = function () {
  initialDisplay()
  $('#login-card').show()
  // $('#jumbotron, #new-workout, #signup-card, #acct-options, #workout-options, #change-password-card, #see-one-workout').hide()
  // $('#jumbotron, new-workout, #logout-btn, #change-password-btn, #workout-options, #change-password-card').hide()
  alert('ran away like the french')
}

const logOutFail = function () {
  alert('failed to run away')
}

const changePasswordSuccess = function () {
  homeDisplay()
  $('#change-password-card').hide()
  alert('changed password successfully')
}

const changePasswordFail = function () {
  alert('You have failed to change your password')
}

const onToCreateAccount = function () {
  $('#login input').val('')
  $('#login-card').hide()
  $('#signup-card').show()
}

const onToLogin = function () {
  $('#signup-card input').val('')
  $('#signup-card').hide()
  $('#login-card').show()
}

const showChangePasswordForm = function () {
  homeDisplay()
  $('#change-password-card').show()
}

const hideChangePasswordForm = function () {
  $('#change-password-card').hide()
}
module.exports = {
  signUpSuccess,
  signUpFail,
  logInSuccess,
  logInFail,
  logOutSuccess,
  logOutFail,
  changePasswordSuccess,
  changePasswordFail,
  onToCreateAccount,
  onToLogin,
  showChangePasswordForm,
  hideChangePasswordForm,
  initialDisplay,
  homeDisplay
}
