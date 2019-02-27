import React, {Component} from 'react';
import openLift from './open_ elevator_img.jpg';
import closedLift from './closed_ elevator_img.jpg';

const divStyle = {
    margin: '5px',
    border: '5px solid blue'
};

class ElevatorAnimation extends Component {

    constructor(props) {
        super(props);
    }

    closeElevatorDoor(floor) {

        setTimeout(() => {
            this.refs['fl' + floor].src = closedLift;
        }, 1000);
    }

    async moveUp() {
        // todo: insert consideration of calls to collect while serving the calls
        /*
        // Continue moving until there aren't any pending calls left
         while (this.props.animationData.pendingCallsUp.length > 0) {
            //console.log("current floor");
            //console.log(this.props.animationData.elevatorPosition);
            // Close previous floor
            let currentFloor = this.props.animationData.elevatorPosition;
            //console.log(this.refs['fl' + currentFloor].src)
            this.refs['fl' + currentFloor].src = closedLift;
            //console.log(this.refs['fl' + currentFloor].src)

            // New floor to open is the minimal one in the pending calls going up
            //console.log(this.props.animationData.pendingCallsUp);
            let newFloor = Math.min(...this.props.animationData.pendingCallsUp);
            //console.log("floor");
            //console.log(newFloor);
            this.refs['fl' + newFloor].src = openLift;
            // Update current elevation position
            this.props.animationData.elevatorPosition = newFloor;
            //console.log(this.props.animationData.elevatorPosition);
            // Remove served call from being pending
            this.props.animationData.pendingCallsUp.splice(this.props.animationData.pendingCallsUp.indexOf(newFloor), 1);
            //console.log(this.props.animationData.pendingCallsUp);
         }
           */
        //Close
        if (this.props.animationData.callsToCollectUp.length > 0) {
            await this.closeElevatorDoor(this.props.animationData.elevatorPosition);

            // Go to the floor calling the elevator if no pending call between current and target location
            console.log("up bef ");
            console.log(this.props.animationData.callsToCollectUp);

            let newFloor = this.props.animationData.callsToCollectUp.pop(); // Remove element from callsToCollect

            console.log("up aft");
            console.log(this.props.animationData.callsToCollectUp);


            while (this.props.animationData.pendingCallsUp.some(x => x < newFloor)) {
                console.log("pending");
                console.log(this.props.animationData.pendingCallsUp);
                let pendingFloor = Math.min(...this.props.animationData.pendingCallsUp.filter( x => x < newFloor))
                this.props.animationData.pendingCallsUp.splice(this.props.animationData.pendingCallsUp.indexOf(pendingFloor), 1);
                setTimeout(() => {
                    this.refs['fl' + pendingFloor].src = openLift;
                    this.props.updateFromAnimationUp(this.props.animationData.elevatorPosition, this.props.animationData.callsToCollectUp, this.props.animationData.pendingCallsUp)
                    this.closeElevatorDoor(pendingFloor);
                }, 1500);

            }
            setTimeout(() => {
                this.refs['fl' + newFloor].src = openLift;
            }, 2000);

            this.props.animationData.elevatorPosition = newFloor;
            //this.props.animationData.pendingCallsUp.splice(this.props.animationData.pendingCallsUp.indexOf(newFloor), 1);

            setTimeout(() => {
                this.props.updateFromAnimationUp(this.props.animationData.elevatorPosition, this.props.animationData.callsToCollectUp, this.props.animationData.pendingCallsUp)
            }, 3000);


        }
    }

    moveDown() {
        // todo complete
        //Close
        if (this.props.animationData.callsToCollectDown.length > 0) {
            let currentFloor = this.props.animationData.elevatorPosition;
            this.refs['fl' + currentFloor].src = closedLift;

            // Open
            console.log( "down bef");
            console.log(this.props.animationData.callsToCollectDown);
            let newFloor = this.props.animationData.callsToCollectDown.pop();
            console.log( "down aft");
            console.log(this.props.animationData.callsToCollectDown);
            this.refs['fl' + newFloor].src = openLift;
            this.props.animationData.elevatorPosition = newFloor;
            //this.props.animationData.pendingCallsDown.splice(this.props.animationData.pendingCallsDown.indexOf(newFloor), 1);

            // Update calls for the other components
            this.props.updateFromAnimationDown(this.props.animationData.elevatorPosition, this.props.animationData.callsToCollectDown)
        }
    }

    render() {
        return (
            <header style={divStyle}>
                <img id="0" ref="fl0" src={closedLift} className="Elevator-img" />
                <img id="1" ref="fl1" src={closedLift} className="Elevator-img" />
                <img id="2" ref="fl2" src={closedLift} className="Elevator-img" />
                <img id="3" ref="fl3" src={openLift} className="Elevator-img" />
                <img id="4" ref="fl4" src={closedLift} className="Elevator-img" />
                <img id="5" ref="fl5" src={closedLift} className="Elevator-img" />

            </header>
        );
    }

    componentWillUpdate() {
        if (this.props.animationData.elevatorDirection == "up") { this.moveUp(); }
        else { this.moveDown(); }
    }

}

export default ElevatorAnimation;