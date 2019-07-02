import React, { Component } from 'react';

class ProgressBar extends Component {
    render() {
        return (
            <div>
                <ol class="progress progress--small">
                    <li class="is-active" data-step="1">
                        Student Information
                    </li>
                    <li class="is-active" data-step="2">
                        Course Evaluation
                    </li>
                    <li data-step="3">
                        Instructor/Team Evaluation
                    </li>
                    <li data-step="4">
                        Student Evaluation
                    </li>
                </ol>
            </div>
        );
    }
}

export default ProgressBar;