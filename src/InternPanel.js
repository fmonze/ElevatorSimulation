import React, {Component} from 'react';
import b0 from "./b0.svg";
import b1 from "./b1.svg";
import b2 from "./b2.svg";
import b3 from "./b3.svg";
import b4 from "./b4.svg";
import b5 from "./b5.svg";

import currentFloor from "./current_floor_button.svg";

const rowStyle = {
    margin: '5px',
    border: '5px solid red',
    position: 'relative',
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

    constructor(props) {
        super(props);
        this.isTimer = true;
    }

    handleClick = e => {

        // Switch on button
        this.refs['highlighted' + e.target.id].style.opacity = 0.5 // todo: c'è un modo più elegante con set() ?

        // Check timer status
        if( !this.props.internPanelData.canStartTimer ) {
            this.props.internPanelData.canStartTimer = true;
            this.props.startedTimer();
        }

        // Start timer
        if (this.isTimer && this.props.internPanelData.canStartTimer && this.props.internPanelData.isInternTimer) {
            alert("Define your query within the next " + this.time/1000 + " sec. After that time, you will see the result")
            this.isTimer = false;
            this.startCollecting();
        }

        // Update parent component
        this.props.update(e.target.id);

    }

    render() {
        return (
            <header>
                <div className="container-fluid" style={containerStyle}>
                    <div className="row" style={rowStyle}>
                        <img src={b4} className="Panel-Button" />
                        <img id={4} ref="highlighted4" src={currentFloor} className="Highlighted-Panel-Button"
                             onClick={(e) => {this.handleClick(e)}} />
                        <img src={b5} className="Panel-Button" />
                        <img id={5} ref="highlighted5" src={currentFloor} className="Highlighted-Panel-Button"
                             onClick={(e) => {this.handleClick(e)}} />
                    </div>
                    <div className="row" style={rowStyle}>
                        <img src={b2} className="Panel-Button" />
                        <img id={2} ref="highlighted2" src={currentFloor} className="Highlighted-Panel-Button"
                             onClick={(e) => {this.handleClick(e)}} />
                        <img src={b3} className="Panel-Button" />
                        <img id={3} ref="highlighted3" src={currentFloor} className="Highlighted-Panel-Button"
                             onClick={(e) => {this.handleClick(e)}} />

                    </div>
                    <div className="row" style={rowStyle}>
                        <img src={b0} className="Panel-Button" />
                        <img id={0} ref="highlighted0" src={currentFloor} className="Highlighted-Panel-Button"
                             onClick={(e) => {this.handleClick(e)}} />
                        <img src={b1} className="Panel-Button" />
                        <img id={1} ref="highlighted1" src={currentFloor} className="Highlighted-Panel-Button"
                             onClick={(e) => {this.handleClick(e)}} />

                    </div>
                </div>
            </header>
        );
    }

    update() {
        this.isTimer = true;
        this.props.internPanelData.canStartTimer = false;
        this.props.finishedTimer()
    }

    async startCollecting() {

        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this.update());
            }, this.time);
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        // Switch off served floors
        for (let i=0; i<6; i++) {
            if (this.props.intServed[i]) {
                this.refs['highlighted' + i].style.opacity = 0;
                this.props.intServed[i] = 0;
            }
        }

        this.props.updateSwitchButton(this.props.intServed);
    }
}

export default InternPanel;