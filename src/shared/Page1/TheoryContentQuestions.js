import React, { Component } from 'react';
import Questions from './QuestionTemplate1';
import QuestionTemplate from './QuestionTemplate';

class TheoryContentQuestions extends Component {
    render() {
        return (
            <div className="container">
            <table className="table table-striped">
                <thead className="col">
                    <tr>
                        <th className="col"><h5>Theory/Content Knowledge</h5></th>
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
                            <p><span className="badge badge-primary">Question 1:</span>The course provided the opportunity to practice skills required in the course.</p>
                        </td>  
                        <div>
                        <QuestionTemplate formGrp='formGrp8'/>
                        {/*<ReactRadioButtonGroup name="formGrp9" options={["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]} value="Q9"/>*/} 
                        </div>                             
                    </tr>
                    <tr className="col">
                        <td className="col">
                            <p><span className="badge badge-primary">Question 2:</span>The course improved my problem solving skills.</p>
                        </td>
                        <div>
                        <QuestionTemplate formGrp='formGrp9'/>
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

export default TheoryContentQuestions;