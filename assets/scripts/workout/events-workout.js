const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api-workout.js')
const ui = require('./ui-workout.js')
const store = require('../store.js')

// Generates a blank workout so it can have id to attach exercises to it
// It is then patched with details later on
const onBlankWorkout = function (event) {
  event.preventDefault()
  const user = store.user.id
  const data = {workout: {
    user_id: user
  }}
  data.workout.user_id = store.user.id
  api.newWorkout(data)
    .then(ui.logWorkoutSuccess)
    .catch(ui.logWorkoutFail)
}
// Patch the exiting workout
const onFillOutWorkout = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  data.workout.user_id = store.user.id
  api.fillOutWorkout(data)
    .then(ui.filloutWorkoutSuccess)
    .catch(ui.filloutWorkoutFail)
}

const onShowWorkouts = function (event) {
  api.showWorkouts()
    .then(ui.showWorkoutsSuccess)
    .catch(ui.showWorkoutsSuccessß)
}

const onShowWorkout = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target).workout
  api.showWorkout(data)
    .then(ui.showWorkoutSuccess)
    .catch(ui.showWorkoutFail)
}

const onNewWorkout = function () {
  ui.newWorkout()
}

const onPickWorkout = function () {
  ui.pickWorkout()
}

const onCreateExercise = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  data.exercise.user_id = store.user.id
  api.newExercise(data)
    .then(ui.newExerciseSuccess)
    .catch(ui.newExerciseFail)
}

const onShowExercises = function () {
  api.showExercises()
    .then(ui.showExercisesSuccess)
    .catch(ui.showExercisesFail)
}

const onSelectExercise = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(store.workout_id)
  data.workoutexercise.exercise_id = event.target.id
  data.workoutexercise.workout_id = store.workout_id
  console.log(data, 'Information to pass to api')
  api.selectExercise(data)
    .then(ui.selectExerciseSuccess)
    .catch(ui.selectExerciseFail)
}

const workoutHandlerController = function () {
  $('#add-workout').on('click', onBlankWorkout)
  $('#update-workout').on('submit', onFillOutWorkout)
  $('#show-workouts').on('click', onShowWorkouts)
  $('#show-workout').on('submit', onShowWorkout)
  $('#add-workout').on('click', onNewWorkout)
  $('#pick-workout').on('click', onPickWorkout)
  $('#create-exercise').on('submit', onCreateExercise)
  $('#show-exercises').on('click', onShowExercises)
  $('#jumbotron').on('submit', 'form.addExerciseToWorkout', onSelectExercise)
}
module.exports = {
  workoutHandlerController
}
