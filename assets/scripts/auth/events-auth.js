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

const onToCreateAccount = function (event) {
  console.log('I have been clicked')
}

const authHandlerController = function () {
  $('#signup-card').on('submit', onSignUp)
  $('#login').on('submit', onSignIn)
  $('#log-out').on('submit', onLogOut)
  $('#change-password').on('submit', onChangePassword),
  $('#to-create-acount').on('click', onToCreateAccount)

}

module.exports = {
  authHandlerController
}
