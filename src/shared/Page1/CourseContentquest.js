import React, { Component } from 'react';
import QuestionTemplate from './QuestionTemplate';
import Question from './QuestionTemplate1';

class CourseContent_Q extends Component {
    render() {
        return (
            <div className="container">
            <table className="table table-striped">
                <thead className="col">
                    <tr>
                        <th className="col"><h5>Course Content</h5></th>
                        <div>
                        <th className="col">Strongly Disagree</th>
                        <th className="col">Disagree</th>
                        <th className="col">Neutral</th>
                        <th className="col">Agree</th>
                        <th className="col">Strongly Agree</th>
                        </div>
                    </tr>
                </thead>
                <tbody>
                    <tr className="col">
                        <td className="col">
                            <p><span className="badge badge-primary">Question 1:</span>The course was organized and sequenced in a way that helped me learn effectively.</p>
                        </td>  
                        <div>
                            <Question/>
                            
                            {/*<ReactRadioButtonGroup name="formGrp1" options={["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]} value="Q1"/>*/} 
                        </div>                             
                    </tr>
                    <tr className="col">
                        <td className="col">
                            <p><span className="badge badge-primary">Question 2:</span>The course provided a mixture and apppropriate balance of explanation and practice.</p>
                        </td>
                        <div>
                            <Question/>
                            {/*<ReactRadioButtonGroup name="formGrp2" options={["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]} value="Q2"/>*/}
                        </div>
                    </tr>
                    <tr className="col">
                        <td className="col">
                            <p><span className="badge badge-primary">Question 3:</span>The course work helped me understand concepts more clearly.</p>
                        </td>
                        <div>
                            <Question/>
                            {/*<ReactRadioButtonGroup name="formGrp3" options={["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]} value="Q3"/>*/}
                        </div>
                    </tr>
                </tbody>
            </table>
            {'\n'}
        </div>
        );
    }
}

export default CourseContent_Q;