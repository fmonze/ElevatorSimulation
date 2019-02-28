import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import './App.css';
import Extern from './Extern';
import Intern from './Intern';

// todo: need a method to update all buttons, i.e. when a call is not more pending then switch off the buttons

class App extends Component {

    constructor(props) {
        super(props);
        // Set initial state
        this.state = {
            elevatorPosition: 0,
            elevatorDirection: "up", // default direction is UP (1)
            pendingCalls: [4, 5],
            callsToCollectUp: [3, 5],
            callsToCollectDown: [],
        };
    }

    render() {
    return (
      <div className="App">
        <header className="App-header">
          Elevator Simulation
        </header>
        <div className="App-body">
          <div className="container-fluid">
            <div className="row row-eq-height">
              <div className="col-sm-7">
                <Extern externData={this.state}/>
              </div>
              <div className="col-sm-5">
                <Intern/>
              </div>
            </div>
          </div>
        </div>
        <footer className="App-footer">
          Credits
        </footer>
      </div>
    );
  }
}

export default App;
