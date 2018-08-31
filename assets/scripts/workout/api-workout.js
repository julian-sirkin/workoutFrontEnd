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

module.exports = {
  newWorkout,
  showWorkouts
}
