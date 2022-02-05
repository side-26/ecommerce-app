import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './App'
// action
const Increment = () => {
  return { type: "INCREMENT" }
}
const Decrement = () => {
  return { type: "DECREMENT" }
}
// reducer

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state+1;

    case "DECREMENT":
      return state-1;

    default:
      return state;

  }
}
// store
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// dispatch
store.dispatch(Increment());
store.dispatch(Increment());
store.dispatch(Increment());
store.dispatch(Increment());
store.dispatch(Decrement());


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
