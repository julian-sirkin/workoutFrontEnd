'use strict'
const displayWorkouts = require('../templates/show-all-workouts.handlebars')
const displayOneWorkout = require('../templates/show-one-workout.handlebars')


const logWorkoutSuccess = function () {
  alert('Workout logged successfully')
}

const logWorkoutFail = function () {
  alert('laid on a couch instead')
}

const showWorkoutsSuccess = function (data) {
  console.log(data)
  const showWorkoutsHtml = displayWorkouts({workouts: data.workouts})
  $('#jumbotron').html(showWorkoutsHtml)
  $('#jumbotron').show()
}

const showWorkoutsFail = function () {
  alert('did not get workouts')
}

const showWorkoutSuccess = function (data) {
  console.log(data)
  const showOneWorkout = displayOneWorkout(data)
  $('#jumbotron').html(showOneWorkout)
  $('#jumbotron').show()
}

const showWorkoutFail = function () {
  alert('ate bahn mi!')
}

const newWorkout = function () {
  $('#new-workout').show()
}

const pickWorkout = function () {
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
