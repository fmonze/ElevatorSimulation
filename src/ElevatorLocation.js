import React, {Component} from 'react';
import floor from './floor_button.svg';
import currentFloor from './current_floor_button.svg';

const divStyle = {
    margin: '5px',
    border: '5px solid blue'
};

class ElevatorLocation extends Component {
    render() {
        return (
            <header style={divStyle}>
                <img src={floor} className="Floor-Button" />
                <img src={floor} className="Floor-Button" />
                <img src={currentFloor} className="Floor-Button" />
                <img src={floor} className="Floor-Button" />
                <img src={floor} className="Floor-Button" />
                <img src={floor} className="Floor-Button" />
            </header>
        );
    }
}

export default ElevatorLocation;