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
        // Control variable to use when updating the elevator properties from the while-loop during a move (so that the move is not started again - due to the component update - before it ends)
        this.isToMove = true;
    }

    openElevatorDoor(floor) {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log("open " + floor);
                resolve(this.refs['fl' + floor].src = openLift);
            }, 1000);
        });
    }

    closeElevatorDoor(floor) {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log("close " + floor);
                resolve(this.refs['fl' + floor].src = closedLift);
            }, 1000);
        });
    }

    // Time in ms
    updateUp(time) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this.props.updateFromAnimationUp(this.props.animationData.elevatorPosition, this.props.animationData.callsToCollectUp, this.props.animationData.pendingCalls));
            }, time);
        });
    }

    updateDown(time) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this.props.updateFromAnimationDown(this.props.animationData.elevatorPosition, this.props.animationData.callsToCollectDown, this.props.animationData.pendingCalls));
            }, time);
        });
    }

    removeUpCall(floor) {
        this.props.animationData.callsToCollectUp.splice(this.props.animationData.callsToCollectUp.indexOf(floor), 1);
        this.isToMove = false;
        this.props.updateUpCalls(this.props.animationData.callsToCollectUp);
        this.isToMove = true;
    }

    removeDownCall(floor) {
        this.props.animationData.callsToCollectDown.splice(this.props.animationData.callsToCollectDown.indexOf(floor), 1);
        this.isToMove = false;
        this.props.updateDownCalls(this.props.animationData.callsToCollectDown);
        this.isToMove = true;
    }

    removeCalls(floor) {

        // Remove call from all lists where it is included
        if (this.props.animationData.callsToCollectUp.includes(floor)) {
            this.props.animationData.callsToCollectUp.splice(this.props.animationData.callsToCollectUp.indexOf(floor), 1)
        }

        if (this.props.animationData.callsToCollectDown.includes(floor)) {
            this.props.animationData.callsToCollectDown.splice(this.props.animationData.callsToCollectDown.indexOf(floor), 1)
        }

        if (this.props.animationData.pendingCalls.includes(floor)) {
            this.props.animationData.pendingCalls.splice(this.props.animationData.pendingCalls.indexOf(floor), 1)
        }

        //todo ev update all the call lists in extern without triggering another move
    }

    checkCalls(direction, list) {

        let call

        if (direction === "up") { call = Math.min(...list); }
        else { call = Math.max(...list); }

        // Remove element from every list it is in
        this.removeCalls(call);

        console.log("cazzo call")

        return call;
    }

    selectFloor(direction) {

        let newFloor = 0; // default value

        // todo!! problema qui, non arriva in fondo al metodo!!!


        if (direction === "up") {

            // Check up-calls

            if (this.props.animationData.callsToCollectUp.length > 0) {

                newFloor = this.checkCalls(direction, this.props.animationData.callsToCollectUp);
                console.log("cazzo 1")
            }
            // If no up-calls, check pending calls above current floor
            else if (this.props.animationData.pendingCalls.length > 0 && this.props.animationData.pendingCalls.some(x => x > this.props.animationData.elevatorPosition)) {

                newFloor = this.checkCalls(direction, this.props.animationData.pendingCalls.filter(x => x > this.props.animationData.elevatorPosition))
                console.log("cazzo 2")
            }
            // If no-above pending calls, check down-calls above current floor
            else if (this.props.animationData.callsToCollectDown.length > 0 && this.props.animationData.callsToCollectDown.some(x => x > this.props.animationData.elevatorPosition)) {
                newFloor = this.checkCalls(direction, this.props.animationData.callsToCollectDown.filter(x => x > this.props.animationData.elevatorPosition))
                console.log("cazzo 3")
            }

        } else {

            // Check down-calls
            if (this.props.animationData.callsToCollectDown.length > 0) {
                newFloor = this.checkCalls(direction, this.props.animationData.callsToCollectDown);
                // Remove element from callsToCollect
                console.log("cazzo 5")

            }
            // If no down-calls, check pending calls below current floor
            else if (this.props.animationData.pendingCalls.length > 0 && this.props.animationData.pendingCalls.some(x => x < this.props.animationData.elevatorPosition)) {
                newFloor = this.checkCalls(direction, this.props.animationData.pendingCalls.filter(x => x < this.props.animationData.elevatorPosition));
                console.log("cazzo 6")

            }
            // If no-below pending calls, check up-calls below current floor
            else if (this.props.animationData.callsToCollectUp.length > 0 && this.props.animationData.callsToCollectUp.some(x => x < this.props.animationData.elevatorPosition)) {
                newFloor = this.checkCalls(direction, this.props.animationData.callsToCollectUp.filter(x => x < this.props.animationData.elevatorPosition));
                console.log("cazzo 7")

            }
        }

        // If valid newFloor, move otherwise change direction and resolve other calls
        if ([0,1,2,3,4,5].includes(newFloor)) {
            console.log("new floor cazzo " + newFloor)
            this.decideMove(direction, newFloor);
        } else {
            // todo
            //this.props.updateDirection();
        }
    }

    decideMove(direction, floor) {

        // Stop move if new floor is the same as the current floor
        if (floor === this.props.animationData.elevatorPosition) {

            this.props.updateFromAnimation(floor, this.props.animationData.callsToCollectUp,
                                           this.props.animationData.callsToCollectDown, this.props.animationData.pendingCalls)

        }

        else if (direction === "up") { this.moveUp(floor) }

        else  if (direction === "down") { this.moveDown(floor) }

    }

    slideDoors() {

    }

    async moveUp(floor) {
        // todo:remove prints

        console.log("move up");
        this.props.updateFromAnimation(floor, this.props.animationData.callsToCollectUp,
            this.props.animationData.callsToCollectDown, this.props.animationData.pendingCalls)/*
        console.log(this.props.animationData.callsToCollectUp);
        console.log(this.props.animationData.callsToCollectDown);
        console.log(this.props.animationData.pendingCalls);

        // Select new target floor
        let newFloor = this.selectFloor();

        console.log("new floor up " + newFloor);
        console.log(this.props.animationData.pendingCalls);

        // Stop move if new floor is the same as the current floor
        if (newFloor === this.props.animationData.elevatorPosition) { this.props.updateFromAnimationUp(this.props.animationData.elevatorPosition,
            this.props.animationData.callsToCollectUp, this.props.animationData.pendingCalls) }
        // Go to the floor calling the elevator if no pending calls between current and target location
        else {

            // Close current floor
            console.log("current floor " + this.props.animationData.elevatorPosition);
            await this.closeElevatorDoor(this.props.animationData.elevatorPosition);

            // Stop to resolve pending calls todo or callsUp to collect (if both up and down button are pushed then collect both)
            while (this.props.animationData.pendingCalls.some(x => x < newFloor && x > this.props.animationData.elevatorPosition)) {
                console.log("pending");
                console.log(this.props.animationData.pendingCalls);
                // Get pending floors from min to max (up direction)
                let pendingFloor = Math.min(...this.props.animationData.pendingCalls.filter(x => x < newFloor && x > this.props.animationData.elevatorPosition))
                console.log("pending floor");
                console.log(pendingFloor);
                this.props.animationData.pendingCalls.splice(this.props.animationData.pendingCalls.indexOf(pendingFloor), 1);
                // In case the floor is also among the callsToCollectDown also remove from it
                if (this.props.animationData.callsToCollectDown.length > 0 && this.props.animationData.callsToCollectDown.includes(pendingFloor)) { this.removeDownCall(pendingFloor) }
                console.log("pending 2");
                console.log(this.props.animationData.pendingCalls);

                this.props.animationData.elevatorPosition = pendingFloor;
                console.log("pending floor 2");
                console.log(pendingFloor);
                //Disable move before (intern) update
                this.isToMove = false;
                await Promise.all([this.updateUp(1000), this.openElevatorDoor(pendingFloor)]);
                //console.log(this.props.animationData.pendingCallsUp);
                await this.closeElevatorDoor(pendingFloor);

            }

            console.log("new floor up2 " + newFloor);

            // Re-enable move
            this.isToMove = true;
            // Open new floor and update calls for the other components
            this.props.animationData.elevatorPosition = newFloor;
            await Promise.all([this.openElevatorDoor(newFloor), this.updateUp(1000)]);

            console.log("finish move up");

        } */
    }

    async moveDown(floor) {
        // todo complete
        console.log("move down");
        this.props.updateFromAnimation(floor, this.props.animationData.callsToCollectUp,
            this.props.animationData.callsToCollectDown, this.props.animationData.pendingCalls)
        /*console.log(this.props.animationData.callsToCollectUp);
        console.log(this.props.animationData.callsToCollectDown);
        console.log(this.props.animationData.pendingCalls);


        if (this.props.animationData.callsToCollectDown.length > 0 || this.props.animationData.pendingCalls.length > 0) {

            // Select new target floor
            let newFloor = this.selectFloor();

            console.log("new floor down " + newFloor);

            // Stop move if new floor is the same as the current floor
            if (newFloor === this.props.animationData.elevatorPosition) { this.props.updateFromAnimationDown(this.props.animationData.elevatorPosition,
                                                                                                             this.props.animationData.callsToCollectDown, this.props.animationData.pendingCalls) }
            // Go to the floor calling the elevator if no pending calls between current and target location
            else {

                // Close current floor
                await this.closeElevatorDoor(this.props.animationData.elevatorPosition);

                // Stop to resolve pending calls todo or callsUp to collect (if both up and down button are pushed then collect both)
                while (this.props.animationData.pendingCalls.some(x => x > newFloor && x < this.props.animationData.elevatorPosition)) {
                    console.log("pending");
                    console.log(this.props.animationData.pendingCalls);
                    // Get pending floors from max to min (down direction)
                    let pendingFloor = Math.max(...this.props.animationData.pendingCalls.filter(x => x > newFloor && x < this.props.animationData.elevatorPosition))
                    console.log("pending floor " + pendingFloor);
                    this.props.animationData.pendingCalls.splice(this.props.animationData.pendingCalls.indexOf(pendingFloor), 1);
                    // In case the floor is also among the callsToCollectUp also remove from it
                    if (this.props.animationData.callsToCollectUp.length > 0 && this.props.animationData.callsToCollectUp.includes(pendingFloor)) { this.removeDownCall(pendingFloor) }

                    this.props.animationData.elevatorPosition = pendingFloor;
                    console.log("pending floor 2 " + pendingFloor);
                    //Disable move before (intern) update
                    this.isToMove = false;
                    await Promise.all([ this.openElevatorDoor(pendingFloor), this.updateDown(1000)]);
                    //console.log(this.props.animationData.pendingCalls);
                    await this.closeElevatorDoor(pendingFloor);
                }

                console.log("new floor down2 " + newFloor);
                console.log("current pos " + this.props.animationData.elevatorPosition);

                // Re-enable move
                this.isToMove = true;
                // Open new floor and update calls for the other components
                this.props.animationData.elevatorPosition = newFloor;

                await Promise.all([this.updateDown(1000), this.openElevatorDoor(newFloor)]);

                console.log("finish move down");

            }

        }*/
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

    componentDidUpdate() {
        console.log("update");

        // Safety check to avoid infinite loops
        if (this.props.animationData.pendingCalls.length === 0
            && this.props.animationData.callsToCollectUp.length === 0
            && this.props.animationData.callsToCollectDown.length === 0) {

            this.isToMove = false;
        }

        if (this.isToMove) {
            console.log("dir " + this.props.animationData.elevatorDirection);
            this.selectFloor(this.props.animationData.elevatorDirection);
        }
    }

}

export default ElevatorAnimation;