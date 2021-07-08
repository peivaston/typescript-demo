import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';


export interface IState {
  people: {
      name: string
      age: number
      img: string
      note?: string
  }[]
}



function App() {

  const [people, setPeople] = useState([
    {
      name: "Nikola Tesla",
      age: 87,
      img: "https://www.pngkey.com/png/full/348-3484677_nikola-tesla-porabimanj-info-ilustracija-poster.png",
      note: "A man with many dreams for mankind"
    },
    {
      name: "Leonardo Da Vinci",
      age: 67,
      img: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Leonardo_da_Vinci_%28ur_Svenska_Familj-Journalen%29.png",
      note: "An Architect, methematician, musician, sculptor, engineer, inventor, anatomist and a writer",

    },
  ])

  
  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people}/>
      <AddToList setPeople={setPeople} people={people}/>
    </div>
  );
 
}

export default App;
