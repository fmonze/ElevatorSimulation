import React, {Component} from 'react';
import InternPanel from './InternPanel';

class Intern extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header className="App-body">
                <InternPanel internPanelData={this.props.internData} update={(id) => { this.props.updatePendingCalls(id) }}
                             updateSwitchButton={(servedFloors) => { this.props.updateSwitchFromIntern(servedFloors) }}
                             intServed={this.props.internServed} canStartTimer={this.props.canStartTimer}
                             startedTimer={() => this.props.startedTimer()}
                             finishedTimer={() => { this.props.finishedTimer() }}/>
            </header>
        );
    }
}

export default Intern;