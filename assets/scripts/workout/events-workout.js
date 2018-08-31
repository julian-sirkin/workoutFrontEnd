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

const workoutHandlerController = function () {
  $('#log-workout').on('submit', onLogWorkout)
}
module.exports = {
  workoutHandlerController
}
