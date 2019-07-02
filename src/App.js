import React, { Component } from 'react';//gets the component class from the react app
import './styles.css';
import './progressBar.css';
import StudentInfo from './shared/StudentInfo/StudentInfo';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import TextBody from './shared/MainPage/TextBody';
import Caption from './shared/MainPage/Caption';
import Page1 from './shared/Page1/Page1';
import Page2 from './shared/Page2/Page2';
import Page3 from './shared/Page3/Page3';
import samplePage from './shared/samplePage';
import ThankYou from './shared/ThankYou/ThankYou';

//rcc: will create the class format for the react-app

/*each class that extends to component which will create 
a seperate file for each page connected to the react app*/
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <section>
          <Caption />
          <Switch>
            <Redirect exact={true} from="/" to="/home" />
            <Route path="/home" component={TextBody} />
            <Route path="/info" component={StudentInfo} />
            <Route path="/page=1" component={Page1} />
            <Route path="/page=2" component={Page2} />
            <Route path='/page=3' component={Page3} />
            <Route path="/samplePage" component={samplePage}/>
            <Route path="/results" component={ThankYou}/>
          </Switch>
        </section>
      </BrowserRouter>

    );
  }
}

export default App;

