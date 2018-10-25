import React from 'react';
import {Button} from '@material-ui/core'

import TicketIcon from '../../resources/images/icons/ticket.png'

const MyButton = ({text, link, color, bck}) => {
    return (
        <div>
            
            <Button
                href={link}
                variant="contained"
                size="small"
                style={{
                    background: {bck},
                    color: {color}
                }}
                >
                
                <img 
                    src={TicketIcon} alt="Hello"
                    className="iconImage"
                    alt="icon_button"
                    
                />
                {text} 
            </Button>
        </div>
    );
}

export default MyButton;
