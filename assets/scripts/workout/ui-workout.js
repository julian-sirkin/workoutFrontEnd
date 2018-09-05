'use strict'
const displayWorkouts = require('../templates/show-all-workouts.handlebars')
const displayOneWorkout = require('../templates/show-one-workout.handlebars')
const displayExercises = require('../templates/all-exercises-in-dropdown.handlebars')
const authUI = require('../auth/ui-auth.js')
const store = require('../store.js')

const logWorkoutSuccess = function (data) {
  store.workout_id = data.workout.id
  console.log('Data returned from creating workout', data.workout.id)
  alert('Workout logged successfully')
  // $('#new-workout').hide()
}

const logWorkoutFail = function () {
  alert('laid on a couch instead')
}

const showWorkoutsSuccess = function (data) {
  authUI.homeDisplay()
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
  console.log('data on exercises', data.exercises)
  //store.exercises = data.exercises
  const showExercisesHtml = displayExercises({exercises: data.exercises})
  $('#jumbotron').html(showExercisesHtml)
  $('#jumbotron').show()
}

const showExercisesFail = function () {
  alert('Failed to grab exercises')
}

const selectExerciseSuccess = function (data) {
  console.log(data, 'information returned from api')
  alert('linked exercise to workout')
}

const selectExerciseFail = function () {
  alert('did not link the two....booo')
}
const filloutWorkoutSuccess = function () {
  alert('I have been updated')
}

const filloutWorkoutFail = function () {
  alert('failed to fill out the deets')
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
  showExercisesFail,
  selectExerciseSuccess,
  selectExerciseFail,
  filloutWorkoutSuccess,
  filloutWorkoutFail
}
