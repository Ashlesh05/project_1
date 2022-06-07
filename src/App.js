import React from 'react';
import './App.css';
import Header from './components/header';
import Home from './components/home';

function App() {
    return ( 
    <div className = "App" >
      <div className = "container">
        </div>   <div className="row box">

    <div className="left-panel box">
      tesla x
       
    </div>

    <div className="middle-panel box">
      tesla Y
    
    </div>

    <div className="right-panel box">
      tesla z
      
    </div>

</div>
       
        <Header />
        < Home />
        </div>
    );
}

export default App;