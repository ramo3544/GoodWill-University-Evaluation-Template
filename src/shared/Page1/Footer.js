import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <div class="row justify-content-between">
                <div class="col-4">
                    <ul class="nav justify-content-center">
                        <li class="nav-item">
                                <Link to="/info" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Back</Link>
                        </li>
                    </ul>
                </div>
                <div class="col-4">
                    <ul class="nav justify-content-center">
                        <li class="nav-item">
                            <Link to="/page=2" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Next</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Footer;