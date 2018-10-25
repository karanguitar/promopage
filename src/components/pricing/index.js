import React, { Component } from 'react';
import MyButton from '../utils/Button'
import {Zoom} from 'react-reveal'

class Pricing extends Component {

    state={
        prices: [100, 150, 250],
        positions: ['Balcony', 'Medium', 'Star'],
        desc:[
            'Lorem impqwede ewq rwfwwfweq few wef vdsd frewf',
            'Lorem impus fvrf we we wf wqwede  few wef vdsd frewf',
            'Lorem impus fvrf we we wf wqwede ewq rwfwwfwevdsd frewf',

        ],
        linkTo: ['http://fwefwfew/b','http://fwefwfew/m','http://fwefwfew/s'],
        delay:[500, 1000, 500]
    }

    showBoxes = () =>(
        this.state.prices.map((box, i)=>(
            <Zoom key={i} delay={this.state.delay[i]}>
            <div className="pricing_item">
                <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                        <span>${this.state.prices[i]}</span>
                        <span>{this.state.positions[i]}</span>
                    </div>
                    <div className="pricing_description">
                        <span>{this.state.desc[i]}</span>
                    </div>
                    <div className="pricing_buttons">
                        <MyButton 
                            text="Purchase ticket" 
                            bck="#0000"
                            color="#ffffff"
                            link={this.state.linkTo[i]}
                            />
                    </div>
                </div>
            </div>
            </Zoom>
        ))
    )
    

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper">

                    <div className="pricing_wrapper">
                    {this.showBoxes()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;
