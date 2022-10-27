import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { legacy_createStore as createStore} from 'redux'
import allReducers from './reducers/index';
import { Provider } from 'react-redux';


const myStore = createStore(
      allReducers,  
      //the second parans is for the extension of reduc dev tools
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
/*
//creation of an action:
//the word TYPE is always there, it reffers to the name of the action
const increment = ()=> {
  return {
    type: "increment"
  }
}
const decrement = ()=> {
  return {
    type: "decrement"
  }
}
//creation of reducer:--> it is also a function that takes state and action as params
const counter = (state= 0, action) => {
  switch(action.type){
    case"increment" :
    return state + 1;
    case"decrement" :
    return state - 1

  }

}
let store = createStore(counter);
//display it on the console
store.subscribe(()=>  console.log(store.getState()))

//Dispatch
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(decrement())

//STORE --> globalized state ---> the state of the whole app that could be shared to all part of the app
//ACTIOn --> just an action to be token so it does somthg(it is just a name), a function that returns an object
//REDUCER --> the ACTION will be called inside the reducer and check which action it is, and then modify the STATE inside the STORE
//DISPATCH ---> execute our actions
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={myStore}>
        <App />
    </Provider>
   
  </React.StrictMode>
);
reportWebVitals();
