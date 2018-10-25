import React from 'react';
import Carrousel from './Carrousel'
import TimeUntil from './TimeUntil'
import {Fade} from 'react-reveal'

const Featured = () => {
    return (
        <div style={{position: 'relative'}}>

            <Carrousel />

           
            <div className="artist_name">
            <Fade delay={500}>
                <div className="wrapper">
                    Post Malone
                </div>
            </Fade>
            </div>
            

            <TimeUntil />
        </div>
    );
}

export default Featured;
