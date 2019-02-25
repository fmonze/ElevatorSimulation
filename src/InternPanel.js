import React, {Component} from 'react';
import floor from "./floor_button.svg";

const rowStyle = {
    margin: '5px',
    border: '5px solid red',
    position: 'relative',
    maxWidth: "100%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

const containerStyle = {
    margin: '5px',
    border: '5px solid red',
    position: 'relative',
    minWidth: "300px", // todo: manually come si fa a farlo automatico? 100% che dovrebbe essere la width del parent non funziona
    backgroundColor: '#525252',
};

class InternPanel extends Component {
    render() {
        return (
            <header>
                <div className="container-fluid" style={containerStyle}>
                    <div className="row" style={rowStyle}>
                        <img src={floor} className="Panel-Button" />
                        <img src={floor} className="Panel-Button" />
                    </div>
                    <div className="row" style={rowStyle}>
                        <img src={floor} className="Panel-Button" />
                        <img src={floor} className="Panel-Button" />
                    </div>
                    <div className="row" style={rowStyle}>
                        <img src={floor} className="Panel-Button" />
                        <img src={floor} className="Panel-Button" />
                    </div>
                </div>
            </header>
        );
    }
}

export default InternPanel;