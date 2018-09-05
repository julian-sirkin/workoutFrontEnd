'use strict'
const store = require('../store.js')
const ui = require('./ui-exercise.js')

const onDisplayMakeNewExercise = function () {
  ui.displayMakeNewExercise()
}


const exerciseHandlerController = function () {
$('#display-make-new-exercise').on('click', onDisplayMakeNewExercise)
}

module.exports = {
  exerciseHandlerController
}
