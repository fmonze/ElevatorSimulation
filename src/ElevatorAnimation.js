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

    updateUp() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this.props.updateFromAnimationUp(this.props.animationData.elevatorPosition, this.props.animationData.callsToCollectUp, this.props.animationData.pendingCalls));
            }, 1000);
        });
    }

    updateDown() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this.props.updateFromAnimationDown(this.props.animationData.elevatorPosition, this.props.animationData.callsToCollectDown, this.props.animationData.pendingCalls));
            }, 1000);
        });
    }

    async moveUp() {
        // todo: insert consideration of calls to collect while serving the calls and remove prints

        if (this.props.animationData.callsToCollectUp.length > 0 || this.props.animationData.pendingCalls.length > 0) {
            // Close current floor
            console.log("current floor " + this.props.animationData.elevatorPosition);
            await this.closeElevatorDoor(this.props.animationData.elevatorPosition);

            // Go to the floor calling the elevator if no pending calls between current and target location
            //console.log("up bef ");
            //console.log(this.props.animationData.callsToCollectUp);

            let newFloor = 0; // default value
            // First go to minimum floor to collect or pending floor (if no other calls to collect
            if (this.props.animationData.callsToCollectUp.length > 0) {
                newFloor = Math.min(...this.props.animationData.callsToCollectUp);
                this.props.animationData.callsToCollectUp.splice(this.props.animationData.callsToCollectUp.indexOf(newFloor), 1); // Remove element from callsToCollect
            } else {
                newFloor = Math.min(...this.props.animationData.pendingCalls.filter( x => x > this.props.animationData.elevatorPosition));
                this.props.animationData.pendingCalls.splice(this.props.animationData.pendingCalls.indexOf(newFloor), 1); // Remove element from pendingCalls
            }

            //console.log("up aft");
            //console.log(this.props.animationData.callsToCollectUp);

            // Stop to resolve pending calls todo or callsUp to collect (if both up and down button are pushed then collect both)
            while (this.props.animationData.pendingCalls.some(x => x < newFloor && x > this.props.animationData.elevatorPosition)) {
                console.log("pending");
                console.log(this.props.animationData.pendingCalls);
                // Get pending floors from min to max (up direction)
                let pendingFloor = Math.min(...this.props.animationData.pendingCalls.filter( x => x < newFloor && x > this.props.animationData.elevatorPosition))
                console.log("pending floor");
                console.log(pendingFloor);
                this.props.animationData.pendingCalls.splice(this.props.animationData.pendingCalls.indexOf(pendingFloor), 1);
                console.log("pending 2");
                console.log(this.props.animationData.pendingCalls);

                this.props.animationData.elevatorPosition = pendingFloor;
                console.log("pending floor 2");
                console.log(pendingFloor);
                await Promise.all([this.updateUp(), this.openElevatorDoor(pendingFloor)]);
                //console.log(this.props.animationData.pendingCallsUp);
                await this.closeElevatorDoor(pendingFloor);

            }

            // Open new floor and update calls for the other components
            this.props.animationData.elevatorPosition = newFloor;
            console.log("new floor 2");
            console.log(newFloor);
            await Promise.all([this.updateUp(),this.openElevatorDoor(newFloor)]);

        }
    }

    async moveDown() {
        // todo complete
        if (this.props.animationData.callsToCollectDown.length > 0 || this.props.animationData.pendingCalls.length > 0) {
            // Close current floor
            await this.closeElevatorDoor(this.props.animationData.elevatorPosition);

            // Go to the floor calling the elevator if no pending calls between current and target location
            // First go to maximum floor to collect
            let newFloor = Math.min(...this.props.animationData.callsToCollectDown);
            this.props.animationData.callsToCollectDown.splice(this.props.animationData.callsToCollectDown.indexOf(newFloor), 1); // Remove element from callsToCollect

            // Stop to resolve pending calls todo or callsUp to collect (if both up and down button are pushed then collect both)
            while (this.props.animationData.pendingCalls.some(x => x > newFloor && x < this.props.animationData.elevatorPosition)) {
                console.log("pending");
                console.log(this.props.animationData.pendingCalls);
                // Get pending floors from max to min (down direction)
                let pendingFloor = Math.max(...this.props.animationData.pendingCalls.filter( x => x > newFloor && x < this.props.animationData.elevatorPosition))
                this.props.animationData.pendingCalls.splice(this.props.animationData.pendingCalls.indexOf(pendingFloor), 1);

                this.props.animationData.elevatorPosition = pendingFloor;
                await Promise.all([this.updateDown(), this.openElevatorDoor(pendingFloor)]);
                //console.log(this.props.animationData.pendingCalls);
                await this.closeElevatorDoor(pendingFloor);

            }

            // Open new floor and update calls for the other components
            this.props.animationData.elevatorPosition = newFloor;
            await Promise.all([this.updateDown(), this.openElevatorDoor(newFloor)]);

            console.log("finish move up");

        }
    }

    render() {
        return (
            <header style={divStyle}>
                <img id="0" ref="fl0" src={openLift} className="Elevator-img" />
                <img id="1" ref="fl1" src={closedLift} className="Elevator-img" />
                <img id="2" ref="fl2" src={closedLift} className="Elevator-img" />
                <img id="3" ref="fl3" src={closedLift} className="Elevator-img" />
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