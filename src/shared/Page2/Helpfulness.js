import React, { Component } from 'react';
import QuestionTemplate from './QuestionTemplate';

class Helpfulness extends Component {
    render() {
        return (
            <div className="container">
                <table className="table table-striped">
                    <thead className="col">
                        <tr>
                            <th className="col"><h5>Helpfulness/Availability</h5></th>
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
                                <p><span className="badge badge-primary">Question 1:</span>The instructor helped me identify resources I needed to carry out the project.</p>
                            </td>  
                            <div>
                            <QuestionTemplate/>
                            {/*<ReactRadioButtonGroup name="formGrp9" options={["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]} value="Q9"/>*/} 
                            </div>                             
                        </tr>
                        <tr className="col">
                            <td className="col">
                                <p><span className="badge badge-primary">Question 2:</span>The instructor was helpful to me individually when I had questions or was having difficulties (in conferences, email exchanges, etc.).</p>
                            </td>
                            <div>
                            <QuestionTemplate formGrp='formGrp16'/>
                            {/*<ReactRadioButtonGroup name="formGrp10" options={["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]} value="Q10"/>*/}
                            </div>
                        </tr>
                        <tr className="col">
                            <td className="col">
                                <p><span className="badge badge-primary">Question 3:</span>The instructor was readily available during the class.</p>
                            </td>
                            <div>
                            <QuestionTemplate formGrp='formGrp17'/>
                            {/*<ReactRadioButtonGroup name="formGrp11" options={["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]} value="Q11"/>*/}
                            </div>
                        </tr>
                    </tbody>
                </table>
                {'\n'}
            </div>
        );
    }
}

export default Helpfulness;