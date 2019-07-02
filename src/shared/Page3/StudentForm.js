import React, { Component } from 'react';
import QuestionTemplate from './QuestionTemplate';

class InstructorTeam extends Component {
    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-lg-9" style={{marginTop:'30px'}}>
                    <h2>Student Evaluation</h2>
                    <p><span className="badge badge-primary">Question 1:</span>How many classes did you attend(24 total sessions)</p>
                    <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                        placeholder="Course Name (required)"
                        value=""
                        required
                    >
                        <option> {'<'}10 </option>
                        <option>10-20</option>
                        <option>20+</option>
                    </select>

                    <p style={{marginTop: '25px'}}><span className="badge badge-primary">Question 2:</span>On average, how many hours per week have you spent on this course including attending classes</p>
                    <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                        placeholder="Course Name (required)"
                        value=""
                        required
                    >
                        <option>4-6</option>
                        <option>7-10</option>
                        <option>11-15</option>
                        <option>15+</option>
                    </select>
                    <tr className="col">
                            <td className="col">
                                <p><span className="badge badge-primary">Question 3:</span>How satisified were you with your effort in this course?</p>
                            </td>
                            <div>
                            <QuestionTemplate formGrp='formGrp21'/>
                            {/*<ReactRadioButtonGroup name="formGrp6" options={["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]} value="Q6"/>*/}
                            </div>
                        </tr>
                        <tr className="col">
                            <td className="col">
                                <p><span className="badge badge-primary">Question 4:</span>How likely are you to recommend this course to others?(subjects, instructors, management, etc.)</p>
                            </td>
                            <div>
                            <QuestionTemplate formGrp='formGrp22'/>
                            {/*<ReactRadioButtonGroup name="formGrp6" options={["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]} value="Q6"/>*/}
                            </div>
                        </tr>
                </div>
            </div>  
        );
    }
}

export default InstructorTeam;