'use strict'

const logWorkoutSuccess = function () {
  alert('Workout logged successfully')
}

const logWorkoutFail = function () {
  alert('laid on a couch instead')
}

module.exports = {
  logWorkoutSuccess,
  logWorkoutFail
}
