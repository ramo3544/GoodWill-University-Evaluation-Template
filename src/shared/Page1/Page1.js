import React, { Component } from 'react';
import NavItem from './NavItem';
import Heading from './Heading';
import CourseContent from './CourseContent';
import Footer from './Footer';

class Page1 extends Component {
    render() {
        return (
            <div>
                <header className="border-bottom mb-2 pb-9">
                    <NavItem/>
                </header>
                <body className="mx-auto">
                    <div className="container" style={{marginTop:'70px'}}>                
                        <Heading/>
                        <CourseContent/>
                    </div>
                    <Footer/>
                </body>
            </div>
        );
    }
}

export default Page1;