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
        this.toggle = false;
    }
    handleClick = (e) => {
        this.toggle = !this.toggle; // in realtà si spegne solo quando è stata servita la chiamata, perché una volta acceso, resta acceso
        e.target.style.opacity = (this.toggle ? 1 : 0)/2; // todo: c'è un modo più elegnate con set() ?
    }

    render() {
        return (
            <header style={divStyle}>
                <img id="10" src={floor} className="Floor-Button" />
                <img id="11" ref="highlighted1" src={currentFloor} className="Highlighted-Floor-Button" onClick={this.handleClick.bind(this)}/>
                <img id="20" src={floor} className="Floor-Button" />
                <img id="22" ref="highlighted2" src={currentFloor} className="Highlighted-Floor-Button" onClick={this.handleClick.bind(this)}/>
                <img id="30" src={floor} className="Floor-Button" />
                <img id="31" ref="highlighted3" src={currentFloor} className="Highlighted-Floor-Button" onClick={this.handleClick.bind(this)}/>
                <img id="40" src={floor} className="Floor-Button" />
                <img id="41" ref="highlighted4" src={currentFloor} className="Highlighted-Floor-Button" onClick={this.handleClick.bind(this)}/>
                <img id="50" src={floor} className="Floor-Button" />
                <img id="51" ref="highlighted5" src={currentFloor} className="Highlighted-Floor-Button" onClick={this.handleClick.bind(this)}/>
                <img id="60" src={floor} className="Floor-Button" />
                <img id="61" ref="highlighted6" src={currentFloor} className="Highlighted-Floor-Button" onClick={this.handleClick.bind(this)}/>
            </header>
        );
    }
}

export default ElevatorLocation;