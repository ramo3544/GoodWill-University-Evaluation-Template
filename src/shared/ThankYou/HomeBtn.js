import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomeBtn extends Component {
    render() {
        return (
            <div style={{marginTop: '25px'}}>
                <ul className="nav justify-content-center">
                    <li className='nav-item'>
                        <Link to='/home' className="btn btn-primary btn-lg active" role="button" aria-pressed="true">
                            Home
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default HomeBtn;