import React, {Component} from 'react';
import InternPanel from './InternPanel';

class Intern extends Component {
    render() {
        return (
            <header>
                Here goes the internal overview
                <InternPanel/>
            </header>
        );
    }
}

export default Intern;