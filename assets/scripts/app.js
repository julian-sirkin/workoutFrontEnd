'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events-auth.js')
const workoutEvents = require('./workout/events-workout.js')
const exerciseEvents = require('./exercise/events-exercise.js')

const initialDisplay = function () {
  $('#jumbotron, #new-workout, #signup-card, #acct-options, #workout-options, #change-password-card, #see-one-workout, #new-exercise').hide()
}

// Initial display
$(document).ready(initialDisplay)

// Route to event handlers
$(() => {
  authEvents.authHandlerController()
  workoutEvents.workoutHandlerController()
  exerciseEvents.exerciseHandlerController()
})

module.exports = {
  initialDisplay
}
