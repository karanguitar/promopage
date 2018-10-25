import React, { Component } from 'react';
import './resources/styles.css'
import {Element} from 'react-scroll'
import Header from './components/header_footer/Header'
import Featured from './components/featured'
import VenueInfo from './components/venue_info'
import HighLights from './components/highlights'
import Pricing from './components/pricing'
import Location from './components/location'
import MyFooter from './components/header_footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Header />

        <Element name="featured">
        <Featured />
        </Element>

        <Element name="venue">
        <VenueInfo />
        </Element>

        <Element name="highlights">
        <HighLights />
        </Element>  

        <Element name="pricing">
        <Pricing/>
        </Element>

        <Element name="location">
        <Location/>
        </Element>

        <MyFooter/>
      </div>
    );
  }
}

export default App;
