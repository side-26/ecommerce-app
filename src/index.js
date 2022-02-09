import React from 'react'
import ReactDOM from 'react-dom'
import {store} from './Redux/Store.redux';
import { Provider } from 'react-redux'


import App from './App'
// action
// const Increment = () => {
//   return { type: "INCREMENT" }
// }
// const Decrement = () => {
//   return { type: "DECREMENT" }
// }
// reducer


// store

// dispatch
// store.dispatch(Increment());
// store.dispatch(Increment());
// store.dispatch(Increment());
// store.dispatch(Increment());
// store.dispatch(Decrement());


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
