import React, { Component } from 'react';
import NavItem from './NavItem';
import Heading from './Heading';
import Description from './Description';
import Input from './Input';
import BottomNav from './BottomNav';

class StudentInfo extends Component {
    render() {
        return (
            <div>
              <NavItem/>
              <div className="mx-auto">
                <div className="container" style={{paddingTop: '140px', marginLeft: '400px'}}>
                    <Heading/>
                </div>
                <Description/>
                <Input/>
                <BottomNav/>
              </div>
            </div>
        );
    }
}

export default StudentInfo;