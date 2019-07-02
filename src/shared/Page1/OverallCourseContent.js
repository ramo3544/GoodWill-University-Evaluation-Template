import React, { Component } from 'react';
import QuestionTemplate from './QuestionTemplate';
import Question from './QuestionTemplate1';

class OverallCourseContent extends Component {
    render() {
        return (
            <div className="container">
                <table className="table table-striped">
                    <thead className="col">
                        <tr>
                            <th className="col"><h5>Overall Course Content</h5></th>
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
                                <p><span className="badge badge-primary">Question 1:</span>How satisfied were you with the course?</p>
                            </td>  
                            <div>
                            <QuestionTemplate formGrp='formGrp10'/>
                            {/*<ReactRadioButtonGroup name="formGrp9" options={["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]} value="Q9"/>*/} 
                            </div>                             
                        </tr>
                        <tr className="col">
                            <td className="col">
                                <p><span className="badge badge-primary">Question 2:</span>How would you rate the overall effectiveness of this course?</p>
                            </td>
                            <div>
                            <QuestionTemplate formGrp='formGrp11'/>
                            {/*<ReactRadioButtonGroup name="formGrp10" options={["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]} value="Q10"/>*/}
                            </div>
                        </tr>
                    </tbody>
                </table>
                {'\n'}
            </div>
        );
    }
}

export default OverallCourseContent;