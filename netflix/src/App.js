import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import RowPost from './components/RowPost/RowPost';
import {action,originals} from './constant/Urls';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost name='Netflix Originals'   Url={action}      />
      <RowPost name='Actions'   isSmall     Url={originals}/>
      

    </div>
  );
}

export default App;
