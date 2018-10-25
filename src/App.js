import React, { Component } from 'react';
import './resources/styles.css'
import Header from './components/header_footer/Header'
import Featured from './components/featured'
import VenueInfo from './components/venue_info'
import HighLights from './components/highlights'


class App extends Component {
  render() {
    return (
      <div className="App" >
        <Header />
        <Featured />
        <VenueInfo />
        <HighLights />
      </div>
    );
  }
}

export default App;
