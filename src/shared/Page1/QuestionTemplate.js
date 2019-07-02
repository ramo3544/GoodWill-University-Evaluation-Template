import React, { Component } from 'react';

class QuestionTemplate extends Component {

    render() {

        return (
                <div className="col">
                    <td className="col">
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" className="custom-control-input" id="defaultGroupExample1" name={this.props.name}></input>
                            <label className="custom-control-label" for="defaultGroupExample1"></label>
                        </div>
                    </td>
                    <td className="col">
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" className="custom-control-input" id="defaultGroupExample2" name={this.props.name}></input>
                            <label className="custom-control-label" for="defaultGroupExample2"></label>                        
                        </div>
                    </td>
                    <td className="col">
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" className="custom-control-input" id="defaultGroupExample3" name={this.props.name}></input>
                            <label className="custom-control-label" for="defaultGroupExample3"></label>
                        </div>
                    </td>

                    <td className="col">
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" className="custom-control-input" id="defaultGroupExample4" name={this.props.name}></input>
                            <label className="custom-control-label" for="defaultGroupExample4"></label>                        
                        </div>
                    </td>

                    <td className="col">
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" className="custom-control-input" id="defaultGroupExample5" name={this.props.name}></input>
                            <label className="custom-control-label" for="defaultGroupExample5"></label>
                        </div>
                    </td>
                </div>        
        );

    }

}



export default QuestionTemplate;