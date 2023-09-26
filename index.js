const redux = require('redux');
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers

//middleware
const applyMiddleware = redux.applyMiddleware;
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger()

//actions
const CAKE_ORDERED = "CAKE_ORDERED"
const CAKE_RESTOCKED = "CAKE_RESTOCKED"
const ICECREAM_ORDERED = "ICECREAM_ORDERED"
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED"

// action creators
function orderCake(qty){
    return {
        type: CAKE_ORDERED,
        payload: qty
    }
}

function cakeRestocked(qty){
    return {
        type: CAKE_RESTOCKED,
        payload: qty
    }
}

function orderIcecream(qty){
    return {
        type: ICECREAM_ORDERED,
        payload: qty
    }
}

function icecreamRestocked(qty){
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty
    }
}

// reducers = (prevState,action) => nextState

/* // single reducer
const initialState = {
    numOfCakes: 20,
    numOfIceCream: 20
}

const rootReducer = (state = initialState,action) => {
    switch(action.type){
        case CAKE_ORDERED:  
            return {...state,numOfCakes: state.numOfCakes-action.payload,}

        case CAKE_RESTOCKED:
            return {...state,numOfCakes: state.numOfCakes+action.payload,}
        
        case ICECREAM_ORDERED:  
            return {...state,numOfIceCream: state.numOfIceCream-action.payload,}

        case ICECREAM_RESTOCKED:
            return {...state,numOfIceCream: state.numOfIceCream+action.payload,}

        default: 
            return state
    }
}*/

//multiple reducer
const initialCakeState = {numOfCakes:10}
const initialIceCreamState = {numOfIceCream:20}

const cakeReducer = (state = initialCakeState,action) => {
    switch(action.type){
        case CAKE_ORDERED:  
            return {...state,numOfCakes: state.numOfCakes-action.payload,}

        case CAKE_RESTOCKED:
            return {...state,numOfCakes: state.numOfCakes+action.payload,}
        
        default: 
            return state
    }
}

const iceCreamReducer = (state = initialIceCreamState,action) => {
    switch(action.type){
        case ICECREAM_ORDERED:  
            return {...state,numOfIceCream: state.numOfIceCream-action.payload,}

        case ICECREAM_RESTOCKED:
            return {...state,numOfIceCream: state.numOfIceCream+action.payload,}
        
        default: 
            return state
    }
}

//combine reducers
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

// store
const store = createStore(rootReducer,applyMiddleware(logger))
console.log("Initial State",store.getState())

// Subscribe | Unsubscribe
const unsubscribe = store.subscribe(()=>{})

/*store.dispatch(orderCake(1))
store.dispatch(cakeRestocked(1))*/

//Bind action Creators
const actions = bindActionCreators({orderCake,cakeRestocked,orderIcecream,icecreamRestocked},store.dispatch)
actions.orderCake(3)
actions.orderIcecream(2)
actions.cakeRestocked(3)
actions.icecreamRestocked(2)


unsubscribe();