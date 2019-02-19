import React, {Component} from 'react';
import lift from './elevator_img.jpg';

class ElevatorAnimation extends Component {
    render() {
        return (
            <header>
                <img src={lift} className="App-logo" alt="logo" />
            </header>
        );
    }
}

export default ElevatorAnimation;