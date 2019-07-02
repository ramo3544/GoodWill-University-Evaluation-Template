import React, { Component } from 'react';
import QuestionTemplate from './QuestionTemplate';
import Question from './QuestionTemplate1';

class ContentApplicationDevelopmentQ extends Component {
    render() {
        return (
            <div className="container">
                <table className="table table-striped">
                    <thead className="col">
                        <tr>
                            <th className="col"><h5>Content Application Development</h5></th>
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
                                <p><span className="badge badge-primary">Question 1:</span>The course developed my ability to think critically.</p>
                            </td>  
                            <div>
                            <QuestionTemplate formGrp='formGrp4'/>
                            {/*<ReactRadioButtonGroup name="formGrp5" options={["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]} value="Q5"/>*/}
                            </div>                             
                        </tr>
                        <tr className="col">
                            <td className="col">
                                <p><span className="badge badge-primary">Question 2:</span>The course helped me in basic technical abilities and skills for the subject matter.</p>
                            </td>
                            <div>
                            <QuestionTemplate formGrp='formGrp5'/>
                            {/*<ReactRadioButtonGroup name="formGrp6" options={["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]} value="Q6"/>*/}
                            </div>
                        </tr>
                        <tr className="col">
                            <td className="col">
                                <p><span className="badge badge-primary">Question 3:</span>The course developed my ability to collaborate with team members and business owners.</p>
                            </td>
                            <div>
                            <QuestionTemplate formGrp='formGrp6'/>
                            {/*<ReactRadioButtonGroup name="formGrp7" options={["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]} value="Q7"/>*/}
                            </div>
                        </tr>
                        <tr className="col">
                            <td className="col">
                                <p><span className="badge badge-primary">Question 4:</span>The course developed my communciation/presentation skills.</p>
                            </td>
                            <div>
                            <QuestionTemplate formGrp='formGrp7'/>
                            {/*<ReactRadioButtonGroup name="formGrp8" options={["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]} value="Q8"/>*/}
                            </div>
                        </tr>
                    </tbody>
                </table>
                {'\n'}
            </div>
        );
    }
}

export default ContentApplicationDevelopmentQ;