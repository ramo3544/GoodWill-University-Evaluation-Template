import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Heading extends Component {
    render() {
        return (
            <div className="row justify-content-md-center">
            <div className="col-lg-auto">
                <h1>GWU Course Evaluation</h1>
                <header className="border-bottom mb-2 pb-9">
                    <ProgressBar/>
                </header>
            </div>
        </div>
        );
    }
}

export default Heading;