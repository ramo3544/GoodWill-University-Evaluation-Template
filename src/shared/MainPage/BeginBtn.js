import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";

class BeginBtn extends Component {
    render() {
        return (
                <div style={{paddingLeft: 350, paddingTop: 50}}>
                    <ul className="nav justify-content-center">
                        <li className='nav-item'>
                            <Link to='/info' className="btn btn-primary btn-lg active" role="button" aria-pressed="true">
                               Begin
                            </Link>
                        </li>
                    </ul>
                </div>
        );
    }
}
export default BeginBtn;