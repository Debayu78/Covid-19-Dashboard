import React from 'react';
import './App.css';
import Main from './Components';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
    }
  }

  render(){
    return(
          <div className="App">
            <Main />
          </div>
    )
  }
}

export default App;
