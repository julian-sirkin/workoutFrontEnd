'use strict'
const displayWorkouts = require('../templates/show-all-workouts.handlebars')

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
}

const showWorkoutsFail = function () {
  alert('did not get workouts')
}

const showWorkoutSuccess = function (data) {
  console.log(data)
}

const showWorkoutFail = function () {
  alert('ate bahn mi!')
}

module.exports = {
  logWorkoutSuccess,
  logWorkoutFail,
  showWorkoutsSuccess,
  showWorkoutsFail,
  showWorkoutSuccess,
  showWorkoutFail
}
