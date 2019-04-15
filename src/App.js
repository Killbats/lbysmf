import React, { Component } from 'react';
import './CSS/App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import images from './PIC/Logo/logo.png';
import Home from './Component/Home';
import Payment from './Component/Payment';
import Video from './Component/Video';
import MainPayment from './Component/MainPayment';

class App extends Component {
  render() {
    return (
      <Router>
        <div >
            <header class="App-Header">
            <a href="/MainPayment">
            <img class="imghead" src={images}/>
            </a>
            </header>
        </div>

        <div>
            tes
            <Switch>
            <Route exact path="/" component={MainPayment} /> 
            <Route path="/Payment" component={Payment} />
            <Route path="/Video" component={Video}/>
            {/* <Route path="/MainPayment" component={MainPayment}/> */}
            </Switch>
        </div>

      </Router>
      // <div> <h1> Welcome </h1></div>
    );
  }
}

export default App;
