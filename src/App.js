import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement, signin} from './actions';


function App() {
  const conterFromStore = useSelector(state => state.counter);
  const loggin = useSelector(state => state.loggin);
  const dispatch = useDispatch()
  return (
    <div className="App">
      <button onClick={()=> dispatch(increment(5))}>+</button>
      <button onClick={()=>dispatch(decrement(2))}>-</button>
      <h2>My state is : {conterFromStore}</h2>
      {loggin ? <h3> The user is logged IN  </h3> : "ouups! The user is no longer logged in" }
      <br></br>
      <button onClick={()=> dispatch(signin())}>Change user Status</button>
 
     
      
    </div>
  );
}

export default App;
