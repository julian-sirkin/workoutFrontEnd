'use strict'
const authUI = require('../auth/ui-auth.js')

const displayMakeNewExercise = function () {
  authUI.homeDisplay()
  $('#create-exercise input').val('')
  $('#new-exercise').show()
}

module.exports = {
  displayMakeNewExercise
}
