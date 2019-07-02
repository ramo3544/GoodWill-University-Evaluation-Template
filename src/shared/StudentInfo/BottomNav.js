import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class BottomNav extends Component {
    render() {
        return (
            <div className="row justify-content-between">
                <div className="col-4">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <Link
                                to="/home"
                                className="btn btn-primary btn-lg active"
                                role="button"
                                aria-pressed="true"
                            >
                                Back {/*Back button text*/}
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-4">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <Link
                                to='/page=1'
                                className="btn btn-primary btn-lg active"
                                role="button"
                                aria-pressed="true"
                            >
                                Next {/*Next button text*/}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            /*bottom navigation ends here*/
            /*add footer here*/        
        );
    }
}

export default BottomNav;