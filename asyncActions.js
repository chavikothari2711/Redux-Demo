//REQUIRE
const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const axios = require('axios')

// STATE
const initialState={
    loading:false,
    users: [],
    error: ""
}

//ACTIONS

const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED"
const  FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED"
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED"

// ACTION CREATOR
const fetchUsersRequest = ()=>{
    return {
        type: FETCH_USERS_REQUESTED
    }
}

const fetchUsersSuccess = (users)=>{
    return {
        type: FETCH_USERS_SUCCEEDED,
        payload: users
    }
}

const fetchUsersFailure = (error) =>{
    return {
        type: FETCH_USERS_FAILED,
        payload: error
    }
}

// REDUCER
const reducer = (state = initialState, action)=>{
    switch(action.type){
        case FETCH_USERS_REQUESTED:
            return{
                ...state,
                loading:true
            }
        case FETCH_USERS_SUCCEEDED:
            return{
                ...state,
                loading:false,
                users:action.payload
            }
        case FETCH_USERS_FAILED:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}

//ASYNC ACTION CREATOR
const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            //response.data is the users
            // const users = response.data.map((user)=> user.id)
            const users = response.data
            dispatch(fetchUsersSuccess(users))
        }).catch((error)=>{
            // error.message is the message
            dispatch(fetchUsersFailure(error.message))
        })
    }
}

// REDUX STORE
const store = createStore(reducer,applyMiddleware(thunkMiddleware))

//subscribe | unsubscribe
store.subscribe(()=>{
    console.log(store.getState())
})

//async action dispatch
store.dispatch(fetchUsers())
