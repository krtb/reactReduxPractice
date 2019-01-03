import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// add connect method to connect REACT and REDUX STORE
import { connect } from 'react-redux';

const App = (props) => {

  return (
    <div>
      <p>{props.count}</p>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
    </div>
  );

};

// to access the redux STATE in a COMPONENT
function mapStateToProps(state) {

  // should return an object
  // can be referenced in component now through PROPS
  return {
    count: state
  };

}

// to fire ACTIONS need below function
// allows us to fire ACTIONS from COMPONENTS
// and update STATE
function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' })
  };

}

// need to add both functions to connect
// if only using one, other arg should be NULL
export default connect(mapStateToProps, mapDispatchToProps)(App);
