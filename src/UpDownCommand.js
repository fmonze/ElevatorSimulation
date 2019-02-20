import React, {Component} from 'react';
import floor from "./floor_button.svg";

class UpDownCommand extends Component {
    render() {
        return (
            <header>
                <div className="container-fluid">
                    <div className="row">
                        <img src={floor} className="Up-Button" />
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