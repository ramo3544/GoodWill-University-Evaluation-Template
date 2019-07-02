import React, { Component } from 'react';
import GWULogo from './GWULogo';
import Description from './Description';
import BeginBtn from './BeginBtn';

class TextBody extends Component {
    render() {
        return (
            <div className="mx-auto">
                <center>
                    <div className="container" object="margin-top:70px;">
                        <GWULogo/>
                        <Description/>
                        <BeginBtn/>
                    </div>
                </center>
            </div>
        );
    }
}
export default TextBody;