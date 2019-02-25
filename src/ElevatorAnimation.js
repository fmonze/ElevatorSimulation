import React, {Component} from 'react';
import openLift from './open_ elevator_img.jpg';
import closedLift from './closed_ elevator_img.jpg';

const divStyle = {
    margin: '5px',
    border: '5px solid blue'
};

class ElevatorAnimation extends Component {
    render() {
        return (
            <header style={divStyle}>
                <img id="0" src={closedLift} className="Elevator-img" />
                <img id="1" src={closedLift} className="Elevator-img" />
                <img id="2" src={closedLift} className="Elevator-img" />
                <img id="3" src={openLift} className="Elevator-img" />
                <img id="4" src={closedLift} className="Elevator-img" />
                <img id="5" src={closedLift} className="Elevator-img" />

            </header>
        );
    }
}

export default ElevatorAnimation;