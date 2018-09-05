'use strict'
const displayWorkouts = require('../templates/show-all-workouts.handlebars')
const displayOneWorkout = require('../templates/show-one-workout.handlebars')
const displayExercises = require('../templates/all-exercises-in-dropdown.handlebars')
const showNewExercise = require('../templates/show-new-exercise.handlebars')
const authUI = require('../auth/ui-auth.js')
const store = require('../store.js')

const logWorkoutSuccess = function (data) {
  store.workout_id = data.workout.id
  // console.log('Data returned from creating workout', data.workout.id)
   // alert('Workout logged successfully')
  // $('#new-workout').hide()
}

const logWorkoutFail = function () {
  $('#jumbotron').html('<h4>Cannot log out</h4>')
  $('#jumbotron').show()
}

const showWorkoutsSuccess = function (data) {
  authUI.homeDisplay()
  const showWorkoutsHtml = displayWorkouts({workouts: data.workouts})
  $('#jumbotron').html(showWorkoutsHtml)
  $('#jumbotron').show()
}

const showWorkoutsFail = function () {
  $('#jumbotron').html('<h4> Cannot display workouts at this time</h4>')
  $('#jumbotron').show()
}

const showWorkoutSuccess = function (data) {
  const showOneWorkout = displayOneWorkout(data)
  $('#jumbotron').html(showOneWorkout)
  $('#jumbotron').show()
  $('#show-workout input').val('')
}

const showWorkoutFail = function () {
  $('#jumbotron').html('<h4>Unable to show workout </h4>')
  $('#jumotron').show()
}

const newWorkout = function () {
  authUI.homeDisplay()
  $('#new-workout').show()
}

const pickWorkout = function () {
  authUI.homeDisplay()
  $('#see-one-workout').show()
}

const newExerciseSuccess = function (data) {
  authUI.homeDisplay()
  const displayNewExercise = showNewExercise(data)
  $('#jumbotron').html(displayNewExercise)
  $('#jumbotron').show()
}

const newExerciseFail = function () {
  authUI.homeDisplay()
  $('#jumotron').html('<h4> Unable to create exercise')
  $('#jumbotron').show()
}

const showExercisesSuccess = function (data) {
  console.log('data on exercises', data.exercises)
  // store.exercises = data.exercises
  const showExercisesHtml = displayExercises({exercises: data.exercises})
  $('#jumbotron').html(showExercisesHtml)
  $('#jumbotron').show()
}

const showExercisesFail = function () {
  $('#jumbotron').html('<h4> Unable to show exercises</h4>')
  $('#jumbotron').show()
}

const selectExerciseSuccess = function (data) {
  $('#jumbotron').html('<h4> Exercise added to workout</h4>')
  $('#jumbotron').show()
}

const selectExerciseFail = function () {
  $('#jumbotron').html('<h4> Unable to add exercise to workout</h4>')
  $('#jumbotron').show()
}
const filloutWorkoutSuccess = function () {
  $('#jumbotron').html('<h4>Workout logged</h4>')
  $('#jumbotron').show()
}

const filloutWorkoutFail = function () {
  $('#jumbotron').html('<h4>Did not fill out workout information</h4>')
  $('#jumbotron').show()
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
