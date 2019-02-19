import React, {Component} from 'react';
import ElevatorLocation from './ElevatorLocation';
import ElevatorAnimation from './ElevatorAnimation';
import ElevatorCommands from './ElevatorCommands';

class Extern extends Component {
    render() {
        return (
            <header>
                Here goes the external overview
                <ElevatorLocation/>
                <ElevatorAnimation/>
                <ElevatorCommands/>
            </header>
        );
    }
}

export default Extern;