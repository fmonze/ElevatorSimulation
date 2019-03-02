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
        this.internInputCalls = [];
        this.internServedFloorsForIntern = {0: null, 1: null, 2: null, 3: null, 4: null, 5: null};
        this.internServedFloorsForAnimation = {0: null, 1: null, 2: null, 3: null, 4: null, 5: null};
        this.startTimer = false;
        // Set initial state
        this.state = {
            elevatorPosition: 1,
            elevatorDirection: "up", // default direction is UP (1)
            pendingCalls: [],
            callsToCollectUp: [],
            callsToCollectDown: [],
            callsFromCommandsUp: [],
            callsFromCommandsDown: [],
            servedFloors: {0: null, 1: null, 2: null, 3: null, 4: null, 5: null}, // dictionary floors (id: ifServed) -> 0 means yes (switch off) / 1 means no (switch on)
            intServedFloors: {0: null, 1: null, 2: null, 3: null, 4: null, 5: null},
            isInternTimer: null,
            readyToSendPending: false
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
                                                                                             console.log("ready to get pending")
                                                                                             this.setState({pendingCalls: this.internInputCalls})
                                                                                             this.internInputCalls = []
                                                                                       }
                                    }}
                        updateInternServedFloors={(internServedFloors, servedFloors) => {

                            // Check which pendingCall has been served
                            this.internServedFloorsForIntern = internServedFloors;
                            this.setState({servedFloors: servedFloors, internServedFloors: this.internServedFloorsForAnimation })
                        }}
                        startTimer={!this.state.isInternTimer}
                        startedTimer={ () => this.setState({isInternTimer: false})}/>
              </div>
              <div className="col-sm-5">
                <Intern internData={this.state} updatePendingCalls={(id) => { // Get input calls from intern panel
                                                                              if (this.internInputCalls.indexOf(Number(id)) < 0) {
                                                                              this.internInputCalls.push(Number(id)) }}}
                        updateSwitchFromIntern={(servedFloors) => { this.internServedFloorsForAnimation = servedFloors }}
                        internServed={this.internServedFloorsForIntern} canStartTimer={this.startTimer}
                        startedTimer={ () => this.setState({isInternTimer: true})}
                        finishedTimer={() => { this.setState({readyToSendPending: true, isInternTimer: false}) }}/>
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

  componentDidUpdate(prevProps, prevState, snapshot) {

        /*
        if (this.state.readyToSendPending) {

            // todo svuota pending calls?
            this.setState({readyToSendPending: false})

        }*/
  }
}

export default App;
