import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>My username is {process.env.REACT_APP_USER}!</h2>
      <h3>My favorite color is {process.env.REACT_APP_FAVORITE_COLOR}.</h3>
    </div>
  );
}

export default App;
