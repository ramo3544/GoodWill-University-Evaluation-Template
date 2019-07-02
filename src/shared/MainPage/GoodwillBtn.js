import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class GoodwillBtn extends Component {
    render() {
        return (
            <div>
                 <Link className="navbar-brand" to="/samplePage">GWU</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
            </div>
        );
    }
}
export default GoodwillBtn;