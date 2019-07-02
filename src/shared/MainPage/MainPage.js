import React, { Component } from 'react';
import TextBody from './TextBody';
import Caption from './Caption';
import Questions from '../../../missioncode_testreact/src/Questions';


class MainPage extends Component {
    render() {
        return (
            <div>
                <Caption/>
                <TextBody/>
                <Questions/>
            </div>
        );
    }
}

export default MainPage;