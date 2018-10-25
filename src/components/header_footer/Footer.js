import React from 'react';
import {Fade} from 'react-reveal'

const MyFooter = () => {
    return (
        <footer className="bck_red">
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">
                    The Venue
                </div>
                <div className="footer_copyright">
                    2018
                </div>
            </Fade>
        </footer>

    );
}

export default MyFooter;
