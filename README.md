This is an app designed to help keep track of workouts. The front end interacts with an API that I built that can be found https://git.heroku.com/workoutapi.git
The front end can be found deployed at https://julian-sirkin.github.io/workoutFrontEnd/

This contains the front end for token authenticaton, which this then uses to authenticate all actions when interacting with the API.

Technologies used:
HTML, CSS, Javascript, Boostrap 4, Ajax, Handlebars

- The app works by grabbing information from varrious forms and making calls to one of four paths.
- users (sign-in, sign-up sign-out, change-password, log-out,)
- workout (crud)
- exercises (crud)
- workoutexercises (crud)
- Workoutexercises is a join table to establish the many to many relationship between workouts and exercises
- Workoutexercises also contains specific information about the particular relationship between that exercise and that particular workout. (The reps/sets/time can be different workout to workout)
- User information is directly placed on if it is a generic message that does not contain information from the API, such as, "Try to log in again", for a failed login attempt
- Anything displayed with information from the API is displayed using handlebars
- A cool under the hood kind of thing, is that when a user goes to create a workout and fill out informaton, a blank workout is created, which allows the user to add exercises to it. Then when they fill out the information, it actually patches the workout. If the user creates a blank workout, without addding any information or workouts, there is javascript that will run the next time they search for all workouts, and delete any blank workouts.

Unsolved problems:
I want to make the experience cleaner/more intuitive. I also need to add the ability to edit an already created workout. The last thing is that I want to make the UI look better. It is relatively clean, but I want to get it to the point where it looks good, not just "not terrible".
There is a lot I want to do in terms of showing more information, but only in specific times. For instance, I want to make the time for the entire exercise a time that is automatically generated by adding up the time for all the exercises.
I'm fairly happy with most of the functionality, however there is a lot I want to add to it.


- Development proccess:
 I initially throught of a super simple idea. Just an app to keep track of overall workouts. Then I throught of ways to expand it that felt natural, both in terms of what a user would want, but also in terms of technological implementation.
 1. Create the resource make sure I can interact with it
 2. Create the front end to further interact with the API
 3. Create resource number 2 in the API, which was just like doing the first one
 4. Create the front end to work with second resource
 5. Create the relationship in the API
 6. Tear apart certain parts of the front end to get it to work with the new relationship
These are broad steps, so the focus for a large period of time would be on one area. However, these were large steps, and the page was deployed after each step, and useable at that time, so if I wasn't ever able to complete the next step, I would always have something to present that hit standards at the deadline.
