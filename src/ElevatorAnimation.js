import React, {Component} from 'react';
import lift from './elevator_img.jpg';

const divStyle = {
    margin: '5px',
    border: '5px solid blue'
};

class ElevatorAnimation extends Component {
    render() {
        return (
            <header style={divStyle}>
                <img src={lift} className="App-logo" alt="logo" />
            </header>
        );
    }
}

export default ElevatorAnimation;