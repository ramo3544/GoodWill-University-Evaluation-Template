import React, { Component } from 'react';

class Input extends Component {
    render() {
        return (
            <section>
                <div className="row justify-content-md-center">
                    <form>
                        <div className="form-group">
                            <label htmlFor="InputName"></label>
                            <input
                            type="text"
                            className="form-control"
                            id="InputName"
                            aria-describedby="InputName"
                            placeholder="Name (optional)"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inPutEmail"></label>
                            <input
                                type="text"
                                className="form-control"
                                id="InputEmail"
                                aria-describedby="InputContactEmail"
                                placeholder="Email (optional)"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">
                                Course Name (required)
                            </label>
                            <select
                                className="form-control"
                                id="exampleFormControlSelect1"
                                placeholder="Course Name (required)"
                                value=""
                                required
                            >
                                <option>Web Development</option>
                                <option>Sales Force</option>
                                <option>Fundamentals of IT (F.I.T)</option>
                                <option>Quality Assurance Engineering</option>
                                <option>IT-Ready: COMPTIA A+/Help Desk Support</option>
                                <option>IT-Ready: QA/Software Testing</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Provider (required)</label>
                            <select
                                className="form-control"
                                id="exampleFormControlSelect1"
                                placeholder="Provider (required)"
                                value=""
                                required
                            >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label hmtlFor="exampleFormControlSelect1">
                                Course Section (required)
                            </label>
                            <select
                                className="form-control"
                                id="exampleFormControlSelect1"
                                placeholder="Course Section (required)"
                                value=""
                                required
                            >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}

export default Input;