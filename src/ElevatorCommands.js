import React, {Component} from 'react';
import UpDownCommand from './UpDownCommand'; // name of imported component must match the component class name !

const myRow = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: '5%',
    paddingRight: '5%'
};

class ElevatorCommands extends Component {

    constructor(props) {
        super(props);
        this.inputCommandsUp = [];
        this.inputCommandsDown = [];
        this.isTimer = true;
        this.timer = null;
        this.state = { refresh: false };
    }

        render() {
        // todo se definisco come class App-header prende quelle caratteristiche
        return (
            /*
            <header>
                <div className="container-fluid">
                    <div className="row" style={myRow}>
                        <UpDownCommand id={0} upDownData={this.props.commandsData}
                                       updateSwitchButton={(servedFloors) => { this.props.updateSwitchFromCommands(servedFloors)}}
                                       update={(direction, newFloor) => {this.props.updateFromCommands(direction, newFloor)}}/>
                        <UpDownCommand id={1} upDownData={this.props.commandsData}
                                       updateSwitchButton={(servedFloors) => { this.props.updateSwitchFromCommands(servedFloors)}}
                                       update={(direction, newFloor) => {this.props.updateFromCommands(direction, newFloor)}}/>
                        <UpDownCommand id={2} upDownData={this.props.commandsData}
                                       updateSwitchButton={(servedFloors) => { this.props.updateSwitchFromCommands(servedFloors)}}
                                       update={(direction, newFloor) => {this.props.updateFromCommands(direction, newFloor)}}/>
                        <UpDownCommand id={3} upDownData={this.props.commandsData}
                                       updateSwitchButton={(servedFloors) => { this.props.updateSwitchFromCommands(servedFloors)}}
                                       update={(direction, newFloor) => {this.props.updateFromCommands(direction, newFloor)}}/>
                        <UpDownCommand id={4} upDownData={this.props.commandsData}
                                       updateSwitchButton={(servedFloors) => { this.props.updateSwitchFromCommands(servedFloors)}}
                                       update={(direction, newFloor) => {this.props.updateFromCommands(direction, newFloor)}}/>
                        <UpDownCommand id={5} upDownData={this.props.commandsData}
                                       updateSwitchButton={(servedFloors) => { this.props.updateSwitchFromCommands(servedFloors)}}
                                       update={(direction, newFloor) => {this.props.updateFromCommands(direction, newFloor)}}/>
                    </div>
                </div>
            </header>
            */
            <header>
                <div className="container-fluid">
                    <div className="row" style={myRow}>
                        <UpDownCommand id={0} upDownData={this.props.commandsData}
                                       updateSwitchButton={(servedFloors) => { this.props.updateSwitchFromCommands(servedFloors)}}
                                       update={(direction, newFloor) => {

                                           if (direction === "up") {
                                               if (this.inputCommandsUp.indexOf(newFloor) < 0) {
                                                   this.inputCommandsUp.push(Number(newFloor));
                                               }

                                           } else {

                                               if (this.inputCommandsDown.indexOf(newFloor) < 0) {
                                                       this.inputCommandsDown.push(Number(newFloor));
                                               }
                                           }

                                           this.setState({refresh: !this.state.refresh})

                                       }}/>
                        <UpDownCommand id={1} upDownData={this.props.commandsData}
                                       updateSwitchButton={(servedFloors) => { this.props.updateSwitchFromCommands(servedFloors)}}
                                       update={(direction, newFloor) => {

                                           if (direction === "up") {
                                               if (this.inputCommandsUp.indexOf(newFloor) < 0) {
                                                   this.inputCommandsUp.push(Number(newFloor));
                                               }

                                           } else {

                                               if (this.inputCommandsDown.indexOf(newFloor) < 0) {
                                                   this.inputCommandsDown.push(Number(newFloor));
                                               }
                                           }

                                           this.setState({refresh: !this.state.refresh})

                                       }}/>
                        <UpDownCommand id={2} upDownData={this.props.commandsData}
                                       updateSwitchButton={(servedFloors) => { this.props.updateSwitchFromCommands(servedFloors)}}
                                       update={(direction, newFloor) => {

                                           if (direction === "up") {
                                               if (this.inputCommandsUp.indexOf(newFloor) < 0) {
                                                   this.inputCommandsUp.push(Number(newFloor));
                                               }

                                           } else {

                                               if (this.inputCommandsDown.indexOf(newFloor) < 0) {
                                                   this.inputCommandsDown.push(Number(newFloor));
                                               }
                                           }

                                           this.setState({refresh: !this.state.refresh})

                                       }}/>
                        <UpDownCommand id={3} upDownData={this.props.commandsData}
                                       updateSwitchButton={(servedFloors) => { this.props.updateSwitchFromCommands(servedFloors)}}
                                       update={(direction, newFloor) => {

                                           if (direction === "up") {
                                               if (this.inputCommandsUp.indexOf(newFloor) < 0) {
                                                   this.inputCommandsUp.push(Number(newFloor));
                                               }

                                           } else {

                                               if (this.inputCommandsDown.indexOf(newFloor) < 0) {
                                                   this.inputCommandsDown.push(Number(newFloor));
                                               }
                                           }

                                           this.setState({refresh: !this.state.refresh})

                                       }}/>
                        <UpDownCommand id={4} upDownData={this.props.commandsData}
                                       updateSwitchButton={(servedFloors) => { this.props.updateSwitchFromCommands(servedFloors)}}
                                       update={(direction, newFloor) => {

                                           if (direction === "up") {
                                               if (this.inputCommandsUp.indexOf(newFloor) < 0) {
                                                   this.inputCommandsUp.push(Number(newFloor));
                                               }

                                           } else {

                                               if (this.inputCommandsDown.indexOf(newFloor) < 0) {
                                                   this.inputCommandsDown.push(Number(newFloor));
                                               }
                                           }

                                           this.setState({refresh: !this.state.refresh})

                                       }}/>
                        <UpDownCommand id={5} upDownData={this.props.commandsData}
                                       updateSwitchButton={(servedFloors) => { this.props.updateSwitchFromCommands(servedFloors)}}
                                       update={(direction, newFloor) => {

                                           if (direction === "up") {
                                               if (this.inputCommandsUp.indexOf(newFloor) < 0) {
                                                   this.inputCommandsUp.push(Number(newFloor));
                                               }

                                           } else {

                                               if (this.inputCommandsDown.indexOf(newFloor) < 0) {
                                                   this.inputCommandsDown.push(Number(newFloor));
                                               }
                                           }

                                           this.setState({refresh: !this.state.refresh})

                                       }}/>
                    </div>
                </div>
            </header>
        );
    }

    update() {

        console.log("timeeeeerrr")

        this.isTimer = true;
        clearTimeout(this.timer);
        this.timer = null;
        if (this.inputCommandsUp.length > 0 || this.inputCommandsDown.length > 0) {
            this.props.updateFromCommands(this.inputCommandsUp, this.inputCommandsDown)
            this.inputCommandsUp = [];
            this.inputCommandsDown = [];
        }

        return;
    }

    componentDidMount() {

        this.isTimer = false;
        this.timer = setTimeout(this.update(), 30000);

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.isTimer) {
            this.isTimer = false;
            this.timer = setTimeout(this.update(), 30000);

        }
        /*
        this.counter += 1

        console.log("counter from commands" + this.counter)

        // Since human inputs are faster than UI, send the inputs with some delay
        if(this.counter % 5 === 0) {

            this.props.updateFromCommands(this.inputCommandsUp, this.inputCommandsDown)
            this.inputCommandsUp = [];
            this.inputCommandsDown = [];
        }
        */
    }
}

export default ElevatorCommands;