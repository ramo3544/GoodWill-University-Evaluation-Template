import React, { Component } from 'react';

class NavItem extends Component {
    render() {
        return (
            <div className="collapse navbar-collapse tb-20" id="navbarSupportedContent">
                <form className="form-inline my-2 my-lg-0" style= {{marginLeft: '1500px'}}>
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        );
    }
}
export default NavItem;