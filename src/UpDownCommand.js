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
            console.log("click up ")
            console.log(this.props.id)

        } else {
            // Switch on button
            this.refs.down.style.opacity = 0.5; // todo: c'è un modo più elegante con set() ?
            //console.log("click down " + this.props.id)

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

    componentDidMount() {
        // Switch floors on call
        if (this.props.upDownData.callsToCollectUp.includes(this.props.id)) { this.refs.up.style.opacity = 0.5; }
        if (this.props.upDownData.callsToCollectDown.includes(this.props.id)) { this.refs.down.style.opacity = 0.5; }
    }

    componentDidUpdate() {

        // todo prob non qui ma in extern per essere sincronizzato con
        // todo still too fast!!

        // Switch off served floors
        // /*
        if (this.props.upDownData.servedFloors[this.props.id]) {

            this.refs.up.style.opacity = 0;
            this.refs.down.style.opacity = 0;

            this.props.upDownData.servedFloors[this.props.id] = 0;
            this.props.updateSwitchButton(this.props.upDownData.servedFloors);

        } // */
    }
}

export default UpDownCommand;