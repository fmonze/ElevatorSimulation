import React, {Component} from 'react';
import ElevatorLocation from './ElevatorLocation';
import ElevatorAnimation from './ElevatorAnimation';
import ElevatorCommands from './ElevatorCommands';
import openLift from "./open_ elevator_img.jpg";

class Extern extends Component {

    constructor(props) {
        super(props);
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

    mergeCalls(callsList1, callsList2) {

        let mergedList = [...new Set([...callsList1, ...callsList2])];

        console.log("merge")

        return mergedList;
    }

    setMainDirection() {

        // Invert direction when no more callsToCollect or pendingCalls above/below current position
        if (this.props.externData.elevatorDirection === "up"
            && (!this.props.externData.pendingCalls.some(x => x > this.props.externData.elevatorPosition)
            && !this.props.externData.callsToCollectUp.some(x => x > this.props.externData.elevatorPosition)
            && !this.props.externData.callsToCollectDown.some(x => x > this.props.externData.elevatorPosition))) {

            this.props.externData.elevatorDirection = "down";
            return;
        }

        if (this.props.externData.elevatorDirection === "down"
            && (!this.props.externData.pendingCalls.some(x => x < this.props.externData.elevatorPosition)
            && !this.props.externData.callsToCollectUp.some(x => x < this.props.externData.elevatorPosition)
            && !this.props.externData.callsToCollectDown.some(x => x < this.props.externData.elevatorPosition))) {

            this.props.externData.elevatorDirection = "up";
            return;
        }

        // Change when extremes are reached
        if(this.props.externData.elevatorPosition === 5) { this.props.externData.elevatorDirection = "down"; }
        if(this.props.externData.elevatorPosition === 0) { this.props.externData.elevatorDirection = "up"; }

        console.log("set dir " + this.props.externData.elevatorDirection);

    }

    render() {
        return (
            <header className="App-body">
                <ElevatorLocation className="Extern-Component" locationData={this.props.externData} />
                <ElevatorAnimation className="Extern-Component" animationData={this.props.externData}
                                   fetchNewInputs={this.animationCanImportNewInputs}
                                   updateDirection={() => { this.setMainDirection(); this.setState({directionChanged: !this.state.directionChanged}); }}
                                   updateFromAnimation = {async (currentLocation, callsCollUp, callsCollDown, pending,
                                                                 servedFloors, fromCommandsUp, fromCommandsDown, internServedFloors) =>
                                    {
                                       console.log("animation update");

                                       this.props.externData.elevatorPosition = currentLocation;

                                        console.log(this.props.externData.callsFromCommandsDown);

                                        // Get new inputs from external commands
                                        if (this.animationCanImportNewInputs) {

                                            // In case the user starts a query before the previous is finished, remove the calls that were already served by the previous call
                                                for (let i=0; i < this.newInputsUp.length; i++ ) {
                                                    if (servedFloors[this.newInputsUp[i]]) {
                                                        this.newInputsUp.splice(i, 1)
                                                    }
                                                }

                                                for (let i=0; i < this.newInputsDown.length; i++ ) {
                                                    if (servedFloors[this.newInputsDown[i]]) {
                                                        this.newInputsDown.splice(i, 1)
                                                    }
                                                }

                                            this.animationCanImportNewInputs= false
                                            this.receivedNewInputs = true

                                            // Merge calls from commands (without calls already served) with the calls from the new inputs
                                            this.props.externData.callsFromCommandsUp = this.mergeCalls(fromCommandsUp, this.newInputsUp)
                                            this.props.externData.callsFromCommandsDown = this.mergeCalls(fromCommandsDown, this.newInputsDown)


                                            console.log("got new inputs ---")

                                            console.log(this.props.externData.callsFromCommandsUp);
                                            console.log(this.props.externData.callsFromCommandsDown);
                                        }

                                       // New lists of calls to collect are the merge of calls from commands and calls from animation
                                       this.props.externData.callsToCollectUp = this.mergeCalls(callsCollUp, this.props.externData.callsFromCommandsUp)
                                       this.props.externData.callsToCollectDown = this.mergeCalls(callsCollDown, this.props.externData.callsFromCommandsDown)

                                       // Merge pending calls (without calls already served) with the pending calls from the internal inputs
                                        this.props.externData.pendingCalls = this.mergeCalls(pending, this.props.externData.pendingCalls)

                                        console.log("meeerdaaaaa----------------------------")
                                        console.log(this.props.externData.pendingCalls)


                                       this.setMainDirection();
                                       this.props.updateInternServedFloors(internServedFloors, servedFloors)
                                    }} />
                <ElevatorCommands className="Extern-Component" commandsData={this.props.externData}
                                  updateSwitchFromCommands={(servedFloors) => { console.log("now");  this.props.externData.servedFloors = servedFloors}}
                                  startTimer={this.startCollectTimer}
                                  setTimer={(isTimer) => {this.startCollectTimer = isTimer}}
                                  updateFromCommands={async (inputCommandsUp, inputCommandsDown) => {
                                      console.log("get the new inputs from commands ------------------------")

                                      this.newInputsUp = inputCommandsUp
                                      this.newInputsDown = inputCommandsDown

                                      console.log(this.newInputsUp);
                                      console.log(this.newInputsDown);

                                      this.startCollectTimer = false;
                                      this.commandCanSendNewInputs = true;

                                      alert("Start resolution of your combination :)")

                                      this.setState({receivedInputs: !this.state.receivedInputs})
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
    }

    updateFromNewInputs() {
        console.log("cassuuu")
        this.animationCanImportNewInputs = true
        this.props.readyToGetPendingCalls(true);
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
    }
}

export default Extern;