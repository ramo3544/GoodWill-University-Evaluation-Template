import React, { Component } from 'react';

class Description extends Component {
    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-sm-8" style={{marginTop: '30px'}}>
                    <h4>Student Information</h4>
                    <p className="test-justify">
                    Please answer all questions before submission. answers will be saved when returning to the previous page.
                        Any question that you do not wish to answer or unsure of please mark the neutral button.
                        This information will be used strictly for feedback purposes and to benefit the further teachings
                        at Goodwill University.
                    </p>
                </div>  
            </div>
        );
    }
}

export default Description;