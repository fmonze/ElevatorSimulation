import React, {Component} from 'react';
import floor from './floor_button.svg';
import currentFloor from './current_floor_button.svg';

class ElevatorLocation extends Component {
    render() {
        return (
            <header>
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