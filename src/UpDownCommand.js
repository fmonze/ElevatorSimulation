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
        console.log();
        if(e.target.attributes.options.value === "up") {
            // Switch on button
            this.refs.up.style.opacity = 0.5; // todo: c'è un modo più elegante con set() ?
            // Add floor to calls to collect and to pending calls if it has not already been collected
            if (this.props.upDownData.callsToCollectUp.indexOf(this.props.id) < 0) {
                this.props.upDownData.callsToCollectUp.push(this.props.id);
                this.props.upDownData.pendingCallsUp.push(this.props.id);
                console.log(this.props.upDownData.pendingCallsUp);
            }
        } else {
            // Switch on button
            this.refs.down.style.opacity = 0.5; // todo: c'è un modo più elegante con set() ?
            // Add floor to calls to collect and to pending calls if it has not already been collected
            if (this.props.upDownData.callsToCollectDown.indexOf(this.props.id) < 0) {
                this.props.upDownData.callsToCollectDown.push(this.props.id);
                this.props.upDownData.pendingCallsDown.push(this.props.id);
                console.log(this.props.upDownData.pendingCallsDown);
            }
        }
    }


    render() {
        return (
            <header style={divStyle}>
                    <div style={myRow}>
                        <img src={floor} className="Up-Button"/>
                        <img ref="up" src={currentFloor} className="Highlighted-Up-Button" options="up"
                             onClick={this.handleClick.bind(this)} />
                    </div>
                    <div style={myRow}>
                        <img src={floor} className="Down-Button"/>
                        <img ref="down" src={currentFloor} className="Highlighted-Down-Button" options="down"
                             onClick={this.handleClick.bind(this)} />
                    </div>
            </header>
        );
    }

    componentDidMount() {
        //console.log('merda');
        //console.log(this.props.id);
    }
}

export default UpDownCommand;