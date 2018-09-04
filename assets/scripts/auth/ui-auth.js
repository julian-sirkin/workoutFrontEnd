'use strict'
const store = require('../store.js')
const event = require('./events-auth.js')

// What it should look like on load, and when logged out
const initialDisplay = function () {
  $('#jumbotron, #new-workout, #signup-card, #acct-options, #workout-options, #change-password-card, #see-one-workout').hide()
}
// View on first login
const homeDisplay = function () {
  initialDisplay()
  $('#login-card, #jumbotron').hide()
  $('#new-Workout, #workout-options, #acct-options').show()
}
/*
const signUpSuccess = function (data) {
  event.signInAfterSignUp()
  $('#signup-card input').val('')
  alert('A great success')
}*/

const signUpFail = function () {
  $('#jumbotron').html('<h4 class="text-center">Please try to sign up again</h4>')
  $('#jumbotron').show()
}

const logInSuccess = function (data) {
  store.user = data.user
  console.log(data.user, 'data back from api on login')
  $('#login input, #signup-card input').val('')
  $('#login-card, #signup-card').hide()
  $('#new-Workout, #workout-options, #acct-options').show()
  $('#jumbotron').empty()
}

const logInFail = function () {
$('#jumbotron').html('<h4 class="text-center">Please try to log in again</h4>')
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
  $('#change-password input').val('')
  $('#jumbotron').html('<h4>Password Changed</h4>').show()

}

const changePasswordFail = function () {
$('#jumbotron').html('<h4>Please try to change your password again</h4>').show()
$('#change-password input').val('')
}

const onToCreateAccount = function () {
  $('#login input').val('')
  $('#login-card, #jumbotron').hide()
  $('#signup-card').show()
  $('#jumbotron').empty()
}

const onToLogin = function () {
  $('#signup-card input').val('')
  $('#signup-card, #jumbotron').hide()
  $('#login-card').show()
  $('#jumbotron').empty()

}

const showChangePasswordForm = function () {
  homeDisplay()
  $('#change-password-card').show()
}

const hideChangePasswordForm = function () {
  $('#change-password-card').hide()
}
module.exports = {
  // signUpSuccess,
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
