import React, {Component} from 'react';
import currentFloor from './current_floor_button.svg';
import b0 from "./b0.svg";
import b1 from "./b1.svg";
import b2 from "./b2.svg";
import b3 from "./b3.svg";
import b4 from "./b4.svg";
import b5 from "./b5.svg";

const divStyle = {

    width: '100%'
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
                <img src={b0} className="Floor-Button" />
                <img id={0} ref="highlighted0" src={currentFloor} className="Highlighted-Floor-Button" />
                <img src={b1} className="Floor-Button" />
                <img id={1} ref="highlighted1" src={currentFloor} className="Highlighted-Floor-Button" />
                <img src={b2} className="Floor-Button" />
                <img id={2} ref="highlighted2" src={currentFloor} className="Highlighted-Floor-Button" />
                <img src={b3} className="Floor-Button" />
                <img id={3} ref="highlighted3" src={currentFloor} className="Highlighted-Floor-Button" />
                <img src={b4} className="Floor-Button" />
                <img id={4} ref="highlighted4" src={currentFloor} className="Highlighted-Floor-Button" />
                <img src={b5} className="Floor-Button" />
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