import React, { Component } from 'react';
import NavItem from './NavItem';
import GoodwillBtn from './GoodwillBtn';

class Caption extends Component {
    render() {
        return (
            <div className="border-bottom mb-2 pb-9 ">
            <div className="fixed-top">
              <div className="shadow p-1 mb-5 bg-secondary rounded">
                <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                  <GoodwillBtn/>
                  <NavItem/>
                </nav>
              </div>
            </div>
          </div>
        );
    }
}
export default Caption;