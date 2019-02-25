import React, {Component} from 'react';
import ElevatorLocation from './ElevatorLocation';
import ElevatorAnimation from './ElevatorAnimation';
import ElevatorCommands from './ElevatorCommands';

class Extern extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="App-body">
                <ElevatorLocation locationData={this.props.externData}/>
                <ElevatorAnimation animationData={this.props.externData}/>
                <ElevatorCommands commandsData={this.props.externData}/>
            </header>
        );
    }
}

export default Extern;