// 'bank vault' for state of app
// manages updating state of app
import { createStore } from 'redux';

// need to call createStore and pass in the REDUCER
const store = createStore(counter)