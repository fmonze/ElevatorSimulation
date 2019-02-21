import React, {Component} from 'react';
import floor from "./floor_button.svg";

const rowStyle = {
    margin: '40px',
    border: '5px solid red'
};

class InternPanel extends Component {
    render() {
        return (
            <header>
                <div className="container-fluid">
                    <div className="row" style={rowStyle}>
                        <img src={floor} className="Intern-Button" />
                        <img src={floor} className="Intern-Button" />
                    </div>
                    <div className="row" style={rowStyle}>
                        <img src={floor} className="Intern-Button" />
                        <img src={floor} className="Intern-Button" />
                    </div>
                    <div className="row" style={rowStyle}>
                        <img src={floor} className="Intern-Button" />
                        <img src={floor} className="Intern-Button" />
                    </div>
                </div>
            </header>
        );
    }
}

export default InternPanel;