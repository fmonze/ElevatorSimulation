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
        if(e.target.attributes.options.value === "up") {
            // Switch on button
            this.refs.up.style.opacity = 0.5; // todo: c'è un modo più elegante con set() ?
            //console.log("click up " + this.props.id)

        } else {
            // Switch on button
            this.refs.down.style.opacity = 0.5; // todo: c'è un modo più elegante con set() ?
            //console.log("click down " + this.props.id)

        }

        this.props.update(e.target.attributes.options.value, this.props.id);
    }

    switchOff() {
        // Switch off both button
        console.log('switch off');
        this.refs.up.style.opacity = 0;
        this.refs.down.style.opacity = 0;
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

    componentDidUpdate() {
        if (this.props.isFloorServed(this.props.id)) {
            // todo uncomment to activate switch off of button once served
            // this.switchOff();
        }
    }
}

export default UpDownCommand;