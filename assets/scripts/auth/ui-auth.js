'use strict'
const store = require('../store.js')

const signUpSuccess = function () {
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
  $('#new-Workout, #logout-btn, #change-password-btn, #workout-options').show()
}

const logInFail = function () {
  alert('BOOOOOOOOO! BOOOOOOOOO!')
}

const logOutSuccess = function () {
  $('#login-card').show()
  $('#jumbotron, new-workout, #logout-btn, #change-password-btn, #workout-options, change-password-card').hide()
}

const logOutFail = function () {
  alert('failed to run away')
}

const changePasswordSuccess = function () {
  $('#change-password-card').hide()
  alert('changed password successfully')
}

const changePasswordFail = function () {
  alert('You have failed to change your password')
}

const onToCreateAccount = function () {
  $('#login-card').hide()
  $('#signup-card').show()
}

const onToLogin = function () {
  $('#signup-card').hide()
  $('#login-card').show()
}

const showChangePasswordForm = function () {
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
  hideChangePasswordForm
}
