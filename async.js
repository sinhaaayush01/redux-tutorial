const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

// Actions must return plain objects so we use custom middleware i.e. thunk for async actions, now we can return a function in this case
const thunkMiddleware = require('redux-thunk').default;
const fetch = require("node-fetch");

// Initial State

const initialState = {
    loading: false,
    users: [],
    error: ''
};

// Actions

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    };
}

const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    };
}

const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    };
}

// Reducer

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_USERS_REQUEST':
            return {
                ...state,
                loading: true
            };

        case 'FETCH_USERS_SUCCESS':
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: ''
            };

        case 'FETCH_USERS_FAILURE':
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload
            };
     
        default:
            return state;
    }
}

// Function using thunk returning another function by distaching the action

const fetchUser = () => {
    return function(dispatch) {
        dispatch(fetchUsersRequest());
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                users = users.map((user => user.id));
                dispatch(fetchUsersSuccess(users));
            })
            .catch(error => dispatch(fetchUsersFailure(error.message)));
    }
}

// Store Setup

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchUser());