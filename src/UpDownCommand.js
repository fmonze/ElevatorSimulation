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

// todo: meglio togliere le classi dal css e mettere gli stili dei tre bottoni (down up e highlighted) qui?

class UpDownCommand extends Component {

    constructor(props) {
        super(props);
    }

    handleClick = e => {
        console.log("id " + this.props.id);
        if(e.target.attributes.options.value === "up") {
            // Switch on button
            this.refs.up.style.opacity = 0.5; // todo: c'è un modo più elegante con set() ?

        } else {
            // Switch on button
            this.refs.down.style.opacity = 0.5; // todo: c'è un modo più elegante con set() ?
        }

        this.props.update(e.target.attributes.options.value, this.props.id);
    }


    render() {
        return (
            <header style={divStyle}>
                    <div style={myRow}>
                        <img src={floor} className="Up-Button"/>
                        <img ref="up" src={currentFloor} className="Highlighted-Up-Button" options="up"
                             onClick={(e) => {this.handleClick(e)}} />
                    </div>
                    <div style={myRow}>
                        <img src={floor} className="Down-Button"/>
                        <img ref="down" src={currentFloor} className="Highlighted-Down-Button" options="down"
                             onClick={(e) => {this.handleClick(e)}} />
                    </div>
            </header>
        );
    }
}

export default UpDownCommand;