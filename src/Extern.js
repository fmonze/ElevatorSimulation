import React, {Component} from 'react';
import ElevatorLocation from './ElevatorLocation';
import ElevatorAnimation from './ElevatorAnimation';
import ElevatorCommands from './ElevatorCommands';
import openLift from "./open_ elevator_img.jpg";

class Extern extends Component {

    constructor(props) {
        super(props);
        this.isPushedCommands = false;
        this.checkRefresh = false;
        this.counter = 1;
        this.newInputsUp = [];
        this.newInputsDown = [];
        this.startCollectTimer = true;
        this.commandCanSendNewInputs = false;
        this.animationCanImportNewInputs = false;
        this.receivedNewInputs = false;
        this.state = {commandPushed: 0,
                      elevatorMoved: 0,
                      directionChanged: 0,
                      stillSomeCallsToResolve: 0,
                      propsChanged: 0,
                      receivedInputs: false
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

    updateCallsUp(upCallsList1, upCallsList2) {

        let mergedList = null;

        if (typeof upCallsList1 != 'undefined' && typeof upCallsList2 != 'undefined') {

            mergedList = [...new Set([...upCallsList1, ...upCallsList2])];
        }

        console.log("merge")

        return mergedList;
    }

    updateCallsDown(downCallsList1, downCallsList2) {

        let mergedList = null;

        if (typeof downCallsList1 != 'undefined' && typeof downCallsList2 != 'undefined') {

            mergedList = [...new Set([...downCallsList1, ...downCallsList2])];
        }

        return mergedList;

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

        //console.log("set dir");

    }

    updateCalls() {

        return new Promise(resolve => {
            setTimeout(() => {
                resolve( this.setState({commandPushed: !this.state.commandPushed}) );
            }, 1000);
        });
    }

    render() {
        return (
            <header className="App-body">
                <ElevatorLocation locationData={this.props.externData} />
                <ElevatorAnimation animationData={this.props.externData}
                                   fetchNewInputs={this.animationCanImportNewInputs}
                                   updateFromAnimation = {async (currentLocation, callsCollUp, callsCollDown, pending, servedFloors, fromCommandsUp, fromCommandsDown) =>
                                    {
                                       console.log("animation update");
                                        // console.log(callsCollUp)
                                        // console.log(callsCollDown)
                                        // console.log(fromCommandsUp)
                                        // console.log(fromCommandsDown)

                                       this.props.externData.elevatorPosition = currentLocation;

                                        console.log("counter " + this.counter)

                                        console.log(this.props.externData.callsFromCommandsUp);
                                        console.log(this.props.externData.callsFromCommandsDown);

                                        if (this.animationCanImportNewInputs) {

                                            this.animationCanImportNewInputs= false
                                            this.receivedNewInputs = true

                                            // Merge calls from commands without calls already served with the calls from the new inputs
                                            this.props.externData.callsFromCommandsUp = this.updateCallsUp(fromCommandsUp, this.newInputsUp)
                                            this.props.externData.callsFromCommandsDown = this.updateCallsDown(fromCommandsDown, this.newInputsDown)

                                            console.log("got new inputs ---")

                                            console.log(this.props.externData.callsFromCommandsUp);
                                            console.log(this.props.externData.callsFromCommandsDown);
                                        }
                                        /*
                                        // Merge calls from commands without calls already served with the calls from the new inputs
                                       this.props.externData.callsFromCommandsUp = this.updateCallsUp(fromCommandsUp, this.props.externData.callsFromCommandsUp)
                                       this.props.externData.callsFromCommandsDown = this.updateCallsDown(fromCommandsDown, this.props.externData.callsFromCommandsDown)
*/
                                       // New lists of calls to collect are the merge of calls from commands and calls from animation
                                       this.props.externData.callsToCollectUp = this.updateCallsUp(callsCollUp, this.props.externData.callsFromCommandsUp)
                                       this.props.externData.callsToCollectDown = this.updateCallsDown(callsCollDown, this.props.externData.callsFromCommandsDown)

                                       // Once "used" refresh the lists
                                       // this.checkRefresh = true;

                                       //this.props.externData.callsToCollectUp = callsCollUp;
                                       //this.props.externData.callsToCollectDown = callsCollDown;
                                       this.props.externData.pendingCalls = pending;

                                       // Check which buttons to switch off based on this dictionary
                                       this.props.externData.servedFloors = servedFloors;

                                        console.log(this.props.externData.callsFromCommandsUp);
                                        console.log(this.props.externData.callsFromCommandsDown);



                                       this.setMainDirection();
                                       // await Promise.all([this.updateCalls()]);
                                       this.setState({commandPushed: !this.state.commandPushed});

                                    }

                                   }
                                   updateDirection={() => { this.setMainDirection(); this.setState({directionChanged: !this.state.directionChanged}); }}
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
                                   }}/>
                <ElevatorCommands commandsData={this.props.externData}
                                  updateSwitchFromCommands={(servedFloors) => {this.props.externData.servedFloors = servedFloors}}
                                  startTimer={this.startCollectTimer}
                                  setTimer={(isTimer) => {this.startCollectTimer = isTimer}}
                                  updateFromCommands={async (inputCommandsUp, inputCommandsDown) =>
                                    {
                                        //if (this.receivedNewInputs) {
                                        console.log("get the new inputs from commands ------------------------")

                                        this.newInputsUp = inputCommandsUp
                                        this.newInputsDown = inputCommandsDown

                                        console.log(this.newInputsUp);
                                        console.log(this.newInputsDown);

                                        this.startCollectTimer = false;

                                        this.commandCanSendNewInputs = true;
                                        //this.receivedNewInputs = false;
                                        //this.animationCanImportNewInputs = true;


                                        this.setState({receivedInputs: !this.state.receivedInputs})
                                        //}

                                        // Update calls
                                        //console.log("receive floor from upDown component " + newFloor);
                                        //console.log("and also " + direction);

/*
                                        if (direction === "up") {
                                            if (this.props.externData.callsFromCommandsUp.indexOf(newFloor) < 0) {
                                                this.props.externData.callsFromCommandsUp.push(Number(newFloor));
                                            }
                                        }
                                        else {
                                            if (this.props.externData.callsFromCommandsDown.indexOf(newFloor) < 0) {
                                                this.props.externData.callsFromCommandsDown.push(Number(newFloor));
                                            }
                                        }

                                        console.log("commands update aft ")
                                        console.log(this.props.externData.callsFromCommandsUp);
                                        console.log(this.props.externData.callsFromCommandsDown);
                                        this.isPushedCommands = true;

                                        // Refresh component with small delay so that no calls are missed
                                        await Promise.all([this.updateCalls()]);
*/
                                        //this.setState({commandPushed: !this.state.commandPushed});
                                    }
                                  }/>
            </header>
        );
    }

    async componentDidMount() {

        this.setMainDirection()
        this.setState({directionChanged: !this.state.directionChanged});
        console.log("init pos " + this.props.externData.elevatorPosition);
        console.log("init dir " + this.props.externData.elevatorDirection);

        /*// In case the direction does not change during init
        if (this.props.externData.pendingCalls.length > 0 || this.props.externData.callsToCollectDown.length > 0 || this.props.externData.callsToCollectUp.length > 0) {
            this.setState({stillSomeCallsToResolve: !this.state.stillSomeCallsToResolve})
        }*/
    }

    updateFromNewInputs() {
        console.log("cassuuu")
        this.animationCanImportNewInputs = true
        this.setState({commandPushed: !this.state.commandPushed})
    }

    getNewInputs() {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log("waiting ...");

                resolve(this.updateFromNewInputs());
            }, 15000);
        });
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {

        console.log("component re-rendered -------------------------------------")

        // Start timer next time user click
        if (this.receivedNewInputs) { console.log("timer can start"); this.receivedNewInputs = false; this.startCollectTimer = true; }

        // Command received new input lists than can be send to animation
        if(this.commandCanSendNewInputs) {
            this.commandCanSendNewInputs = false;
            //await this.getNewInputs();
            this.updateFromNewInputs()
        }
/*
        if (this.receivedNewInputs) {
            this.receivedNewInputs = false;
            this.commandCanSendNewInputs = true;
            await this.getNewInputs();
        }

/*
        if (this.isPushedCommands) {
            this.isPushedCommands = false;
            this.updateCalls();
        }
*/
        // If the two lists are different you can delete the content since it has been inserted in the calls to serve
        /*
        if (this.checkRefresh) {
            this.checkRefresh = false;

            if(this.compare(prevProps.externData.callsFromCommandsUp, this.props.externData.callsFromCommandsUp)) {
                this.props.externData.callsFromCommandsUp = [];
            }
            if(this.compare(prevProps.externData.callsFromCommandsDown, this.props.externData.callsFromCommandsDown)) {
                this.props.externData.callsFromCommandsDown = [];
            }

            this.setState({commandPushed: !this.state.commandPushed})
        }

        */


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