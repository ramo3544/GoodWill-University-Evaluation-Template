import React, { Component } from 'react';
import Heading from './Heading';
import Note from './Note';
import HomeBtn from './HomeBtn';
class ThankYou extends Component {
    render() {
        return (
            <div style={{marginTop: '70px'}}>
               <Heading/> 
               <Note/>
               <HomeBtn/>
            </div>
        );
    }
}

export default ThankYou;