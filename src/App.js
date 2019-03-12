import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import './App.css';
import Extern from './Extern';
import Intern from './Intern';

class App extends Component {

    constructor(props) {
        super(props);
        this.internInputCalls = [];
        this.internServedFloorsForIntern = {0: null, 1: null, 2: null, 3: null, 4: null, 5: null};
        this.internServedFloorsForAnimation = {0: null, 1: null, 2: null, 3: null, 4: null, 5: null};
        // Set initial state
        this.state = {
            elevatorPosition: 0,
            elevatorDirection: "up", // default direction is UP
            pendingCalls: [],
            callsToCollectUp: [],
            callsToCollectDown: [],
            callsFromCommandsUp: [],
            callsFromCommandsDown: [],
            servedFloors: {0: null, 1: null, 2: null, 3: null, 4: null, 5: null}, // dictionary floors (id: ifServed) -> 0 means yes (switch off) / 1 means no (switch on)
            intServedFloors: {0: null, 1: null, 2: null, 3: null, 4: null, 5: null}
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
                <Extern externData={this.state} readyToGetPendingCalls={ (isReady) => { if (isReady) {
                                                                                             this.setState({pendingCalls: this.internInputCalls})
                                                                                       }
                                    }}
                        updateInternServedFloors={(internServedFloors, servedFloors) => {

                            // Check which pendingCall has been served
                            this.internServedFloorsForIntern = internServedFloors;
                            this.setState({servedFloors: servedFloors, internServedFloors: this.internServedFloorsForAnimation })

                        }} />
              </div>
              <div className="col-sm-5">
                <Intern internData={this.state} updatePendingCalls={(id) => { // Get input calls from intern panel
                                                                              if (this.internInputCalls.indexOf(Number(id)) < 0) {
                                                                              this.internInputCalls.push(Number(id)) }}}
                        updateSwitchFromIntern={(servedFloors) => { this.internServedFloorsForAnimation = servedFloors }}
                        internServed={this.internServedFloorsForIntern}/>
              </div>
            </div>
          </div>
        </div>
        <span className="App-footer">
            Created by Francesca Monzeglio within a Discrete Event Systems Project
        </span>
      </div>
    );
  }
}

export default App;
