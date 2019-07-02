import React, { Component } from 'react';
import QuestionTemplate from './QuestionTemplate';

class PresentationContent extends Component {
    render() {
        return (
            <div className="container">
            <table className="table table-striped">
                <thead className="col">
                    <tr>
                        <th className="col"><h5>Presentation of Content</h5></th>
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
                            <p><span className="badge badge-primary">Question 1:</span>The instructor effectively presented the tools (e.g. materials, skills, and techniques) needed.</p>
                        </td>  
                        <div>
                        <QuestionTemplate formGrp='formGrp12'/>
                        {/*<ReactRadioButtonGroup name="formGrp1" options={["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]} value="Q1"/>*/} 
                        </div>                             
                    </tr>
                    <tr className="col">
                        <td className="col">
                            <p><span className="badge badge-primary">Question 2:</span>The instructor effectively presented concepts and techniques in an organized and clear manner.</p>
                        </td>
                        <div>
                        <QuestionTemplate formGrp='formGrp13'/>
                        {/*<ReactRadioButtonGroup name="formGrp2" options={["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]} value="Q2"/>*/}
                        </div>
                    </tr>
                </tbody>
            </table>
            {'\n'}
        </div>
        );
    }
}

export default PresentationContent;