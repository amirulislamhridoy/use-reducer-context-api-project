import { createContext, useEffect, useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import Selected from "./component/Selected/Selected";
import Navbar from "./component/Shared/User/Navbar";
import { initialState } from "./Reducer/InitialState";
import { reducer } from "./Reducer/Reducer";
import { ERROR, LOADING, SUCCESS } from "./Reducer/ReducerTypes";

export const USER_CONTEXT = createContext()

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    dispatch({ type: LOADING })
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        dispatch({ type: SUCCESS, payload: data })
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error })
      })
  }, [])

  const value = {data: state, dispatch}
  return (
    <USER_CONTEXT.Provider value={value}>
      <div>
        <Navbar></Navbar>
        <h1 style={{textAlign: 'center'}}>My first deploy in Vercel</h1>
        <h2 style={{ textAlign: 'center' }}><span style={{ color: 'red' }}>useReducer</span> with <span style={{ color: 'red' }}>context api</span> in this project</h2>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/selected' element={<Selected />} />
        </Routes>
      </div>
    </USER_CONTEXT.Provider>
  );
}

export default App;