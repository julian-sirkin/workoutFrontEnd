'use strict'
const displayWorkouts = require('../templates/show-all-workouts.handlebars')
const displayOneWorkout = require('../templates/show-one-workout.handlebars')
const displayExercises = require('../templates/all-exercises-in-dropdown.handlebars')
const showNewExercise = require('../templates/show-new-exercise.handlebars')
const authUI = require('../auth/ui-auth.js')
const store = require('../store.js')
const api = require('./api-workout.js')
const limitTheExercises = require('../templates/limitExercises.handlebars')


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
  //console.log(data, 'the array of stuff getting passed back')
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

const pickWorkout = function (data) {
  console.log(data.workouts, 'Information getting passed into pick workout')
  authUI.homeDisplay()
  const limitExercises = limitTheExercises({workouts: data.workouts})
  $('#workoutDropdown').html(limitExercises)
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
  // console.log('data on exercises', data.exercises)
  // store.exercises = data.exercises
  const showExercisesHtml = displayExercises({exercises: data.exercises})
  $('#jumbotron').html(showExercisesHtml)
  $('#jumbotron').show()
}

const showExercisesFail = function () {
  $('#jumbotron').html('<h4> Unable to show exercises</h4>')
  $('#jumbotron').show()
}
// Message after creaeting new connection between workout and exercise
const selectExerciseSuccess = function (data) {
  $('#jumbotron form.addExerciseToWorkout').val('')
  $('#jumbotron').html('<h4> Exercise added to workout</h4>')
  $('#jumbotron').show()
}

const selectExerciseFail = function () {
  $('#jumbotron').html('<h4> Unable to add exercise to workout</h4>')
  $('#jumbotron').show()
}
const filloutWorkoutSuccess = function () {
  authUI.homeDisplay()
  $('#update-workout input').val('')
  $('#jumbotron').html('<h4>Workout logged</h4>')
  $('#jumbotron').show()
}

const filloutWorkoutFail = function () {
  $('#update-workout input').val('')
  $('#jumbotron').html('<h4>Did not fill out workout information</h4>')
  $('#jumbotron').show()
}
const deleteWorkoutFail = function () {
  $('#jumbotron').html('Unable to delete workout')
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
  filloutWorkoutFail,
  deleteWorkoutFail
}
