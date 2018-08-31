const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api-workout.js')
const ui = require('./ui-workout.js')
const store = require('../store.js')

const onLogWorkout = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  data.workout.user_id = store.user.id
  api.newWorkout(data)
    .then(ui.logWorkoutSuccess)
    .catch(ui.logWorkoutFail)
}

const onShowWorkouts = function (event) {
  event.preventDefault()
  api.showWorkouts()
    .then(ui.showWorkoutsSuccess)
    .catch(ui.showWorkoutsSuccessß)
}

const onShowWorkout = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target).workout
  api.showWorkout(data)
    .then(ui.showWorkoutSuccess)
    .catch(ui.showWorkoutSuccess)
}

const workoutHandlerController = function () {
  $('#log-workout').on('submit', onLogWorkout)
  $('#show-workouts').on('submit', onShowWorkouts)
  $('#show-workout').on('submit', onShowWorkout)
}
module.exports = {
  workoutHandlerController
}
