import React, { Component } from 'react';
import './CSS/App.css';
import { Switch, Route, BrowserRouter as Router ,Link} from 'react-router-dom';
import images from './PIC/Logo/logo.png';
import Home from './Component/Home';
import Payment from './Component/Payment';
import Video from './Component/Video';
import MainPayment from './Component/MainPayment';
import LbsLandingPage from './Component/LbsLandingPage';

// import LoadingIndicator from './components/LoadingIndicator';




class App extends Component {
  state = {
    isLoading: true,
  };

  componentWillMount() {
    this._timer = setTimeout(
      () => this.setState({isLoading: false}),
      2000
    );
  }

  componentWillUnmount() {
    clearTimeout(this._timer);
  }

  render() {
    return (
      <Router>
        <div >
            <header className="App-Header">
            <Link to="/MainPayment">
            <img className="imghead" src={images}/>
            </Link>
            </header>
        </div>

        <div>
            
            <Switch>
            <Route exact path="/" component={Home} /> 
            <Route path ="/LbsLandingPage" component={LbsLandingPage}/>
            <Route path="/Payment" component={Payment} />
            <Route path="/Video/:id" component={Video}/>
            <Route path="/MainPayment" component={MainPayment}/>
            </Switch>
          
         
            
        </div>
        {/* <pre>isLoading: {String(this.state.isLoading)}</pre>
        <LoadingIndicator isLoading={this.state.isLoading}/> */}
      </Router>
    
    );
  }
}

export default App;