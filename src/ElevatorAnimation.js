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
                console.log("OPEN");
            }, 1000);
        });
    }

    closeElevatorDoor(floor) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this.refs['fl' + floor].src = closedLift);
                console.log("CLOSE");
            }, 1000);
        });
    }

    updateUp() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this.props.updateFromAnimationUp(this.props.animationData.elevatorPosition, this.props.animationData.callsToCollectUp, this.props.animationData.pendingCallsUp));
            }, 1000);
        });
    }

    updateDown() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this.props.updateFromAnimationDown(this.props.animationData.elevatorPosition, this.props.animationData.callsToCollectDown, this.props.animationData.pendingCallsDown));
            }, 1000);
        });
    }

    async moveUp() {
        // todo: insert consideration of calls to collect while serving the calls and remove prints

        if (this.props.animationData.callsToCollectUp.length > 0) {
            // Close current floor
            await this.closeElevatorDoor(this.props.animationData.elevatorPosition);

            // Go to the floor calling the elevator if no pending calls between current and target location
            //console.log("up bef ");
            //console.log(this.props.animationData.callsToCollectUp);

            let newFloor = this.props.animationData.callsToCollectUp.pop(); // Remove element from callsToCollect

            //console.log("up aft");
            //console.log(this.props.animationData.callsToCollectUp);

            // Stop to resolve pending calls todo or callsUp to collect (if both up and down button are pushed then collect both)
            while (this.props.animationData.pendingCallsUp.some(x => x < newFloor && x > this.props.animationData.elevatorPosition)) {
                console.log("pending");
                console.log(this.props.animationData.pendingCallsUp);
                // Get pending floors from min to max (up direction)
                let pendingFloor = Math.min(...this.props.animationData.pendingCallsUp.filter( x => x < newFloor && x > this.props.animationData.elevatorPosition))
                this.props.animationData.pendingCallsUp.splice(this.props.animationData.pendingCallsUp.indexOf(pendingFloor), 1);

                this.props.animationData.elevatorPosition = pendingFloor;
                await Promise.all([this.updateUp(), this.openElevatorDoor(pendingFloor)]);
                //console.log(this.props.animationData.pendingCallsUp);
                await this.closeElevatorDoor(pendingFloor);

            }

            // Open new floor and update calls for the other components
            this.props.animationData.elevatorPosition = newFloor;
            await Promise.all([this.updateUp(),this.openElevatorDoor(newFloor)]);
        }
    }

    async moveDown() {
        // todo complete
        if (this.props.animationData.callsToCollectDown.length > 0) {
            // Close current floor
            await this.closeElevatorDoor(this.props.animationData.elevatorPosition);

            // Go to the floor calling the elevator if no pending calls between current and target location
            let newFloor = this.props.animationData.callsToCollectDown.pop(); // Remove element from callsToCollect

            // Stop to resolve pending calls todo or callsUp to collect (if both up and down button are pushed then collect both)
            while (this.props.animationData.pendingCallsDown.some(x => x > newFloor && x < this.props.animationData.elevatorPosition)) {
                console.log("pending");
                console.log(this.props.animationData.pendingCallsDown);
                // Get pending floors from max to min (down direction)
                let pendingFloor = Math.max(...this.props.animationData.pendingCallsDown.filter( x => x > newFloor && x < this.props.animationData.elevatorPosition))
                this.props.animationData.pendingCallsDown.splice(this.props.animationData.pendingCallsDown.indexOf(pendingFloor), 1);

                this.props.animationData.elevatorPosition = pendingFloor;
                await Promise.all([this.updateDown(), this.openElevatorDoor(pendingFloor)]);
                //console.log(this.props.animationData.pendingCallsDown);
                await this.closeElevatorDoor(pendingFloor);

            }

            // Open new floor and update calls for the other components
            this.props.animationData.elevatorPosition = newFloor;
            await Promise.all([this.updateDown(), this.openElevatorDoor(newFloor)]);
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