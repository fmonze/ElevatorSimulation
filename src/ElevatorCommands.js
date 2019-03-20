import React, {Component} from 'react';
import UpDownCommand from './UpDownCommand'; // name of imported component must match the component class name !

const myRow = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

const divStyle = {
    margin: '5px',
    border: '5px solid blue',
    width: '100%'
};

class ElevatorCommands extends Component {

    constructor(props) {
        super(props);
        this.inputCommandsUp = [];
        this.inputCommandsDown = [];
        this.isTimer = true;
        this.time = 5000;
    }

        render() {
        // todo se definisco come class App-header prende quelle caratteristiche
        return (
            <header style={divStyle}>
                    <div className="row" style={myRow}>
                        <UpDownCommand id={0} upDownData={this.props.commandsData}
                                       updateSwitchButton={(servedFloors) => { this.props.updateSwitchFromCommands(servedFloors)}}
                                       update={async (direction, newFloor) => {

                                           if (direction === "up") {
                                               if (this.inputCommandsUp.indexOf(newFloor) < 0) {
                                                   this.inputCommandsUp.push(Number(newFloor));
                                               }

                                           } else {

                                               if (this.inputCommandsDown.indexOf(newFloor) < 0) {
                                                       this.inputCommandsDown.push(Number(newFloor));
                                               }
                                           }

                                           if (this.isTimer && this.props.startTimer) {
                                               alert("Define your query within the next " + this.time/1000 + " sec. After that time, you will see the result")
                                               this.isTimer = false;
                                               await this.collectNewInputs();
                                           }
                                       }}/>
                        <UpDownCommand id={1} upDownData={this.props.commandsData}
                                       updateSwitchButton={(servedFloors) => { this.props.updateSwitchFromCommands(servedFloors)}}
                                       update={async (direction, newFloor) => {

                                           if (direction === "up") {
                                               if (this.inputCommandsUp.indexOf(newFloor) < 0) {
                                                   this.inputCommandsUp.push(Number(newFloor));
                                               }

                                           } else {

                                               if (this.inputCommandsDown.indexOf(newFloor) < 0) {
                                                   this.inputCommandsDown.push(Number(newFloor));
                                               }
                                           }

                                           if (this.isTimer && this.props.startTimer) {
                                               alert("Define your query within the next " + this.time/1000 + " sec. After that time, you will see the result")
                                               this.isTimer = false;
                                               await this.collectNewInputs();
                                           }
                                       }}/>
                        <UpDownCommand id={2} upDownData={this.props.commandsData}
                                       updateSwitchButton={(servedFloors) => { this.props.updateSwitchFromCommands(servedFloors)}}
                                       update={async (direction, newFloor) => {

                                           if (direction === "up") {
                                               if (this.inputCommandsUp.indexOf(newFloor) < 0) {
                                                   this.inputCommandsUp.push(Number(newFloor));
                                               }

                                           } else {

                                               if (this.inputCommandsDown.indexOf(newFloor) < 0) {
                                                   this.inputCommandsDown.push(Number(newFloor));
                                               }
                                           }

                                           if (this.isTimer && this.props.startTimer) {
                                               alert("Define your query within the next " + this.time/1000 + " sec. After that time, you will see the result")
                                               this.isTimer = false;
                                               await this.collectNewInputs();
                                           }
                                       }}/>
                        <UpDownCommand id={3} upDownData={this.props.commandsData}
                                       updateSwitchButton={(servedFloors) => { this.props.updateSwitchFromCommands(servedFloors)}}
                                       update={async (direction, newFloor) => {

                                           if (direction === "up") {
                                               if (this.inputCommandsUp.indexOf(newFloor) < 0) {
                                                   this.inputCommandsUp.push(Number(newFloor));
                                               }

                                           } else {

                                               if (this.inputCommandsDown.indexOf(newFloor) < 0) {
                                                   this.inputCommandsDown.push(Number(newFloor));
                                               }
                                           }

                                           if (this.isTimer && this.props.startTimer) {
                                               alert("Define your query within the next " + this.time/1000 + " sec. After that time, you will see the result")
                                               this.isTimer = false;
                                               await this.collectNewInputs();
                                           }
                                       }}/>
                        <UpDownCommand id={4} upDownData={this.props.commandsData}
                                       updateSwitchButton={(servedFloors) => { this.props.updateSwitchFromCommands(servedFloors)}}
                                       update={async (direction, newFloor) => {

                                           if (direction === "up") {
                                               if (this.inputCommandsUp.indexOf(newFloor) < 0) {
                                                   this.inputCommandsUp.push(Number(newFloor));
                                               }

                                           } else {

                                               if (this.inputCommandsDown.indexOf(newFloor) < 0) {
                                                   this.inputCommandsDown.push(Number(newFloor));
                                               }
                                           }

                                           if (this.isTimer && this.props.startTimer) {
                                               alert("Define your query within the next " + this.time/1000 + " sec. After that time, you will see the result")
                                               this.isTimer = false;
                                               await this.collectNewInputs();
                                           }
                                       }}/>
                        <UpDownCommand id={5} upDownData={this.props.commandsData}
                                       updateSwitchButton={(servedFloors) => { this.props.updateSwitchFromCommands(servedFloors)}}
                                       update={async (direction, newFloor) => {

                                           if (direction === "up") {
                                               if (this.inputCommandsUp.indexOf(newFloor) < 0) {
                                                   this.inputCommandsUp.push(Number(newFloor));
                                               }

                                           } else {

                                               if (this.inputCommandsDown.indexOf(newFloor) < 0) {
                                                   this.inputCommandsDown.push(Number(newFloor));
                                               }
                                           }

                                           if (this.isTimer && this.props.startTimer) {
                                               alert("Define your query within the next " + this.time/1000 + " sec. After that time, you will see the result")
                                               this.isTimer = false;
                                               await this.collectNewInputs();
                                           }
                                       }}/>
                    </div>
            </header>
        );
    }

    update() {

        this.props.updateFromCommands(this.inputCommandsUp, this.inputCommandsDown)
        this.inputCommandsUp = [];
        this.inputCommandsDown = [];
        this.isTimer = true;
    }

    collectNewInputs() {

        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this.update());
            }, this.time);
        });
    }
}

export default ElevatorCommands;