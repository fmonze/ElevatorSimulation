import React, {Component} from 'react';
import floor from "./floor_button.svg";
import currentFloor from './current_floor_button.svg';

const divStyle = {
    margin: '5px',
    border: '5px solid blue',
    maxWidth: '14%'
};

const highlightedStyle = {
    padding: '10px',
    maxWidth: '50%',
    maxHeight: '50%',
    opacity: '0',
    position: 'relative',
    top: '0',
    left: '-61.5px',
};

const up = {
    padding: '10px',
    maxWidth: '50%',
    maxHeight: '50%',
    position: 'relative',
    top: '0',
    left: '0',
};

class UpDownCommand extends Component {

    constructor() {
        super();
        this.toggle = false;
    }

    handleClick() {
        this.refs.highlighted.style.opacity = (this.toggle ? 1 : 0)/2; // todo: c'è un modo più elegnate con set() ?
        this.toggle = !this.toggle; // in realtà si spegne solo quando è stata servita la chiamata, perché una volta acceso, resta acceso

        // todo: qui dovrei updatare lo stato credo
    }

    render() {
        return (
            <header style={divStyle}>
                <div className="container-fluid">
                    <div className="row">
                        <img src={floor} className="Up-Button" style={up}/>
                        <img ref="highlighted" src={currentFloor} className="Highlighted-Button"
                             onClick={this.handleClick.bind(this)} style={highlightedStyle}/>

                    </div>
                    <div className="row">
                        <img src={floor} className="Down-Button" />
                    </div>
                </div>
            </header>
        );
    }
}

export default UpDownCommand;