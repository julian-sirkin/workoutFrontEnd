'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api-auth.js')
const ui = require('./ui-auth.js')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('signup is responding')
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFail)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.logIn(data)
    .then(ui.logInSuccess)
    .catch(ui.logInFail)
}
const onLogOut = function (event) {
  event.preventDefault()
  api.logOut()
    .then(ui.logOutSuccess)
    .catch(ui.logOutFail)
}
const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFail)
}

const onToCreateAccount = function () {
  ui.onToCreateAccount()
}

const onToLogin = function () {
  ui.onToLogin()
}
const onShowChangePasswordForm = function () {
  console.log('I have been clicked')
  ui.showChangePasswordForm()
}

const onKeepOldPassword = function () {
  console.log('time to run away')
  ui.hideChangePasswordForm()
}

const authHandlerController = function () {
  $('#signup-card').on('submit', onSignUp)
  $('#login').on('submit', onSignIn)
  $('#log-out').on('click', onLogOut)
  $('#change-password').on('click', onChangePassword),
  $('#to-create-account').on('click', onToCreateAccount),
  $('#to-login').on('click', onToLogin),
  $('#show-change-password').on('click', onShowChangePasswordForm),
  $('#keep-old-password').on('click', onKeepOldPassword)
}

module.exports = {
  authHandlerController
}
