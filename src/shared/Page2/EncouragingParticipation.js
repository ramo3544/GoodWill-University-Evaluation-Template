import React, { Component } from 'react';
import QuestionTemplate from './QuestionTemplate';

class EncouragingParticipation extends Component {
    render() {
        return (
            <div className="container">
                <table className="table table-striped">
                    <thead className="col">
                        <tr>
                            <th className="col"><h5>Encouraging of Participation/Disccussion</h5></th>
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
                                <p><span className="badge badge-primary">Question 1:</span>The instructor encouraged and provided opportunities for class participation and questions.</p>
                            </td>  
                            <div>
                            <QuestionTemplate formGrp='formGrp20'/>
                            {/*<ReactRadioButtonGroup name="formGrp5" options={["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]} value="Q5"/>*/}
                            </div>                             
                        </tr>
                    </tbody>
                </table>
                {'\n'}
            </div>
        );
    }
}

export default EncouragingParticipation;