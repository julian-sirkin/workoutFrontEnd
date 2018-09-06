'use strict'
const authUI = require('../auth/ui-auth.js')

const displayMakeNewExercise = function () {
  authUI.homeDisplay()
  $('#new-exercise').show()
}

module.exports = {
  displayMakeNewExercise
}
