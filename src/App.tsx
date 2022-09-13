import * as React from 'react'
import './App.css'

import {shuffle, pickOneCard, reset, $pickedCards} from './model';
import {useStore} from "effector-react";

function App() {
  const pickedCards = useStore($pickedCards);

  return (
    <div className="app">
      <div className="control">
        <button type="button" onClick={shuffle}>Shuffle</button>
        <button type="button" onClick={pickOneCard}>Pick</button>
        <button type="button" onClick={reset}>Reset</button>
      </div>

      <div className="cards">
        {pickedCards.map(card => (
          <div key={card.id} className="card">
            <img src={card.image}/>
            <span>{card.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
