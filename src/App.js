import React, { Component } from 'react';
import './styles/costum.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
// import './styles/foundation.min.css'
import Routes from './routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MobileHeader from './components/MobileHeader/MobileHeader';
class App extends Component {
  constructor() {
    super();
    this.state = {
      appName: "Test",
      home: false
    }
  }
  render() {
    return (
      <div className="off-canvas-wrapper">
        <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
          <div className="off-canvas-content" data-off-canvas-content>
            {/* <MobileHeader name={this.state.appName} /> */}
            {/* <Header name={this.state.appName} /> */}
            <Routes name={this.state.appName} />
            <hr />
          </div>
        </div>
      </div>
    );
}
}

export default App;

