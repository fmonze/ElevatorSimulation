import React, {Component} from 'react';
import openLift from './open_cage.svg';
import closedLift from './closed_cage.svg';

const divStyle = {

};

class ElevatorAnimation extends Component {

    constructor(props) {
        super(props);
        // Control variable to use when updating the elevator properties from the while-loop during a move (so that the move is not started again - due to the component update - before it ends)
        this.wasPendingCall = false;
    }

    openElevatorDoor(floor) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this.refs['fl' + floor].src = openLift);
            }, 1000);
        });
    }

    closeElevatorDoor(floor) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this.refs['fl' + floor].src = closedLift);
            }, 1000);
        });
    }

    // Time in ms
    update(time) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this.props.updateFromAnimation(this.props.animationData.elevatorPosition, this.props.animationData.callsToCollectUp,
                                                       this.props.animationData.callsToCollectDown, this.props.animationData.pendingCalls, this.props.animationData.servedFloors,
                                                       this.props.animationData.callsFromCommandsUp, this.props.animationData.callsFromCommandsDown,
                                                       this.props.animationData.intServedFloors));
            }, time);
        });
    }

    removeCall(floor) {

        // Remove call from all lists where it is included
        if (this.props.animationData.callsToCollectUp.includes(floor)) {
            this.props.animationData.callsToCollectUp.splice(this.props.animationData.callsToCollectUp.indexOf(floor), 1)
        }

        if (this.props.animationData.callsToCollectDown.includes(floor)) {
            this.props.animationData.callsToCollectDown.splice(this.props.animationData.callsToCollectDown.indexOf(floor), 1)
        }

        if (this.props.animationData.pendingCalls.includes(floor)) {
            this.props.animationData.pendingCalls.splice(this.props.animationData.pendingCalls.indexOf(floor), 1)

            this.wasPendingCall = true;
        }

        if (this.props.animationData.callsFromCommandsUp.includes(floor)) {
            this.props.animationData.callsFromCommandsUp.splice(this.props.animationData.callsFromCommandsUp.indexOf(floor), 1)
        }

        if (this.props.animationData.callsFromCommandsDown.includes(floor)) {
            this.props.animationData.callsFromCommandsDown.splice(this.props.animationData.callsFromCommandsDown.indexOf(floor), 1)
        }
    }

    checkCalls(direction, list) {

        let call

        if (direction === "up") { call = Math.min(...list); }
        else { call = Math.max(...list); }

        return call;
    }

    selectFloor(direction) {

        this.wasPendingCall = false; // Needed to switch off intern buttons

        let newFloor = null;

        // Remove current location from any list (safety check)
        // this.removeCall(this.props.animationData.elevatorPosition); //todo dangerous?

        if (direction === "up") {

            // Check up-calls
            if (this.props.animationData.callsToCollectUp.length > 0) {

                newFloor = this.checkCalls(direction, this.props.animationData.callsToCollectUp);
            }
            // If no up-calls, check pending calls above current floor
            else if (this.props.animationData.pendingCalls.length > 0 && this.props.animationData.pendingCalls.some(x => x >= this.props.animationData.elevatorPosition)) {

                newFloor = this.checkCalls(direction, this.props.animationData.pendingCalls.filter(x => x >= this.props.animationData.elevatorPosition))
            }
            // If no-above pending calls, check down-calls above current floor
            else if (this.props.animationData.callsToCollectDown.length > 0 && this.props.animationData.callsToCollectDown.some(x => x >= this.props.animationData.elevatorPosition)) {
                newFloor = this.checkCalls(direction, this.props.animationData.callsToCollectDown.filter(x => x >= this.props.animationData.elevatorPosition))
            }

            // Check if there are pending calls between the current and the target floor
            if (this.props.animationData.pendingCalls.length > 0
                && this.props.animationData.pendingCalls.some(x => x <= newFloor && x >= this.props.animationData.elevatorPosition)) {

                newFloor = Math.min(...this.props.animationData.pendingCalls.filter(x => x <= newFloor && x >= this.props.animationData.elevatorPosition))
            }

        } else {

            // Check down-calls
            if (this.props.animationData.callsToCollectDown.length > 0) {
                newFloor = this.checkCalls(direction, this.props.animationData.callsToCollectDown);

            }
            // If no down-calls, check pending calls below current floor
            else if (this.props.animationData.pendingCalls.length > 0 && this.props.animationData.pendingCalls.some(x => x <= this.props.animationData.elevatorPosition)) {
                newFloor = this.checkCalls(direction, this.props.animationData.pendingCalls.filter(x => x <= this.props.animationData.elevatorPosition));

            }
            // If no-below pending calls, check up-calls below current floor
            else if (this.props.animationData.callsToCollectUp.length > 0 && this.props.animationData.callsToCollectUp.some(x => x <= this.props.animationData.elevatorPosition)) {
                newFloor = this.checkCalls(direction, this.props.animationData.callsToCollectUp.filter(x => x <= this.props.animationData.elevatorPosition));

            }

            // Check if there are pending calls between the current and the target floor
            if (this.props.animationData.pendingCalls.length > 0
                && this.props.animationData.pendingCalls.some(x => x >= newFloor && x <= this.props.animationData.elevatorPosition)) {

                newFloor = Math.max(...this.props.animationData.pendingCalls.filter(x => x >= newFloor && x <= this.props.animationData.elevatorPosition))
            }

        }

        // If valid newFloor, move otherwise change direction and resolve other calls
        if ([0,1,2,3,4,5].includes(newFloor)) {
            // Remove element from every list it is in
            this.removeCall(newFloor);
            this.decideMove(direction, newFloor);
        } else {
            this.props.updateDirection();
        }
    }

    decideMove(direction, floor) {

        // Stop move if new floor is the same as the current floor
        if (floor === this.props.animationData.elevatorPosition) {

            // Remove floor need also its button to be switched off
            this.props.animationData.servedFloors[floor] = 1;
            if (this.wasPendingCall) { this.props.animationData.intServedFloors[floor] = 1;}

            this.props.updateFromAnimation(floor, this.props.animationData.callsToCollectUp, this.props.animationData.callsToCollectDown,
                                           this.props.animationData.pendingCalls, this.props.animationData.servedFloors,
                                           this.props.animationData.callsFromCommandsUp, this.props.animationData.callsFromCommandsDown,
                                           this.props.animationData.intServedFloors)
        }

        else if (direction === "up") { this.moveUp(floor) }

        else  if (direction === "down") { this.moveDown(floor) }

    }

    async moveUp(floor) {
        // Close current floor

        await this.closeElevatorDoor(this.props.animationData.elevatorPosition);

        // Set new floor to current position
        this.props.animationData.elevatorPosition = floor;


        // Remove floor need also its buttons to be switched off
        this.props.animationData.servedFloors[floor] = 1;
        if (this.wasPendingCall) { this.props.animationData.intServedFloors[floor] = 1;}

        await Promise.all([this.openElevatorDoor(floor), this.update(1000)]);
    }

    async moveDown(floor) {

        // Close current floor

        await this.closeElevatorDoor(this.props.animationData.elevatorPosition);

        // Set new floor to current position
        this.props.animationData.elevatorPosition = floor;

        // Remove floor need also its button to be switched off
        this.props.animationData.servedFloors[floor] = 1;
        if (this.wasPendingCall) { this.props.animationData.intServedFloors[floor] = 1;}


        await Promise.all([this.openElevatorDoor(floor), this.update(1000)]);
}

    render() {
        return (
            <header style={divStyle}>
                <img id="0" ref="fl0" src={closedLift} className="Elevator-img" />
                <img id="1" ref="fl1" src={closedLift} className="Elevator-img" />
                <img id="2" ref="fl2" src={closedLift} className="Elevator-img" />
                <img id="3" ref="fl3" src={closedLift} className="Elevator-img" />
                <img id="4" ref="fl4" src={closedLift} className="Elevator-img" />
                <img id="5" ref="fl5" src={closedLift} className="Elevator-img" />

            </header>
        );
    }

    componentDidMount() {
        this.refs['fl' + this.props.animationData.elevatorPosition].src = openLift
    }

    componentDidUpdate() {

        // Safety check to avoid infinite loops
        if (this.props.animationData.pendingCalls.length > 0
            || this.props.animationData.callsToCollectUp.length > 0
            || this.props.animationData.callsToCollectDown.length > 0) {

            console.log("dir " + this.props.animationData.elevatorDirection);
            this.selectFloor(this.props.animationData.elevatorDirection);
        }

        if(this.props.fetchNewInputs) {

            this.props.updateFromAnimation(this.props.animationData.elevatorPosition, this.props.animationData.callsToCollectUp,
                this.props.animationData.callsToCollectDown, this.props.animationData.pendingCalls, this.props.animationData.servedFloors,
                this.props.animationData.callsFromCommandsUp, this.props.animationData.callsFromCommandsDown, this.props.animationData.intServedFloors)

        }
    }

}

export default ElevatorAnimation;