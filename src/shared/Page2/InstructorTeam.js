import React, { Component } from 'react';
import PresentationContent from './PresentationContent';
import ClarityExpectations from './ClarityExpectations';
import Helpfulness from './Helpfulness';
import ClearFeedback from './ClearFeedbackQ';
import EncouragingParticipation from './EncouragingParticipation';

class InstructorTeam extends Component {
    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-lg-9" style={{marginTop:'30px'}}>
                    <h2>Insturctor/Team Feedback Evaluation</h2>
                    <PresentationContent/>
                    <ClarityExpectations/>
                    <Helpfulness/>
                    <ClearFeedback/>
                    <EncouragingParticipation/>
                </div>
            </div>  
        );
    }
}

export default InstructorTeam;