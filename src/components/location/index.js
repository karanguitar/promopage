import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108977.09893327446!2d-64.26438444656063!3d-31.39940096224102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432985f478f5b69%3A0xb0a24f9a5366b092!2sC%C3%B3rdoba%2C+Cordoba%2C+Argentina!5e0!3m2!1sen!2suk!4v1540505410831" 
                width="100%" 
                height="500" 
                frameBorder="0" 
                allowFullScreen></iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
}

export default Location;
