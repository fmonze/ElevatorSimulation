import React, {Component} from 'react';
import InternPanel from './InternPanel';

class Intern extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header className="App-body">
                <div className="myParagraph"> Start the simulation by calling the elevator from the extern, at any floor. Specify any combination of calls and enjoy the resulting motion...</div>
                <InternPanel internPanelData={this.props.internData} update={(id) => { this.props.updatePendingCalls(id) }}
                             updateSwitchButton={(servedFloors) => { this.props.updateSwitchFromIntern(servedFloors) }}
                             intServed={this.props.internServed} />
            </header>
        );
    }
}

export default Intern;