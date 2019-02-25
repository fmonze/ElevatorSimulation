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
        // todo: remove since only for debug purposes
        this.toggle = false;
    }

    // todo: set current location quando cambia ad es on change
    setCurrentLocation(floor) {
        // Switch off previous floor
        //... .style.opacity = 0;

        // Switch on current floor
        this.refs['highlighted' + floor].style.opacity = 0.5;
        //todo update lo stato dell'app:
        // this.setState({elevatorPosition: floor});
    }

    handleClick = (e) => {
        this.toggle = !this.toggle; // in realtà si spegne solo quando è stata servita la chiamata, perché una volta acceso, resta acceso
        e.target.style.opacity = (this.toggle ? 1 : 0)/2; // todo: c'è un modo più elegnate con set() ?
    }

    render() {
        return (
            <header style={divStyle}>
                <img src={floor} className="Floor-Button" />
                <img id="0" ref="highlighted0" src={currentFloor} className="Highlighted-Floor-Button" onClick={this.handleClick.bind(this)}/>
                <img src={floor} className="Floor-Button" />
                <img id="1" ref="highlighted1" src={currentFloor} className="Highlighted-Floor-Button" onClick={this.handleClick.bind(this)}/>
                <img src={floor} className="Floor-Button" />
                <img id="2" ref="highlighted2" src={currentFloor} className="Highlighted-Floor-Button" onClick={this.handleClick.bind(this)}/>
                <img src={floor} className="Floor-Button" />
                <img id="3" ref="highlighted3" src={currentFloor} className="Highlighted-Floor-Button" onClick={this.handleClick.bind(this)}/>
                <img src={floor} className="Floor-Button" />
                <img id="4" ref="highlighted4" src={currentFloor} className="Highlighted-Floor-Button" onClick={this.handleClick.bind(this)}/>
                <img src={floor} className="Floor-Button" />
                <img id="5" ref="highlighted5" src={currentFloor} className="Highlighted-Floor-Button" onClick={this.handleClick.bind(this)}/>
            </header>
        );
    }

    componentDidMount() {
        this.setCurrentLocation(this.props.locationData.elevatorPosition)
    }
}

export default ElevatorLocation;