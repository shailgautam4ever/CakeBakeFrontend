import React, { Component } from 'react';
import '../Home/home.css';
import {symboles} from '../../common';
import DefaultCakePic from '../../assets/cake1.jpg';
import { Link, NavLink, withRouter } from 'react-router-dom';

class Home extends Component {
    
    render() { 
        const {allCakes} = this.props;
        return ( <div className='home-main'>
            {allCakes.length?(<div className='all-cakes'>
                {allCakes.map((cake, index)=><div key={index} className='single-cake-item'>
                        {cake.cakeImgs.lenght < 0?<img src={DefaultCakePic}/>:<img src={cake.cakeImgs[0]}/>}
                        <span className='mHeading'>{cake.name}</span>
                        <span>{cake.flavor}</span>
                        <span>{`${symboles.indianRupee} ${cake.varient[0].price}`}</span>
                        <div>
                            <Link to={{
                                pathname: '/cakeDescription',
                                state:{
                                    cakeDesc: cake
                                }
                            }} > <button className='mbtn mbtn-success w100'>Buy Now</button></Link>
                            <button className='mbtn mbtn-secondary w100'>Add to Cart</button> 
                        </div>
                      
                    </div>)}
            </div>):<span>There are no Cakes available</span>}
        </div> );
    }
}
 
export default withRouter(Home);