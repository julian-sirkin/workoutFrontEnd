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
  console.log('workout information returning from API', data)
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
  $('#show-workout input').val('')
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

const newExerciseSuccess = function () {
  alert('New exercise has been logged')
}

const newExerciseFail = function () {
  alert('Failed to remember')
}

const showExercisesSuccess = function (data) {
  alert('got all the existing exercises')
  console.log(data)
}

const showExercisesFail = function () {
  alert('Failed to grab exercises')
}


module.exports = {
  logWorkoutSuccess,
  logWorkoutFail,
  showWorkoutsSuccess,
  showWorkoutsFail,
  showWorkoutSuccess,
  showWorkoutFail,
  newWorkout,
  pickWorkout,
  newExerciseSuccess,
  newExerciseFail,
  showExercisesSuccess,
  showExercisesFail
}
