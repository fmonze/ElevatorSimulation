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
    }

    render() {
        // todo se definisco come class App-header prende quelle caratteristiche
        return (
            <header>
                <div className="container-fluid">
                    <div className="row" style={myRow}>
                        <UpDownCommand id='0' upDownData={this.props.commandsData}
                                       isFloorServed={(id) => {
                                           if (!this.props.commandsData.pendingCallsUp.includes(id)) { return 1 }}}
                                       update={(direction, newFloor) => {this.props.updateFromCommands(direction, newFloor)}}/>
                        <UpDownCommand id='1' upDownData={this.props.commandsData}
                                       isFloorServed={(id) => {
                                           if (!this.props.commandsData.pendingCallsUp.includes(id)) { return 1 }}}
                                       update={(direction, newFloor) => {this.props.updateFromCommands(direction, newFloor)}}/>
                        <UpDownCommand id='2' upDownData={this.props.commandsData}
                                       isFloorServed={(id) => {
                                           if (!this.props.commandsData.pendingCallsUp.includes(id)) { return 1 }}}
                                       update={(direction, newFloor) => {this.props.updateFromCommands(direction, newFloor)}}/>
                        <UpDownCommand id='3' upDownData={this.props.commandsData}
                                       isFloorServed={(id) => {
                                           if (!this.props.commandsData.pendingCallsUp.includes(id)) { return 1 }}}
                                       update={(direction, newFloor) => {this.props.updateFromCommands(direction, newFloor)}}/>
                        <UpDownCommand id='4' upDownData={this.props.commandsData}
                                       isFloorServed={(id) => {
                                           if (!this.props.commandsData.pendingCallsUp.includes(id)) { return 1 }}}
                                       update={(direction, newFloor) => {this.props.updateFromCommands(direction, newFloor)}}/>
                        <UpDownCommand id='5' upDownData={this.props.commandsData}
                                       isFloorServed={(id) => {
                                           return !this.props.commandsData.pendingCallsUp.includes(id) }}
                                       update={(direction, newFloor) => {this.props.updateFromCommands(direction, newFloor)}}/>
                    </div>
                </div>
            </header>
        );
    }
}

export default ElevatorCommands;