import React, { Component } from 'react';
import "./App.css";
import DownLoad from "./component/DownLoad";
// import  UpLoad from './component/UpLoad'; 
// import DeleteStorage from './component/DeleteStorage';

class App extends Component {
  render() {
    
    return (
      <div className="App">
        < DownLoad />
        {/* <UpLoad /> */}
        {/* < DeleteStorage /> */}
        <h1>Hello</h1>
      </div>
    );
  }
}

export default App;
