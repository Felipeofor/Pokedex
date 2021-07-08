import React from 'react';
import './style.css';
import Searchbar from './components/Navbar';
import Navbar from './components/Searchbar';



export default function App() {
  return (
    <div>
      <Navbar />
        <div className="App">
          <Searchbar/>
        </div>
    </div>
  );
}

