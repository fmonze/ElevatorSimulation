import React, {Component} from 'react';
import ElevatorLocation from './ElevatorLocation';
import ElevatorAnimation from './ElevatorAnimation';
import ElevatorCommands from './ElevatorCommands';

class Extern extends Component {

    constructor(props) {
        super(props);
        this.state = {commandPushed: 0,
                      elevatorMoved: 0,
                      directionChanged: 0,
                      stillSomeCallsToResolve: 0
                     };
    }

    updateCallsUp(newFloor) {
        //console.log("floorUp " + newFloor);
        //console.log(this.props.externData.callsToCollectUp);
        // Add floor to calls to collect and to pending calls if it has not already been collected
        if (this.props.externData.callsToCollectUp.indexOf(newFloor) < 0) {
            this.props.externData.callsToCollectUp.push(Number(newFloor));
            //console.log(this.props.externData.callsToCollectUp);

            // Change state to trigger re-render of child components (with updated props)
            this.setState({commandPushed: !this.state.commandPushed});
        }
    }

    updateCallsDown(newFloor) {
        //console.log("floorDown " + newFloor);
        //console.log(this.props.externData);
        // Add floor to calls to collect and to pending calls if it has not already been collected
        if (this.props.externData.callsToCollectDown.indexOf(newFloor) < 0) {
            this.props.externData.callsToCollectDown.push(Number(newFloor));
            //console.log(this.props.externData.callsToCollectDown);

            // Change state to trigger re-render of child components (with updated props)
            this.setState({commandPushed: !this.state.commandPushed});
        }
    }

    setMainDirection() {

        // Set default direction when at rest
        if (this.props.externData.pendingCalls.length === 0
            && this.props.externData.callsToCollectUp.length === 0
            && this.props.externData.callsToCollectDown.length === 0) {

            this.props.externData.elevatorDirection = "up";
            //this.setState({directionChanged: !this.state.directionChanged});
            console.log("1");
            return;
        }

        // Also change when no more callsToCollect or pendingCalls above/below current position
        if (this.props.externData.elevatorDirection === "up"
            && (!this.props.externData.pendingCalls.some(x => x > this.props.externData.elevatorPosition)
            && !this.props.externData.callsToCollectUp.some(x => x > this.props.externData.elevatorPosition)
            && !this.props.externData.callsToCollectDown.some(x => x > this.props.externData.elevatorPosition))) {

            this.props.externData.elevatorDirection = "down";
            this.setState({directionChanged: !this.state.directionChanged});
            console.log("2");

        }

        if (this.props.externData.elevatorDirection === "down"
            && (!this.props.externData.pendingCalls.some(x => x < this.props.externData.elevatorPosition)
            && !this.props.externData.callsToCollectUp.some(x => x < this.props.externData.elevatorPosition)
            && !this.props.externData.callsToCollectDown.some(x => x < this.props.externData.elevatorPosition))) {

            this.props.externData.elevatorDirection = "up";
            this.setState({directionChanged: !this.state.directionChanged});
            console.log("3");

        }

        // Change when extremes are reached
        if(this.props.externData.elevatorPosition === 5) { this.props.externData.elevatorDirection = "down";
                                                          this.setState({directionChanged: !this.state.directionChanged}); }
        if(this.props.externData.elevatorPosition === 0) { this.props.externData.elevatorDirection = "up";
                                                          this.setState({directionChanged: !this.state.directionChanged}); }

        console.log("set dir");

    }

    render() {
        // todo in arrow func sotto
        return (
            <header className="App-body">
                <ElevatorLocation locationData={this.props.externData} />
                <ElevatorAnimation animationData={this.props.externData}
                                   updateDirection={() => this.setMainDirection()}
                                   updateUpCalls={ (upCalls) => this.props.externData.callsToCollectUp = upCalls }
                                   updateDownCalls={ (downCalls) => this.props.externData.callsToCollectDown = downCalls }
                                   updateFromAnimationUp={(currentLocation, callsCollUp, pending) =>
                                    {
                                        //console.log("merda");
                                        //console.log(callsCollUp);
                                        //console.log(pendingUp);

                                        this.props.externData.elevatorPosition = currentLocation;
                                        this.props.externData.callsToCollectUp = callsCollUp;
                                        this.props.externData.pendingCalls = pending;
                                        console.log("direction before " + this.props.externData.elevatorDirection);
                                        this.setMainDirection();
                                        console.log("direction after " + this.props.externData.elevatorDirection);
                                        this.setState({elevatorMoved: !this.state.elevatorMoved});
                                    }
                                   }
                                   updateFromAnimationDown={(currentLocation, callsCollDown, pending) =>
                                   {
                                       //console.log("merda");
                                       //console.log(callsCollDown);
                                       //console.log(pendingDown);

                                       this.props.externData.elevatorPosition = currentLocation;
                                       this.props.externData.callsToCollectDown = callsCollDown;
                                       this.props.externData.pendingCalls = pending;
                                       console.log("direction before " + this.props.externData.elevatorDirection);
                                       this.setMainDirection();
                                       console.log("direction after " + this.props.externData.elevatorDirection);
                                       this.setState({elevatorMoved: !this.state.elevatorMoved});
                                   }
                                   }/>
                <ElevatorCommands commandsData={this.props.externData}
                                  updateFromCommands={(direction, newFloor) =>
                                    {
                                        // Update calls
                                        //console.log("receive floor from upDown component " + newFloor);
                                        //console.log("and also " + direction);
                                        if (direction === "up") { this.updateCallsUp(newFloor) }
                                        else { this.updateCallsDown(newFloor) }

                                        this.setMainDirection();

                                        console.log(this.props.externData.callsToCollectUp);
                                        console.log(this.props.externData.callsToCollectDown);

                                        /*
                                        // todo: temporary set main direction here
                                        // Set main direction
                                        this.props.externData.elevatorDirection = direction;
                                        //console.log("which is updated globally " + this.props.externData.elevatorDirection);
                                        */
                                    }
                                  }/>
            </header>
        );
    }

    componentDidMount() {
        this.setMainDirection()
        console.log("init pos " + this.props.externData.elevatorPosition);
        console.log("init dir " + this.props.externData.elevatorDirection);
        // In case the direction does not change
        if (this.props.externData.pendingCalls.length > 0 || this.props.externData.callsToCollectDown.length > 0 || this.props.externData.callsToCollectUp.length > 0) {
            this.setState({stillSomeCallsToResolve: !this.state.stillSomeCallsToResolve})
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        // todo maybe here ?
        /*
        if (this.props.externData.pendingCalls.length > 0 || this.props.externData.callsToCollectDown.length > 0 || this.props.externData.callsToCollectUp.length > 0) {
            this.setState({stillSomeCallsToResolve: !this.state.stillSomeCallsToResolve})
        }
        */

    }
}

export default Extern;