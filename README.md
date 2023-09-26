# Redux-Demo
A demo project with the help of youtube channel.

## How to use
1. Fork the code or download it to your local file then after directing to your file type the followinng in cmd or terminal:

   ```
   npm init
   npm install
   ```

3. For understanding single reducer concept or multiple reducer|combine reducer concept, in index.js file uncomment single reducer part and comment out multiple reducer and vice-versa, then in terminal write
  
  ```
  node index
  ```

3. To understand bind Action Creator you can comment out bind action creator and uncomment the simple dispatch method and vice-versa then in terminal write

   ```
   node index
   ```

5. To understand usage of immer run and go through nested-state.js file
   ```
   node nested-state
   ```
   
6. To understang async actions, go through asycActions.js file and run

   ```
   node asyncActions
   ```


### 3 Concepts
- Store: Holds state of your applications
- Action: Describes what happened
- Reducer: Ties store and action, and handles action and decides how to update state

### Bind Action Creators
It takes to paremetor, first the object of values who must be bind to the same key and the second the key to which object value must be binded to. 

### Multiple reducer
Steps:
- split the single reducer state and reducer
- combine them using redux.combineReducers

### Immer
It keeps track of state updation process, in case of complex state it is hard to keep a track, so its method produce can be useful

### Middleware
Provides a third party extension point between dispatching an action and moment it reaches reducer. For logging, reporting crashing etc. redux-logger package is used

### Async Actions (fetch data)
Package used:
- axios: used to request an API end point
- redux-thunk: define asnc action creator middleware(default)
Fake RESTapi end point: https://jsonplaceholder.typicode.com/
