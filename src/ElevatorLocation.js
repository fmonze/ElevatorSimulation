import React, {Component} from 'react';
import floor from './floor_button.svg';
import currentFloor from './current_floor_button.svg';

const divStyle = {
    margin: '5px',
    border: '5px solid blue'
};

class ElevatorLocation extends Component {

    constructor(props) {
        super(props);
    }

    setCurrentLocation(floor) {
        // Switch all floor other than the current one
        for (let i=0;i<6;i++) {
            if (i === floor) { this.refs['highlighted' + floor].style.opacity = 0.5; }
            else { this.refs['highlighted' + i].style.opacity = 0; }
        }
    }

    render() {
        return (
            <header style={divStyle}>
                <img src={floor} className="Floor-Button" />
                <img id={0} ref="highlighted0" src={currentFloor} className="Highlighted-Floor-Button" />
                <img src={floor} className="Floor-Button" />
                <img id={1} ref="highlighted1" src={currentFloor} className="Highlighted-Floor-Button" />
                <img src={floor} className="Floor-Button" />
                <img id={2} ref="highlighted2" src={currentFloor} className="Highlighted-Floor-Button" />
                <img src={floor} className="Floor-Button" />
                <img id={3} ref="highlighted3" src={currentFloor} className="Highlighted-Floor-Button" />
                <img src={floor} className="Floor-Button" />
                <img id={4} ref="highlighted4" src={currentFloor} className="Highlighted-Floor-Button" />
                <img src={floor} className="Floor-Button" />
                <img id={5} ref="highlighted5" src={currentFloor} className="Highlighted-Floor-Button" />
            </header>
        );
    }

    componentDidMount() {
        this.setCurrentLocation(this.props.locationData.elevatorPosition);

    }

    componentDidUpdate() {
        this.setCurrentLocation(this.props.locationData.elevatorPosition);
    }
}

export default ElevatorLocation;