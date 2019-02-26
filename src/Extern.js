import React, {Component} from 'react';
import ElevatorLocation from './ElevatorLocation';
import ElevatorAnimation from './ElevatorAnimation';
import ElevatorCommands from './ElevatorCommands';

class Extern extends Component {

    constructor(props) {
        super(props);
        this.state = {commandPushed: 0,
                      elevatorMoved: 0,
                     };
    }

    updateCallsUp(newFloor) {
        console.log("floorUp " + newFloor);
        // Add floor to calls to collect and to pending calls if it has not already been collected
        if (this.props.externData.callsToCollectUp.indexOf(newFloor) < 0) {
            this.props.externData.callsToCollectUp.push(newFloor);
            this.props.externData.pendingCallsUp.push(newFloor);
            console.log(this.props.externData.pendingCallsUp);

            // Change state to trigger re-render of child components (with updated props)
            this.setState({commandPushed: !this.state.commandPushed});
        }
    }

    updateCallsDown(newFloor) {
        console.log("floorDown " + newFloor);
        // Add floor to calls to collect and to pending calls if it has not already been collected
        if (this.props.externData.callsToCollectDown.indexOf(newFloor) < 0) {
            this.props.externData.callsToCollectDown.push(newFloor);
            this.props.externData.pendingCallsDown.push(newFloor);
            console.log(this.props.externData.pendingCallsDown);

            // Change state to trigger re-render of child components (with updated props)
            this.setState({commandPushed: !this.state.commandPushed});
        }
    }

    render() {
        console.log("render extern");
        // todo in arrow func sotto
        return (
            <header className="App-body">
                <ElevatorLocation locationData={this.props.externData} />
                <ElevatorAnimation animationData={this.props.externData}
                                   updateFromAnimation={(currentLocation, pendingCalls) =>
                                    {
                                        console.log("merda");
                                        this.props.externData.elevatorPosition = currentLocation;
                                        this.props.externData.pendingCallsUp = pendingCalls;
                                        this.setState({elevatorMoved: !this.state.elevatorMoved});
                                    }
                                   }/>
                <ElevatorCommands commandsData={this.props.externData}
                                  updateFromCommands={(direction, newFloor) =>
                                    {
                                        // Update calls
                                        console.log("receive floor from upDown component " + newFloor);
                                        console.log(direction);
                                        if (direction == "up") { this.updateCallsUp(newFloor) }
                                        else { this.updateCallsDown(newFloor) }

                                        // todo: temporary set main direction here
                                        // Set main direction
                                        this.props.externData.elevatorDirection = direction;
                                        console.log(this.props.externData.elevatorDirection);
                                    }
                                  }/>
            </header>
        );
    }
}

export default Extern;