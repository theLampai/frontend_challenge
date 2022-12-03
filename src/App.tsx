import React from 'react';
import './App.css';
import Quotes from './pages/Quotes';
import RandomQuotes from './pages/RandomQuotes';
import {Routes, Route} from 'react-router-dom'




function App() {
  return (
    <div>
      <Routes>
        <Route  path={"/"} element={<Quotes />} />
        <Route path={"/random-quote"} element={<RandomQuotes />} />
      </Routes>
    </div>
  );
}

export default App;
