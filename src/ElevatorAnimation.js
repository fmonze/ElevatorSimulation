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

    moveUp() {
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
        if (this.props.animationData.pendingCallsUp.length > 0) {
            let currentFloor = this.props.animationData.elevatorPosition;
            this.refs['fl' + currentFloor].src = closedLift;

            // Open
            console.log("up bef ");
            console.log(this.props.animationData.pendingCallsUp);
            let newFloor = this.props.animationData.pendingCallsUp.pop();
            console.log("up aft");
            console.log(this.props.animationData.pendingCallsUp);
            this.refs['fl' + newFloor].src = openLift;
            this.props.animationData.elevatorPosition = newFloor;
            //this.props.animationData.pendingCallsUp.splice(this.props.animationData.pendingCallsUp.indexOf(newFloor), 1);

            this.props.updateFromAnimation(this.props.animationData.elevatorPosition, this.props.animationData.pendingCallsUp)

        }
    }

    moveDown() {
        // todo complete
        //Close
        if (this.props.animationData.pendingCallsDown.length > 0) {
            let currentFloor = this.props.animationData.elevatorPosition;
            this.refs['fl' + currentFloor].src = closedLift;

            // Open
            console.log( "down bef");
            console.log(this.props.animationData.pendingCallsDown);
            let newFloor = this.props.animationData.pendingCallsDown.pop();
            console.log( "down aft");
            console.log(this.props.animationData.pendingCallsDown);
            this.refs['fl' + newFloor].src = openLift;
            this.props.animationData.elevatorPosition = newFloor;
            //this.props.animationData.pendingCallsDown.splice(this.props.animationData.pendingCallsDown.indexOf(newFloor), 1);

            // Update calls for the other components
            this.props.updateFromAnimation(this.props.animationData.elevatorPosition, this.props.animationData.pendingCallsDown)
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

    componentWillUpdate(nextProps, nextState, nextContext) {
        if (this.props.animationData.elevatorDirection == "up") { this.moveUp(); }
        else { this.moveDown(); }
    }

}

export default ElevatorAnimation;