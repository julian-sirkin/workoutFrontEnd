'use strict'
const displayWorkouts = require('../templates/show-all-workouts.handlebars')
const displayOneWorkout = require('../templates/show-one-workout.handlebars')
const authUI = require('../auth/ui-auth.js')

const logWorkoutSuccess = function () {
  alert('Workout logged successfully')
  $('#new-workout').hide()
}

const logWorkoutFail = function () {
  alert('laid on a couch instead')
}

const showWorkoutsSuccess = function (data) {
  authUI.homeDisplay()
  console.log(data)
  const showWorkoutsHtml = displayWorkouts({workouts: data.workouts})
  $('#jumbotron').html(showWorkoutsHtml)
  $('#jumbotron').show()
}

const showWorkoutsFail = function () {
  alert('did not get workouts')
}

const showWorkoutSuccess = function (data) {
  const showOneWorkout = displayOneWorkout(data)
  $('#jumbotron').html(showOneWorkout)
  $('#jumbotron').show()
}

const showWorkoutFail = function () {
  alert('ate bahn mi!')
}

const newWorkout = function () {
  authUI.homeDisplay()
  $('#new-workout').show()
}

const pickWorkout = function () {
  authUI.homeDisplay()
  $('#see-one-workout').show()
}

module.exports = {
  logWorkoutSuccess,
  logWorkoutFail,
  showWorkoutsSuccess,
  showWorkoutsFail,
  showWorkoutSuccess,
  showWorkoutFail,
  newWorkout,
  pickWorkout
}
