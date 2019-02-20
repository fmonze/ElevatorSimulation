import React, {Component} from 'react';
import UpDownCommand from './UpDownCommand'; // name of imported component must match the component class name !

class ElevatorCommands extends Component {
    render() {
        return (
            <header>
                <div className="container-fluid">
                    <div className="row">
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