import React, {Component} from 'react';
import InternPanel from './InternPanel';

class Intern extends Component {
    render() {
        return (
            <header className="App-body">
                Here goes the internal overview
                <InternPanel/>
            </header>
        );
    }
}

export default Intern;