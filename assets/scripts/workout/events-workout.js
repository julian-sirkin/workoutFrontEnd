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

// Clear out any blank Workouts
// Loop through, check if blank, if yes, then delete otherwise do nothing
const deleteBlankWorkouts = function (data) {
  let somethingDeleted = false
//  console.log(data.workouts[0].duration)
  for (var i = 0; i < data.workouts.length; i++) {
    if (data.workouts[i].workout_type === null && data.workouts[i].duration === null &&
  data.workouts[i].completed_on === null && data.workouts[i].exercises.length === 0 ) {
    //  console.log(data.workouts[i])
      api.deleteWorkout(data.workouts[i].id)
      somethingDeleted = true
    }
  }
  if (somethingDeleted) {
    api.showWorkouts()
      .then(deleteBlankWorkouts)
      .catch(ui.showWorkoutsFail)
  } else {
    ui.showWorkoutsSuccess(data)
  }
}

// Get all workouts
const onShowWorkouts = function (event) {
  api.showWorkouts()
    .then(deleteBlankWorkouts)
    .catch(ui.showWorkoutsSuccessß)
}
// Get one workout
const onShowWorkout = function (event) {
  const data = event.target.name
  api.showWorkout(data)
    .then(ui.showWorkoutSuccess)
    .catch(ui.showWorkoutFail)
}
// Show new workout card
const onNewWorkout = function () {
  ui.newWorkout()
}
// Show card to select one workout
// Use show exercises to get ids to give selection
const onPickWorkout = function (data) {
    api.showWorkouts()
      .then(ui.pickWorkout)
      .catch()
}
// Create an exercise
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
  // console.log(store.workout_id)
  data.workoutexercise.exercise_id = event.target.id
  data.workoutexercise.workout_id = store.workout_id
  // console.log(data, 'Information to pass to api')
  api.selectExercise(data)
    .then(ui.selectExerciseSuccess)
    .catch(ui.selectExerciseFail)
}
// Delete workout and dependent connection
const onDeleteWorkout = function (event) {
  const data = event.target.name
  // console.log(data, 'Getting passed into url')
  api.deleteWorkout(data)
    .then(onShowWorkouts)
    .catch(ui.deleteWorkoutFail)
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
  $('#jumbotron').on('click', 'form.delete-workout', onDeleteWorkout)
  $('#workoutDropdown').on('click', 'a.dropdown-item', onShowWorkout)
}
module.exports = {
  workoutHandlerController
}
