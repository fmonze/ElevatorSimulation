import React, {Component} from 'react';
import ElevatorLocation from './ElevatorLocation';
import ElevatorAnimation from './ElevatorAnimation';
import ElevatorCommands from './ElevatorCommands';

class Extern extends Component {

    constructor(props) {
        super(props);
        this.isOldTargetStillInProgress = false;
        this.end = false;
        this.state = {commandPushed: 0,
                      elevatorMoved: 0,
                      directionChanged: 0,
                      stillSomeCallsToResolve: 0,
                      propsChanged: 0
                     };
    }

    compare(arr1,arr2) {

        if(!arr1  || !arr2) return;

        let result;

        arr1.forEach((e1, i ) => arr2.forEach (e2 => {

                if(e1.length > 1 && e2.length){
                    result = this.compare(e1,e2);
                }else if(e1 !== e2 ){
                    result = false
                }else{
                    result = true
                }
            })
        )

        return result

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

        // Invert direction when no more callsToCollect or pendingCalls above/below current position
        if (this.props.externData.elevatorDirection === "up"
            && (!this.props.externData.pendingCalls.some(x => x > this.props.externData.elevatorPosition)
            && !this.props.externData.callsToCollectUp.some(x => x > this.props.externData.elevatorPosition)
            && !this.props.externData.callsToCollectDown.some(x => x > this.props.externData.elevatorPosition))) {

            this.props.externData.elevatorDirection = "down";
            //this.setState({directionChanged: !this.state.directionChanged});
            console.log("2");
            return;
        }

        if (this.props.externData.elevatorDirection === "down"
            && (!this.props.externData.pendingCalls.some(x => x < this.props.externData.elevatorPosition)
            && !this.props.externData.callsToCollectUp.some(x => x < this.props.externData.elevatorPosition)
            && !this.props.externData.callsToCollectDown.some(x => x < this.props.externData.elevatorPosition))) {

            this.props.externData.elevatorDirection = "up";
            //this.setState({directionChanged: !this.state.directionChanged});
            console.log("3");
            return;
        }

        // Change when extremes are reached
        if(this.props.externData.elevatorPosition === 5) { this.props.externData.elevatorDirection = "down";
                                                          /*this.setState({directionChanged: !this.state.directionChanged});*/ }
        if(this.props.externData.elevatorPosition === 0) { this.props.externData.elevatorDirection = "up";
                                                          /*this.setState({directionChanged: !this.state.directionChanged});*/ }

        console.log("set dir");

}

    render() {
        // todo in arrow func sotto
        return (
            <header className="App-body">
                <ElevatorLocation locationData={this.props.externData} />
                <ElevatorAnimation animationData={this.props.externData}
                                   updateFromAnimation = {(currentLocation, callsCollUp, callsCollDown, pending, servedFloors) =>
                                    {
                                       console.log("general update");

                                       this.props.externData.elevatorPosition = currentLocation;
                                       this.props.externData.callsToCollectUp = callsCollUp;
                                       this.props.externData.callsToCollectDown = callsCollDown;
                                       this.props.externData.pendingCalls = pending;

                                       // Check which buttons to switch off based on this dictionary
                                       this.props.externData.servedFloors = servedFloors;

                                       this.setMainDirection();
                                       this.setState({directionChanged: !this.state.directionChanged});

                                    }
                                   }
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
                                   }
                                   }/>
                <ElevatorCommands commandsData={this.props.externData}
                                  updateSwitchFromCommands={(servedFloors) => {this.props.externData.servedFloors = servedFloors}}
                                  updateFromCommands={(direction, newFloor) =>
                                    {
                                        // Update calls
                                        //console.log("receive floor from upDown component " + newFloor);
                                        //console.log("and also " + direction);
                                        if (direction === "up") { this.updateCallsUp(newFloor) }
                                        else { this.updateCallsDown(newFloor) }

                                        // todo in teoria anche qui non sere perché vengone updatate le props e quindi chiama il metodo didupdated
                                        // this.setMainDirection();

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
        this.setState({directionChanged: !this.state.directionChanged});
        console.log("init pos " + this.props.externData.elevatorPosition);
        console.log("init dir " + this.props.externData.elevatorDirection);
        /*// In case the direction does not change during init
        if (this.props.externData.pendingCalls.length > 0 || this.props.externData.callsToCollectDown.length > 0 || this.props.externData.callsToCollectUp.length > 0) {
            this.setState({stillSomeCallsToResolve: !this.state.stillSomeCallsToResolve})
        }*/
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
/*
        //This method is called as soon as properties changes but class is not yet updated, i.e. its components are not re-rendered (ypu need to reset the state for that)
        console.log("extern updated after receiving new prop");
        console.log(prevProps.externData.callsToCollectUp)
        console.log(this.props.externData.callsToCollectUp)
        console.log(!this.compare(prevProps.externData.callsToCollectUp, this.props.externData.callsToCollectUp));
        if (!this.compare(prevProps.externData.callsToCollectUp, this.props.externData.callsToCollectUp)
                || !this.compare(prevProps.externData.callsToCollectDown, this.props.externData.callsToCollectDown)
                || !this.compare(prevProps.externData.pendingCalls, this.props.externData.pendingCalls)) {

                this.setMainDirection();
        }

        // Set default direction if all lists are empty
        if (this.props.externData.pendingCalls.length === 0
            && this.props.externData.callsToCollectUp.length === 0
            && this.props.externData.callsToCollectDown.length === 0) {

            console.log("1");
            console.log("FINE");
        }
*/
        // If direction does not change (and thus the state), change the state to re-render the components with updated props
        /*if (prevProps.externData.elevatorDirection === this.props.externData.elevatorDirection
            && (this.props.externData.pendingCalls.length > 0
                || this.props.externData.callsToCollectUp.length > 0
                || this.props.externData.callsToCollectDown.length > 0) ) {
            this.setState({propsChanged: !this.state.propsChanged});
        }*/

    }
}

export default Extern;