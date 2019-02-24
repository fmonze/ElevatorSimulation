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
    render() {
        // todo se definisco come class App-header prende quelle caratteristiche
        return (
            <header>
                <div className="container-fluid">
                    <div className="row" style={myRow}>
                        <UpDownCommand/>
                        <UpDownCommand/>
                        <UpDownCommand/>
                        <UpDownCommand/>
                        <UpDownCommand/>
                        <UpDownCommand/>
                    </div>
                </div>
            </header>
        );
    }
}

export default ElevatorCommands;