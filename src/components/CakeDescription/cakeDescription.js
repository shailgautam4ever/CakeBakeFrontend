import React, { Component } from 'react';

import DefaultCakePic from '../../assets/cake3.jpg';
import '../CakeDescription/cakeDescription.css';
import { symboles } from '../../common';
import {withRouter} from 'react-router-dom';

class CakeDescription extends Component {
    constructor(props){
        super(props);
        this.state = {
            cake: {},
            selectedVarientIndex: 0
        }
    }

    componentDidMount() {
        let {cakeDesc} = this.props.location.state;
        let {cake} = this.state;
        cake=cakeDesc
        this.setState({cake});
    }
    render() {

        const {cake, selectedVarientIndex} = this.state;

        return ( 
            // <div className='box'>
            //     <img src={DefaultCakePic} alt='hello'></img>
            //     <div className='box-1'>
            //     <h1>{cake.name}</h1>
            //     <h1>{allCakes[1].price} {symboles.indianRupee}</h1>
            //     </div>   
            // </div>
        <div className='main-container'>
            <div className='container'>
                <div className='left-container'>
                    <div className='left-box'>
                    <img className='imgSize' src={(cake.cakeImgs && cake.cakeImgs.length > 0)?cake.cakeImgs[0]:DefaultCakePic}/>
                    </div>
                    <div className='left-statement'>
                        <div>100% <br/>Hygiene Maintain</div>
                        <p>We Keep your Safety First before we Start to even Bake</p>

                    </div>
                    <div className='left-rect'>
                        <span className='left-label'>On Time Delivery</span>
                        <span className='left-label'>Payment Protection</span>
                        <span className='left-label'>Delivery Protection</span>

                    </div>
                </div>
                <div className='right-container'>
                    <div className='right-title'>
                        <span>{cake.name}</span>
                        <span>{cake.cakeDesc}</span>
                        <span>{cake.isEggless ? '100% Eggless':'Egg'}</span>
                        <div>
                        <span>Rs.{cake.varient && cake.varient[selectedVarientIndex].price}/- only</span>
                        <span>(Price is inclusive of GST)</span>
                        </div>
                    </div>
                    <div className='right-content'>
                        <span>CHOOSE WEIGHT</span>
                        <div className='cake-varient-wapper'>
                            {cake.varient && cake.varient.map((v, i) => (
                            <span onClick={()=>this.setState({selectedVarientIndex: i})} key={i} className={(i==selectedVarientIndex)?'cake-varient-item cake-varient-item-active': 'cake-varient-item'}>{v.unitValue}</span>))}
                        </div>
                        <button className='mbtn mbtn-success '>BUY NOW</button>
                    </div>
                    <div className='right-chef'>
                        <h4>AVAILABLE IN LIMITED CITIES</h4>
                        <div>We deliver in {cake.availableAt && cake.availableAt.join(', ')}</div>
                        <h5>IN OUR CHEF'S WORDS :
                        </h5>
                        <span>"{cake.chefsWord}"</span>
                    </div>
                </div>
                
            </div>
        </div>
        );
    }
}
 
export default withRouter(CakeDescription);