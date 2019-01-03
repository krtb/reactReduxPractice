// function that takes two args
// (current state, an action)

const counter = (state = 0, action) => {

// reducer returns next state
// dependent on ACTION that's passed into switch statement

    switch (action.type) {

        case 'INCREMENT':
            return state = state + 1;

        case 'DECREMENT':
            return state = state - 1;

        default:
            return state;
    }

};