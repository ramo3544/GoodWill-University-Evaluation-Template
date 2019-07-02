import React from 'react';
import axios from 'axios';

export default class Questions extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.createRBs = this.createRBs.bind(this);
  }
  state = {
    questions: []
  }

  createRBs = (question, keyid) => {
    let rbs = [];
    rbs.push(<legend key={keyid}>{question.question}</legend>);
    for (let i = 0 ; i < question.radiobuttons ; i++) {
      let indexid = keyid + '_' + i;
      let p = {};
      p.type = "radio";
      p.name = question.questionId;
      p.id = indexid;
      rbs.push(<input key={indexid} {...p}></input>);
      rbs.push(<label htmlFor={indexid} key={indexid + '_' + i}>{i}</label>);
    }
    return rbs;
  };

  componentDidMount() {
    axios.get(`http://localhost:3001/questions`)
      .then(res => {
        const questions = res.data;
        this.setState({ questions });
      })
  }

  render() {
    return (
      <form key="surveyquestions">
        {this.state.questions.map((section, index) => {
            return (
            <fieldset key={section.sectionid}>{section.title}
            {section.questions.map( (q, index) => {
              return(
                <div key={section.sectionid + '_' + index}>
                  {this.createRBs(q, section.sectionid)}
                </div>
              )
            })}
            </fieldset>
            );
        })}
      </form>
    );
  }
}