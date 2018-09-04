const config = require('../config.js')
const store = require('../store.js')

const newWorkout = function (data) {
//  console.log('the address request is going to', config.apiUrl + '/workouts')
  // console.log('information gettng passed in', data)
  return $.ajax({
    url: config.apiUrl + '/workouts',
    method: 'POST',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data
  })
}

const showWorkouts = function () {
  return $.ajax({
    url: config.apiUrl + '/workouts',
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const showWorkout = function (data) {
  console.log(data, 'number getting passed to url')
  return $.ajax({
    url: config.apiUrl + `/workouts/${data}`,
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const newExercise = function (data) {
  console.log(data, 'New Exercise data being passed')
  return $.ajax({
      url: config.apiUrl + '/exercises',
      method: 'POST',
      headers: {
        'Authorization': 'Token token=' + store.user.token
      },
      data
    })
  }


module.exports = {
  newWorkout,
  showWorkouts,
  showWorkout,
  newExercise
}
