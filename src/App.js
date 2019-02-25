import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import './App.css';
import Extern from './Extern';
import Intern from './Intern';


class App extends Component {

    constructor(props) {
        super(props);
        // Set initial state
        this.state = {
            elevatorPosition: 3,
            elevatorDirection: 1, // default direction is UP (1)
            pendingCalls: [],
            callsToCollect: [],
        };
    }

    render() {
    return (
      <div className="App">
        <header className="App-header">
          Elevator Simulation
        </header>
        <body className="App-body">
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
        </body>
        <footer className="App-footer">
          Credits
        </footer>
      </div>
    );
  }
}

export default App;
