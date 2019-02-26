import React, {Component} from 'react';
import ElevatorLocation from './ElevatorLocation';
import ElevatorAnimation from './ElevatorAnimation';
import ElevatorCommands from './ElevatorCommands';

class Extern extends Component {

    constructor(props) {
        super(props);
    }

    updateCallsUp(newFloor) {
        console.log("floorUp " + newFloor);
        // Add floor to calls to collect and to pending calls if it has not already been collected
        if (this.props.externData.callsToCollectUp.indexOf(newFloor) < 0) {
            this.props.externData.callsToCollectUp.push(newFloor);
            this.props.externData.pendingCallsUp.push(newFloor);
            console.log(this.props.externData.pendingCallsUp);
        }
    }

    updateCallsDown(newFloor) {
        console.log("floorDown " + newFloor);
        // Add floor to calls to collect and to pending calls if it has not already been collected
        if (this.props.externData.callsToCollectDown.indexOf(newFloor) < 0) {
            this.props.externData.callsToCollectDown.push(newFloor);
            this.props.externData.pendingCallsDown.push(newFloor);
            console.log(this.props.externData.pendingCallsDown);
        }
    }

    render() {
        return (
            <header className="App-body">
                <ElevatorLocation locationData={this.props.externData} />
                <ElevatorAnimation animationData={this.props.externData} />
                <ElevatorCommands commandsData={this.props.externData}
                                  updateElevatorLoc={(direction, newFloor) =>
                                    {
                                      console.log("receive floor from upDown component " + newFloor);
                                      console.log(direction);
                                      if (direction === "up") { this.updateCallsUp(newFloor) }
                                      else { this.updateCallsDown(newFloor) }
                                    }
                                  }/>
            </header>
        );
    }
}

export default Extern;