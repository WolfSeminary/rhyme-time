import React, { createContext } from 'react';
import './App.css';
import AppBarPage from './AppBar';
import MultilineTextFiel from './WriteSong';
import HomepPage from './HomePage';
import { create } from '@mui/material/styles/createTransitions';
import { useState } from 'react';

 const RhymeContext = createContext({rhymeListFilter:[],setRhymeListFilter:() => {}});
 
function App() {
  const [rhymes, setrhymes] = useState([]);
  const login = (value) => {
    setrhymes(value);
  };
  return (
    <div className="App">
      <RhymeContext.Provider value={{rhymeListFilter:rhymes,setRhymeListFilter:login}}>
      <HomepPage />
      </RhymeContext.Provider>
    </div>
  );
}

export default App;
export {RhymeContext};

