// Store => 
// Holds the application state
// Allows access to state via getState()
// Allows state to be updated via dispatch(action),
// Registers Listeners via subscribe(listener)
// handle unregistering of listeners via function returned by subscribe(listener)

const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const reduxLogger = require('redux-logger');

// Create a middle ware we are using redux-logger as middleware

const applyMiddleWare = redux.applyMiddleware;

// Create any middleware from redux-logger and pass it as an argument to createStore method along with reducer and the logger
const logger = reduxLogger.createLogger();

// action => An action is dispatched by the application which is a object containing a constant always denoted by type 
// that is used in the reducers to change the state

function buyCake() {
    return {  
        type: 'BUY_CAKE',
        info: 'First Redux Action'
    }
}

function BUY_ICECREAM() {
    return {  
        type: 'BUY_ICECREAM',
        info: 'Second Redux Action'
    }
}

// initial state 

// const initialState = {
//     numofCakes:  10,
//     numofICECREAMS: 20
// };

// Split Initial state to make it more scalable

const initialCakeState = {
    numofCakes: 10
};

const initialICECREAMState = {
    numofICECREAMS: 10
};
 

// reducer => to mutate any store an action is dipatached to a reduced which will tell us what action to perform on that
// a reducer is function that contains (previousState, action) => returns new state

// Initial Reducer

// const reducer = (state = initialState, action) => {
//     switch(action.type) {
//         case 'BUY_CAKE': return {
//             ...state, // Make a copy of the object and only change the required state
//             numofCakes : state.numofCakes - 1
//         }

//         case 'BUY_ICECREAM': return {
//             ...state, // Make a copy of the object and only change the required state
//             numofICECREAMS : state.numofICECREAMS - 1
//         }

//         default : return state
//     }
// }

// Split reducers to make it more scalable

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case 'BUY_CAKE': return {
            ...state, // Make a copy of the object and only change the required state
            numofCakes : state.numofCakes - 1
        }

        default : return state
    }
}

const iceCreamReducer = (state = initialICECREAMState, action) => {
    switch(action.type) {
        case 'BUY_ICECREAM': return {
            ...state, // Make a copy of the object and only change the required state
            numofICECREAMS : state.numofICECREAMS - 1
        }

        default : return state
    }
}

// ----------------------------------------------------------------------------------------------------------------------------------

const rootReducer = combineReducers({
    'cake' : cakeReducer,
    'iceCream': iceCreamReducer
});

const store = createStore(rootReducer, applyMiddleWare(logger)); // Accepts a parameter that is the reducer function that tells how all state transitions happen 
console.log('Initial state', store.getState());
const unsubscribe  = store.subscribe(() => { // Set up a listener to the store
    // console.log('Updated Store', store.getState());
});
store.dispatch(buyCake());
store.dispatch(BUY_ICECREAM());
store.dispatch(buyCake());
store.dispatch(BUY_ICECREAM());
store.dispatch(buyCake());
store.dispatch(BUY_ICECREAM());
store.dispatch(BUY_ICECREAM());
unsubscribe();