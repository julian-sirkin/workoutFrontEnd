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
}

const logInFail = function () {
  alert('BOOOOOOOOO! BOOOOOOOOO!')
}

const logOutSuccess = function () {
  alert('logged out successfully')
}

const logOutFail = function () {
  alert('failed to run away')
}

const changePasswordSuccess = function () {
  alert('changed password successfully')
}

const changePasswordFail = function () {
  alert('You have failed to change your password')
}

module.exports = {
  signUpSuccess,
  signUpFail,
  logInSuccess,
  logInFail,
  logOutSuccess,
  logOutFail,
  changePasswordSuccess,
  changePasswordFail
}
