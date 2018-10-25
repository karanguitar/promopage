import React, { Component } from 'react';
import {Fade, Slide} from 'react-reveal'
import MyButton from '../utils/Button'

class Discount extends Component {

    state={
        discountStart: 0,
        discountEnd: 30,
        
    }

     percentage = () =>{
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate(){
        setTimeout(() =>{
            this.percentage()
        }, 30)
    }


    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade
                        onReveal={() =>this.percentage()}
                    >
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase tickets before 20th!</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, ratione omnis molestiae non maiores deserunt exercitationem nemo id, rem corporis sint saepe laborum ut nobis. Recusandae quia veritatis voluptatibus eveniet?</p>
                            <div className="pricing_buttons">
                                <MyButton 
                                    text="Purchase ticket" 
                                    bck="#0000"
                                    color="#ffffff"
                                    link="http://google.com"
                                    />
                            </div>
                        </div>
                    </Slide>
                </div>
                
            </div>
        );
    }
}

export default Discount;
