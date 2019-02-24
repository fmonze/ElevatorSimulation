import React, {Component} from 'react';
import floor from "./floor_button.svg";
import currentFloor from './current_floor_button.svg';

const divStyle = {
    margin: '5px',
    border: '5px solid blue',
    maxWidth: "15%"
};

const myRow = {
    position: 'relative',
};

// todo: meglio togliere le classi dal css e mettere gli stili dei tre bottoni (down uo e highlighted) qui?

class UpDownCommand extends Component {

    constructor(props) {
        super(props);
        this.toggleUp = false;
        this.toggleDown = false;
    }

    handleClick(direction) {
        if(direction === "up") {
            this.toggleUp = !this.toggleUp; // in realtà si spegne solo quando è stata servita la chiamata, perché una volta acceso, resta acceso
            this.refs.highlightedUp.style.opacity = (this.toggleUp ? 1 : 0)/2; // todo: c'è un modo più elegnate con set() ?
        } else {
            this.toggleDown = !this.toggleDown; // in realtà si spegne solo quando è stata servita la chiamata, perché una volta acceso, resta acceso
            this.refs.highlightedDown.style.opacity = (this.toggleDown ? 1 : 0)/2; // todo: c'è un modo più elegnate con set() ?
        }

        // todo: qui dovrei updatare lo stato credo
    }

    render() {
        return (
            <header style={divStyle}>
                    <div style={myRow}>
                        <img src={floor} className="Up-Button"/>
                        <img ref="highlightedUp" src={currentFloor} className="Highlighted-Up-Button"
                             onClick={this.handleClick.bind(this, "up")} />
                    </div>
                    <div style={myRow}>
                        <img src={floor} className="Down-Button"/>
                        <img ref="highlightedDown" src={currentFloor} className="Highlighted-Down-Button"
                             onClick={this.handleClick.bind(this, "down")} />
                    </div>
            </header>
        );
    }
}

export default UpDownCommand;