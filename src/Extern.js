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
        console.log(this.props.externData.callsToCollectUp);
        // Add floor to calls to collect and to pending calls if it has not already been collected
        if (this.props.externData.callsToCollectUp.indexOf(newFloor) < 0) {
            console.log("here")
            this.props.externData.callsToCollectUp.push(newFloor);
            console.log(this.props.externData.callsToCollectUp);

            // Change state to trigger re-render of child components (with updated props)
            this.setState({commandPushed: !this.state.commandPushed});
        }
    }

    updateCallsDown(newFloor) {
        console.log("floorDown " + newFloor);
        console.log(this.props.externData);
        // Add floor to calls to collect and to pending calls if it has not already been collected
        if (this.props.externData.callsToCollectDown.indexOf(newFloor) < 0) {
            this.props.externData.callsToCollectDown.push(newFloor);
            console.log(this.props.externData.callsToCollectDown);

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
                                   updateFromAnimationUp={(currentLocation, callsCollUp, pendingUp) =>
                                    {
                                        console.log("merda");
                                        console.log(callsCollUp);
                                        console.log(pendingUp);

                                        this.props.externData.elevatorPosition = currentLocation;
                                        this.props.externData.callsToCollectUp = callsCollUp;
                                        this.props.externData.pendingCallsUp = pendingUp;
                                        this.setState({elevatorMoved: !this.state.elevatorMoved});
                                    }
                                   }
                                   updateFromAnimationDown={(currentLocation, callsCollDown, pendingDown) =>
                                   {
                                       console.log("merda");
                                       console.log(callsCollDown);
                                       console.log(pendingDown);

                                       this.props.externData.elevatorPosition = currentLocation;
                                       this.props.externData.callsToCollectDown = callsCollDown;
                                       this.props.externData.pendingCallsDown = pendingDown;
                                       this.setState({elevatorMoved: !this.state.elevatorMoved});
                                   }
                                   }/>
                <ElevatorCommands commandsData={this.props.externData}
                                  updateFromCommands={(direction, newFloor) =>
                                    {
                                        console.log(this.props.externData.callsToCollectDown);
                                        // Update calls
                                        console.log("receive floor from upDown component " + newFloor);
                                        console.log("and also " + direction);
                                        if (direction == "up") { this.updateCallsUp(newFloor) }
                                        else { this.updateCallsDown(newFloor) }

                                        // todo: temporary set main direction here
                                        // Set main direction
                                        this.props.externData.elevatorDirection = direction;
                                        console.log("which is updated globally " + this.props.externData.elevatorDirection);
                                    }
                                  }/>
            </header>
        );
    }
}

export default Extern;