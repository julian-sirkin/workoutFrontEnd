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
//  console.log(data, 'number getting passed to url')
  return $.ajax({
    url: config.apiUrl + `/workouts/${data}`,
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const newExercise = function (data) {
//  console.log(data, 'New Exercise data being passed')
  return $.ajax({
    url: config.apiUrl + '/exercises',
    method: 'POST',
    headers: {
        'Authorization': 'Token token=' + store.user.token
},
    data
  })
}

const showExercises = function () {
  return $.ajax({
    url: config.apiUrl + '/exercises',
    method: 'GET'
  })
}

const selectExercise = function (data) {
  console.log(data, 'getting passed to api')
  return $.ajax({
    url: config.apiUrl + '/workoutexercises',
    method: 'POST',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data
  })
}

const fillOutWorkout = function (data) {
  const id = store.workout_id
  return $.ajax({
    url: config.apiUrl + `/workouts/${id}`,
    method: 'PATCH',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data
  })
}
const deleteWorkout = function (data) {
  return $.ajax({
    url: config.apiUrl + `/workouts/${data}`,
    method: 'DELETE',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}



module.exports = {
  newWorkout,
  showWorkouts,
  showWorkout,
  newExercise,
  showExercises,
  selectExercise,
  fillOutWorkout,
  deleteWorkout
}
